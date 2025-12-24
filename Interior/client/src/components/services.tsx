import { Palette, Compass, Sofa, Ruler } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Interior Designing",
    description: "Creative and functional interior design solutions tailored to your lifestyle and aesthetic preferences.",
  },
  {
    icon: Compass,
    title: "Wood & Electric Works",
    description: "Professional carpentry and electrical installations with attention to safety and quality.",
  },
  {
    icon: Sofa,
    title: "Modular Kitchen",
    description: "Custom-designed modular kitchens that maximize space and efficiency with modern aesthetics.",
  },
  {
    icon: Ruler,
    title: "Modular Wardrobes",
    description: "Smart wardrobe solutions that optimize storage while maintaining elegant design principles.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase block mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Designing spaces that <span className="italic text-primary">inspire</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            We offer comprehensive design services tailored to your unique needs, ensuring a seamless journey from concept to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent group hover:bg-background transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
