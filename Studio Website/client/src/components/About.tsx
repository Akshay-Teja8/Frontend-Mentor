import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Heart, Users } from "lucide-react";
import studioImage from "@assets/generated_images/photo_studio_interior.png";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Heart, value: "1000+", label: "Events Covered" },
  { icon: Award, value: "100%", label: "Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Our Studio
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Raviteja Digital Photo Studio has been serving the Husnabad community
              for over 15 years. We take pride in capturing your most precious moments
              with professional expertise and a personal touch.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From stunning wedding photography and event videography to everyday
              document services like xerox, printing, and lamination - we are your
              one-stop solution for all photography and printing needs.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art equipment and experienced team ensure that every
              photo, every print, and every service meets the highest standards of
              quality.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="border-card-border" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-4 text-center">
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={studioImage}
                alt="Raviteja Digital Photo Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg hidden md:block">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
