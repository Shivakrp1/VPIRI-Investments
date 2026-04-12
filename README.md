# VKPIRI Investments

A professional-grade hedge fund portfolio management and backtesting system.

## Features

- **Portfolio Management**: Track positions, P&L, and allocation
- **Risk Analysis**: VaR, Sharpe ratio, drawdown analysis
- **Backtesting Engine**: Historical strategy testing with realistic slippage
- **Market Data Integration**: Support for multiple data sources (crypto, stocks, forex)
- **Performance Metrics**: Comprehensive performance attribution and statistics

## Quick Start

### Installation

```bash
pip install -r requirements.txt
```

### Basic Usage

```python
from src.portfolio import Portfolio
from src.backtesting import Backtest

# Load historical data
portfolio = Portfolio(initial_capital=100000)

# Run backtest
backtest = Backtest(portfolio, strategy=YourStrategy)
results = backtest.run()

# Analyze results
print(results.performance_metrics())
```

## Project Structure

```
.
├── src/
│   ├── portfolio/         # Portfolio management
│   ├── backtesting/       # Backtesting engine
│   ├── risk/              # Risk analysis
│   ├── data/              # Market data handling
│   └── utils/             # Utilities
├── tests/                 # Unit tests
├── examples/              # Usage examples
├── config/                # Configuration files
└── data/                  # Historical data
```

## Requirements

- Python 3.11+
- pandas >= 2.0
- numpy >= 1.24
- scikit-learn >= 1.3

## Development

Run tests:
```bash
pytest tests/
```

Install development dependencies:
```bash
pip install -r requirements-dev.txt
```

## License

Proprietary - VKPIRI Investments
