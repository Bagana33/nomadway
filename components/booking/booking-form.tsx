"use client"

import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { tours, additionalServices, getTourBySlug, calculateTourPrice } from "@/lib/data"
import {
  CalendarIcon,
  Users,
  Check,
  ArrowLeft,
  Loader2,
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

type BookingStep = "select" | "details" | "confirm"

export function BookingForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  
  const initialTourSlug = searchParams.get("tour")
  const initialTour = initialTourSlug ? getTourBySlug(initialTourSlug) : undefined

  // Form State
  const [step, setStep] = React.useState<BookingStep>("select")
  const [selectedTour, setSelectedTour] = React.useState(initialTour?.id || "")
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>()
  const [numberOfPeople, setNumberOfPeople] = React.useState("2")
  const [selectedServices, setSelectedServices] = React.useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Customer Details
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [passportNumber, setPassportNumber] = React.useState("")
  const [nationality, setNationality] = React.useState("")
  const [specialRequests, setSpecialRequests] = React.useState("")

  const tour = tours.find((t) => t.id === selectedTour)
  const availableDates = tour?.availableDates.map((d) => new Date(d)) || []

  const totalPrice = tour
    ? calculateTourPrice(tour, parseInt(numberOfPeople), selectedServices)
    : 0

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const canProceedToDetails = selectedTour && selectedDate && numberOfPeople

  const canSubmit =
    firstName &&
    lastName &&
    email &&
    phone &&
    passportNumber &&
    nationality

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    toast({
      title: "Booking Confirmed!",
      description: "Check your email for confirmation details.",
    })
    
    setStep("confirm")
    setIsSubmitting(false)
  }

  if (step === "confirm") {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mb-6 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground">Booking Confirmed!</h1>
          <p className="mb-8 text-muted-foreground">
            Thank you for booking with NomadWay Travel. A confirmation email has been sent to {email}.
          </p>
          <Card className="mb-8 text-left">
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold">Booking Details</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Tour</dt>
                  <dd className="font-medium">{tour?.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Date</dt>
                  <dd className="font-medium">{selectedDate && format(selectedDate, "PPP")}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Travelers</dt>
                  <dd className="font-medium">{numberOfPeople} people</dd>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <dt className="text-muted-foreground">Total</dt>
                  <dd className="text-lg font-bold text-accent">${totalPrice}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="outline">
              <Link href="/tours">Browse More Tours</Link>
            </Button>
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={tour ? `/tours/${tour.slug}` : "/tours"}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
            <h1 className="text-xl font-semibold">Book Your Adventure</h1>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-4">
            <div className={cn(
              "flex items-center gap-2",
              step === "select" ? "text-primary" : "text-muted-foreground"
            )}>
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                step === "select" ? "bg-primary text-primary-foreground" : 
                step === "details" ? "bg-primary text-primary-foreground" : "bg-muted"
              )}>
                {step === "details" ? <Check className="h-4 w-4" /> : "1"}
              </div>
              <span className="hidden font-medium sm:inline">Select Tour</span>
            </div>
            <div className="h-px w-8 bg-border" />
            <div className={cn(
              "flex items-center gap-2",
              step === "details" ? "text-primary" : "text-muted-foreground"
            )}>
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                step === "details" ? "bg-primary text-primary-foreground" : "bg-muted"
              )}>
                2
              </div>
              <span className="hidden font-medium sm:inline">Your Details</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="space-y-6 lg:col-span-2">
            {step === "select" && (
              <>
                {/* Tour Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select Your Tour</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={selectedTour} onValueChange={setSelectedTour}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a tour" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((t) => (
                          <SelectItem key={t.id} value={t.id}>
                            {t.name} - ${t.price}/person ({t.duration} days)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {tour && (
                      <div className="mt-4 flex items-start gap-4 rounded-lg border border-border bg-muted/30 p-4">
                        <Image
                          src={tour.images[0] || "/placeholder.svg"}
                          alt={tour.name}
                          width={100}
                          height={75}
                          className="rounded-md object-cover"
                        />
                        <div>
                          <h4 className="font-medium">{tour.name}</h4>
                          <p className="text-sm text-muted-foreground">{tour.shortDescription}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Date Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Choose Your Date</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Select departure date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            !availableDates.some(
                              (d) => d.toDateString() === date.toDateString()
                            )
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {tour && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {availableDates.length} dates available
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Number of People */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Number of Travelers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={numberOfPeople} onValueChange={setNumberOfPeople}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: tour?.maxGroupSize || 12 }, (_, i) => i + 1).map(
                          (num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "person" : "people"}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Additional Services */}
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {additionalServices.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-start gap-4 rounded-lg border border-border p-4"
                        >
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={() => toggleService(service.id)}
                          />
                          <div className="flex-1">
                            <Label
                              htmlFor={service.id}
                              className="cursor-pointer font-medium"
                            >
                              {service.name}
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold text-accent">
                              ${service.price}
                            </span>
                            {service.priceType === "per-day" && (
                              <span className="text-sm text-muted-foreground">/day</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Button
                  onClick={() => setStep("details")}
                  disabled={!canProceedToDetails}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                >
                  Continue to Details
                </Button>
              </>
            )}

            {step === "details" && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Smith"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 234 567 890"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="passport">Passport Number *</Label>
                        <Input
                          id="passport"
                          value={passportNumber}
                          onChange={(e) => setPassportNumber(e.target.value)}
                          placeholder="AB1234567"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality *</Label>
                        <Input
                          id="nationality"
                          value={nationality}
                          onChange={(e) => setNationality(e.target.value)}
                          placeholder="United States"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requests">Special Requests (Optional)</Label>
                      <Textarea
                        id="requests"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="Dietary requirements, accessibility needs, etc."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep("select")}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!canSubmit || isSubmitting}
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tour ? (
                  <>
                    <div className="flex items-start gap-3">
                      <Image
                        src={tour.images[0] || "/placeholder.svg"}
                        alt={tour.name}
                        width={80}
                        height={60}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{tour.name}</h4>
                        <p className="text-sm text-muted-foreground">{tour.duration} days</p>
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-border pt-4 text-sm">
                      {selectedDate && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date</span>
                          <span>{format(selectedDate, "PP")}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Travelers</span>
                        <span>{numberOfPeople} people</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Base price</span>
                        <span>${tour.price} x {numberOfPeople}</span>
                      </div>

                      {selectedServices.length > 0 && (
                        <div className="border-t border-border pt-2">
                          <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                            Additional Services
                          </p>
                          {selectedServices.map((serviceId) => {
                            const service = additionalServices.find((s) => s.id === serviceId)
                            if (!service) return null
                            const price =
                              service.priceType === "per-day"
                                ? service.price * tour.duration
                                : service.price
                            return (
                              <div key={serviceId} className="flex justify-between text-sm">
                                <span className="text-muted-foreground">{service.name}</span>
                                <span>${price}</span>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-accent">${totalPrice}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-muted-foreground">
                    Select a tour to see pricing
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
