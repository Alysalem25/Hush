'use client';

import { motion } from 'framer-motion';
import MenuCard from './MenuCard';

const menuItems = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Rich, full-bodied espresso with notes of dark chocolate and caramel",
    price: "$4.50",
    category: "Coffee",
    image: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Vanilla Latte",
    description: "Smooth espresso with steamed milk and Madagascar vanilla",
    price: "$5.75",
    category: "Coffee",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Croissant",
    description: "Buttery, flaky pastry baked fresh daily",
    price: "$3.25",
    category: "Pastry",
    image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name: "Avocado Toast",
    description: "Multigrain bread with smashed avocado, cherry tomatoes, and herbs",
    price: "$8.95",
    category: "Food",
    image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    name: "Matcha Latte",
    description: "Premium ceremonial grade matcha with steamed oat milk",
    price: "$6.25",
    category: "Coffee",
    image: "https://images.pexels.com/photos/4226897/pexels-photo-4226897.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    name: "Chocolate Muffin",
    description: "Double chocolate muffin with Belgian dark chocolate chips",
    price: "$4.50",
    category: "Pastry",
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-white">
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
            Our Menu
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Carefully crafted beverages and fresh pastries made with the finest ingredients
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}