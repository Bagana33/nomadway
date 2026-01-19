import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Холбоо барих | NomadWay Аялал",
  description: "NomadWay Аялалтай холбоо бариарай. Төгс Монгол аяллаа төлөвлөхөд бид тусална.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Манай хаяг",
    details: ["Энхтайвны өргөн чөлөө 15", "Улаанбаатар, Монгол"],
  },
  {
    icon: Phone,
    title: "Утас",
    details: ["+976 99 123 456", "+976 11 234 567"],
  },
  {
    icon: Mail,
    title: "И-мэйл",
    details: ["info@nomadway.mn", "bookings@nomadway.mn"],
  },
  {
    icon: Clock,
    title: "Ажлын цаг",
    details: ["Дав - Баа: 9:00 - 18:00", "Бям: 10:00 - 14:00"],
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Холбоо барих
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
              Аяллын талаар асуулт байна уу эсвэл төлөвлөлтөд тусламж хэрэгтэй юу?
              Манай баг таны Монгол аяллыг мартагдашгүй болгоход тусална.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-2 text-2xl font-bold text-foreground">Бидэнд зурвас илгээх</h2>
                <p className="mb-6 text-muted-foreground">
                  Доорх маягтыг бөглөөд илгээвэл бид 24 цагийн дотор хариу өгнө.
                </p>
                <ContactForm />
              </div>

              {/* Map Placeholder */}
              <div className="flex flex-col">
                <h2 className="mb-2 text-2xl font-bold text-foreground">Байршил</h2>
                <p className="mb-6 text-muted-foreground">
                  Манай оффис Улаанбаатарын төвд байрладаг.
                </p>
                <div className="flex-1 overflow-hidden rounded-xl border border-border bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8099947047686!2d106.91693831571936!3d47.91776597920654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693410000000d%3A0x5f8e5e3b7b5e5e5e!2sPeace%20Avenue%2C%20Ulaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NomadWay Аяллын оффисын байршил"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
