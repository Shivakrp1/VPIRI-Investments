"""Backtesting engine module."""

import logging
from typing import Callable, Dict, Optional
from datetime import datetime

import pandas as pd
import numpy as np

logger = logging.getLogger(__name__)


class BacktestResults:
    """Container for backtest results."""
    
    def __init__(self, trades: list, initial_capital: float, portfolio_values: list):
        """
        Initialize backtest results.
        
        Args:
            trades: List of trade dictionaries
            initial_capital: Starting capital
            portfolio_values: List of portfolio values over time
        """
        self.trades = trades
        self.initial_capital = initial_capital
        self.portfolio_values = portfolio_values
    
    def total_return(self) -> float:
        """Calculate total return percentage."""
        if not self.portfolio_values:
            return 0
        final_value = self.portfolio_values[-1]
        return (final_value - self.initial_capital) / self.initial_capital * 100
    
    def max_drawdown(self) -> float:
        """Calculate maximum drawdown."""
        if not self.portfolio_values:
            return 0
        
        running_max = np.maximum.accumulate(self.portfolio_values)
        drawdown = (np.array(self.portfolio_values) - running_max) / running_max
        return np.min(drawdown) * 100
    
    def sharpe_ratio(self, risk_free_rate: float = 0.02) -> float:
        """Calculate Sharpe ratio (annualized)."""
        if len(self.portfolio_values) < 2:
            return 0
        
        returns = np.diff(self.portfolio_values) / self.portfolio_values[:-1]
        excess_returns = returns - risk_free_rate / 252
        
        if np.std(excess_returns) == 0:
            return 0
        
        return np.mean(excess_returns) / np.std(excess_returns) * np.sqrt(252)
    
    def performance_metrics(self) -> Dict:
        """Get all performance metrics."""
        return {
            'total_return_%': self.total_return(),
            'max_drawdown_%': self.max_drawdown(),
            'sharpe_ratio': self.sharpe_ratio(),
            'num_trades': len(self.trades),
            'final_value': self.portfolio_values[-1] if self.portfolio_values else 0,
        }


class Backtest:
    """Backtesting engine."""
    
    def __init__(self, initial_capital: float, data: pd.DataFrame):
        """
        Initialize backtest.
        
        Args:
            initial_capital: Starting capital
            data: Historical OHLCV data with columns: open, high, low, close, volume
        """
        self.initial_capital = initial_capital
        self.data = data
        self.portfolio_values = []
        self.trades = []
        self.current_capital = initial_capital
        self.positions: Dict[str, float] = {}
    
    def run_strategy(self, strategy_func: Callable) -> BacktestResults:
        """
        Run backtest with provided strategy function.
        
        Args:
            strategy_func: Function that takes (index, data) and returns (action, symbol, quantity, price)
                          where action is 'buy', 'sell', or 'hold'
        
        Returns:
            BacktestResults object with performance metrics
        """
        logger.info(f"Running backtest from {self.data.index[0]} to {self.data.index[-1]}")
        
        for i in range(len(self.data)):
            # Call strategy function
            action, symbol, quantity, price = strategy_func(i, self.data)
            
            # Execute action
            if action == 'buy':
                cost = quantity * price
                if cost <= self.current_capital:
                    self.positions[symbol] = self.positions.get(symbol, 0) + quantity
                    self.current_capital -= cost
                    self.trades.append({
                        'date': self.data.index[i],
                        'action': 'buy',
                        'symbol': symbol,
                        'quantity': quantity,
                        'price': price
                    })
            
            elif action == 'sell' and symbol in self.positions:
                proceeds = quantity * price
                self.positions[symbol] -= quantity
                self.current_capital += proceeds
                self.trades.append({
                    'date': self.data.index[i],
                    'action': 'sell',
                    'symbol': symbol,
                    'quantity': quantity,
                    'price': price
                })
            
            # Record portfolio value
            position_value = sum(qty * price for qty in self.positions.values())
            portfolio_value = self.current_capital + position_value
            self.portfolio_values.append(portfolio_value)
        
        logger.info(f"Backtest complete. Final value: ${self.portfolio_values[-1]:,.2f}")
        return BacktestResults(self.trades, self.initial_capital, self.portfolio_values)
