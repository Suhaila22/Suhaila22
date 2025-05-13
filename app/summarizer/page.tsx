"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileUploader } from "@/components/file-uploader"
import { PaperSummary } from "@/components/paper-summary"

export default function SummarizerPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [summary, setSummary] = useState(null)

  const handleFileUpload = (file) => {
    setIsLoading(true)

    // Simulate API call for PDF processing
    setTimeout(() => {
      setSummary({
        title: "Advances in Neural Interfaces for Biomedical Applications",
        authors: ["J. Smith", "A. Johnson", "M. Williams"],
        journal: "Nature Biomedical Engineering",
        year: 2023,
        abstract:
          "Neural interfaces represent a rapidly evolving field in biomedical engineering, with applications ranging from neuroprosthetics to brain-computer interfaces for assistive technologies.",
        summary:
          "This paper presents recent advances in neural interface technology for biomedical applications. The authors discuss novel electrode materials, wireless data transmission methods, and signal processing algorithms that enhance the performance and longevity of implantable neural devices. Key contributions include a flexible electrode array with reduced tissue response and improved signal quality, a low-power wireless transmission system, and adaptive signal processing algorithms that maintain performance despite electrode degradation. The work demonstrates significant improvements in long-term recording stability and signal fidelity compared to conventional approaches. The authors validate their approach through in vivo experiments in animal models, showing sustained high-quality neural recordings over a six-month period. The paper concludes with a discussion of potential clinical applications and future research directions.",
        keyFindings: [
          "Development of flexible electrode arrays with reduced tissue response",
          "Novel low-power wireless data transmission system",
          "Adaptive signal processing algorithms for maintaining performance",
          "Six-month in vivo validation showing sustained recording quality",
          "Potential applications in neuroprosthetics and assistive technologies",
        ],
        methodology:
          "The study employed a combination of materials science approaches for electrode development, circuit design for wireless systems, and machine learning algorithms for signal processing. In vivo experiments were conducted in rodent models over a six-month period with regular assessment of recording quality and tissue response.",
        limitations:
          "The authors acknowledge limitations in scaling the technology for human applications, potential challenges in power management for long-term implants, and the need for further validation in larger animal models before clinical translation.",
        citations: 45,
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">AI PDF Reader & Summarizer</h1>
        <p className="text-muted-foreground">Upload any scientific paper and get an AI-generated summary</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Paper Summarizer</CardTitle>
            <CardDescription>Upload a research paper PDF to generate a comprehensive summary</CardDescription>
          </CardHeader>
          <CardContent>
            {!summary ? (
              <FileUploader onFileUpload={handleFileUpload} isLoading={isLoading} />
            ) : (
              <PaperSummary summary={summary} />
            )}
          </CardContent>
          {summary && (
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setSummary(null)}>
                Upload Another Paper
              </Button>
              <Button>Download Summary</Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}
