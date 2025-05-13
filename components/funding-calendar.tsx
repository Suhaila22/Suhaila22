"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ExternalLink, DollarSign } from "lucide-react"

export function FundingCalendar() {
  const [date, setDate] = useState(new Date())

  // Sample funding data
  const fundingOpportunities = [
    {
      id: 1,
      title: "NIH R01 Research Project Grant",
      organization: "National Institutes of Health",
      amount: "$2,500,000",
      deadline: new Date(2023, 5, 5), // June 5
      topics: ["Tissue Engineering", "Regenerative Medicine"],
    },
    {
      id: 2,
      title: "NSF Engineering Research Grant",
      organization: "National Science Foundation",
      amount: "$750,000",
      deadline: new Date(2023, 6, 15), // July 15
      topics: ["Biomedical Engineering", "Neural Interfaces"],
    },
    {
      id: 3,
      title: "Biomedical Engineering Fellowship",
      organization: "Howard Hughes Medical Institute",
      amount: "$80,000 per year",
      deadline: new Date(2023, 7, 30), // August 30
      topics: ["Biomaterials", "Medical Imaging"],
    },
    {
      id: 4,
      title: "Breakthrough Technology Grant",
      organization: "Bill & Melinda Gates Foundation",
      amount: "$1,200,000",
      deadline: new Date(2023, 8, 15), // September 15
      topics: ["Global Health", "Diagnostic Devices"],
    },
    {
      id: 5,
      title: "Early Career Investigator Award",
      organization: "American Heart Association",
      amount: "$500,000",
      deadline: new Date(2023, 9, 1), // October 1
      topics: ["Cardiovascular Engineering", "Medical Devices"],
    },
  ]

  // Function to check if a date has deadlines
  const hasDeadline = (day) => {
    return fundingOpportunities.some((opp) => day.toDateString() === opp.deadline.toDateString())
  }

  // Get opportunities for the selected date
  const getOpportunitiesForDate = (selectedDate) => {
    return fundingOpportunities.filter((opp) => selectedDate.toDateString() === opp.deadline.toDateString())
  }

  const selectedDateOpportunities = getOpportunitiesForDate(date)

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            deadline: (day) => hasDeadline(day),
          }}
          modifiersStyles={{
            deadline: {
              fontWeight: "bold",
              backgroundColor: "hsl(var(--destructive) / 0.1)",
              borderRadius: "0",
              color: "hsl(var(--destructive))",
            },
          }}
        />
      </div>

      <div className="md:w-1/2">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-4">
              Deadlines for {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </h3>

            {selectedDateOpportunities.length === 0 ? (
              <p className="text-muted-foreground">No funding deadlines for this date.</p>
            ) : (
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {selectedDateOpportunities.map((opp) => (
                    <div key={opp.id} className="border-l-2 border-destructive pl-4 py-2">
                      <h4 className="font-medium">{opp.title}</h4>
                      <p className="text-sm text-muted-foreground">{opp.organization}</p>

                      <div className="flex items-center gap-1 text-sm mt-1">
                        <DollarSign className="h-3.5 w-3.5" />
                        <span>{opp.amount}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {opp.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="outline" size="sm" className="gap-1 mt-3">
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Details
                      </Button>
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
