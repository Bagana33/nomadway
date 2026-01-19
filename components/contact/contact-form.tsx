"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send } from "lucide-react"

const subjects = [
  "Ерөнхий лавлагаа",
  "Аяллын мэдээлэл",
  "Захиалгын асуулт",
  "Захиалгат аялал",
  "Хамтын ажиллагаа",
  "Бусад",
]

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Зурвас илгээгдлээ!",
      description: "Бидэнтэй холбогдсонд баярлалаа. 24 цагийн дотор хариу өгнө.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const isValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Таны нэр *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Бат Болд"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">И-мэйл хаяг *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="bat@example.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Сэдэв *</Label>
        <Select
          value={formData.subject}
          onValueChange={(value) => setFormData({ ...formData, subject: value })}
        >
          <SelectTrigger id="subject">
            <SelectValue placeholder="Сэдэв сонгох" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Зурвас *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Аяллын төлөвлөгөөгөө бичих эсвэл асуултаа үлдээнэ үү..."
          rows={5}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Илгээж байна...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Зурвас илгээх
          </>
        )}
      </Button>
    </form>
  )
}
