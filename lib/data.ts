import type { Tour, AdditionalService, Testimonial, FAQ, Booking } from './types'

// Tours Data
export const tours: Tour[] = [
  {
    id: '1',
    slug: 'gobi-desert-adventure',
    name: 'Говь цөлийн адал явдал',
    description: 'Дэлхийн хамгийн гайхамшигтай цөлүүдийн нэг болох Говийн онгон төрхийг мэдрээрэй. Асар уудам манхнаар аялж, үлэг гүрвэлийн олдворуудтай танилцан, хязгааргүй тэнгэрийн хаяан дээрх нар жаргах үзэгдлийг бишрээрэй. Орон нутгийн нүүдэлчин гэр бүлтэй хамт амьдарч, зуун зуунаар хадгалагдсан амьдралын хэв маягийг мэдрэнэ.',
    shortDescription: 'Говийн домогт манхан, эртний олдвор, нүүдэлчдийн соёлыг мэдрэх аялал.',
    duration: 5,
    price: 890,
    images: ['/images/gobi-1.jpg', '/images/gobi-2.jpg', '/images/gobi-3.jpg'],
    highlights: [
      'Хонгорын элс – Дуулдаг манхан',
      'Баянзагийн үлэг гүрвэлийн олдворын газар',
      'Ёлын ам – мөсөн хавцал',
      'Нүүдэлчин айлд буух туршлага',
      'Тэмээ унах'
    ],
    included: [
      '4x4 тээврийн хэрэгсэлтэй бүх тээвэр',
      '4 шөнө байрлах (гэр бааз, нүүдэлчин айл)',
      'Мэргэжлийн англи хэлтэй хөтөч',
      'Аяллын турш бүх хоол',
      'Үндэсний паркуудын тасалбар',
      'Тэмээ унах'
    ],
    notIncluded: [
      'Олон улсын нислэг',
      'Аяллын даатгал',
      'Хувийн зардал',
      'Хөтөч, жолоочийн урамшуулал',
      'Согтууруулах ундаа'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Улаанбаатар – Ёлын ам',
        description: 'Улаанбаатараас гарч Монголын уудам талыг туулан Говийн гурван сайхан үндэсний паркийн Ёлын амд хүрнэ. Нарийн мөсөн хавцлыг судалж, зэрлэг амьтдыг ажиглана.',
        meals: ['lunch', 'dinner'],
        accommodation: 'Гэр бааз'
      },
      {
        day: 2,
        title: 'Хонгорын элсний манхан',
        description: 'Дуулдаг манханаар алдарт Хонгорын элсэнд хүрч, тэмээ унаж, манханд авирч гайхамшигтай нар жаргахыг үзнэ.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Гэр бааз'
      },
      {
        day: 3,
        title: 'Баянзаг (Улаан эрэг)',
        description: 'Дэлхийд анх үлэг гүрвэлийн өндөг олдсон Баянзагийн улаан хадан тогтоцтой танилцана.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Нүүдэлчин айл'
      },
      {
        day: 4,
        title: 'Нүүдэлчдийн амьдралын туршлага',
        description: 'Нүүдэлчин айлд бүтэн өдөр өнгөрүүлж, ахуй амьдралтай нь танилцан, уламжлалт сүүн бүтээгдэхүүн амталж, мал маллах ажилд оролцоно.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Нүүдэлчин айл'
      },
      {
        day: 5,
        title: 'Улаанбаатар руу буцах',
        description: 'Зам дагуу үзэсгэлэнт цэгүүдээр саатаж, Улаанбаатар руу буцна. Орой хүрэлцэн ирнэ.',
        meals: ['breakfast', 'lunch'],
        accommodation: 'Аялал дуусав'
      }
    ],
    category: 'adventure',
    difficulty: 'moderate',
    maxGroupSize: 12,
    startLocation: 'Улаанбаатар',
    endLocation: 'Улаанбаатар',
    availableDates: generateAvailableDates(30),
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: '2',
    slug: 'nomadic-culture-tour',
    name: 'Нүүдэлчдийн соёлын аялал',
    description: 'Мянга мянган жил Монголыг тодорхойлж ирсэн нүүдэлчдийн жинхэнэ ахуйд шимтээрэй. Энэхүү соёлын аяллаар та Монголын тал нутгийн зүрхэнд хүрч, нүүдэлчин айлтай хамт амьдарч, уламжлалт гар урлал, ёс заншлыг өөрийн биеэр мэдэрнэ.',
    shortDescription: 'Нүүдэлчин айлтай хамт амьдарч, Монголын уламжлал, ахуйтай танилцана.',
    duration: 3,
    price: 490,
    images: ['/images/nomad-1.jpg', '/images/nomad-2.jpg', '/images/nomad-3.jpg'],
    highlights: [
      'Жинхэнэ нүүдэлчин айлд буух',
      'Уламжлалт гар урлал, хоол хийхийг сурах',
      'Тал нутгаар морь унах',
      'Уламжлалт хөгжим, хөөмий сонсох',
      'Эртний хийд, сүмтэй танилцах'
    ],
    included: [
      'Бүх тээвэр',
      'Нүүдэлчин айлд 2 шөнө байрлах',
      'Англи хэлтэй соёлын хөтөч',
      'Аяллын турш бүх хоол (Монгол уламжлалт хоол)',
      'Морь унах туршлага',
      'Уламжлалт хувцас өмсөх'
    ],
    notIncluded: [
      'Олон улсын нислэг',
      'Аяллын даатгал',
      'Хувийн зардал',
      'Урамшуулал'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Тал нутаг руу аялал',
        description: 'Улаанбаатараас төвийн тал руу аялж, нүүдэлчин айлтай танилцан уламжлалт гэрт байрлана. Орой нүүдэлчдийн ахуйтай танилцах оршил хөтөлбөр.',
        meals: ['lunch', 'dinner'],
        accommodation: 'Нүүдэлчин айлын гэр'
      },
      {
        day: 2,
        title: 'Нүүдэлчдийн амьдралд оролцох өдөр',
        description: 'Мал саах, сүүн бүтээгдэхүүн хийх, морь унах, уламжлалт гар урлал зэрэг өдөр тутмын ажлуудыг туршина. Орой соёлын үзүүлбэртэй.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Нүүдэлчин айлын гэр'
      },
      {
        day: 3,
        title: 'Хийдээр зочлоод буцах',
        description: 'Өглөө орон нутгийн хийдээр зочилж, шашин соёлын уламжлалтай танилцана. Дараа нь Улаанбаатар руу буцна.',
        meals: ['breakfast', 'lunch'],
        accommodation: 'Аялал дуусав'
      }
    ],
    category: 'cultural',
    difficulty: 'easy',
    maxGroupSize: 8,
    startLocation: 'Улаанбаатар',
    endLocation: 'Улаанбаатар',
    availableDates: generateAvailableDates(45),
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: '3',
    slug: 'mountain-lake-expedition',
    name: 'Уул, нуурын экспедиц',
    description: 'Хойд Монголын онгон байгаль, тунгалаг нуур, сүрлэг уулс руу хийх гайхалтай аялал. Эртний ойгоор аялж, цэнгэг голд загасчилж, "Монголын хөх сувд" хэмээн нэрлэгддэг Хөвсгөл нуурын үзэсгэлэнг мэдэрнэ.',
    shortDescription: 'Онгон байгалийг туулж, Монголын үзэсгэлэнт нуур, уулсыг нээнэ.',
    duration: 7,
    price: 1290,
    images: ['/images/lake-1.jpg', '/images/lake-2.jpg', '/images/lake-3.jpg'],
    highlights: [
      'Хөвсгөл нуур – Монголын хөх сувд',
      'Цаа бугын малчинтай уулзах',
      'Уулын треккинг',
      'Цэнгэг голд загасчлах',
      'Зэрлэг амьтан ажиглах',
      'Тайгын ойгоор судлах'
    ],
    included: [
      'Дотоод нислэг орсон бүх тээвэр',
      '6 шөнө байрлах (гэр бааз, майхан)',
      'Мэргэжлийн хөтөч, тогооч',
      'Бүх хоол',
      'Треккингийн хэрэгсэл',
      'Загас барих зөвшөөрөл',
      'Хөвсгөл нуур дээрх завины аялал'
    ],
    notIncluded: [
      'Олон улсын нислэг',
      'Аяллын даатгал',
      'Хувийн треккингийн хэрэгсэл',
      'Урамшуулал',
      'Согтууруулах ундаа'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Мөрөн рүү нисэх',
        description: 'Өглөө Улаанбаатараас Мөрөн рүү нисээд Хөвсгөл нуурын эрэг дээрх гэр баазад очно.',
        meals: ['lunch', 'dinner'],
        accommodation: 'Гэр бааз'
      },
      {
        day: 2,
        title: 'Хөвсгөл нуурын аялал',
        description: 'Өдөржин завиар аялж, тунгалаг эрэгт амарч, нуурын усанд сэлж, эрэг дээр зоог барина.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Гэр бааз'
      },
      {
        day: 3,
        title: 'Тайга руу треккинг',
        description: 'Уулын тайгын бүс рүү треккинг эхлүүлж, эртний шинэс ойгоор хүрээлэгдсэн сайхан нутагт майхан барина.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Майхан'
      },
      {
        day: 4,
        title: 'Цаатан бугачидтай уулзах',
        description: 'Дэлхий дээрх цөөн үлдсэн цаа бугын нүүдэлчдийн нэг болох Цаатан бугачидтай уулзана.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Майхан'
      },
      {
        day: 5,
        title: 'Уулын оргил',
        description: 'Уулын оргилд гарч панорама үзэмж тольдоно. Үдээс хойш уулын цэнгэг голд загасчилна.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Майхан'
      },
      {
        day: 6,
        title: 'Хөвсгөл нуур руу буцах',
        description: 'Треккингээ дуусган Хөвсгөл нуурт буцаж ирээд гэр баазад амарч, үдэлтийн зоог барина.',
        meals: ['breakfast', 'lunch', 'dinner'],
        accommodation: 'Гэр бааз'
      },
      {
        day: 7,
        title: 'Улаанбаатар руу буцах',
        description: 'Өглөө Мөрөн рүү явж, нислэгээр Улаанбаатар буцна. Ирээд аялал дуусна.',
        meals: ['breakfast', 'lunch'],
        accommodation: 'Аялал дуусав'
      }
    ],
    category: 'nature',
    difficulty: 'challenging',
    maxGroupSize: 10,
    startLocation: 'Улаанбаатар',
    endLocation: 'Улаанбаатар',
    availableDates: generateAvailableDates(20),
    rating: 4.9,
    reviewCount: 64
  }
]

