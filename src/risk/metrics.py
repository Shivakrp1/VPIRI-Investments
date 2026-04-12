"""Risk analysis and metrics module."""

import logging
from typing import Dict, List, Tuple

import numpy as np
import pandas as pd

logger = logging.getLogger(__name__)


class RiskMetrics:
    """Calculate various risk metrics."""
    
    @staticmethod
    def value_at_risk(returns: pd.Series, confidence_level: float = 0.95) -> float:
        """
        Calculate Value at Risk (VaR).
        
        Args:
            returns: Series of returns
            confidence_level: Confidence level (e.g., 0.95 for 95%)
        
        Returns:
            VaR value
        """
        return np.percentile(returns, (1 - confidence_level) * 100)
    
    @staticmethod
    def conditional_value_at_risk(returns: pd.Series, confidence_level: float = 0.95) -> float:
        """
        Calculate Conditional Value at Risk (CVaR).
        
        Args:
            returns: Series of returns
            confidence_level: Confidence level
        
        Returns:
            CVaR value
        """
        var = np.percentile(returns, (1 - confidence_level) * 100)
        return returns[returns <= var].mean()
    
    @staticmethod
    def sharpe_ratio(returns: pd.Series, risk_free_rate: float = 0.02) -> float:
        """
        Calculate Sharpe ratio.
        
        Args:
            returns: Series of returns
            risk_free_rate: Annual risk-free rate
        
        Returns:
            Sharpe ratio (annualized for daily returns)
        """
        excess_returns = returns - risk_free_rate / 252
        if returns.std() == 0:
            return 0
        return excess_returns.mean() / excess_returns.std() * np.sqrt(252)
    
    @staticmethod
    def sortino_ratio(returns: pd.Series, risk_free_rate: float = 0.02, target_return: float = 0) -> float:
        """
        Calculate Sortino ratio.
        
        Args:
            returns: Series of returns
            risk_free_rate: Annual risk-free rate
            target_return: Target return level
        
        Returns:
            Sortino ratio (annualized)
        """
        excess_returns = returns - target_return
        downside_returns = excess_returns[excess_returns < 0]
        
        if len(downside_returns) == 0:
            return 0
        
        downside_std = downside_returns.std()
        if downside_std == 0:
            return 0
        
        annual_target = risk_free_rate
        return (returns.mean() - annual_target) / downside_std * np.sqrt(252)
    
    @staticmethod
    def max_drawdown(prices: pd.Series) -> float:
        """
        Calculate maximum drawdown.
        
        Args:
            prices: Series of prices
        
        Returns:
            Maximum drawdown percentage
        """
        running_max = prices.expanding().max()
        drawdown = (prices - running_max) / running_max
        return drawdown.min()
    
    @staticmethod
    def calmar_ratio(returns: pd.Series, prices: pd.Series) -> float:
        """
        Calculate Calmar ratio (return / max drawdown).
        
        Args:
            returns: Series of returns
            prices: Series of prices
        
        Returns:
            Calmar ratio
        """
        max_dd = RiskMetrics.max_drawdown(prices)
        if max_dd == 0:
            return 0
        
        annual_return = returns.mean() * 252
        return annual_return / abs(max_dd)
    
    @staticmethod
    def correlation_matrix(returns_dict: Dict[str, pd.Series]) -> pd.DataFrame:
        """
        Calculate correlation matrix between assets.
        
        Args:
            returns_dict: Dictionary of asset returns {asset_name: returns_series}
        
        Returns:
            Correlation matrix
        """
        df = pd.DataFrame(returns_dict)
        return df.corr()
