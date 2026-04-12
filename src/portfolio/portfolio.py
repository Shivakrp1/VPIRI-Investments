"""Portfolio management module."""

import logging
from typing import Dict, List, Optional
from datetime import datetime

import pandas as pd
import numpy as np

logger = logging.getLogger(__name__)


class Position:
    """Represents a single position in the portfolio."""
    
    def __init__(self, symbol: str, quantity: float, entry_price: float):
        """
        Initialize a position.
        
        Args:
            symbol: Asset ticker symbol
            quantity: Number of shares/units
            entry_price: Purchase price per unit
        """
        self.symbol = symbol
        self.quantity = quantity
        self.entry_price = entry_price
        self.entry_date = datetime.utcnow()
    
    def current_value(self, current_price: float) -> float:
        """Calculate current position value."""
        return self.quantity * current_price
    
    def pnl(self, current_price: float) -> float:
        """Calculate unrealized P&L."""
        return (current_price - self.entry_price) * self.quantity
    
    def pnl_pct(self, current_price: float) -> float:
        """Calculate P&L percentage."""
        if self.entry_price == 0:
            return 0
        return (current_price - self.entry_price) / self.entry_price * 100


class Portfolio:
    """Main portfolio management class."""
    
    def __init__(self, initial_capital: float):
        """
        Initialize portfolio.
        
        Args:
            initial_capital: Starting capital in USD
        """
        self.initial_capital = initial_capital
        self.current_capital = initial_capital
        self.positions: Dict[str, Position] = {}
        self.trades: List[Dict] = []
        self.creation_date = datetime.utcnow()
        logger.info(f"Portfolio created with ${initial_capital:,.2f}")
    
    def add_position(self, symbol: str, quantity: float, price: float) -> None:
        """Add or update a position."""
        if symbol in self.positions:
            pos = self.positions[symbol]
            # Calculate weighted average price
            total_quantity = pos.quantity + quantity
            new_entry_price = (
                (pos.quantity * pos.entry_price + quantity * price) / total_quantity
            )
            pos.quantity = total_quantity
            pos.entry_price = new_entry_price
        else:
            self.positions[symbol] = Position(symbol, quantity, price)
        
        self.current_capital -= quantity * price
        self.trades.append({
            'date': datetime.utcnow(),
            'symbol': symbol,
            'quantity': quantity,
            'price': price,
            'type': 'buy'
        })
        logger.info(f"Added {quantity} shares of {symbol} at ${price}")
    
    def close_position(self, symbol: str, price: float) -> float:
        """Close a position and return realized P&L."""
        if symbol not in self.positions:
            logger.warning(f"Position {symbol} not found")
            return 0
        
        pos = self.positions[symbol]
        pnl = (price - pos.entry_price) * pos.quantity
        self.current_capital += pos.quantity * price
        
        self.trades.append({
            'date': datetime.utcnow(),
            'symbol': symbol,
            'quantity': pos.quantity,
            'price': price,
            'pnl': pnl,
            'type': 'sell'
        })
        
        del self.positions[symbol]
        logger.info(f"Closed {symbol} position. P&L: ${pnl:,.2f}")
        return pnl
    
    def get_total_value(self, current_prices: Dict[str, float]) -> float:
        """Calculate total portfolio value."""
        position_value = sum(
            pos.current_value(current_prices.get(symbol, pos.entry_price))
            for symbol, pos in self.positions.items()
        )
        return self.current_capital + position_value
    
    def get_allocation(self, current_prices: Dict[str, float]) -> Dict[str, float]:
        """Get portfolio allocation percentages."""
        total_value = self.get_total_value(current_prices)
        allocation = {}
        
        for symbol, pos in self.positions.items():
            value = pos.current_value(current_prices.get(symbol, pos.entry_price))
            allocation[symbol] = (value / total_value * 100) if total_value > 0 else 0
        
        allocation['cash'] = (self.current_capital / total_value * 100) if total_value > 0 else 0
        return allocation
