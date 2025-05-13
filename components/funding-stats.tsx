"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "NIH", amount: 2.5 },
  { name: "NSF", amount: 1.8 },
  { name: "DOD", amount: 1.2 },
  { name: "Industry", amount: 0.9 },
  { name: "Foundations", amount: 0.7 },
]

export function FundingStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-2">
        <CardHeader className="pb-2">
          <CardTitle>Funding by Source</CardTitle>
          <CardDescription>Available funding for biomedical engineering (in billions USD)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              amount: {
                label: "Amount (Billions USD)",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="amount" fill="var(--color-amount)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Active Grants</CardTitle>
          <CardDescription>Currently available opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[200px]">
            <div className="text-center">
              <p className="text-5xl font-bold">42</p>
              <p className="text-sm text-muted-foreground mt-2">Open applications</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Upcoming Deadlines</CardTitle>
          <CardDescription>Grants closing in next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[200px]">
            <div className="text-center">
              <p className="text-5xl font-bold">12</p>
              <p className="text-sm text-muted-foreground mt-2">Closing soon</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
