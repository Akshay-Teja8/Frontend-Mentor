import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const pricingCategories = [
  {
    title: "Photography & Videography",
    items: [
      { name: "Wedding Photography", price: "Contact for pricing" },
      { name: "Wedding Videography", price: "Contact for pricing" },
      { name: "Reception Coverage", price: "Contact for pricing" },
      { name: "Birthday Events", price: "Contact for pricing" },
      { name: "Corporate Events", price: "Contact for pricing" },
      { name: "Portrait Sessions", price: "Contact for pricing" },
    ],
  },
  {
    title: "Photo Prints & Albums",
    items: [
      { name: "Passport Size Photos", price: "Contact for pricing" },
      { name: "4x6 Photo Prints", price: "Contact for pricing" },
      { name: "Photo Size Conversions", price: "Contact for pricing" },
      { name: "Wedding Albums", price: "Contact for pricing" },
      { name: "Custom Photo Albums", price: "Contact for pricing" },
      { name: "Photo Frames", price: "Contact for pricing" },
    ],
  },
  {
    title: "Print & Document Services",
    items: [
      { name: "Black & White Xerox", price: "Contact for pricing" },
      { name: "Color Xerox", price: "Contact for pricing" },
      { name: "Color Printing", price: "Contact for pricing" },
      { name: "ID Card Lamination", price: "Contact for pricing" },
      { name: "A4 Lamination", price: "Contact for pricing" },
      { name: "Legal Paper Lamination", price: "Contact for pricing" },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competitive pricing for all our services. Contact us for detailed quotes
            and custom packages tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCategories.map((category) => (
            <Card
              key={category.title}
              className="border-card-border"
              data-testid={`card-pricing-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="font-serif text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-sm text-muted-foreground italic">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+919490977486">
                  <Button className="w-full" variant="outline" data-testid={`button-pricing-contact-${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom package? We offer tailored solutions for your specific requirements.
          </p>
          <a href="tel:+919490977486">
            <Button size="lg" data-testid="button-call-for-custom">
              <Phone className="h-4 w-4 mr-2" />
              Call for Custom Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
