import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Users, Award, Globe, Heart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Бидний тухай | NomadWay Аялал",
  description: "2015 оноос хойш Монголын жинхэнэ аяллын таны найдвартай хамтрагч NomadWay Аяллын тухай.",
}

const stats = [
  { value: "500+", label: "Сэтгэл хангалуун аялагчид" },
  { value: "9+", label: "Туршлагын жил" },
  { value: "50+", label: "Чиглэлүүд" },
  { value: "98%", label: "Сэтгэл ханамж" },
]

const team = [
  {
    name: "Bat-Erdene Ganbold",
    role: "Үүсгэн байгуулагч, Гүйцэтгэх захирал",
    bio: "Говь нутагт төрсөн Бат-Эрдэнэ 2008 оноос хойш аялагчдыг хөтөлж байна.",
  },
  {
    name: "Oyungerel Tsedev",
    role: "Үйл ажиллагааны менежер",
    bio: "Аялал жуулчлалын 12 жилийн туршлагатай Оюунгэрэл бүх аяллыг жигд явуулдаг.",
  },
  {
    name: "Munkh-Erdene Dorj",
    role: "Ахлах хөтөч",
    bio: "Монголын байгаль, соёлын мэдлэгтэй, 15 жилийн туршлагатай хөтөч.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Жинхэнэ туршлага",
    description: "Орон нутгийн иргэдтэй бодит холбоо үүсгэж, уламжлалт соёлыг хадгална.",
  },
  {
    icon: Globe,
    title: "Тогтвортой аялал жуулчлал",
    description: "Байгальд үзүүлэх нөлөөг багасгаж, орон нутгийн эдийн засгийг дэмжинэ.",
  },
  {
    icon: Award,
    title: "Үйлчилгээний шилдэг байдал",
    description: "Аялал бүрийг нарийн төлөвлөж, таны сэтгэл ханамжийг эрхэмлэнэ.",
  },
  {
    icon: Users,
    title: "Орон нутгийн мэдлэг",
    description: "Монгол хөтөч нарын мэдлэг, хүсэл тэмүүлэл аялал бүрт шингэнэ.",
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
              alt="NomadWay Аяллын баг"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-2xl">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                Бидний тухай
              </span>
              <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
                Монголын жинхэнэ өнгийг мэдрэх гарц
              </h1>
              <p className="text-lg text-primary-foreground/80">
                2015 онд байгуулагдсан NomadWay Аялал нь аялагчдыг Монголын онгон байгаль,
                баялаг соёлтой холбож ирсэн. Бид аялагч болон зочлох орон нутгийн хамт олныг
                эерэгээр өөрчлөх аяллыг эрхэмлэдэг.
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
                Манай түүх
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Тал нутгаас дэлхийд
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NomadWay Аялал энгийн мөрөөдлөөс эхэлсэн: Монголын гайхамшигт үзэсгэлэн,
                  өвөрмөц соёл, байгаль орчныг хадгалангаа дэлхийд таниулах.
                </p>
                <p>
                  Үүсгэн байгуулагч Бат-Эрдэнэ Говьд нүүдэлчин ахуйд өссөн. Гадаадад аялал
                  жуулчлалын чиглэлээр суралцсаны дараа орон нутгийн иргэдийг дэмжсэн,
                  жинхэнэ туршлага өгөх аяллын компани байгуулах зорилгоор эх орондоо эргэн ирсэн.
                </p>
                <p>
                  Өнөөдөр бид 40+ орны 500 гаруй аялагчийг хүлээн авч, насан туршийн дурсамж
                  бүтээхээс гадна Монголын хөдөө орон нутгийн тогтвортой хөгжилд хувь нэмэр
                  оруулж буйдаа бахархдаг.
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
                Бидний үнэт зүйл
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Биднийг хөдөлгөгч зүйл
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
                Манай баг
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Мэргэжилтнүүдтэй танилц
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Монгол аяллын мэргэжилтнүүдээс бүрдсэн манай баг аялагч бүрт мартагдашгүй
                туршлага бүтээхэд зориулагдсан.
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
              Аяллаа эхлүүлэхэд бэлэн үү?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">
              NomadWay-тай Монголыг нээсэн олон зуун сэтгэл хангалуун аялагчдын эгнээнд нэгдээрэй.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/tours">
                  Аяллуудыг үзэх
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact">Холбоо барих</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
