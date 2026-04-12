# VKPIRI Investments - Copilot Instructions

This is a professional hedge fund portfolio management and backtesting system.

## Project Overview
- **Type**: Python-based hedge fund analytics platform
- **Core Features**: Portfolio management, risk analysis, backtesting, market data integration
- **Tech Stack**: Python 3.11+, pandas, numpy, scikit-learn, ccxt, backtrader

## Development Standards
- Follow PEP 8 style guidelines
- Include comprehensive docstrings for all functions
- Write unit tests for critical functions
- Use type hints for better code clarity
- Maintain clear separation between data, models, and analysis

## Key Directories
- `src/portfolio/` - Portfolio management and tracking
- `src/backtesting/` - Backtesting engine
- `src/risk/` - Risk analysis and metrics
- `src/data/` - Market data acquisition and processing
- `tests/` - Unit tests
- `examples/` - Usage examples and notebooks
- `config/` - Configuration files

## Conventions
- All market data is normalized to UTC
- Prices stored as floats, positions as dictionaries
- Configuration via YAML files in `config/`
- Logging configured per module with `logging.getLogger(__name__)`
