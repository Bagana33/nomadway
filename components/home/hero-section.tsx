import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mongolia.jpg"
          alt="Нар жаргах үеийн Монголын байгаль"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex min-h-[90vh] flex-col justify-center px-4 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-sm font-medium text-white">2025 оны аяллын захиалга нээлттэй</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Монголыг нээгээрэй.
            <span className="block text-accent">Ухаалгаар аял.</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 max-w-lg text-pretty text-lg text-white/80 md:text-xl">
            Монголын уудам тал нутагт жинхэнэ адал явдлыг мэдэр. Домогт Говь цөлөөс эхлээд цэнгэг уулын нуурууд хүртэл таны аялал эндээс эхэлнэ.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/tours">
                Аяллуудыг үзэх
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">
                <Play className="mr-2 h-4 w-4" />
                Манай түүхийг үзэх
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <p className="text-3xl font-bold text-white md:text-4xl">500+</p>
              <p className="text-sm text-white/60">Сэтгэл хангалуун аялагчид</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white md:text-4xl">50+</p>
              <p className="text-sm text-white/60">Өвөрмөц чиглэлүүд</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white md:text-4xl">9+</p>
              <p className="text-sm text-white/60">Туршлагын жил</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-white/60">Доош гүйлгээд судлаарай</span>
          <div className="h-12 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1.5 animate-bounce rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
