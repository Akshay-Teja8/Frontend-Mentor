import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/wedding_couple_golden_hour.png";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Raviteja Digital
          <span className="block text-primary mt-2">Photo Studio</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Capturing life's precious moments with professional photography,
          videography, and complete print solutions
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("#services")}
            className="min-w-[180px]"
            data-testid="button-view-services"
          >
            <Play className="h-4 w-4 mr-2" />
            View Services
          </Button>
          <a href="tel:+919490977486">
            <Button
              size="lg"
              variant="outline"
              className="min-w-[180px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-contact-hero"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">5000+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">1000+</div>
            <div className="text-sm">Events Covered</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
