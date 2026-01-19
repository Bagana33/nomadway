"use client";

import { useState } from "react";
import { mockTours } from "@/lib/data";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Search, Plus, Edit, Eye, Star, MapPin, Calendar, Users } from "lucide-react";
import type { Tour } from "@/lib/types";
import Link from "next/link";
import { Suspense } from "react";

const Loading = () => null;

export default function AdminToursPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [tours, setTours] = useState(mockTours);

  const categories = Array.from(new Set(mockTours.map((t) => t.category)));
  const categoryLabels: Record<string, string> = {
    adventure: "Адал явдал",
    cultural: "Соёл",
    nature: "Байгаль",
    luxury: "Тансаг",
  };

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.startLocation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || tour.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleFeatured = (tourId: string) => {
    setTours((prev) =>
      prev.map((t) => (t.id === tourId ? { ...t, featured: !t.featured } : t))
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
          <h1 className="text-3xl font-bold tracking-tight">Аяллууд</h1>
          <p className="text-muted-foreground">Аяллын багцуудыг удирдах</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
              Аялал нэмэх
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
              <DialogTitle>Шинэ аялал нэмэх</DialogTitle>
                <DialogDescription>
                Шинэ аяллын багц үүсгэнэ. Шаардлагатай мэдээллийг бөглөнө үү.
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                  <Label htmlFor="title">Аяллын нэр</Label>
                  <Input id="title" placeholder="Аяллын нэр оруулах" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="category">Ангилал</Label>
                    <Select>
                      <SelectTrigger>
                      <SelectValue placeholder="Ангилал сонгох" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                          {categoryLabels[cat] ?? cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                <Label htmlFor="description">Товч тайлбар</Label>
                  <Textarea
                    id="description"
                  placeholder="Аяллын товч тайлбар"
                    rows={2}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                  <Label htmlFor="price">Үнэ (USD)</Label>
                    <Input id="price" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="duration">Үргэлжлэх хугацаа (хоног)</Label>
                    <Input id="duration" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="maxGroup">Хамгийн их бүлгийн тоо</Label>
                    <Input id="maxGroup" type="number" placeholder="0" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                  <Label htmlFor="location">Байршил</Label>
                  <Input id="location" placeholder="Жишээ: Говь цөл" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="difficulty">Хүндийн зэрэг</Label>
                    <Select>
                      <SelectTrigger>
                      <SelectValue placeholder="Хүндийн зэрэг сонгох" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="Easy">Хялбар</SelectItem>
                      <SelectItem value="Moderate">Дунд</SelectItem>
                      <SelectItem value="Challenging">Хэцүү</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="featured" />
                <Label htmlFor="featured">Онцлох аялал</Label>
                </div>
                <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline">
                  Болих
                </Button>
                <Button type="submit">Аялал үүсгэх</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
          <CardTitle>Бүх аялал</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Аялал хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Ангиллаар шүүх" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Бүх ангилал</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {categoryLabels[cat] ?? cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Аялал</TableHead>
                    <TableHead className="hidden md:table-cell">Ангилал</TableHead>
                    <TableHead className="hidden sm:table-cell">Хугацаа</TableHead>
                    <TableHead>Үнэ</TableHead>
                    <TableHead className="hidden lg:table-cell">Үнэлгээ</TableHead>
                    <TableHead>Онцлох</TableHead>
                    <TableHead className="text-right">Үйлдэл</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTours.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Аялал олдсонгүй
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredTours.map((tour) => (
                      <TableRow key={tour.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div
                              className="h-12 w-16 rounded-md bg-cover bg-center"
                              style={{ backgroundImage: `url(${tour.images[0]})` }}
                            />
                            <div>
                              <div className="font-medium line-clamp-1">{tour.name}</div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="mr-1 h-3 w-3" />
                                {tour.startLocation}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">{categoryLabels[tour.category] ?? tour.category}</Badge>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                            {tour.duration} хоног
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          ${tour.price.toLocaleString()}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          <div className="flex items-center">
                            <Star className="mr-1 h-3 w-3 fill-amber-400 text-amber-400" />
                            {tour.rating} ({tour.reviewCount})
                          </div>
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={tour.featured}
                            onCheckedChange={() => toggleFeatured(tour.id)}
                          />
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/tours/${tour.slug}`} target="_blank">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">Аялал харах</span>
                              </Link>
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                  <span className="sr-only">Аялал засах</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Аялал засах</DialogTitle>
                                  <DialogDescription>
                                    {tour.name} аяллын мэдээллийг шинэчлэх
                                  </DialogDescription>
                                </DialogHeader>
                                <form className="space-y-4">
                                  <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                      <Label htmlFor={`edit-title-${tour.id}`}>Аяллын нэр</Label>
                                      <Input
                                        id={`edit-title-${tour.id}`}
                                        defaultValue={tour.name}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor={`edit-category-${tour.id}`}>Ангилал</Label>
                                      <Select defaultValue={tour.category}>
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          {categories.map((cat) => (
                                            <SelectItem key={cat} value={cat}>
                                              {categoryLabels[cat] ?? cat}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor={`edit-desc-${tour.id}`}>
                                      Товч тайлбар
                                    </Label>
                                    <Textarea
                                      id={`edit-desc-${tour.id}`}
                                      defaultValue={tour.description}
                                      rows={2}
                                    />
                                  </div>
                                  <div className="grid gap-4 sm:grid-cols-3">
                                    <div className="space-y-2">
                                      <Label htmlFor={`edit-price-${tour.id}`}>
                                        Үнэ (USD)
                                      </Label>
                                      <Input
                                        id={`edit-price-${tour.id}`}
                                        type="number"
                                        defaultValue={tour.price}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor={`edit-duration-${tour.id}`}>
                                        Үргэлжлэх хугацаа (хоног)
                                      </Label>
                                      <Input
                                        id={`edit-duration-${tour.id}`}
                                        type="number"
                                        defaultValue={tour.duration}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor={`edit-maxgroup-${tour.id}`}>
                                        Хамгийн их бүлгийн тоо
                                      </Label>
                                      <Input
                                        id={`edit-maxgroup-${tour.id}`}
                                        type="number"
                                        defaultValue={tour.maxGroupSize}
                                      />
                                    </div>
                                  </div>
                                  <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline">
                                      Болих
                                    </Button>
                                    <Button type="submit">Өөрчлөлт хадгалах</Button>
                                  </div>
                                </form>
                              </DialogContent>
                            </Dialog>
                          </div>
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
