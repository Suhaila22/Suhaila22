import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendChart } from "@/components/trend-chart"
import { TrendTable } from "@/components/trend-table"
import { TrendMap } from "@/components/trend-map"

export default function TrendsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Trend Analysis</h1>
        <p className="text-muted-foreground">Discover emerging research trends in biomedical engineering</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Trend Analysis</CardTitle>
          <CardDescription>
            AI-powered analysis of publication trends from PubMed, IEEE, Springer, and Elsevier
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Trend Chart</TabsTrigger>
              <TabsTrigger value="table">Topic Analysis</TabsTrigger>
              <TabsTrigger value="map">Global Distribution</TabsTrigger>
            </TabsList>
            <TabsContent value="chart">
              <TrendChart />
            </TabsContent>
            <TabsContent value="table">
              <TrendTable />
            </TabsContent>
            <TabsContent value="map">
              <TrendMap />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
