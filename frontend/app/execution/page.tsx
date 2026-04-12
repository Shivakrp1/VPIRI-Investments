'use client'

import React from 'react'

export default function ExecutionPage() {
  const orders = [
    {
      id: 'ORD-2024-1847',
      symbol: 'NVDA',
      side: 'BUY',
      quantity: 500,
      price: 875.50,
      status: 'FILLED',
      filled: 500,
      avgPrice: 875.48,
      time: '14:22:01',
      commission: '$437.74',
    },
    {
      id: 'ORD-2024-1846',
      symbol: 'TSLA',
      side: 'SELL',
      quantity: 250,
      price: 242.10,
      status: 'PARTIAL',
      filled: 180,
      avgPrice: 242.15,
      time: '14:18:45',
      commission: '$218.00',
    },
    {
      id: 'ORD-2024-1845',
      symbol: 'AAPL',
      side: 'BUY',
      quantity: 1000,
      price: 188.75,
      status: 'PENDING',
      filled: 0,
      avgPrice: 0,
      time: '14:15:22',
      commission: '-',
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Trade Execution</h1>
        <p className="mt-2 text-slate-400">Monitor and manage real-time order flow</p>
      </div>

      {/* Order Entry */}
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">Place New Order</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Symbol</label>
            <input
              type="text"
              placeholder="NVDA"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Side</label>
            <select className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
              <option>BUY</option>
              <option>SELL</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Quantity</label>
            <input
              type="number"
              placeholder="1000"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Price</label>
            <input
              type="number"
              placeholder="875.50"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Order Type</label>
            <select className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
              <option>LIMIT</option>
              <option>MARKET</option>
              <option>STOP</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="text-xs text-slate-400">Total Executed Today</p>
          <p className="mt-2 text-2xl font-bold text-green-400">$24.8M</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="text-xs text-slate-400">Pending Orders</p>
          <p className="mt-2 text-2xl font-bold text-yellow-400">3</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="text-xs text-slate-400">Avg Slippage</p>
          <p className="mt-2 text-2xl font-bold text-blue-400">+2.1 bps</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="text-xs text-slate-400">Fill Rate</p>
          <p className="mt-2 text-2xl font-bold text-emerald-400">94.2%</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-slate-700 bg-slate-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Symbol</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Side</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Qty / Filled</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Price / Avg</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Time</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400">Commission</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-blue-400">{order.id}</td>
                  <td className="px-6 py-4 font-semibold text-white">{order.symbol}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${order.side === 'BUY' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {order.side}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white">{order.quantity} / {order.filled}</td>
                  <td className="px-6 py-4 text-slate-400">${order.price} / ${order.avgPrice}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${
                      order.status === 'FILLED' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'PARTIAL' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm">{order.time}</td>
                  <td className="px-6 py-4 text-slate-300">{order.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
