import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919966665438" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-[#25D366]/20 transition-all hover:scale-110"
        >
          <MessageCircle size={28} />
        </Button>
      </a>
    </div>
  );
}
