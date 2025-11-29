import { Camera, Phone, MapPin, Mail } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Wedding Photography",
  "Videography",
  "Photo Prints",
  "Xerox Services",
  "Lamination",
  "Photo Albums",
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-2 mb-4"
              data-testid="link-footer-logo"
            >
              <Camera className="h-7 w-7 text-primary" />
              <span className="font-serif text-lg font-semibold text-foreground">
                Raviteja Studio
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner for professional photography, videography, and
              complete print solutions in Husnabad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <a
                  href="tel:+919490977486"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  data-testid="link-footer-phone"
                >
                  +91 94909 77486
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Hanamkonda Rd, Husnabad,
                  <br />
                  Telangana 505467
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <a
                  href="mailto:contact@ravitejastudio.com"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  data-testid="link-footer-email"
                >
                  contact@ravitejastudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Raviteja Digital Photo Studio. All rights reserved.
          </p>
          <a
            href="https://maps.app.goo.gl/LqPdhpE9RGysuP58A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm hover:underline"
            data-testid="link-google-maps"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}
