import { Shield, Users, MapPin, Headphones, Award, Heart } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Орон нутгийн мэдлэг",
    description: "Манай хөтөч нар Монголд төрж өссөн тул хаанаас ч олдохгүй бодит туршлагыг өгнө."
  },
  {
    icon: Users,
    title: "Жижиг бүлэг",
    description: "Илүү ойр, гүнзгий туршлага өгөхийн тулд бүлгийг бага (дээд 12) байлгана."
  },
  {
    icon: Shield,
    title: "Аюулгүй байдал нэн тэргүүнд",
    description: "Бүрэн даатгал, туршлагатай жолооч, аяллын турш 24/7 дэмжлэг."
  },
  {
    icon: Heart,
    title: "Тогтвортой аялал",
    description: "Орон нутгийн хамт олныг дэмжиж, байгальд ээлтэй аяллыг эрхэмлэнэ."
  },
  {
    icon: Award,
    title: "Шагналт үйлчилгээ",
    description: "Олон улсын байгууллагуудаас адал явдалт аяллын шилдгээр үнэлэгдсэн."
  },
  {
    icon: Headphones,
    title: "24/7 дэмжлэг",
    description: "Захиалгаас аяллын төгсгөл хүртэл бид үргэлж тусална."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Яагаад NomadWay гэж
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Итгэлтэйгээр аялаарай
          </h2>
          <p className="mt-3 text-muted-foreground">
            Бид зөвхөн аяллын компани биш. Бид Монголын жинхэнэ туршлагын таны гарц.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
