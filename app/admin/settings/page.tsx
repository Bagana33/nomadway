"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Building2, Mail, Globe, Bell, Shield, Save } from "lucide-react";

export default function AdminSettingsPage() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    toast({
      title: "Тохиргоо хадгалагдлаа",
      description: "Өөрчлөлтүүд амжилттай хадгалагдлаа.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Тохиргоо</h1>
        <p className="text-muted-foreground">Вэбсайт болон бизнесийн тохиргоог удирдах</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="general" className="gap-2">
            <Building2 className="h-4 w-4" />
            <span className="hidden sm:inline">Ерөнхий</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="gap-2">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Холбоо барих</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Мэдэгдэл</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Аюулгүй байдал</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Ерөнхий тохиргоо</CardTitle>
              <CardDescription>
                Бизнесийн мэдээлэл, вэбсайтын тохиргоог удирдах
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Компанийн нэр</Label>
                  <Input id="companyName" defaultValue="NomadWay Аялал" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Вэбсайтын холбоос</Label>
                  <Input id="website" defaultValue="https://nomadway.travel" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Компанийн тайлбар</Label>
                <Textarea
                  id="description"
                  defaultValue="NomadWay Аялал нь Монголын онгон байгаль, нүүдэлчдийн баялаг соёлтой аялагчдыг холбосон жинхэнэ адал явдалт аяллуудыг санал болгодог."
                  rows={3}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currency">Үндсэн валют</Label>
                  <Input id="currency" defaultValue="USD" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Цагийн бүс</Label>
                  <Input id="timezone" defaultValue="Asia/Ulaanbaatar (UTC+8)" />
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Засварын горим</Label>
                  <p className="text-sm text-muted-foreground">
                    Зочдод түр хугацаанд сайтаа хаах
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Холбоо барих мэдээлэл</CardTitle>
              <CardDescription>
                Бизнесийн холбоо барих мэдээллийг шинэчлэх
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">И-мэйл хаяг</Label>
                  <Input id="email" type="email" defaultValue="info@nomadway.travel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Утасны дугаар</Label>
                  <Input id="phone" defaultValue="+976 7000 1234" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Бизнесийн хаяг</Label>
                <Textarea
                  id="address"
                  defaultValue="Энхтайвны өргөн чөлөө 17, 501 тоот&#10;Улаанбаатар, Монгол 14250"
                  rows={2}
                />
              </div>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-medium">Сошиал сувгууд</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input id="facebook" placeholder="https://facebook.com/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input id="instagram" placeholder="https://instagram.com/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter / X</Label>
                    <Input id="twitter" placeholder="https://x.com/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="youtube">YouTube</Label>
                    <Input id="youtube" placeholder="https://youtube.com/..." />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Мэдэгдлийн тохиргоо</CardTitle>
              <CardDescription>
                Мэдэгдэл хүлээн авах тохиргоо
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Шинэ захиалгын мэдэгдэл</Label>
                    <p className="text-sm text-muted-foreground">
                      Шинэ захиалга үүсэхэд мэдэгдэл авах
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Шинэ лавлагааны мэдэгдэл</Label>
                    <p className="text-sm text-muted-foreground">
                      Холбоо барих маягтаар хүсэлт ирэхэд мэдэгдэх
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Төлбөрийн мэдэгдэл</Label>
                    <p className="text-sm text-muted-foreground">
                      Төлбөр амжилттай/амжилтгүй үед мэдэгдэх
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Долоо хоногийн тайлан</Label>
                    <p className="text-sm text-muted-foreground">
                      Захиалга, орлогын долоо хоногийн тойм авах
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Аюулгүй байдлын тохиргоо</CardTitle>
              <CardDescription>
                Бүртгэлийн аюулгүй байдал, хандалтыг удирдах
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Нууц үг солих</h4>
                <div className="grid gap-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Одоогийн нууц үг</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Шинэ нууц үг</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Шинэ нууц үг баталгаажуулах</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="w-fit">Нууц үг шинэчлэх</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Хоёр шатлалт баталгаажуулалт</Label>
                    <p className="text-sm text-muted-foreground">
                      Бүртгэлдээ нэмэлт хамгаалалт нэмэх
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Сеансын хугацаа дуусах</Label>
                    <p className="text-sm text-muted-foreground">
                      30 минут идэвхгүй үед автоматаар гаргах
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={isSaving}>
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? "Хадгалж байна..." : "Бүх өөрчлөлтийг хадгалах"}
        </Button>
      </div>
    </div>
  );
}
