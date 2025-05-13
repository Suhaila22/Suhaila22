import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export function PaperSummary({ summary }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{summary.title}</h2>
        <div className="flex flex-wrap gap-2 mb-2">
          {summary.authors.map((author, index) => (
            <span key={index} className="text-muted-foreground">
              {author}
              {index < summary.authors.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">{summary.journal}</span>
          <span>•</span>
          <span>{summary.year}</span>
          <span>•</span>
          <span>{summary.citations} citations</span>
        </div>
      </div>

      <Tabs defaultValue="summary">
        <TabsList className="mb-4">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="keyFindings">Key Findings</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
          <TabsTrigger value="limitations">Limitations</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Abstract</h3>
              <p className="text-muted-foreground">{summary.abstract}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Summary</h3>
              <p className="text-muted-foreground">{summary.summary}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="keyFindings">
          <div>
            <h3 className="text-lg font-medium mb-4">Key Findings</h3>
            <ScrollArea className="h-[300px] pr-4">
              <ul className="space-y-3">
                {summary.keyFindings.map((finding, index) => (
                  <li key={index} className="flex gap-2">
                    <Badge className="mt-0.5 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <p>{finding}</p>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="methodology">
          <div>
            <h3 className="text-lg font-medium mb-2">Methodology</h3>
            <p className="text-muted-foreground">{summary.methodology}</p>
          </div>
        </TabsContent>

        <TabsContent value="limitations">
          <div>
            <h3 className="text-lg font-medium mb-2">Limitations & Future Work</h3>
            <p className="text-muted-foreground">{summary.limitations}</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
