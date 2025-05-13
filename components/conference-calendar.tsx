"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ConferenceCalendar() {
  const [date, setDate] = useState(new Date())

  // Sample conference data
  const conferences = [
    {
      id: 1,
      name: "International Conference on Biomedical Engineering",
      startDate: new Date(2023, 5, 15), // June 15
      endDate: new Date(2023, 5, 18), // June 18
      location: "Boston, USA",
      deadline: new Date(2023, 4, 30), // May 30
    },
    {
      id: 2,
      name: "European Society for Biomaterials Annual Conference",
      startDate: new Date(2023, 6, 5), // July 5
      endDate: new Date(2023, 6, 8), // July 8
      location: "Barcelona, Spain",
      deadline: new Date(2023, 5, 10), // June 10
    },
    {
      id: 3,
      name: "IEEE Engineering in Medicine and Biology Conference",
      startDate: new Date(2023, 6, 23), // July 23
      endDate: new Date(2023, 6, 27), // July 27
      location: "Sydney, Australia",
      deadline: new Date(2023, 5, 15), // June 15
    },
    {
      id: 4,
      name: "World Congress on Medical Physics and Biomedical Engineering",
      startDate: new Date(2023, 7, 10), // August 10
      endDate: new Date(2023, 7, 14), // August 14
      location: "Singapore",
      deadline: new Date(2023, 6, 1), // July 1
    },
    {
      id: 5,
      name: "International Symposium on Biomedical Imaging",
      startDate: new Date(2023, 8, 5), // September 5
      endDate: new Date(2023, 8, 8), // September 8
      location: "Tokyo, Japan",
      deadline: new Date(2023, 6, 20), // July 20
    },
  ]

  // Function to check if a date has conferences or deadlines
  const hasEvent = (day) => {
    return conferences.some(
      (conf) => (day >= conf.startDate && day <= conf.endDate) || day.toDateString() === conf.deadline.toDateString(),
    )
  }

  // Get conferences for the selected date
  const getConferencesForDate = (selectedDate) => {
    return conferences.filter(
      (conf) =>
        (selectedDate >= conf.startDate && selectedDate <= conf.endDate) ||
        selectedDate.toDateString() === conf.deadline.toDateString(),
    )
  }

  const selectedDateConferences = getConferencesForDate(date)

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            event: (day) => hasEvent(day),
          }}
          modifiersStyles={{
            event: {
              fontWeight: "bold",
              backgroundColor: "hsl(var(--primary) / 0.1)",
              borderRadius: "0",
              color: "hsl(var(--primary))",
            },
          }}
        />
      </div>

      <div className="md:w-1/2">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-4">
              Events for {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </h3>

            {selectedDateConferences.length === 0 ? (
              <p className="text-muted-foreground">No events scheduled for this date.</p>
            ) : (
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {selectedDateConferences.map((conf) => (
                    <div key={conf.id} className="border-l-2 border-primary pl-4 py-1">
                      <h4 className="font-medium">{conf.name}</h4>
                      <p className="text-sm text-muted-foreground">{conf.location}</p>

                      {date >= conf.startDate && date <= conf.endDate ? (
                        <Badge className="mt-1 bg-primary/20 text-primary hover:bg-primary/30 text-xs">
                          Conference in progress
                        </Badge>
                      ) : date.toDateString() === conf.deadline.toDateString() ? (
                        <Badge variant="destructive" className="mt-1 text-xs">
                          Abstract submission deadline
                        </Badge>
                      ) : null}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
