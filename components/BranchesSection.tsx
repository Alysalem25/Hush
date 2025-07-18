'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const branches = [
  {
    id: 1,
    name: "Downtown",
    address: "123 Main Street, Downtown, City 12345",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 6:30 AM - 8:00 PM\nSat-Sun: 7:00 AM - 9:00 PM",
    image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Riverside",
    address: "456 River Drive, Riverside, City 12346",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 6:00 AM - 7:30 PM\nSat-Sun: 7:30 AM - 8:30 PM",
    image: "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Uptown",
    address: "789 High Street, Uptown, City 12347",
    phone: "(555) 345-6789",
    hours: "Mon-Fri: 6:30 AM - 8:30 PM\nSat-Sun: 7:00 AM - 9:30 PM",
    image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function BranchesSection() {
  return (
    <section id="branches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
            variants={fadeInUp}
          >
            Our Locations
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Find your nearest Hush location and experience our welcoming atmosphere
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl 
                       transform transition-all duration-300 hover:-translate-y-2 
                       border border-gray-100 overflow-hidden"
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={branch.image}
                  alt={`${branch.name} location`}
                  className="w-full h-full object-cover transform transition-transform 
                           duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.h3 
                  className="absolute bottom-4 left-4 text-white text-2xl font-semibold"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {branch.name}
                </motion.h3>
              </div>

              <motion.div 
                className="p-6 space-y-4"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  </motion.div>
                  <p className="text-gray-600">{branch.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  </motion.div>
                  <p className="text-gray-600">{branch.phone}</p>
                </div>

                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Clock className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div className="text-gray-600 whitespace-pre-line text-sm">
                    {branch.hours}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}