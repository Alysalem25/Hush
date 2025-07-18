'use client';

import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

interface MenuCardProps {
  item: MenuItem;
}

const cardVariants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div 
      className="group perspective-1000"
      variants={cardVariants}
    >
      <motion.div 
        className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                     transform transition-all duration-500 ease-out
                     hover:-translate-y-3 hover:scale-105 hover:rotate-1
                     border border-gray-100 overflow-hidden
                     preserve-3d"
        whileHover={{ 
          y: -12,
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
      >
        
        {/* Category Badge */}
        <motion.div 
          className="absolute top-4 right-4 z-10 bg-amber-100 text-amber-800 
                       px-3 py-1 rounded-full text-sm font-medium"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {item.category}
        </motion.div>

        {/* Image with 3D effect */}
        <div className="relative overflow-hidden rounded-t-2xl h-48">
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transform transition-transform duration-700
                     group-hover:scale-110 group-hover:rotate-2"
            whileHover={{ scale: 1.15, rotate: 3 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 relative z-10 bg-white">
          <div className="flex justify-between items-start">
            <motion.h3 
              className="text-xl font-semibold text-gray-800 group-hover:text-amber-700 
                         transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.name}
            </motion.h3>
            <motion.span 
              className="text-2xl font-bold text-amber-600"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item.price}
            </motion.span>
          </div>
          
          <motion.p 
            className="text-gray-600 text-sm leading-relaxed"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.description}
          </motion.p>

          {/* Hover overlay effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 
                         rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        {/* 3D shadow effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-400/20 
                       rounded-2xl transform translate-y-2 translate-x-1 -z-10 
                       blur-sm"
          whileHover={{ 
            y: 8, 
            x: 4,
            transition: { duration: 0.3 }
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}