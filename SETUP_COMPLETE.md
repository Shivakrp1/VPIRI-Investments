# VKPIRI Investments - Project Setup

## Setup Completed ✓

Your hedge fund analytics platform is now initialized with:

### Project Structure
- **src/** - Core modules for portfolio management, backtesting, risk analysis, and data handling
- **tests/** - Unit tests for validation
- **examples/** - Usage examples and quick start guides
- **config/** - Configuration files
- **data/** - Directory for historical market data

### Key Features
- **Portfolio Management**: Track positions, allocations, and P&L
- **Backtesting Engine**: Run historical strategy simulations
- **Risk Analysis**: Calculate VaR, Sharpe ratio, max drawdown, and other metrics
- **Data Handling**: Load and validate OHLCV data from CSV files

### Getting Started
1. Install dependencies: `pip install -r requirements.txt`
2. Run quick start example: `python examples/quick_start.py`
3. Explore the modules in `src/` 
4. Run tests: `pytest tests/`

### Development Setup
For development, install additional tools:
```bash
pip install -r requirements-dev.txt
```

Format code with Black:
```bash
black src/ tests/ examples/
```

Type checking with mypy:
```bash
mypy src/
```

### Project Conventions
- All timestamps are in UTC
- Configuration via YAML files in `config/`
- Comprehensive logging with `logging.getLogger(__name__)`
- Full type hints for better IDE support
- Docstrings for all functions

### Next Steps
- Integrate real market data sources
- Develop trading strategies
- Implement advanced risk models
- Create visualization dashboards

Happy backtesting! 🚀
