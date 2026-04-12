'use client'

import React from 'react'

export default function PortfolioChart() {
  return (
    <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-800/50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Daily P&L Trajectory</h2>
          <p className="mt-1 text-sm text-slate-400">Real-time portfolio performance since market open</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded px-3 py-1 text-sm text-slate-300 hover:bg-slate-700">1D</button>
          <button className="rounded bg-slate-700 px-3 py-1 text-sm text-white">5D</button>
          <button className="rounded px-3 py-1 text-sm text-slate-300 hover:bg-slate-700">1M</button>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="flex h-80 items-end justify-between gap-2 rounded-lg bg-slate-900/50 p-6">
        {/* Simple bar chart visualization */}
        {[45, 38, 52, 48, 65, 55, 70, 78, 72, 85, 80, 88].map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition-all"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>

      {/* Chart Details */}
      <div className="mt-6 grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-xs text-slate-400">Opening</p>
          <p className="mt-1 font-semibold text-white">$1,232.5M</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">High</p>
          <p className="mt-1 font-semibold text-emerald-400">$1,285.2M</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Low</p>
          <p className="mt-1 font-semibold text-red-400">$1,210.8M</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Current</p>
          <p className="mt-1 font-semibold text-blue-400">$1,248.4M</p>
        </div>
      </div>
    </div>
  )
}
