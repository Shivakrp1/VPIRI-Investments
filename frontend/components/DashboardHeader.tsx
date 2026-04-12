'use client'

import React from 'react'

export default function DashboardHeader() {
  return (
    <header className="border-b border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">V2K2SP</h1>
          <p className="mt-1 text-sm text-slate-400">Institutional Analyst Framework v0.0.2</p>
        </div>

        {/* System Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-slate-300">System Status: OPTIMAL</span>
          </div>

          {/* Market Indicators */}
          <div className="flex gap-8 text-sm">
            <div className="text-right">
              <p className="text-slate-400">BTC/USD</p>
              <p className="font-semibold text-green-400">+2.4%</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400">SPY</p>
              <p className="font-semibold text-green-400">+1.2%</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400">VIX</p>
              <p className="font-semibold text-red-400">-5.2%</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
