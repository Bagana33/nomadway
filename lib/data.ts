import type { Tour, AdditionalService, Testimonial, FAQ, Booking } from './types'

// Tours Data
export const tours: Tour[] = [
  {
    id: '1',
    slug: 'gobi-desert-adventure',
    name: 'Gobi Desert Adventure',
    description: 'Experience the raw beauty of the Gobi Desert, one of the world\'s most spectacular desert landscapes. Journey through vast sand dunes, discover dinosaur fossils, and witness breathtaking sunsets over the endless horizon. Stay with local nomadic families and learn about their ancient way of life that has remained unchanged for centuries.',
    shortDescription: 'Explore the legendary Gobi Desert with its stunning sand dunes, ancient fossils, and nomadic culture.',
    duration: 5,
    price: 890,
    images: ['/images/gobi-1.jpg', '/images/gobi-2.jpg', '/images/gobi-3.jpg'],
    highlights: [
      'Khongoryn Els - the Singing Dunes',
      'Flaming Cliffs dinosaur fossil site',
      'Yol Valley ice canyon',
      'Authentic nomad family stay',
      'Camel riding experience'
    ],
    included: [
      'All transportation in 4x4 vehicles',
      '4 nights accommodation (ger camps & nomad family)',
      'Professional English-speaking guide',
      'All meals during the tour',
      'Entrance fees to national parks',
      'Camel riding'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips for guide and driver',
      'Alcoholic beverages'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ulaanbaatar to Yol Valley',
        description: 'Depart from Ulaanbaatar and drive through the vast Mongolian steppe to Yol Valley in Gobi Gurvansaikhan National Park. Explore the narrow ice canyon and spot local wildlife.',
        meals: ['lunch', 'dinner'],
        accommodation: 'Ger Camp'
      },
      {
        day: 2,
        title: 'Khongoryn Els Sand Dunes',
        description: 'Travel to the magnificent Khongoryn Els, also known as the Singing Dunes. Experience camel riding and climb the dunes for a spectacular sunset view.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Ger Camp'
      },
      {
        day: 3,
        title: 'Flaming Cliffs',
        description: 'Visit the world-famous Flaming Cliffs where the first dinosaur eggs were discovered. Explore the red sandstone formations that glow at sunset.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Nomad Family'
      },
      {
        day: 4,
        title: 'Nomadic Life Experience',
        description: 'Spend the day with a nomadic family. Learn about their daily life, try traditional dairy products, and participate in herding activities.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Nomad Family'
      },
      {
        day: 5,
        title: 'Return to Ulaanbaatar',
        description: 'Begin the journey back to Ulaanbaatar with stops at scenic viewpoints along the way. Arrive in the evening.',
        meals: ['breakfast', 'lunch'],
        accommodation: 'End of tour'
      }
    ],
    category: 'adventure',
    difficulty: 'moderate',
    maxGroupSize: 12,
    startLocation: 'Ulaanbaatar',
    endLocation: 'Ulaanbaatar',
    availableDates: generateAvailableDates(30),
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: '2',
    slug: 'nomadic-culture-tour',
    name: 'Nomadic Culture Tour',
    description: 'Immerse yourself in the authentic nomadic lifestyle that has defined Mongolia for thousands of years. This cultural journey takes you deep into the heart of the Mongolian steppe, where you\'ll live alongside nomadic families, learn traditional crafts, and experience the timeless hospitality of the Mongolian people.',
    shortDescription: 'Live with nomadic families and experience the authentic Mongolian lifestyle and traditions.',
    duration: 3,
    price: 490,
    images: ['/images/nomad-1.jpg', '/images/nomad-2.jpg', '/images/nomad-3.jpg'],
    highlights: [
      'Stay with authentic nomad families',
      'Learn traditional crafts and cooking',
      'Horse riding on the open steppe',
      'Traditional music and throat singing',
      'Visit to ancient monastery'
    ],
    included: [
      'All transportation',
      '2 nights with nomad families',
      'English-speaking cultural guide',
      'All meals (traditional Mongolian cuisine)',
      'Horse riding experience',
      'Traditional costume try-on'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Journey to the Steppe',
        description: 'Travel from Ulaanbaatar to the central Mongolian steppe. Meet your host nomad family and settle into their traditional ger. Evening introduction to nomadic life.',
        meals: ['lunch', 'dinner'],
        accommodation: 'Nomad Family Ger'
      },
      {
        day: 2,
        title: 'Nomadic Life Immersion',
        description: 'Full day experiencing nomadic activities: milking animals, making dairy products, horse riding, and learning traditional crafts. Evening cultural performance.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Nomad Family Ger'
      },
      {
        day: 3,
        title: 'Monastery Visit & Return',
        description: 'Visit a local Buddhist monastery in the morning. Learn about spiritual traditions, then return to Ulaanbaatar with memories of authentic Mongolian hospitality.',
        meals: ['breakfast', 'lunch'],
        accommodation: 'End of tour'
      }
    ],
    category: 'cultural',
    difficulty: 'easy',
    maxGroupSize: 8,
    startLocation: 'Ulaanbaatar',
    endLocation: 'Ulaanbaatar',
    availableDates: generateAvailableDates(45),
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: '3',
    slug: 'mountain-lake-expedition',
    name: 'Mountain & Lake Expedition',
    description: 'Discover the pristine wilderness of northern Mongolia on this epic journey to crystal-clear lakes and majestic mountains. Trek through ancient forests, fish in untouched rivers, and witness the stunning beauty of Khövsgöl Lake, often called the "Blue Pearl of Mongolia."',
    shortDescription: 'Trek through pristine wilderness to discover Mongolia\'s stunning lakes and mountain landscapes.',
    duration: 7,
    price: 1290,
    images: ['/images/lake-1.jpg', '/images/lake-2.jpg', '/images/lake-3.jpg'],
    highlights: [
      'Khövsgöl Lake - Blue Pearl of Mongolia',
      'Reindeer herder visit',
      'Mountain trekking',
      'Fishing in pristine rivers',
      'Wildlife spotting',
      'Taiga forest exploration'
    ],
    included: [
      'All transportation including domestic flight',
      '6 nights accommodation (ger camps & tents)',
      'Professional guide and cook',
      'All meals',
      'Trekking equipment',
      'Fishing permits',
      'Boat trip on Khövsgöl Lake'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Personal trekking gear',
      'Tips',
      'Alcoholic beverages'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Fly to Mörön',
        description: 'Morning flight from Ulaanbaatar to Mörön. Drive to Khövsgöl Lake and settle into lakeside ger camp.',
        meals: ['lunch', 'dinner'],
        accommodation: 'Ger Camp'
      },
      {
        day: 2,
        title: 'Khövsgöl Lake Exploration',
        description: 'Full day exploring the lake by boat. Visit pristine beaches, swim in crystal-clear waters, and enjoy lakeside picnic.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Ger Camp'
      },
      {
        day: 3,
        title: 'Trek to Taiga',
        description: 'Begin trekking into the mountainous taiga region. Set up camp in a scenic meadow surrounded by ancient larch forests.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Tent Camp'
      },
      {
        day: 4,
        title: 'Reindeer Herder Visit',
        description: 'Trek to meet the Tsaatan reindeer herders, one of the last remaining nomadic reindeer cultures in the world.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Tent Camp'
      },
      {
        day: 5,
        title: 'Mountain Summit',
        description: 'Climb to a mountain summit for panoramic views. Afternoon fishing in pristine mountain streams.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Tent Camp'
      },
      {
        day: 6,
        title: 'Return to Khövsgöl',
        description: 'Trek back to Khövsgöl Lake. Relax at the ger camp and enjoy a farewell dinner.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Ger Camp'
      },
      {
        day: 7,
        title: 'Return to Ulaanbaatar',
        description: 'Morning drive to Mörön and flight back to Ulaanbaatar. Tour ends upon arrival.',
        meals: ['breakfast', 'lunch'],
        accommodation: 'End of tour'
      }
    ],
    category: 'nature',
    difficulty: 'challenging',
    maxGroupSize: 10,
    startLocation: 'Ulaanbaatar',
    endLocation: 'Ulaanbaatar',
    availableDates: generateAvailableDates(20),
    rating: 4.9,
    reviewCount: 64
  }
]

