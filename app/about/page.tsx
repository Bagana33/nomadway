import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Users, Award, Globe, Heart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | NomadWay Travel",
  description: "Learn about NomadWay Travel - your trusted partner for authentic Mongolian adventures since 2015.",
}

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "9+", label: "Years Experience" },
  { value: "50+", label: "Destinations" },
  { value: "98%", label: "Satisfaction Rate" },
]

const team = [
  {
    name: "Bat-Erdene Ganbold",
    role: "Founder & CEO",
    bio: "Born in the Gobi Desert, Bat-Erdene has been guiding travelers since 2008.",
  },
  {
    name: "Oyungerel Tsedev",
    role: "Operations Manager",
    bio: "With 12 years in tourism, Oyungerel ensures every trip runs smoothly.",
  },
  {
    name: "Munkh-Erdene Dorj",
    role: "Lead Guide",
    bio: "An expert in Mongolian wildlife and culture with 15 years of guiding experience.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "We create genuine connections with local communities and preserve traditional Mongolian culture.",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    description: "We minimize our environmental impact and support local economies through responsible travel.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Every journey is crafted with attention to detail and commitment to your satisfaction.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Our team of Mongolian guides brings unmatched knowledge and passion to every tour.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/about-team.jpg"
              alt="NomadWay Travel Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-2xl">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                About Us
              </span>
              <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
                Your Gateway to Authentic Mongolia
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Founded in 2015, NomadWay Travel has been connecting travelers with the 
                raw beauty and rich culture of Mongolia. We believe in travel that transforms 
                both the traveler and the communities we visit.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Our Story
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                From the Steppe to the World
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NomadWay Travel was born from a simple dream: to share the incredible beauty of 
                  Mongolia with the world while preserving its unique culture and environment.
                </p>
                <p>
                  Our founder, Bat-Erdene, grew up as a nomad in the Gobi Desert. After studying 
                  tourism abroad, he returned home with a vision to create a travel company that 
                  would offer authentic experiences while supporting local communities.
                </p>
                <p>
                  Today, we are proud to have hosted over 500 travelers from 40+ countries, 
                  creating memories that last a lifetime while contributing to the sustainable 
                  development of rural Mongolia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Our Values
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                What Drives Us
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Our Team
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Meet the Experts
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Our passionate team of Mongolian travel experts is dedicated to creating 
                unforgettable experiences for every traveler.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <Mountain className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="mb-3 text-sm text-accent">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to Start Your Adventure?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">
              Join hundreds of satisfied travelers who have discovered Mongolia with NomadWay.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/tours">
                  Explore Tours
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
