import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PositionsList } from "@/components/positions-list"
import { PositionsMap } from "@/components/positions-map"

export default function PositionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Academic & Research Positions</h1>
        <p className="text-muted-foreground">
          Updated list of open academic and postdoctoral positions in biomedical engineering
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Positions</CardTitle>
          <CardDescription>
            Find academic, postdoctoral, and research positions in biomedical engineering
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Positions</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="postdoc">Postdoctoral</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <PositionsList filter="all" />
            </TabsContent>
            <TabsContent value="faculty">
              <PositionsList filter="faculty" />
            </TabsContent>
            <TabsContent value="postdoc">
              <PositionsList filter="postdoc" />
            </TabsContent>
            <TabsContent value="map">
              <PositionsMap />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
