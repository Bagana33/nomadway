import React from "react"
import type { Metadata } from "next"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export const metadata: Metadata = {
  title: "Админ самбар | NomadWay Аялал",
  description: "NomadWay Аяллын аялал, захиалга, тохиргоог удирдах.",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-auto bg-muted/30">
        {children}
      </main>
    </div>
  )
}
