import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const recentPapers = [
  {
    title: "Advances in 3D Bioprinting for Tissue Engineering Applications",
    journal: "Biomaterials",
    date: "May 2, 2023",
    tags: ["Bioprinting", "Tissue Engineering"],
  },
  {
    title: "Neural Interfaces for Closed-Loop Deep Brain Stimulation",
    journal: "Nature Biomedical Engineering",
    date: "April 28, 2023",
    tags: ["Neural Interfaces", "Neuroscience"],
  },
  {
    title: "Nanomedicine Approaches for Targeted Drug Delivery in Cancer Treatment",
    journal: "Advanced Drug Delivery Reviews",
    date: "April 25, 2023",
    tags: ["Nanomedicine", "Cancer"],
  },
  {
    title: "Wearable Biosensors for Continuous Health Monitoring",
    journal: "IEEE Transactions on Biomedical Engineering",
    date: "April 20, 2023",
    tags: ["Biosensors", "Wearables"],
  },
  {
    title: "Machine Learning in Medical Image Analysis: Current Trends and Future Directions",
    journal: "Medical Image Analysis",
    date: "April 15, 2023",
    tags: ["AI", "Imaging"],
  },
]

export function RecentPapers() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Recent Papers</CardTitle>
        <CardDescription>Latest publications in your field</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-4">
            {recentPapers.map((paper, index) => (
              <div key={index} className="space-y-1">
                <h3 className="font-medium leading-tight">{paper.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{paper.journal}</span>
                  <span>{paper.date}</span>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
