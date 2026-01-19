import { Shield, Users, MapPin, Headphones, Award, Heart } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Our guides are born and raised in Mongolia, offering authentic insights you won't find anywhere else."
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "We keep groups intimate (max 12) for a more personal and immersive travel experience."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive travel insurance, experienced drivers, and 24/7 support throughout your journey."
  },
  {
    icon: Heart,
    title: "Sustainable Travel",
    description: "We support local communities and practice responsible tourism to protect Mongolia's wilderness."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in adventure travel by international tourism organizations."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is always available to assist you, from booking to the end of your adventure."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Why NomadWay
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Travel with Confidence
          </h2>
          <p className="mt-3 text-muted-foreground">
            We&apos;re more than just a travel company. We&apos;re your gateway to authentic Mongolian experiences.
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
