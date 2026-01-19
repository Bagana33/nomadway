import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/data"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ | NomadWay Travel",
  description: "Find answers to frequently asked questions about traveling to Mongolia with NomadWay Travel.",
}

export default function FAQPage() {
  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = []
    }
    acc[faq.category].push(faq)
    return acc
  }, {} as Record<string, typeof faqs>)

  const categories = Object.keys(groupedFaqs)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
              Everything you need to know about traveling to Mongolia with NomadWay.
              Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              {categories.map((category) => (
                <div key={category} id={category.toLowerCase()} className="mb-12 scroll-mt-24">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">{category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {groupedFaqs[category].map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="rounded-lg border border-border bg-card px-6"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="border-t border-border bg-muted/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Still Have Questions?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
              Our team is ready to help you plan the perfect Mongolian adventure. 
              Get in touch and we&apos;ll respond within 24 hours.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
