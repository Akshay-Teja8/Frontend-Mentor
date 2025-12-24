import logoImage from "@assets/generated_images/professional_interior_design_logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Interiors Vision Logo" className="w-12 h-12 object-contain" />
              <h2 className="font-serif text-3xl font-bold">INTERIORS<span className="text-primary">VISION</span></h2>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Transforming spaces through intelligent design. We believe simplicity beats complexity in creating beautiful, functional interiors.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Legal</h3>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© 2024 Interiors Vision. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="tel:+919966665438" className="hover:text-white transition-colors">+91 99666 65438</a>
            <span>•</span>
            <a href="mailto:interiorsvision21@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