// Additional Services
export const additionalServices: AdditionalService[] = [
  {
    id: 'airport-pickup',
    name: 'Airport Pickup',
    description: 'Comfortable private transfer from Chinggis Khaan International Airport to your hotel',
    price: 50,
    priceType: 'fixed'
  },
  {
    id: 'translator',
    name: 'Personal Translator',
    description: 'Professional translator for seamless communication throughout your journey',
    price: 80,
    priceType: 'per-day'
  },
  {
    id: 'luxury-vehicle',
    name: 'Luxury Vehicle Upgrade',
    description: 'Upgrade to a premium Land Cruiser with extra comfort features',
    price: 120,
    priceType: 'per-day'
  },
  {
    id: 'photography',
    name: 'Photography Package',
    description: 'Professional photographer to capture your adventure memories',
    price: 200,
    priceType: 'per-day'
  }
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'United States',
    rating: 5,
    text: 'The Gobi Desert Adventure was absolutely life-changing! Our guide was incredibly knowledgeable, and staying with the nomad family was the highlight of my trip. NomadWay made everything seamless.',
    tourName: 'Gobi Desert Adventure',
    date: '2024-08-15'
  },
  {
    id: '2',
    name: 'Thomas Mueller',
    country: 'Germany',
    rating: 5,
    text: 'I have traveled extensively, but Mongolia was unlike anything I have experienced. The Mountain & Lake Expedition exceeded all expectations. The landscapes are breathtaking and unspoiled.',
    tourName: 'Mountain & Lake Expedition',
    date: '2024-07-22'
  },
  {
    id: '3',
    name: 'Emma Chen',
    country: 'Australia',
    rating: 5,
    text: 'The Nomadic Culture Tour gave me a deep appreciation for Mongolian traditions. Learning to make airag and riding horses across the steppe - memories I will cherish forever.',
    tourName: 'Nomadic Culture Tour',
    date: '2024-09-05'
  },
  {
    id: '4',
    name: 'Pierre Dubois',
    country: 'France',
    rating: 4,
    text: 'Excellent organization and wonderful guides. The Gobi is truly magical at sunset. Would highly recommend NomadWay to anyone wanting an authentic Mongolian experience.',
    tourName: 'Gobi Desert Adventure',
    date: '2024-06-18'
  }
]

