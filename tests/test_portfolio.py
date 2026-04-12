"""Test portfolio module."""

import pytest
from src.portfolio import Portfolio, Position


class TestPosition:
    """Test Position class."""
    
    def test_position_creation(self):
        """Test creating a position."""
        pos = Position("AAPL", 100, 150.0)
        assert pos.symbol == "AAPL"
        assert pos.quantity == 100
        assert pos.entry_price == 150.0
    
    def test_current_value(self):
        """Test calculating current value."""
        pos = Position("AAPL", 100, 150.0)
        value = pos.current_value(160.0)
        assert value == 16000.0
    
    def test_pnl(self):
        """Test calculating P&L."""
        pos = Position("AAPL", 100, 150.0)
        pnl = pos.pnl(160.0)
        assert pnl == 1000.0
    
    def test_pnl_pct(self):
        """Test calculating P&L percentage."""
        pos = Position("AAPL", 100, 150.0)
        pnl_pct = pos.pnl_pct(155.0)
        assert pnl_pct == pytest.approx(3.333, rel=0.01)


class TestPortfolio:
    """Test Portfolio class."""
    
    def test_portfolio_creation(self):
        """Test creating a portfolio."""
        portfolio = Portfolio(100000)
        assert portfolio.initial_capital == 100000
        assert portfolio.current_capital == 100000
        assert len(portfolio.positions) == 0
    
    def test_add_position(self):
        """Test adding a position."""
        portfolio = Portfolio(100000)
        portfolio.add_position("AAPL", 100, 150.0)
        
        assert "AAPL" in portfolio.positions
        assert portfolio.positions["AAPL"].quantity == 100
        assert portfolio.current_capital == 85000.0
    
    def test_close_position(self):
        """Test closing a position."""
        portfolio = Portfolio(100000)
        portfolio.add_position("AAPL", 100, 150.0)
        pnl = portfolio.close_position("AAPL", 160.0)
        
        assert pnl == 1000.0
        assert "AAPL" not in portfolio.positions
        assert portfolio.current_capital == 101000.0


if __name__ == "__main__":
    pytest.main([__file__])
