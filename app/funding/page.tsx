import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FundingList } from "@/components/funding-list"
import { FundingCalendar } from "@/components/funding-calendar"
import { FundingStats } from "@/components/funding-stats"

export default function FundingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Funding & Grants</h1>
        <p className="text-muted-foreground">Access to curated funding opportunities and research support programs</p>
      </div>

      <FundingStats />

      <Card>
        <CardHeader>
          <CardTitle>Funding Opportunities</CardTitle>
          <CardDescription>
            Discover grants, fellowships, and funding programs for biomedical engineering research
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Opportunities</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Deadlines</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <FundingList filter="active" />
            </TabsContent>
            <TabsContent value="upcoming">
              <FundingList filter="upcoming" />
            </TabsContent>
            <TabsContent value="calendar">
              <FundingCalendar />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
