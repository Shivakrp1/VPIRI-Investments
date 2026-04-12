'use client'

import React from 'react'

export default function AgentsPage() {
  const agents = [
    {
      id: 'AGENT-CORE-9',
      name: 'Core Allocation Agent',
      type: 'Portfolio Construction',
      status: 'ACTIVE',
      lastTask: 'Rebalancing portfolio weights',
      completedTasks: 847,
      avgTime: '2.3s',
      confidence: 92,
    },
    {
      id: 'AGENT-SIGNAL-5',
      name: 'Signal Generation Agent',
      type: 'Trading Signals',
      status: 'ACTIVE',
      lastTask: 'Generating momentum signals',
      completedTasks: 2341,
      avgTime: '1.1s',
      confidence: 87,
    },
    {
      id: 'AGENT-RISK-7',
      name: 'Risk Monitor Agent',
      type: 'Risk Management',
      status: 'ACTIVE',
      lastTask: 'Stress testing portfolio',
      completedTasks: 1203,
      avgTime: '4.2s',
      confidence: 95,
    },
    {
      id: 'AGENT-RESEARCH-3',
      name: 'Research Agent',
      type: 'Research & Analysis',
      status: 'IDLE',
      lastTask: 'Analyzed earnings reports',
      completedTasks: 567,
      avgTime: '8.9s',
      confidence: 84,
    },
    {
      id: 'AGENT-COMPLIANCE-2',
      name: 'Compliance Agent',
      type: 'Regulatory',
      status: 'ACTIVE',
      lastTask: 'Checking SEC limits',
      completedTasks: 4012,
      avgTime: '0.8s',
      confidence: 99,
    },
    {
      id: 'AGENT-EXEC-4',
      name: 'Execution Agent',
      type: 'Order Execution',
      status: 'ACTIVE',
      lastTask: 'Optimizing order routing',
      completedTasks: 3847,
      avgTime: '1.4s',
      confidence: 91,
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">AI Agents Framework</h1>
        <p className="mt-2 text-slate-400">Autonomous agents for portfolio management and analysis</p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Active Agents</p>
          <p className="mt-3 text-3xl font-bold text-emerald-400">5/6</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Total Tasks Completed</p>
          <p className="mt-3 text-3xl font-bold text-blue-400">12,867</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">Avg Confidence</p>
          <p className="mt-3 text-3xl font-bold text-purple-400">91.3%</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="text-sm text-slate-400">System Health</p>
          <p className="mt-3 text-3xl font-bold text-green-400">98.7%</p>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {agents.map((agent) => (
          <div key={agent.id} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 hover:border-slate-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{agent.type}</p>
              </div>
              <div className={`rounded-full px-3 py-1 text-xs font-semibold ${
                agent.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-600/20 text-slate-400'
              }`}>
                {agent.status}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3 mb-4 pb-4 border-b border-slate-700">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Last Task</span>
                <span className="text-white">{agent.lastTask}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Tasks Completed</span>
                <span className="font-semibold text-white">{agent.completedTasks}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Avg Execution Time</span>
                <span className="font-semibold text-white">{agent.avgTime}</span>
              </div>
            </div>

            {/* Confidence */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400">Decision Confidence</span>
                <span className="font-semibold text-white">{agent.confidence}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                  style={{ width: `${agent.confidence}%` }}
                ></div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 rounded-lg border border-slate-600 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                Monitor
              </button>
              <button className="flex-1 rounded-lg border border-slate-600 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                Logs
              </button>
              {agent.status === 'ACTIVE' && (
                <button className="flex-1 rounded-lg border border-red-600/50 px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-600/20 transition-colors">
                  Pause
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Agent Collaboration */}
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">Agent Collaboration Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 font-semibold mb-2">
              CORE-9
            </div>
            <p className="text-sm font-medium text-white">Portfolio Agent</p>
          </div>
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 font-semibold mb-2">
              RISK-7
            </div>
            <p className="text-sm font-medium text-white">Risk Agent</p>
          </div>
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold mb-2">
              EXEC-4
            </div>
            <p className="text-sm font-medium text-white">Execution Agent</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-400 text-center">
          Agents communicate and coordinate through a central message bus (latency: &lt;1ms)
        </p>
      </div>

      {/* Create Agent */}
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Deploy Custom Agent</h3>
        <p className="text-slate-400 mb-6">Create autonomous agents for specialized portfolio tasks</p>
        <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
          + New Agent
        </button>
      </div>
    </main>
  )
}