// Additional Services
export const additionalServices: AdditionalService[] = [
  {
    id: 'airport-pickup',
    name: 'Нисэх буудлын угталт',
    description: 'Чингис хаан олон улсын нисэх буудлаас зочид буудал хүртэлх хувийн хүргэлт',
    price: 50,
    priceType: 'fixed'
  },
  {
    id: 'translator',
    name: 'Хувийн орчуулагч',
    description: 'Аяллын турш харилцааг хялбарчлах мэргэжлийн орчуулагч',
    price: 80,
    priceType: 'per-day'
  },
  {
    id: 'luxury-vehicle',
    name: 'Тансаг тээврийн шинэчлэл',
    description: 'Нэмэлт тав тухтай Land Cruiser-д шинэчилнэ',
    price: 120,
    priceType: 'per-day'
  },
  {
    id: 'photography',
    name: 'Гэрэл зургийн багц',
    description: 'Аяллын дурсамжийг буулгах мэргэжлийн зурагчин',
    price: 200,
    priceType: 'per-day'
  }
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'АНУ',
    rating: 5,
    text: '“Говь цөлийн адал явдал” аялал үнэхээр гайхалтай байлаа! Манай хөтөч маш мэдлэгтэй, нүүдэлчин айлд буусан нь аяллын хамгийн дурсамжтай хэсэг болсон. NomadWay бүхнийг маш сайхан зохион байгуулсан.',
    tourName: 'Говь цөлийн адал явдал',
    date: '2024-08-15'
  },
  {
    id: '2',
    name: 'Thomas Mueller',
    country: 'Герман',
    rating: 5,
    text: 'Би олон оронд аялсан ч Монгол үнэхээр онцгой байсан. “Уул, нуурын экспедиц” аялал бүх хүлээлтээс давлаа. Байгаль үнэхээр цэвэр, сүрлэг.',
    tourName: 'Уул, нуурын экспедиц',
    date: '2024-07-22'
  },
  {
    id: '3',
    name: 'Emma Chen',
    country: 'Австрали',
    rating: 5,
    text: '“Нүүдэлчдийн соёлын аялал” намайг Монголын уламжлалыг гүнзгий ойлгоход тусалсан. Айраг хийх, тал нутгаар морь унах зэрэг нь мартагдашгүй дурсамж болсон.',
    tourName: 'Нүүдэлчдийн соёлын аялал',
    date: '2024-09-05'
  },
  {
    id: '4',
    name: 'Pierre Dubois',
    country: 'Франц',
    rating: 4,
    text: 'Төгс зохион байгуулалт, гайхамшигтай хөтөч нар. Говийн нар жаргах үзэгдэл үнэхээр ид шидтэй. Монголын жинхэнэ туршлага хүссэн хүнд NomadWay-г зөвлөе.',
    tourName: 'Говь цөлийн адал явдал',
    date: '2024-06-18'
  }
]

