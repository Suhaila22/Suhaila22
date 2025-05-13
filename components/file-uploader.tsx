"use client"

import { useState, useRef } from "react"
import { Upload, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function FileUploader({ onFileUpload, isLoading }) {
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState(null)
  const [error, setError] = useState("")
  const [progress, setProgress] = useState(0)
  const inputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file) => {
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file")
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit")
      return
    }

    setError("")
    setFile(file)

    // Simulate upload progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 10
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        onFileUpload(file)
      }
    }, 200)
  }

  const onButtonClick = () => {
    inputRef.current.click()
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8">
        <FileText className="h-12 w-12 text-primary animate-pulse" />
        <h3 className="text-lg font-medium">Analyzing PDF...</h3>
        <p className="text-sm text-muted-foreground text-center max-w-md">
          Our AI is reading and analyzing the paper. This may take a minute.
        </p>
        <Progress value={progress} className="w-full max-w-md" />
      </div>
    )
  }

  return (
    <div>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 transition-colors ${
          dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input ref={inputRef} type="file" accept=".pdf" onChange={handleChange} className="hidden" />

        <Upload className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">Upload Research Paper</h3>
        <p className="text-sm text-muted-foreground text-center mb-4 max-w-md">
          Drag and drop your PDF file here, or click to browse
        </p>
        <Button onClick={onButtonClick}>Select PDF File</Button>

        {file && (
          <div className="mt-4 text-sm">
            Selected: <span className="font-medium">{file.name}</span>
          </div>
        )}
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        <p>Supported format: PDF only</p>
        <p>Maximum file size: 10MB</p>
      </div>
    </div>
  )
}
