'use client'

import React, { useMemo } from 'react'

export default function RiskExposureHeatmap() {
  const sectors = ['TECH', 'COMM', 'UTIL', 'HEAL', 'FINA', 'ENER', 'CONS', 'DISC', 'INDU', 'MTRLS']
  const factors = ['MOM', 'VALUE', 'GROWTH', 'QUALITY', 'LOW VOL']

  // Generate consistent random exposures using a seeded approach
  const exposureData = useMemo(() => {
    const seed = 12345
    let random = seed
    
    const seededRandom = () => {
      random = (random * 9301 + 49297) % 233280
      return (random / 233280) * 100
    }

    return sectors.map((_, i) =>
      factors.map((_, j) => seededRandom())
    )
  }, [])

  const getColor = (value: number) => {
    if (value > 70) return 'bg-red-600'
    if (value > 50) return 'bg-orange-500'
    if (value > 30) return 'bg-yellow-500'
    if (value > 10) return 'bg-emerald-500'
    return 'bg-slate-700'
  }

  return (
    <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-800/50 p-6">
      <h2 className="text-lg font-semibold text-white mb-6">Risk Exposure Heatmap</h2>

      <div className="overflow-x-auto">
        {/* Heatmap Grid */}
        <div className="flex gap-1">
          {/* Y-axis labels */}
          <div className="flex flex-col gap-1 justify-center">
            {sectors.map((sector, i) => (
              <div
                key={i}
                className="h-8 flex items-center justify-center text-xs font-semibold text-slate-300 w-12"
              >
                {sector}
              </div>
            ))}
          </div>

          {/* Heatmap cells */}
          <div className="flex gap-1">
            {factors.map((factor, j) => (
              <div key={j} className="flex flex-col gap-1">
                {/* Factor label */}
                <div className="h-6 flex items-center justify-center text-xs font-semibold text-slate-300 w-12">
                  {factor}
                </div>
                {/* Cells */}
                {sectors.map((_, i) => {
                  const exposure = getExposure(i, j)
                  return (
                    <div
                      key={`${i}-${j}`}
                      className={`h-8 w-12 rounded cursor-pointer transition-all hover:ring-2 ring-slate-400 ${getColor(exposure)} flex items-center justify-center text-xs font-semibold text-white`}
                      title={`${exposure.toFixed(0)}%`}
                    >
                      {exposure.toFixed(0)}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-slate-700"></div>
          <span className="text-slate-400">Low Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-yellow-500"></div>
          <span className="text-slate-400">Medium Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-red-600"></div>
          <span className="text-slate-400">High Risk</span>
        </div>
      </div>
    </div>
  )
}
