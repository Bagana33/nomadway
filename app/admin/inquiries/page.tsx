"use client";

import React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Search, Eye, Mail, CheckCircle, Clock, Archive } from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  createdAt: string;
}

const mockInquiries: Inquiry[] = [
  {
    id: "inq-001",
    name: "John Smith",
    email: "john.smith@email.com",
    subject: "Question about Gobi Desert Tour",
    message: "Hi, I'm interested in the Gobi Desert Expedition tour. Can you tell me more about the accommodations during the trip? Are the ger camps comfortable? Also, what's the best time of year to visit?",
    status: "new",
    createdAt: "2025-01-18T10:30:00Z",
  },
  {
    id: "inq-002",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    subject: "Group booking inquiry",
    message: "We're a group of 8 friends planning to visit Mongolia in July. Do you offer group discounts? We're particularly interested in the Nomadic Life Experience tour.",
    status: "replied",
    createdAt: "2025-01-17T14:20:00Z",
  },
  {
    id: "inq-003",
    name: "Michael Chen",
    email: "m.chen@email.com",
    subject: "Vegetarian food options",
    message: "I'm a vegetarian and wondering if you can accommodate dietary restrictions during the tours. Please let me know what options are available.",
    status: "read",
    createdAt: "2025-01-16T09:15:00Z",
  },
  {
    id: "inq-004",
    name: "Emma Wilson",
    email: "emma.w@email.com",
    subject: "Photography equipment",
    message: "I'm a professional photographer. Can I bring my tripod and drone on the tours? Are there any restrictions?",
    status: "archived",
    createdAt: "2025-01-15T16:45:00Z",
  },
];

const statusColors: Record<Inquiry["status"], string> = {
  new: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  read: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  replied: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  archived: "bg-muted text-muted-foreground",
};

const statusIcons: Record<Inquiry["status"], React.ReactNode> = {
  new: <Mail className="h-3 w-3" />,
  read: <Eye className="h-3 w-3" />,
  replied: <CheckCircle className="h-3 w-3" />,
  archived: <Archive className="h-3 w-3" />,
};

const Loading = () => null;

export default function AdminInquiriesPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [inquiries, setInquiries] = useState(mockInquiries);
  const [replyText, setReplyText] = useState("");

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || inquiry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateInquiryStatus = (inquiryId: string, newStatus: Inquiry["status"]) => {
    setInquiries((prev) =>
      prev.map((i) => (i.id === inquiryId ? { ...i, status: newStatus } : i))
    );
  };

  const newCount = inquiries.filter((i) => i.status === "new").length;

  return (
    <Suspense fallback={<Loading />}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Inquiries
            {newCount > 0 && (
              <Badge className="ml-2 bg-blue-600">{newCount} new</Badge>
            )}
          </h1>
          <p className="text-muted-foreground">Manage customer inquiries and messages</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="replied">Replied</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>From</TableHead>
                    <TableHead className="hidden md:table-cell">Subject</TableHead>
                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInquiries.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No inquiries found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredInquiries.map((inquiry) => (
                      <TableRow key={inquiry.id} className={inquiry.status === "new" ? "bg-blue-50/50 dark:bg-blue-950/20" : ""}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{inquiry.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {inquiry.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell max-w-[300px]">
                          <div className="truncate">{inquiry.subject}</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground">
                          {new Date(inquiry.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={`${statusColors[inquiry.status]} flex w-fit items-center gap-1`}
                          >
                            {statusIcons[inquiry.status]}
                            <span className="capitalize">{inquiry.status}</span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                  if (inquiry.status === "new") {
                                    updateInquiryStatus(inquiry.id, "read");
                                  }
                                }}
                              >
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View inquiry</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg">
                              <DialogHeader>
                                <DialogTitle>{inquiry.subject}</DialogTitle>
                                <DialogDescription>
                                  From {inquiry.name} ({inquiry.email})
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="rounded-lg bg-muted p-4">
                                  <p className="text-sm whitespace-pre-wrap">{inquiry.message}</p>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Received on {new Date(inquiry.createdAt).toLocaleString()}
                                </div>
                                {inquiry.status !== "archived" && (
                                  <div className="space-y-2">
                                    <Textarea
                                      placeholder="Write your reply..."
                                      value={replyText}
                                      onChange={(e) => setReplyText(e.target.value)}
                                      rows={4}
                                    />
                                    <div className="flex gap-2">
                                      <Button
                                        className="flex-1"
                                        onClick={() => {
                                          updateInquiryStatus(inquiry.id, "replied");
                                          setReplyText("");
                                        }}
                                        disabled={!replyText.trim()}
                                      >
                                        <Mail className="mr-2 h-4 w-4" />
                                        Send Reply
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() => updateInquiryStatus(inquiry.id, "archived")}
                                      >
                                        <Archive className="mr-2 h-4 w-4" />
                                        Archive
                                      </Button>
                                    </div>
                                  </div>
                                )}
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
