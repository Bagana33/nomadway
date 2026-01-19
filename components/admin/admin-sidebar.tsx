"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Mountain,
  LayoutDashboard,
  CalendarDays,
  MapPin,
  Settings,
  Menu,
  LogOut,
  Moon,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Хяналтын самбар", href: "/admin", icon: LayoutDashboard },
  { name: "Захиалгууд", href: "/admin/bookings", icon: CalendarDays },
  { name: "Аяллууд", href: "/admin/tours", icon: MapPin },
  { name: "Тохиргоо", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
          <Mountain className="h-4 w-4 text-sidebar-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold leading-none text-sidebar-foreground">NomadWay</span>
          <span className="text-[10px] font-medium text-sidebar-foreground/60">Админ хэсэг</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4">
        <div className="mb-4 flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-xs font-bold text-sidebar-primary-foreground">
            A
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-sidebar-foreground">Админ хэрэглэгч</p>
            <p className="text-xs text-sidebar-foreground/60">admin@nomadway.mn</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            <Link href="/">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Сайт руу буцах</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="flex h-16 items-center border-b border-border bg-sidebar px-4 md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-sidebar p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
        <div className="ml-4 flex items-center gap-2">
          <Mountain className="h-5 w-5 text-sidebar-foreground" />
          <span className="font-semibold text-sidebar-foreground">Админ</span>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar md:block">
        <SidebarContent />
      </aside>
    </>
  )
}
