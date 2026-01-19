import Link from "next/link"
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { name: "Бидний тухай", href: "/about" },
    { name: "Манай баг", href: "/about#team" },
    { name: "Ажлын байр", href: "/contact" },
    { name: "Холбоо барих", href: "/contact" },
  ],
  tours: [
    { name: "Бүх аялал", href: "/tours" },
    { name: "Говь цөл", href: "/tours/gobi-desert-adventure" },
    { name: "Нүүдэлчдийн соёл", href: "/tours/nomadic-culture-tour" },
    { name: "Уул ба нуур", href: "/tours/mountain-lake-expedition" },
  ],
  support: [
    { name: "Асуулт хариулт", href: "/faq" },
    { name: "Захиалгын бодлого", href: "/faq#захиалга" },
    { name: "Аяллын даатгал", href: "/faq#аюулгүй-байдал" },
    { name: "Визийн мэдээлэл", href: "/faq#ерөнхий" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Mountain className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">NomadWay</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Аялал</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Монголыг нээгээрэй. Ухаалгаар аял.
            </p>
            <p className="text-sm text-muted-foreground">
              2015 оноос хойш Монголын жинхэнэ аяллын таны найдвартай хамтрагч.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Фэйсбүүк</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Инстаграм</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">Ютуб</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Компани</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Аяллууд</h3>
            <ul className="space-y-2">
              {footerLinks.tours.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Холбоо барих</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Энхтайвны өргөн чөлөө 15, Улаанбаатар, Монгол
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a
                  href="tel:+97699123456"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  +976 99 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a
                  href="mailto:info@nomadway.mn"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  info@nomadway.mn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} NomadWay Аялал. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Нууцлалын бодлого
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Үйлчилгээний нөхцөл
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
