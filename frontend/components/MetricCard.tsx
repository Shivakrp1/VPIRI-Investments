'use client'

import React from 'react'

interface MetricCardProps {
  label: string
  value: string
  change?: number
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
}

export default function MetricCard({
  label,
  value,
  change,
  changeLabel,
  trend = 'neutral',
}: MetricCardProps) {
  const trendConfig = {
    up: { color: 'text-emerald-400', icon: '▲', bgColor: 'bg-emerald-500/10' },
    down: { color: 'text-red-400', icon: '▼', bgColor: 'bg-red-500/10' },
    neutral: { color: 'text-slate-400', icon: '─', bgColor: 'bg-slate-500/10' },
  }

  const config = trendConfig[trend]

  return (
    <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 hover:border-slate-600 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-400">{label}</p>
          <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>

          {change !== undefined && (
            <div className="mt-2 flex items-center gap-1">
              <span className={`text-sm font-semibold ${config.color}`}>
                {config.icon} {Math.abs(change).toFixed(2)}%
              </span>
              {changeLabel && <span className="text-xs text-slate-400">{changeLabel}</span>}
            </div>
          )}
        </div>

        {/* Icon background */}
        <div className={`rounded-lg ${config.bgColor} p-3`}>
          <div className={`h-6 w-6 ${config.color}`}></div>
        </div>
      </div>
    </div>
  )
}
