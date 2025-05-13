"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { topic: "Tissue Engineering", papers: 245 },
  { topic: "Bioprinting", papers: 198 },
  { topic: "Neural Interfaces", papers: 167 },
  { topic: "Nanomedicine", papers: 142 },
  { topic: "Biosensors", papers: 124 },
]

export function TrendingTopics() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Trending Topics</CardTitle>
        <CardDescription>Most published topics in the last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            papers: {
              label: "Papers Published",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" />
              <YAxis dataKey="topic" type="category" tick={{ fontSize: 12 }} width={100} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="papers" fill="var(--color-papers)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
