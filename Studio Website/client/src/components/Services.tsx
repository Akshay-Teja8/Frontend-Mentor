import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Video,
  Printer,
  Image,
  FileText,
  BookOpen,
  CreditCard,
  Scan,
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Videography",
    description:
      "Professional videography for weddings, receptions, birthdays, and all special functions. Cinematic quality recordings of your precious moments.",
    features: ["Marriages", "Receptions", "Birthdays", "Corporate Events"],
  },
  {
    icon: Camera,
    title: "Photoshoots",
    description:
      "Studio and outdoor photoshoots for individuals, couples, and families. Portrait sessions with professional lighting and backdrops.",
    features: ["Portraits", "Family Photos", "Pre-wedding", "Studio Sessions"],
  },
  {
    icon: Image,
    title: "Photo Prints",
    description:
      "High-quality photo prints in various sizes. From passport-sized photos for official documents to 4x6 prints for your albums.",
    features: ["Passport Size", "4x6 Photos", "Custom Sizes", "Photo Conversions"],
  },
  {
    icon: BookOpen,
    title: "Photo Albums",
    description:
      "Beautiful custom photo albums to preserve your memories. Premium quality binding with various cover options.",
    features: ["Wedding Albums", "Event Albums", "Custom Designs", "Premium Quality"],
  },
  {
    icon: Printer,
    title: "Color Printing",
    description:
      "Professional color printing services for documents, photos, posters, and more. Vibrant colors and sharp quality.",
    features: ["Documents", "Posters", "Brochures", "ID Cards"],
  },
  {
    icon: Scan,
    title: "Xerox Services",
    description:
      "Quick and reliable xerox and photocopy services for all your document needs. Black & white and color options available.",
    features: ["B&W Copies", "Color Copies", "Bulk Printing", "Document Scanning"],
  },
  {
    icon: CreditCard,
    title: "Lamination",
    description:
      "Protect your important documents and photos with our lamination service. Available for ID cards to A4 and legal size papers.",
    features: ["ID Cards", "Certificates", "A4 Documents", "Legal Papers"],
  },
  {
    icon: FileText,
    title: "Document Services",
    description:
      "Complete document solutions including scanning, printing, and formatting. Professional assistance for all your paperwork needs.",
    features: ["Scanning", "Formatting", "Applications", "Forms"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From capturing your special moments to professional print solutions,
            we offer comprehensive services for all your photography and document needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover-elevate overflow-visible border-card-border"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
