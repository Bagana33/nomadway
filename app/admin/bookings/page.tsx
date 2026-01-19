"use client";

import React from "react";
import { Suspense } from "react";
import { useState } from "react";
import { mockBookings, mockTours } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Eye, CheckCircle, XCircle, Clock } from "lucide-react";
import type { Booking } from "@/lib/types";

const statusColors: Record<Booking["status"], string> = {
  pending: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  confirmed: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  completed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
};

const statusIcons: Record<Booking["status"], React.ReactNode> = {
  pending: <Clock className="h-3 w-3" />,
  confirmed: <CheckCircle className="h-3 w-3" />,
  cancelled: <XCircle className="h-3 w-3" />,
  completed: <CheckCircle className="h-3 w-3" />,
};

const statusLabels: Record<Booking["status"], string> = {
  pending: "Хүлээгдэж байна",
  confirmed: "Баталгаажсан",
  cancelled: "Цуцлагдсан",
  completed: "Дууссан",
};

const Loading = () => null;

export default function AdminBookingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [bookings, setBookings] = useState(mockBookings);

  const filteredBookings = bookings.filter((booking) => {
    const customerName = `${booking.customer.firstName} ${booking.customer.lastName}`.trim();
    const matchesSearch =
      customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getTourName = (tourId: string) => {
    const tour = mockTours.find((t) => t.id === tourId);
    return tour?.name || "Тодорхойгүй аялал";
  };

  const updateBookingStatus = (bookingId: string, newStatus: Booking["status"]) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Захиалгууд</h1>
          <p className="text-muted-foreground">Бүх аяллын захиалгыг удирдах</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Бүх захиалга</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Нэр, и-мэйл эсвэл захиалгын дугаараар хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Төлөвөөр шүүх" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Бүх төлөв</SelectItem>
                  <SelectItem value="pending">Хүлээгдэж байна</SelectItem>
                  <SelectItem value="confirmed">Баталгаажсан</SelectItem>
                  <SelectItem value="cancelled">Цуцлагдсан</SelectItem>
                  <SelectItem value="completed">Дууссан</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Захиалгын дугаар</TableHead>
                    <TableHead>Захиалагч</TableHead>
                    <TableHead className="hidden md:table-cell">Аялал</TableHead>
                    <TableHead className="hidden sm:table-cell">Огноо</TableHead>
                    <TableHead className="hidden lg:table-cell">Зочид</TableHead>
                    <TableHead>Нийт</TableHead>
                    <TableHead>Төлөв</TableHead>
                    <TableHead className="text-right">Үйлдэл</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        Захиалга олдсонгүй
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-mono text-sm">
                          {booking.id.slice(0, 8)}...
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              {booking.customer.firstName} {booking.customer.lastName}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {booking.customer.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell max-w-[200px] truncate">
                          {getTourName(booking.tourId)}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          {new Date(booking.startDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {booking.numberOfPeople}
                        </TableCell>
                        <TableCell className="font-medium">
                          ${booking.totalPrice.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={`${statusColors[booking.status]} flex w-fit items-center gap-1`}
                          >
                            {statusIcons[booking.status]}
                            <span>{statusLabels[booking.status]}</span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">Захиалгын дэлгэрэнгүй</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Захиалгын дэлгэрэнгүй</DialogTitle>
                                <DialogDescription>
                                  Захиалгын дугаар: {booking.id}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-muted-foreground">Захиалагч</p>
                                    <p className="font-medium">
                                      {booking.customer.firstName} {booking.customer.lastName}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">И-мэйл</p>
                                    <p className="font-medium">{booking.customer.email}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Утас</p>
                                    <p className="font-medium">{booking.customer.phone}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Зочид</p>
                                    <p className="font-medium">{booking.numberOfPeople}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Эхлэх огноо</p>
                                    <p className="font-medium">
                                      {new Date(booking.startDate).toLocaleDateString()}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Нийт</p>
                                    <p className="font-medium">
                                      ${booking.totalPrice.toLocaleString()}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Аялал</p>
                                  <p className="font-medium">{getTourName(booking.tourId)}</p>
                                </div>
                                {booking.customer.specialRequests && (
                                  <div>
                                    <p className="text-sm text-muted-foreground">
                                      Тусгай хүсэлт
                                    </p>
                                    <p className="font-medium">
                                      {booking.customer.specialRequests}
                                    </p>
                                  </div>
                                )}
                                <div className="flex gap-2 pt-4">
                                  {booking.status === "pending" && (
                                    <>
                                      <Button
                                        className="flex-1"
                                        onClick={() =>
                                          updateBookingStatus(booking.id, "confirmed")
                                        }
                                      >
                                        <CheckCircle className="mr-2 h-4 w-4" />
                                        Баталгаажуулах
                                      </Button>
                                      <Button
                                        variant="destructive"
                                        className="flex-1"
                                        onClick={() =>
                                          updateBookingStatus(booking.id, "cancelled")
                                        }
                                      >
                                        <XCircle className="mr-2 h-4 w-4" />
                                        Цуцлах
                                      </Button>
                                    </>
                                  )}
                                  {booking.status === "confirmed" && (
                                    <Button
                                      className="flex-1"
                                      onClick={() =>
                                        updateBookingStatus(booking.id, "completed")
                                      }
                                    >
                                      <CheckCircle className="mr-2 h-4 w-4" />
                                      Дууссан гэж тэмдэглэх
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Suspense>
  );
}