// FAQs
export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is the best time to visit Mongolia?',
    answer: 'The best time to visit Mongolia is from June to September when temperatures are pleasant (15-25°C) and the landscapes are at their most beautiful. July is particularly special due to the Naadam Festival. However, each season offers unique experiences - winter provides snow-covered landscapes and eagle hunting festivals.',
    category: 'General'
  },
  {
    id: '2',
    question: 'Do I need a visa to visit Mongolia?',
    answer: 'Visa requirements vary by nationality. Citizens of many countries can stay visa-free for up to 30 days, including the USA, EU countries, Australia, and Canada. We recommend checking with your local Mongolian embassy for the most current requirements.',
    category: 'General'
  },
  {
    id: '3',
    question: 'What should I pack for the tour?',
    answer: 'We recommend layers of clothing as temperatures can vary greatly between day and night. Essential items include: comfortable walking shoes, sunscreen, sunglasses, a hat, warm jacket for evenings, camera, and any personal medications. A detailed packing list will be provided upon booking.',
    category: 'Preparation'
  },
  {
    id: '4',
    question: 'How physically demanding are the tours?',
    answer: 'Our tours range from easy to challenging. The Nomadic Culture Tour is suitable for all fitness levels, while the Mountain & Lake Expedition requires good physical condition for trekking. Each tour description includes a difficulty rating to help you choose.',
    category: 'Tours'
  },
  {
    id: '5',
    question: 'What is the accommodation like?',
    answer: 'Accommodation varies by tour and includes traditional gers (yurts) at tourist camps, stays with nomadic families in their gers, and tent camping in remote areas. All accommodations are clean and comfortable, offering an authentic Mongolian experience.',
    category: 'Tours'
  },
  {
    id: '6',
    question: 'Is it safe to travel in Mongolia?',
    answer: 'Mongolia is one of the safest countries in Asia for travelers. Violent crime is rare, especially in rural areas. Our experienced guides ensure your safety throughout the journey. We recommend standard travel precautions and comprehensive travel insurance.',
    category: 'Safety'
  },
  {
    id: '7',
    question: 'What is the cancellation policy?',
    answer: 'Cancellations made 30+ days before departure receive a full refund minus processing fees. Cancellations 15-29 days before receive a 50% refund. Within 14 days, no refund is available. We strongly recommend travel insurance to cover unexpected cancellations.',
    category: 'Booking'
  },
  {
    id: '8',
    question: 'Can I customize a tour?',
    answer: 'Absolutely! We specialize in creating custom itineraries tailored to your interests, schedule, and budget. Contact us with your requirements, and our team will design your perfect Mongolian adventure.',
    category: 'Booking'
  }
]

