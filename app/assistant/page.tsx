"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Paperclip } from "lucide-react"

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your research assistant. How can I help you with your biomedical engineering research today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on recent publications, tissue engineering approaches for cardiac regeneration have shown promising results in preclinical studies. The use of decellularized extracellular matrix scaffolds seeded with induced pluripotent stem cells has demonstrated improved functional recovery in animal models of myocardial infarction.",
        "The latest trends in neural interfaces focus on flexible electrode materials and wireless data transmission. Recent papers from MIT and Stanford have demonstrated significant improvements in long-term biocompatibility and signal quality.",
        "For your research on biosensors, I'd recommend exploring recent work on CRISPR-based sensing technologies. The paper by Zhang et al. (2023) in Nature Biomedical Engineering describes a novel approach with exceptional sensitivity for detecting biomarkers.",
        "Regarding funding opportunities, the NIH has recently announced a new R01 grant focused on biomedical engineering approaches for regenerative medicine. The deadline is in three months, and they're particularly interested in translational research.",
        "Several upcoming conferences might be relevant to your work: the International Conference on Biomedical Engineering (June 15-18) and the IEEE Engineering in Medicine and Biology Conference (July 23-27). Both have submission deadlines next month.",
      ]

      setMessages([
        ...messages,
        { role: "user", content: input },
        { role: "assistant", content: responses[Math.floor(Math.random() * responses.length)] },
      ])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Research Assistant</h1>
        <p className="text-muted-foreground">AI-powered research assistant with multi-language support</p>
      </div>

      <Card className="h-[calc(100vh-220px)]">
        <CardHeader>
          <CardTitle>Chat Assistant</CardTitle>
          <CardDescription>
            Ask questions about research trends, papers, methods, or funding opportunities
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[calc(100vh-380px)] px-4">
            <div className="space-y-4 pt-4 pb-6">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex max-w-[80%] ${
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    } items-start gap-2`}
                  >
                    <Avatar className={message.role === "user" ? "ml-2" : "mr-2"}>
                      {message.role === "assistant" ? (
                        <>
                          <AvatarFallback>AI</AvatarFallback>
                          <Bot className="h-6 w-6 p-0.5" />
                        </>
                      ) : (
                        <>
                          <AvatarFallback>U</AvatarFallback>
                          <User className="h-6 w-6 p-0.5" />
                        </>
                      )}
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <Avatar className="mr-2">
                      <AvatarFallback>AI</AvatarFallback>
                      <Bot className="h-6 w-6 p-0.5" />
                    </Avatar>
                    <div className="rounded-lg bg-muted p-3">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0.2s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4">
          <div className="flex w-full items-center space-x-2">
            <Button variant="outline" size="icon">
              <Paperclip className="h-4 w-4" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
            />
            <Button size="icon" onClick={handleSend} disabled={input.trim() === ""}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
