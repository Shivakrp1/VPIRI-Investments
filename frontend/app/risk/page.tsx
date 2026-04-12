'use client'

import React from 'react'

export default function RiskPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Risk Management</h1>
        <p className="mt-2 text-slate-400">Real-time risk monitoring and compliance metrics</p>
      </div>

      {/* Risk Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Value at Risk (99%)</p>
          <p className="mt-3 text-3xl font-bold text-red-400">-$12.4M</p>
          <p className="mt-2 text-xs text-slate-400">Daily loss threshold (99% confidence)</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Maximum Drawdown</p>
          <p className="mt-3 text-3xl font-bold text-orange-400">-8.2%</p>
          <p className="mt-2 text-xs text-slate-400">From recent high water mark</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Stress Test (2008 Crisis)</p>
          <p className="mt-3 text-3xl font-bold text-yellow-400">-42%</p>
          <p className="mt-2 text-xs text-slate-400">Estimated portfolio loss</p>
        </div>
      </div>

      {/* Risk Limits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Leverage Limit */}
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Leverage Limits</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Gross Leverage</span>
                <span className="text-sm font-semibold text-white">1.8x / 2.0x</span>
              </div>
              <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Net Leverage</span>
                <span className="text-sm font-semibold text-white">1.2x / 1.5x</span>
              </div>
              <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                <div className="h-full w-4/5 bg-green-500"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Sector Concentration</span>
                <span className="text-sm font-semibold text-white">48% / 50%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                <div className="h-full w-11/12 bg-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Exposures */}
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Primary Risk Exposures</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-4 py-3">
              <span className="text-sm text-slate-300">Market Beta (SPY)</span>
              <span className="font-semibold text-blue-400">+1.24</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-4 py-3">
              <span className="text-sm text-slate-300">Volatility (Realized)</span>
              <span className="font-semibold text-orange-400">18.5%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-4 py-3">
              <span className="text-sm text-slate-300">Interest Rate (Duration)</span>
              <span className="font-semibold text-purple-400">-0.35</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-4 py-3">
              <span className="text-sm text-slate-300">Liquidity Score</span>
              <span className="font-semibold text-green-400">92/100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
        <h2 className="text-lg font-semibold text-white mb-6">Compliance Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-white mb-3">Regulatory Checks</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-slate-300">SEC Rule 15c2-1 (Net Capital)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-slate-300">NYSE Short Sale Rule</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-slate-300">FINRA Concentration Limits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-slate-300">Dodd-Frank Volcker Rule</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Risk Alerts</h3>
            <div className="space-y-2">
              <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 px-3 py-2">
                <p className="text-xs text-yellow-400">⚠️ Tech sector exceeds 45% target</p>
              </div>
              <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2">
                <p className="text-xs text-green-400">✓ All leverage limits within bounds</p>
              </div>
              <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2">
                <p className="text-xs text-green-400">✓ Counterparty risk acceptable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
