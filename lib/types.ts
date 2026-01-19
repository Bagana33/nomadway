// Tour Types
export interface Tour {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  duration: number // in days
  price: number
  images: string[]
  highlights: string[]
  included: string[]
  notIncluded: string[]
  itinerary: ItineraryDay[]
  category: TourCategory
  difficulty: 'easy' | 'moderate' | 'challenging'
  maxGroupSize: number
  startLocation: string
  endLocation: string
  availableDates: string[] // ISO date strings
  rating: number
  reviewCount: number
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  meals: ('breakfast' | 'lunch' | 'dinner')[]
  accommodation: string
}

export type TourCategory = 'adventure' | 'cultural' | 'nature' | 'luxury'

// Additional Services
export interface AdditionalService {
  id: string
  name: string
  description: string
  price: number
  priceType: 'fixed' | 'per-day' | 'per-person'
}

// Booking Types
export interface Booking {
  id: string
  tourId: string
  tourName: string
  startDate: string
  numberOfPeople: number
  additionalServices: string[]
  totalPrice: number
  customer: CustomerInfo
  status: BookingStatus
  createdAt: string
  updatedAt: string
}

export interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  passportNumber: string
  nationality: string
  specialRequests?: string
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed'

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  country: string
  avatar?: string
  rating: number
  text: string
  tourName: string
  date: string
}

// FAQ Types
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

// Contact Form
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Admin User
export interface AdminUser {
  id: string
  email: string
  name: string
  role: 'admin' | 'staff'
}
