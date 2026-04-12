"""Utility functions and helpers."""

import logging
from typing import Dict, Any

logger = logging.getLogger(__name__)


def setup_logging(name: str, level: int = logging.INFO) -> logging.Logger:
    """
    Set up logging for a module.
    
    Args:
        name: Logger name (typically __name__)
        level: Logging level
    
    Returns:
        Configured logger
    """
    logger = logging.getLogger(name)
    logger.setLevel(level)
    
    if not logger.handlers:
        handler = logging.StreamHandler()
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    
    return logger


def validate_config(config: Dict[str, Any], required_keys: list) -> bool:
    """
    Validate configuration dictionary.
    
    Args:
        config: Configuration dictionary
        required_keys: List of required keys
    
    Returns:
        True if valid
    """
    missing_keys = [key for key in required_keys if key not in config]
    
    if missing_keys:
        logger.error(f"Missing required config keys: {missing_keys}")
        return False
    
    return True


def format_currency(value: float, decimals: int = 2) -> str:
    """Format value as currency string."""
    return f"${value:,.{decimals}f}"


def format_percent(value: float, decimals: int = 2) -> str:
    """Format value as percentage string."""
    return f"{value:.{decimals}f}%"
