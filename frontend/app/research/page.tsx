'use client'

import React from 'react'

export default function ResearchPage() {
  const reports = [
    {
      id: 1,
      title: 'Sovereign Analyst Alpha Report',
      category: 'Market Analysis',
      confidence: 94.2,
      date: '2 min ago',
      summary: 'Current market structure indicates a liquidity pivot occurring in the tech sector. Institutional flows suggest accelerating exposure to semiconductor names amid ETM data.',
    },
    {
      id: 2,
      title: 'Cross-Referencing AI-300 Quarterly Earnings',
      category: 'Company Research',
      confidence: 87.5,
      date: '15 min ago',
      summary: 'Analysis suggests structural breakout if the FOMC maintains current pause trajectory. Detecting non-linear correlation in overbought conditions.',
    },
    {
      id: 3,
      title: 'News Sentiment Stream Analysis',
      category: 'Sentiment',
      confidence: 76.2,
      date: '32 min ago',
      summary: 'Bloomberg News sentiment for semiconductors remains bullish. Reuters sources indicate supply chain normalization continuing through Q2.',
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Research & Analysis</h1>
        <p className="mt-2 text-slate-400">AI-generated insights and fundamental research</p>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {['All', 'Market Analysis', 'Company Research', 'Sentiment', 'Technical'].map((filter) => (
          <button
            key={filter}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === 'All'
                ? 'bg-blue-600 text-white'
                : 'border border-slate-600 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Reports */}
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 hover:border-slate-600 transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{report.title}</h3>
                <p className="mt-2 text-slate-300">{report.summary}</p>
              </div>
              <div className="ml-4 flex items-center gap-3">
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-400">{report.confidence}%</p>
                  <p className="text-xs text-slate-400">Confidence</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-700">
              <div className="flex gap-3">
                <span className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
                  {report.category}
                </span>
                <span className="text-xs text-slate-400">{report.date}</span>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                Read Full Report →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Research Tools */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Fundamental Analysis</h3>
          <button className="w-full rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
            Upload 10-K Filing
          </button>
          <button className="mt-2 w-full rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
            Compare Competitors
          </button>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Technical Analysis</h3>
          <button className="w-full rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
            Pattern Recognition
          </button>
          <button className="mt-2 w-full rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
            Volatility Analysis
          </button>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Sentiment Analysis</h3>
          <button className="w-full rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
            News Sentiment
          </button>
          <button className="mt-2 w-full rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
            Social Media Feeds
          </button>
        </div>
      </div>
    </main>
  )
}
