'use client'

import React from 'react'

export default function TopPositions() {
  const positions = [
    {
      symbol: 'NVDA.US',
      sector: 'SEMICONDUCTORS',
      value: '$156.2M',
      change: 2.85,
      trend: 'up' as const,
      weight: '12.5%',
    },
    {
      symbol: 'TESLA.US',
      sector: 'AUTOMOTIVE',
      value: '-$92.1M',
      change: -1.45,
      trend: 'down' as const,
      weight: '7.4%',
    },
    {
      symbol: 'AAPL.US',
      sector: 'TECHNOLOGY',
      value: '+$51.8M',
      change: 1.82,
      trend: 'up' as const,
      weight: '4.1%',
    },
    {
      symbol: 'BTC.USD',
      sector: 'CRYPTO',
      value: '+$45.2M',
      change: 3.12,
      trend: 'up' as const,
      weight: '3.6%',
    },
    {
      symbol: 'SPY ETF',
      sector: 'BROAD MARKET',
      value: '+$28.5M',
      change: 0.95,
      trend: 'up' as const,
      weight: '2.3%',
    },
  ]

  return (
    <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-800/50 p-6">
      <h2 className="text-lg font-semibold text-white mb-6">Top Position Movers</h2>

      <div className="space-y-3">
        {positions.map((position, i) => (
          <div
            key={i}
            className="rounded-lg bg-slate-900/50 p-4 hover:bg-slate-900 transition-colors border border-slate-700 hover:border-slate-600"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold text-white">{position.symbol}</p>
                <p className="text-xs text-slate-400">{position.sector}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">{position.value}</p>
                <p className={`text-xs font-semibold ${position.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {position.trend === 'up' ? '▲' : '▼'} {Math.abs(position.change)}%
                </p>
              </div>
            </div>

            {/* Progress bar for weight */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full ${position.trend === 'up' ? 'bg-emerald-500' : 'bg-red-500'}`}
                  style={{ width: `${parseFloat(position.weight)}%` }}
                ></div>
              </div>
              <span className="text-xs text-slate-400 w-8 text-right">{position.weight}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button className="mt-6 w-full rounded-lg border border-slate-600 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:border-slate-500 transition-colors">
        View All Positions →
      </button>
    </div>
  )
}
