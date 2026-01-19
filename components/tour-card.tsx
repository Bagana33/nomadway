import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, MapPin } from "lucide-react"
import type { Tour } from "@/lib/types"

interface TourCardProps {
  tour: Tour
  featured?: boolean
}

export function TourCard({ tour, featured = false }: TourCardProps) {
  const categoryColors: Record<string, string> = {
    adventure: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    cultural: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    nature: "bg-green-500/10 text-green-600 dark:text-green-400",
    luxury: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  }

  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'lg:flex' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : 'aspect-[4/3]'}`}>
        <Image
          src={tour.images[0] || "/placeholder.svg"}
          alt={tour.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className={categoryColors[tour.category] || "bg-primary/10 text-primary"}>
            {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
          </Badge>
        </div>
        {tour.rating >= 4.8 && (
          <div className="absolute right-4 top-4">
            <Badge className="bg-accent text-accent-foreground">Popular</Badge>
          </div>
        )}
      </div>
      
      <div className={featured ? 'lg:w-1/2' : ''}>
        <CardContent className="p-5">
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{tour.startLocation}</span>
          </div>
          
          <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            <Link href={`/tours/${tour.slug}`} className="hover:underline">
              {tour.name}
            </Link>
          </h3>
          
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {tour.shortDescription}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{tour.duration} days</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>Дээд {tour.maxGroupSize}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{tour.rating}</span>
              <span className="text-muted-foreground/60">({tour.reviewCount})</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between border-t border-border bg-muted/30 px-5 py-4">
          <div>
            <span className="text-sm text-muted-foreground">Эхлэх үнэ</span>
            <p className="text-2xl font-bold text-foreground">
              ${tour.price}
              <span className="text-sm font-normal text-muted-foreground">/хүн</span>
            </p>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={`/tours/${tour.slug}`}>Дэлгэрэнгүй</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
