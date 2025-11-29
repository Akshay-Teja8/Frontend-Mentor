import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

import weddingImage from "@assets/generated_images/wedding_couple_golden_hour.png";
import familyImage from "@assets/generated_images/family_portrait_professional.png";
import birthdayImage from "@assets/generated_images/birthday_celebration_photo.png";
import receptionImage from "@assets/generated_images/wedding_reception_venue.png";
import studioImage from "@assets/generated_images/photo_studio_interior.png";
import passportImage from "@assets/generated_images/passport_photo_professional.png";

const galleryItems = [
  { id: 1, src: weddingImage, category: "Wedding", title: "Wedding Photography" },
  { id: 2, src: familyImage, category: "Portrait", title: "Family Portrait" },
  { id: 3, src: birthdayImage, category: "Events", title: "Birthday Celebration" },
  { id: 4, src: receptionImage, category: "Wedding", title: "Reception Venue" },
  { id: 5, src: studioImage, category: "Studio", title: "Our Studio" },
  { id: 6, src: passportImage, category: "ID Photos", title: "Passport Photos" },
];

const categories = ["All", "Wedding", "Portrait", "Events", "Studio", "ID Photos"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-card" data-testid="section-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of captured moments and professional work
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item)}
              data-testid={`gallery-item-${item.id}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  <ZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            data-testid="button-close-lightbox"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold text-lg">{selectedImage.title}</h3>
                <p className="text-white/80 text-sm">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
