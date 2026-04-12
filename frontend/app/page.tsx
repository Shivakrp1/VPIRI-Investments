import DashboardHeader from '@/components/DashboardHeader'
import MetricCard from '@/components/MetricCard'
import PortfolioChart from '@/components/PortfolioChart'
import RiskExposureHeatmap from '@/components/RiskExposureHeatmap'
import TopPositions from '@/components/TopPositions'
import RealTimeMetrics from '@/components/RealTimeMetrics'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Key Metrics Row */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              label="Portfolio Value"
              value="$1,248,392,050"
              change={2.05}
              changeLabel="Since Previous Close"
              trend="up"
            />
            <MetricCard
              label="Daily P&L"
              value="+$14,200"
              change={1.15}
              changeLabel="vs Yesterday"
              trend="up"
            />
            <MetricCard
              label="Risk Exposure"
              value="$124.8M"
              change={-0.82}
              changeLabel="Target: $150M"
              trend="neutral"
            />
            <MetricCard
              label="Leverage Ratio"
              value="1.8x"
              change={0.15}
              changeLabel="Max: 2.0x"
              trend="neutral"
            />
          </div>
        </div>

        {/* Charts and Analytics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Portfolio Performance Chart */}
          <div className="lg:col-span-2">
            <PortfolioChart />
          </div>

          {/* Real-time Metrics */}
          <div>
            <RealTimeMetrics />
          </div>
        </div>

        {/* Risk and Positions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Risk Heatmap */}
          <RiskExposureHeatmap />

          {/* Top Positions */}
          <TopPositions />
        </div>
      </main>
    </div>
  )
}
