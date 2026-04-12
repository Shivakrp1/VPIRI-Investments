'use client'

import React from 'react'

export default function PortfolioPage() {
  const positions = [
    {
      id: 1,
      symbol: 'NVDA',
      name: 'NVIDIA Corp',
      quantity: 5000,
      entryPrice: 850.25,
      currentPrice: 875.50,
      value: '$4,377,500',
      change: 2.97,
      sector: 'Technology',
      weight: '35.1%',
      leverage: 1.2,
    },
    {
      id: 2,
      symbol: 'TSLA',
      name: 'Tesla Inc',
      quantity: -2000,
      entryPrice: 245.60,
      currentPrice: 242.10,
      value: '-$484,200',
      change: -1.43,
      sector: 'Automotive',
      weight: '3.9%',
      leverage: 1.0,
    },
    {
      id: 3,
      symbol: 'AAPL',
      name: 'Apple Inc',
      quantity: 8000,
      entryPrice: 185.30,
      currentPrice: 188.75,
      value: '$1,510,000',
      change: 1.86,
      sector: 'Technology',
      weight: '12.1%',
      leverage: 0.8,
    },
    {
      id: 4,
      symbol: 'BTC',
      name: 'Bitcoin',
      quantity: 25,
      entryPrice: 40000,
      currentPrice: 43500,
      value: '$1,087,500',
      change: 8.75,
      sector: 'Crypto',
      weight: '8.7%',
      leverage: 1.5,
    },
    {
      id: 5,
      symbol: 'SPY',
      name: 'S&P 500 ETF',
      quantity: 3000,
      entryPrice: 445.20,
      currentPrice: 449.80,
      value: '$1,349,400',
      change: 1.03,
      sector: 'Broad Market',
      weight: '10.8%',
      leverage: 0.5,
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Portfolio Holdings</h1>
        <p className="mt-2 text-slate-400">Detailed view of all active positions and allocations</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Total Positions</p>
          <p className="mt-2 text-3xl font-bold text-white">12</p>
          <p className="mt-2 text-xs text-green-400">5 Long • 3 Short • 4 ETFs</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Portfolio Value</p>
          <p className="mt-2 text-3xl font-bold text-white">$12,480M</p>
          <p className="mt-2 text-xs text-green-400">+$847M since open</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Avg Leverage</p>
          <p className="mt-2 text-3xl font-bold text-white">1.15x</p>
          <p className="mt-2 text-xs text-yellow-400">Max allowed: 2.0x</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Rebalance Due</p>
          <p className="mt-2 text-3xl font-bold text-white">3 days</p>
          <p className="mt-2 text-xs text-slate-400">Next quarterly review</p>
        </div>
      </div>

      {/* Positions Table */}
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-slate-700 bg-slate-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Symbol</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Quantity</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Entry Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Current Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Position Value</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Return</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Weight</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Leverage</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {positions.map((pos) => (
                <tr key={pos.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-white">{pos.symbol}</p>
                      <p className="text-xs text-slate-400">{pos.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white">{pos.quantity.toLocaleString()}</td>
                  <td className="px-6 py-4 text-slate-400">${pos.entryPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 text-white font-semibold">${pos.currentPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 text-white font-semibold">{pos.value}</td>
                  <td className={`px-6 py-4 font-semibold ${pos.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {pos.change > 0 ? '▲' : '▼'} {Math.abs(pos.change).toFixed(2)}%
                  </td>
                  <td className="px-6 py-4 text-slate-300">{pos.weight}</td>
                  <td className="px-6 py-4 text-slate-300">{pos.leverage}x</td>
                  <td className="px-6 py-4">
                    <button className="rounded px-3 py-1 text-xs font-medium text-blue-400 hover:bg-blue-600/20 transition-colors">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
          + Add Position
        </button>
        <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-800 transition-colors">
          Rebalance Portfolio
        </button>
        <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-800 transition-colors">
          Export CSV
        </button>
      </div>
    </main>
  )
}
