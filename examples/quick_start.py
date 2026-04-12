"""Getting started with VKPIRI Investments."""

import sys
from pathlib import Path

# Add src to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from src.portfolio import Portfolio
from src.data import DataHandler
from src.risk import RiskMetrics
from src.utils import format_currency, format_percent


def main():
    """Basic example of using the portfolio manager."""
    
    print("=" * 60)
    print("VKPIRI Investments - Getting Started")
    print("=" * 60)
    
    # Create a portfolio
    print("\n1. Creating portfolio with $100,000 initial capital...")
    portfolio = Portfolio(initial_capital=100000)
    print(f"   ✓ Portfolio created")
    
    # Add positions
    print("\n2. Adding positions...")
    portfolio.add_position("AAPL", 100, 150.0)
    portfolio.add_position("GOOGL", 50, 2800.0)
    portfolio.add_position("MSFT", 75, 300.0)
    print(f"   ✓ Added 3 positions")
    
    # Get allocation
    print("\n3. Current portfolio allocation:")
    current_prices = {
        "AAPL": 155.0,
        "GOOGL": 2850.0,
        "MSFT": 310.0
    }
    allocation = portfolio.get_allocation(current_prices)
    for symbol, pct in allocation.items():
        print(f"   {symbol:8s}: {pct:6.2f}%")
    
    # Calculate total value
    total_value = portfolio.get_total_value(current_prices)
    print(f"\n4. Portfolio metrics:")
    print(f"   Initial value:  {format_currency(portfolio.initial_capital)}")
    print(f"   Current value:  {format_currency(total_value)}")
    print(f"   Total return:   {format_percent((total_value - portfolio.initial_capital) / portfolio.initial_capital * 100)}")
    
    # Close a position
    print(f"\n5. Closing AAPL position at $160...")
    pnl = portfolio.close_position("AAPL", 160.0)
    print(f"   ✓ Position closed. Realized P&L: {format_currency(pnl)}")
    
    print("\n" + "=" * 60)
    print("Next steps:")
    print("- Load historical data with DataHandler")
    print("- Run backtests with the Backtest engine")
    print("- Analyze risk metrics with RiskMetrics")
    print("=" * 60)


if __name__ == "__main__":
    main()
