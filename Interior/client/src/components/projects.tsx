import { motion } from "framer-motion";
import kitchenImg from "@assets/generated_images/modern_kitchen_design.png";
import bedroomImg from "@assets/generated_images/elegant_master_bedroom.png";
import bathroomImg from "@assets/generated_images/luxury_bathroom_spa.png";
import livingImg from "@assets/generated_images/luxury_living_room_hero_image.png"; // Reusing hero for variety

const projects = [
  {
    id: 1,
    title: "Penthouse Residence",
    category: "Residential",
    image: livingImg,
    size: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Minimalist Kitchen",
    category: "Kitchen",
    image: kitchenImg,
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Master Suite",
    category: "Bedroom",
    image: bedroomImg,
    size: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Zen Spa",
    category: "Bathroom",
    image: bathroomImg,
    size: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase block mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Selected Works</h2>
          <div className="w-24 h-1 bg-primary mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-gray-100 ${project.size}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-6 text-center">
                <span className="text-sm font-light tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif italic translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
