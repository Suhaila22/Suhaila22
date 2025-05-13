"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const regionData = [
  { name: "North America", value: 35 },
  { name: "Europe", value: 30 },
  { name: "Asia", value: 25 },
  { name: "Other", value: 10 },
]

const countryData = [
  { name: "United States", value: 30 },
  { name: "China", value: 18 },
  { name: "Germany", value: 12 },
  { name: "United Kingdom", value: 10 },
  { name: "Japan", value: 8 },
  { name: "Canada", value: 5 },
  { name: "France", value: 5 },
  { name: "South Korea", value: 4 },
  { name: "Other", value: 8 },
]

const institutionData = [
  { name: "MIT", value: 8 },
  { name: "Stanford University", value: 7 },
  { name: "Harvard University", value: 6 },
  { name: "Tsinghua University", value: 5 },
  { name: "Imperial College London", value: 4 },
  { name: "ETH Zurich", value: 4 },
  { name: "University of Tokyo", value: 3 },
  { name: "Other", value: 63 },
]

export function TrendMap() {
  const [activeTab, setActiveTab] = useState("regions")

  const getChartData = () => {
    switch (activeTab) {
      case "regions":
        return regionData
      case "countries":
        return countryData
      case "institutions":
        return institutionData
      default:
        return regionData
    }
  }

  return (
    <div>
      <Tabs defaultValue="regions" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="regions">Regions</TabsTrigger>
          <TabsTrigger value="countries">Countries</TabsTrigger>
          <TabsTrigger value="institutions">Institutions</TabsTrigger>
        </TabsList>
        <TabsContent value="regions">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <ChartContainer
                    config={{
                      value: {
                        label: "Publications (%)",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={regionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {regionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${index + 1}))`} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <h3 className="text-lg font-medium mb-2">Regional Distribution</h3>
                  <p className="text-muted-foreground mb-4">
                    Publication distribution by geographic region for biomedical engineering research
                  </p>
                  <ul className="space-y-2">
                    {regionData.map((item, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: `hsl(var(--chart-${index + 1}))` }}
                          ></div>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">{item.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="countries">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <ChartContainer
                    config={{
                      value: {
                        label: "Publications (%)",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={countryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {countryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${(index % 6) + 1}))`} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <h3 className="text-lg font-medium mb-2">Country Distribution</h3>
                  <p className="text-muted-foreground mb-4">
                    Publication distribution by country for biomedical engineering research
                  </p>
                  <ul className="space-y-2">
                    {countryData.map((item, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: `hsl(var(--chart-${(index % 6) + 1}))` }}
                          ></div>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">{item.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="institutions">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <ChartContainer
                    config={{
                      value: {
                        label: "Publications (%)",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={institutionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {institutionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${(index % 6) + 1}))`} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <h3 className="text-lg font-medium mb-2">Institution Distribution</h3>
                  <p className="text-muted-foreground mb-4">
                    Publication distribution by research institution for biomedical engineering
                  </p>
                  <ul className="space-y-2">
                    {institutionData.map((item, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: `hsl(var(--chart-${(index % 6) + 1}))` }}
                          ></div>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">{item.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
