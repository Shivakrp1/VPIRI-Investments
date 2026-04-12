'use client'

import React from 'react'

export default function RealTimeMetrics() {
  const metrics = [
    { label: 'Portfolio Sharpe', value: '3.42', color: 'text-emerald-400' },
    { label: 'Daily Leverage', value: '1.8x', color: 'text-blue-400' },
    { label: 'VaR (99%)', value: '-$12.4M', color: 'text-orange-400' },
    { label: 'Max Drawdown', value: '-8.2%', color: 'text-red-400' },
    { label: 'Win Rate', value: '68.5%', color: 'text-emerald-400' },
    { label: 'Correlation', value: '+0.24', color: 'text-slate-300' },
  ]

  return (
    <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-800/50 p-6">
      <h2 className="text-lg font-semibold text-white mb-6">Risk Metrics</h2>

      <div className="space-y-4">
        {metrics.map((metric, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-slate-900/50 px-4 py-3 hover:bg-slate-900 transition-colors">
            <span className="text-xs text-slate-400">{metric.label}</span>
            <span className={`font-semibold ${metric.color}`}>{metric.value}</span>
          </div>
        ))}
      </div>

      {/* Status Indicator */}
      <div className="mt-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3">
        <p className="text-xs text-emerald-400">
          ✓ All metrics within acceptable parameters
        </p>
      </div>
    </div>
  )
}
