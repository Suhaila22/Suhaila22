"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { ConferenceList } from "@/components/conference-list"
import { ConferenceMap } from "@/components/conference-map"
import { ConferenceCalendar } from "@/components/conference-calendar"

export default function ConferencesPage() {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState("list")

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Conference Tracker</h1>
        <p className="text-muted-foreground">
          Discover upcoming global and regional conferences in biomedical engineering
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Upcoming Conferences</CardTitle>
              <CardDescription>Find and track conferences, submission deadlines, and events</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search conferences..." className="pl-8 w-[200px] md:w-[300px]" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" onValueChange={setView}>
            <TabsList className="mb-4">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <ConferenceList />
            </TabsContent>
            <TabsContent value="map">
              <ConferenceMap />
            </TabsContent>
            <TabsContent value="calendar">
              <ConferenceCalendar />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
