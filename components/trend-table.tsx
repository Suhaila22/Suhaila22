"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, TrendingUp, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const topics = [
  {
    name: "Tissue Engineering",
    papers: 245,
    citations: 3245,
    growth: 5.6,
    trend: "up",
    journals: ["Biomaterials", "Acta Biomaterialia", "Tissue Engineering"],
  },
  {
    name: "Bioprinting",
    papers: 198,
    citations: 2187,
    growth: 7.0,
    trend: "up",
    journals: ["Biofabrication", "Advanced Materials", "Biomaterials"],
  },
  {
    name: "Neural Interfaces",
    papers: 167,
    citations: 1876,
    growth: 6.4,
    trend: "up",
    journals: ["Journal of Neural Engineering", "Nature Neuroscience", "IEEE TBME"],
  },
  {
    name: "Nanomedicine",
    papers: 142,
    citations: 1654,
    growth: -12.3,
    trend: "down",
    journals: ["ACS Nano", "Nanomedicine", "Journal of Controlled Release"],
  },
  {
    name: "Biosensors",
    papers: 124,
    citations: 1432,
    growth: -20.5,
    trend: "down",
    journals: ["Biosensors & Bioelectronics", "Analytical Chemistry", "Sensors"],
  },
  {
    name: "Biomechanics",
    papers: 118,
    citations: 1245,
    growth: 2.6,
    trend: "up",
    journals: ["Journal of Biomechanics", "Clinical Biomechanics", "Journal of Orthopaedic Research"],
  },
  {
    name: "Medical Imaging",
    papers: 112,
    citations: 1354,
    growth: 3.7,
    trend: "up",
    journals: ["Medical Image Analysis", "IEEE TMI", "Radiology"],
  },
  {
    name: "Biomaterials",
    papers: 105,
    citations: 1287,
    growth: 1.9,
    trend: "up",
    journals: ["Biomaterials", "Acta Biomaterialia", "Advanced Materials"],
  },
]

export function TrendTable() {
  const [sortBy, setSortBy] = useState("papers")
  const [sortOrder, setSortOrder] = useState("desc")

  const sortedTopics = [...topics].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] - b[sortBy]
    } else {
      return b[sortBy] - a[sortBy]
    }
  })

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Sort by <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleSort("papers")}>Number of Papers</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("citations")}>Citations</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("growth")}>Growth Rate</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Topic</TableHead>
              <TableHead className="text-right">Papers</TableHead>
              <TableHead className="text-right">Citations</TableHead>
              <TableHead className="text-right">Growth</TableHead>
              <TableHead>Top Journals</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTopics.map((topic) => (
              <TableRow key={topic.name}>
                <TableCell className="font-medium">{topic.name}</TableCell>
                <TableCell className="text-right">{topic.papers}</TableCell>
                <TableCell className="text-right">{topic.citations}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end">
                    {topic.trend === "up" ? (
                      <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="mr-1 h-4 w-4 text-red-500" />
                    )}
                    {topic.growth}%
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {topic.journals.map((journal) => (
                      <Badge key={journal} variant="outline" className="text-xs">
                        {journal}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