// FAQs
export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Монголд аялахад хамгийн тохиромжтой үе хэзээ вэ?',
    answer: 'Хамгийн тохиромжтой улирал нь 6-9 дүгээр сар бөгөөд цаг агаар тааламжтай (15–25°C) байдаг. 7 дугаар сард Наадам болдог тул онцгой. Гэхдээ улирал бүр өөрийн онцлогтой: өвөл цастай байгаль, бүргэдийн баяр зэрэг сонирхолтой арга хэмжээнүүдтэй.',
    category: 'Ерөнхий'
  },
  {
    id: '2',
    question: 'Монголд ирэхэд виз хэрэгтэй юу?',
    answer: 'Визийн шаардлага таны иргэншлээс шалтгаална. АНУ, ЕХ, Австрали, Канад зэрэг олон улсын иргэд 30 хүртэл хоног визгүй зорчих боломжтой. Хамгийн сүүлийн шаардлагыг Монголын ЭСЯ-наас шалгахыг зөвлөе.',
    category: 'Ерөнхий'
  },
  {
    id: '3',
    question: 'Аялалд юу авч явах вэ?',
    answer: 'Өдөр, шөнийн температурын зөрүү их тул давхарлаж өмсөх хувцас авчрахыг зөвлөе. Тав тухтай гутал, нарны тос, нарны шил, малгай, оройн дулаан хүрэм, камер болон хэрэгтэй эм бэлдмэлүүдээ авчраарай. Дэлгэрэнгүй жагсаалтыг захиалга баталгаажсаны дараа өгнө.',
    category: 'Бэлтгэл'
  },
  {
    id: '4',
    question: 'Аяллуудын биеийн ачаалал ямар вэ?',
    answer: 'Манай аяллууд хялбараас хүнд хүртэл түвшинтэй. Нүүдэлчдийн соёлын аялал бүх түвшинд тохиромжтой бол “Уул, нуурын экспедиц” нь треккинг шаарддаг тул биеийн сайн бэлтгэлтэй байх хэрэгтэй. Аялал бүрийн тайлбарт хүндийн зэрэг тэмдэглэгдсэн.',
    category: 'Аяллууд'
  },
  {
    id: '5',
    question: 'Байрлах нөхцөл ямар байдаг вэ?',
    answer: 'Аяллаас хамааран жуулчны баазын уламжлалт гэр, нүүдэлчин айлын гэр, мөн алслагдсан бүсэд майхан байрлах зэрэг хувилбаруудтай. Бүх байр цэвэр, тухтай бөгөөд Монголын жинхэнэ туршлагыг мэдрүүлнэ.',
    category: 'Аяллууд'
  },
  {
    id: '6',
    question: 'Монголд аялах нь аюулгүй юу?',
    answer: 'Монгол нь аялагчдад ээлтэй, Азийн хамгийн аюулгүй орны нэг. Ялангуяа хөдөө орон нутагт ноцтой гэмт хэрэг ховор. Манай туршлагатай хөтөч таны аюулгүй байдлыг хангана. Стандарт аяллын урьдчилан сэргийлэлт болон бүрэн даатгал зөвлөе.',
    category: 'Аюулгүй байдал'
  },
  {
    id: '7',
    question: 'Цуцлалтын бодлого ямар вэ?',
    answer: 'Явах өдрөөс 30+ хоногийн өмнө цуцалбал үйлчилгээний шимтгэл хасагдаад бүрэн буцаан олголттой. 15–29 хоногийн өмнө цуцалбал 50% буцаан олгоно. 14 хоногоос дотогш бол буцаан олголтгүй. Гэнэтийн цуцлалтад даатгалтай байхыг зөвлөе.',
    category: 'Захиалга'
  },
  {
    id: '8',
    question: 'Аяллыг захиалгаар өөрчилж болох уу?',
    answer: 'Мэдээж! Бид таны сонирхол, цагийн хуваарь, төсөвт нийцсэн захиалгат маршрутыг боловсруулна. Хүсэлтээ илгээвэл манай баг таны төгс Монгол аяллыг зохион байгуулна.',
    category: 'Захиалга'
  }
]

// Mock Bookings (for admin dashboard)
export const mockBookings: Booking[] = [
  {
    id: 'BK001',
    tourId: '1',
    tourName: 'Говь цөлийн адал явдал',
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
    tourName: 'Нүүдэлчдийн соёлын аялал',
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
    tourName: 'Уул, нуурын экспедиц',
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
