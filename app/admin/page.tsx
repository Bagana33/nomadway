import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockBookings, tours } from "@/lib/data"
import {
  CalendarDays,
  DollarSign,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

const stats = [
  {
    title: "Нийт захиалга",
    value: mockBookings.length.toString(),
    change: "+12%",
    trend: "up",
    icon: CalendarDays,
  },
  {
    title: "Орлого",
    value: `$${mockBookings.reduce((acc, b) => acc + b.totalPrice, 0).toLocaleString()}`,
    change: "+8%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Идэвхтэй аялал",
    value: tours.length.toString(),
    change: "0%",
    trend: "neutral",
    icon: TrendingUp,
  },
  {
    title: "Нийт аялагч",
    value: mockBookings.reduce((acc, b) => acc + b.numberOfPeople, 0).toString(),
    change: "+15%",
    trend: "up",
    icon: Users,
  },
]

const statusLabels = {
  pending: "Хүлээгдэж байна",
  confirmed: "Баталгаажсан",
  cancelled: "Цуцлагдсан",
  completed: "Дууссан",
} as const

export default function AdminDashboard() {
  const pendingBookings = mockBookings.filter((b) => b.status === "pending")
  const confirmedBookings = mockBookings.filter((b) => b.status === "confirmed")

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">Хяналтын самбар</h1>
        <p className="text-muted-foreground">Тавтай морил! Одоогийн мэдээлэл энд байна.</p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm">
                {stat.trend === "up" ? (
                  <>
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                    <span className="text-green-500">{stat.change}</span>
                  </>
                ) : stat.trend === "down" ? (
                  <>
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                    <span className="text-red-500">{stat.change}</span>
                  </>
                ) : (
                  <span className="text-muted-foreground">{stat.change}</span>
                )}
                <span className="text-muted-foreground">өмнөх сараас</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Bookings & Status */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Сүүлийн захиалгууд</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockBookings.slice(0, 5).map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div>
                    <p className="font-medium text-foreground">
                      {booking.customer.firstName} {booking.customer.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">{booking.tourName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">${booking.totalPrice}</p>
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                        booking.status === "confirmed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {statusLabels[booking.status]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Booking Status */}
        <Card>
          <CardHeader>
            <CardTitle>Захиалгын төлөвийн тойм</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Хүлээгдэж байна</span>
                  <span className="font-medium text-foreground">{pendingBookings.length}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-yellow-500"
                    style={{
                      width: `${(pendingBookings.length / mockBookings.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Баталгаажсан</span>
                  <span className="font-medium text-foreground">{confirmedBookings.length}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-green-500"
                    style={{
                      width: `${(confirmedBookings.length / mockBookings.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="mb-2 font-medium text-foreground">Шуурхай үйлдлүүд</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {pendingBookings.length} захиалгыг хянах шаардлагатай</li>
                  <li>• {tours.length} идэвхтэй аялал байна</li>
                  <li>• Бүх систем хэвийн</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
