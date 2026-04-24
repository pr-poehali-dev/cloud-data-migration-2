import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo request:", { email, company })
    setEmail("")
    setCompany("")
  }

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Ready to <span className="font-semibold">get started?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Leave your details and our team will get in touch to schedule a personalised demo for your business
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3">
            <Input
              type="text"
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="h-12 rounded-full border-2 px-6"
            />
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-full border-2 px-6"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shrink-0"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground">
            By submitting, you agree to our Privacy Policy. We'll never share your data with third parties.
          </p>
        </div>
      </div>
    </section>
  )
}
