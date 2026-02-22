"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer,Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { projectsData } from "@/data/projects"
import { getImpactLabel } from "@/utils/impact"



const formatCurrency = (value: number) => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(1)} Cr`
  }
  return `₹${(value / 100000).toFixed(1)} L`
}

export function ImpactComparison() {
  const [selectedMetric, setSelectedMetric] = useState<"properties" | "demand">("properties")

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id="impact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Measurable Impact Across Cities</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Our GIS surveys have helped municipal corporations significantly increase property identification and
            revenue collection
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-0">
            <button
              onClick={() => setSelectedMetric("properties")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                selectedMetric === "properties"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Properties Mapped
            </button>
            <button
              onClick={() => setSelectedMetric("demand")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                selectedMetric === "demand"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Revenue Demand
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((palika, index) => {
            const chartData = [
              {
                category: "Before Survey",
                value: selectedMetric === "properties" ? palika.before.properties : palika.before.demand / 10000000,
                label:
                  selectedMetric === "properties"
                    ? `${palika.before.properties.toLocaleString()} Properties`
                    : formatCurrency(palika.before.demand),
              },
              {
                category: "After Survey",
                value: selectedMetric === "properties" ? palika.after.properties : palika.after.demand / 10000000,
                label:
                  selectedMetric === "properties"
                    ? `${palika.after.properties.toLocaleString()} Properties`
                    : formatCurrency(palika.after.demand),
              },
            ]
const isOngoing = palika.status === "ongoing"
const impactLabel = getImpactLabel(palika, selectedMetric)

            return (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="p-5 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl text-foreground">{palika.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
  <span
    className={
      impactLabel.includes("Increase")
        ? "text-primary font-semibold text-base sm:text-lg"
        : "text-emerald-600 font-semibold text-base sm:text-lg"
    }
  >
    {impactLabel}
  </span>{" "}
  after GIS survey implementation
</CardDescription>



                  <Badge
                            variant="outline"
                            className={
                              palika.status === "completed"
                                ? "bg-green-50 text-green-700 border-green-200 whitespace-nowrap"
                                : "bg-blue-50 text-blue-700 border-blue-200 whitespace-nowrap"
                            }
                          >
                            {palika.status === "completed" ? "Completed" : "Ongoing"}
                          </Badge>
                  
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0">
                  <div className={isOngoing ? "opacity-40 pointer-events-none" : ""}>
  <ChartContainer
    config={{
      value: {
        label: selectedMetric === "properties" ? "Properties" : "Demand (Cr)",
        color: "hsl(var(--primary))",
      },
    }}
    className="h-[240] sm:h-[300] w-full"
  >

                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis
                          dataKey="category"
                          angle={-15}
                          textAnchor="end"
                          height={1}
                          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                        />
                        <YAxis
                          label={{
                            value: selectedMetric === "properties" ? "Number of Properties" : "Demand (₹ Crores)",
                            angle: -90,
                            position: "insideLeft",
                            style: { fill: "hsl(var(--muted-foreground))", fontSize: 12 },
                          }}
                          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                        />
                        <ChartTooltip
  content={({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload

      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-popover-foreground text-sm">
            {data.category}
          </p>
          <p className="text-primary font-medium text-sm">
            {data.label}
          </p>
        </div>
      )
    }
    return null
  }}
/>

                        <Bar
  dataKey="value"
  radius={[8, 8, 0, 0]}
  animationDuration={1000}
>
  {chartData.map((entry, index) => (
    <Cell
  key={`cell-${index}`}
  fill={
    isOngoing
      ? "hsl(0, 0%, 75%)" // neutral grey
      : entry.category === "Before Survey"
        ? "hsl(200, 100%, 20%)"
        : "hsl(240, 100%, 45%)"
  }
/>

  ))}
</Bar>

                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  </div>
                  <div className="mt-1 grid grid-cols-2 gap-8 sm:gap-4 text-center">
  <div className="p-2 sm:p-4 bg-secondary/50 rounded-lg overflow-hidden">
    <p className="text-[10px] sm:text-sm text-muted-foreground mb-1 whitespace-nowrap">
      Properties Identified
    </p>
    <p className="text-[10px] sm:text-lg font-bold text-foreground whitespace-nowrap scale-90 sm:scale-90">
      {palika.before.properties.toLocaleString()} → {palika.after.properties.toLocaleString()}
    </p>
  </div>

  <div className="p-2 sm:p-4 bg-secondary/50 rounded-lg overflow-hidden">
    <p className="text-[10px] sm:text-sm text-muted-foreground mb-1 whitespace-nowrap">
      Revenue Demand
    </p>
    <p className="text-[10px] sm:text-lg font-bold text-foreground whitespace-nowrap scale-90 sm:scale-90">
      {formatCurrency(palika.before.demand)} → {formatCurrency(palika.after.demand)}
    </p>
  </div>
</div>

                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4 sm:px-0">
          <p className="text-xs sm:text-sm text-muted-foreground">
            * Data based on actual project implementations. Individual results may vary based on city size and existing
            infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}