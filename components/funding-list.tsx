import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, DollarSign, Building, ExternalLink } from "lucide-react"

const fundingOpportunities = [
  {
    id: 1,
    title: "NIH R01 Research Project Grant",
    organization: "National Institutes of Health",
    amount: "$2,500,000",
    deadline: "June 5, 2023",
    eligibility: "Academic institutions, non-profit organizations",
    topics: ["Tissue Engineering", "Regenerative Medicine", "Medical Devices"],
    daysLeft: 25,
    status: "active",
  },
  {
    id: 2,
    title: "NSF Engineering Research Grant",
    organization: "National Science Foundation",
    amount: "$750,000",
    deadline: "July 15, 2023",
    eligibility: "U.S. academic institutions",
    topics: ["Biomedical Engineering", "Neural Interfaces", "Biosensors"],
    daysLeft: 65,
    status: "active",
  },
  {
    id: 3,
    title: "Biomedical Engineering Fellowship",
    organization: "Howard Hughes Medical Institute",
    amount: "$80,000 per year",
    deadline: "August 30, 2023",
    eligibility: "Postdoctoral researchers",
    topics: ["Biomaterials", "Medical Imaging", "Computational Biology"],
    daysLeft: 111,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Breakthrough Technology Grant",
    organization: "Bill & Melinda Gates Foundation",
    amount: "$1,200,000",
    deadline: "September 15, 2023",
    eligibility: "Global researchers and organizations",
    topics: ["Global Health", "Diagnostic Devices", "Affordable Healthcare"],
    daysLeft: 127,
    status: "upcoming",
  },
  {
    id: 5,
    title: "Early Career Investigator Award",
    organization: "American Heart Association",
    amount: "$500,000",
    deadline: "October 1, 2023",
    eligibility: "Early career faculty (within 7 years of appointment)",
    topics: ["Cardiovascular Engineering", "Medical Devices", "Tissue Engineering"],
    daysLeft: 143,
    status: "upcoming",
  },
]

export function FundingList({ filter = "all" }) {
  const filteredOpportunities =
    filter === "all" ? fundingOpportunities : fundingOpportunities.filter((opp) => opp.status === filter)

  return (
    <div className="space-y-6">
      {filteredOpportunities.map((opportunity) => (
        <div key={opportunity.id} className="rounded-lg border p-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-lg">{opportunity.title}</h3>
                <Badge variant={opportunity.daysLeft <= 30 ? "destructive" : "outline"}>
                  {opportunity.daysLeft} days left
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  <span>{opportunity.organization}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{opportunity.amount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>Deadline: {opportunity.deadline}</span>
                </div>
              </div>

              <p className="text-sm">
                <span className="font-medium">Eligibility:</span> {opportunity.eligibility}
              </p>

              <div className="flex flex-wrap gap-1">
                {opportunity.topics.map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full md:w-[200px]">
                <div className="flex justify-between text-xs mb-1">
                  <span>Time remaining</span>
                  <span>{opportunity.daysLeft} days</span>
                </div>
                <Progress value={Math.max(0, 100 - opportunity.daysLeft / 1.5)} className="h-2" />
              </div>
              <Button variant="outline" size="sm" className="gap-1 mt-2">
                <ExternalLink className="h-3.5 w-3.5" />
                View Details
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
