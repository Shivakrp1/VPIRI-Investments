'use client'

import React from 'react'

export default function SignalsPage() {
  const signals = [
    {
      id: 1,
      name: 'ASYNC_ALPHA_V4',
      type: 'ML Signal',
      score: 87,
      status: 'ACTIVE',
      lastUpdate: 'now',
      trades: 127,
      winRate: 68.5,
      color: 'emerald',
    },
    {
      id: 2,
      name: 'CORRELATION_CLUSTER_V2',
      type: 'Statistical',
      score: 72,
      status: 'ACTIVE',
      lastUpdate: '2s',
      trades: 84,
      winRate: 61.2,
      color: 'blue',
    },
    {
      id: 3,
      name: 'VOLATILITY_MEAN_REVERSION',
      type: 'Technical',
      score: 58,
      status: 'TESTING',
      lastUpdate: '4m',
      trades: 23,
      winRate: 52.8,
      color: 'yellow',
    },
    {
      id: 4,
      name: 'SENTIMENT_DIVERGENCE',
      type: 'NLP',
      score: 45,
      status: 'INACTIVE',
      lastUpdate: '1h',
      trades: 0,
      winRate: 0,
      color: 'red',
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Trading Signals</h1>
        <p className="mt-2 text-slate-400">Real-time signal generation and performance tracking</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Active Signals</p>
          <p className="mt-3 text-3xl font-bold text-emerald-400">3/4</p>
          <p className="mt-2 text-xs text-slate-400">2 in testing phase</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Avg Win Rate</p>
          <p className="mt-3 text-3xl font-bold text-blue-400">64.2%</p>
          <p className="mt-2 text-xs text-slate-400">Across all signals</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Total Signals Generated</p>
          <p className="mt-3 text-3xl font-bold text-purple-400">234</p>
          <p className="mt-2 text-xs text-slate-400">Today so far</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Portfolio Impact</p>
          <p className="mt-3 text-3xl font-bold text-amber-400">+$428K</p>
          <p className="mt-2 text-xs text-slate-400">This month</p>
        </div>
      </div>

      {/* Signal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {signals.map((signal) => (
          <div
            key={signal.id}
            className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 hover:border-slate-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{signal.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{signal.type}</p>
              </div>
              <div className={`rounded-full px-3 py-1 text-xs font-semibold ${
                signal.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-400' :
                signal.status === 'TESTING' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {signal.status}
              </div>
            </div>

            {/* Score Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400">Signal Score</span>
                <span className="font-semibold text-white">{signal.score}/100</span>
              </div>
              <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-${signal.color}-500 to-${signal.color}-400`}
                  style={{
                    width: `${signal.score}%`,
                    background: `linear-gradient(to right, rgb(${signal.color === 'emerald' ? '16, 185, 129' : signal.color === 'blue' ? '59, 130, 246' : signal.color === 'yellow' ? '234, 179, 8' : '239, 68, 68'}), rgb(${signal.color === 'emerald' ? '52, 211, 153' : signal.color === 'blue' ? '96, 165, 250' : signal.color === 'yellow' ? '253, 224, 71' : '248, 113, 113'}))`
                  }}
                ></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-700">
              <div>
                <p className="text-xs text-slate-400">Completed Trades</p>
                <p className="mt-1 font-semibold text-white">{signal.trades}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Win Rate</p>
                <p className="mt-1 font-semibold text-white">{signal.winRate}%</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Last Update</p>
                <p className="mt-1 text-sm text-slate-300">{signal.lastUpdate}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Monthly P&L</p>
                <p className="mt-1 font-semibold text-emerald-400">+$127K</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 rounded-lg border border-slate-600 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                View Details
              </button>
              <button className="flex-1 rounded-lg border border-slate-600 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                Backtest
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Signal */}
      <div className="mt-8 rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Create New Signal</h3>
        <p className="text-slate-400 mb-6">Build custom trading signals with our ML platform</p>
        <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
          + New Signal
        </button>
      </div>
    </main>
  )
}