// Mock Bookings (for admin dashboard)
export const mockBookings: Booking[] = [
  {
    id: 'BK001',
    tourId: '1',
    tourName: 'Gobi Desert Adventure',
    startDate: '2024-07-15',
    numberOfPeople: 2,
    additionalServices: ['airport-pickup'],
    totalPrice: 1830,
    customer: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@email.com',
      phone: '+1234567890',
      passportNumber: 'AB1234567',
      nationality: 'USA'
    },
    status: 'confirmed',
    createdAt: '2024-06-01T10:30:00Z',
    updatedAt: '2024-06-02T14:20:00Z'
  },
  {
    id: 'BK002',
    tourId: '2',
    tourName: 'Nomadic Culture Tour',
    startDate: '2024-08-20',
    numberOfPeople: 4,
    additionalServices: ['translator', 'airport-pickup'],
    totalPrice: 2290,
    customer: {
      firstName: 'Maria',
      lastName: 'Garcia',
      email: 'maria.g@email.com',
      phone: '+34612345678',
      passportNumber: 'ES9876543',
      nationality: 'Spain'
    },
    status: 'pending',
    createdAt: '2024-06-10T08:15:00Z',
    updatedAt: '2024-06-10T08:15:00Z'
  },
  {
    id: 'BK003',
    tourId: '3',
    tourName: 'Mountain & Lake Expedition',
    startDate: '2024-09-01',
    numberOfPeople: 1,
    additionalServices: ['photography'],
    totalPrice: 2690,
    customer: {
      firstName: 'Yuki',
      lastName: 'Tanaka',
      email: 'yuki.tanaka@email.jp',
      phone: '+81901234567',
      passportNumber: 'JP5432109',
      nationality: 'Japan'
    },
    status: 'confirmed',
    createdAt: '2024-06-15T16:45:00Z',
    updatedAt: '2024-06-16T09:00:00Z'
  }
]

// Alias for mockTours (used in admin pages)
export const mockTours = tours

// Helper function to generate available dates
function generateAvailableDates(count: number): string[] {
  const dates: string[] = []
  const today = new Date()
  
  for (let i = 7; i < count + 7; i += 3) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push(date.toISOString().split('T')[0])
  }
  
  return dates
}

// Helper functions to get data
export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find(tour => tour.slug === slug)
}

export function getTourById(id: string): Tour | undefined {
  return tours.find(tour => tour.id === id)
}

export function getServiceById(id: string): AdditionalService | undefined {
  return additionalServices.find(service => service.id === id)
}

export function calculateTourPrice(
  tour: Tour,
  numberOfPeople: number,
  selectedServices: string[],
  duration?: number
): number {
  const basePrice = tour.price * numberOfPeople
  
  const servicesPrice = selectedServices.reduce((total, serviceId) => {
    const service = getServiceById(serviceId)
    if (!service) return total
    
    switch (service.priceType) {
      case 'fixed':
        return total + service.price
      case 'per-day':
        return total + (service.price * (duration || tour.duration))
      case 'per-person':
        return total + (service.price * numberOfPeople)
      default:
        return total
    }
  }, 0)
  
  return basePrice + servicesPrice
}
