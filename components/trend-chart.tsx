"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { year: 2018, tissueEngineering: 156, bioprinting: 89, neuralInterfaces: 112, nanomedicine: 134, biosensors: 98 },
  { year: 2019, tissueEngineering: 178, bioprinting: 110, neuralInterfaces: 125, nanomedicine: 145, biosensors: 115 },
  { year: 2020, tissueEngineering: 195, bioprinting: 142, neuralInterfaces: 138, nanomedicine: 152, biosensors: 132 },
  { year: 2021, tissueEngineering: 215, bioprinting: 168, neuralInterfaces: 149, nanomedicine: 158, biosensors: 145 },
  { year: 2022, tissueEngineering: 232, bioprinting: 185, neuralInterfaces: 157, nanomedicine: 162, biosensors: 156 },
  { year: 2023, tissueEngineering: 245, bioprinting: 198, neuralInterfaces: 167, nanomedicine: 142, biosensors: 124 },
]

export function TrendChart() {
  return (
    <ChartContainer
      config={{
        tissueEngineering: {
          label: "Tissue Engineering",
          color: "hsl(var(--chart-1))",
        },
        bioprinting: {
          label: "Bioprinting",
          color: "hsl(var(--chart-2))",
        },
        neuralInterfaces: {
          label: "Neural Interfaces",
          color: "hsl(var(--chart-3))",
        },
        nanomedicine: {
          label: "Nanomedicine",
          color: "hsl(var(--chart-4))",
        },
        biosensors: {
          label: "Biosensors",
          color: "hsl(var(--chart-5))",
        },
      }}
      className="h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="tissueEngineering"
            stroke="var(--color-tissueEngineering)"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="bioprinting" stroke="var(--color-bioprinting)" />
          <Line type="monotone" dataKey="neuralInterfaces" stroke="var(--color-neuralInterfaces)" />
          <Line type="monotone" dataKey="nanomedicine" stroke="var(--color-nanomedicine)" />
          <Line type="monotone" dataKey="biosensors" stroke="var(--color-biosensors)" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
