'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Navigation from './navigation';

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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          alt="Hush Café Interior"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation Component */}
      <Navigation />

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-light mb-6 leading-tight"
          variants={fadeInUp}
        >
          Welcome to{' '}
          <motion.span 
            className="text-amber-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hush
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Where every sip tells a story. Experience the perfect blend of artisan coffee, 
          fresh pastries, and cozy atmosphere.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeInUp}
        >
          <motion.a
            href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full 
                     font-semibold text-lg transition-colors duration-200 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Explore Menu
          </motion.a>
          
          <motion.a
            href="#about"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 
                     px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Our Story
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div> */}
      {/* </motion.div> */}

      {/* Floating Elements */}
      {/* <motion.div 
        className="absolute top-1/4 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-16 w-16 h-16 bg-white/10 rounded-full blur-lg"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -8, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div> */}
    </section>
  );
}