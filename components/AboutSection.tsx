'use client';

import { motion } from 'framer-motion';
import { Coffee, Heart, Users } from 'lucide-react';

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

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-orange-50 scroll-smooth">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
                variants={fadeInUp}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed mb-6"
                variants={fadeInUp}
              >
                Founded in 2018, Hush began as a simple dream to create a sanctuary where people could escape the noise of everyday life. We believe that great coffee is more than just a beverage—its a moment of pause, a connection, a small luxury that makes life richer.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Our expert baristas work with carefully selected beans from sustainable farms around the world, ensuring every cup delivers not just exceptional flavor, but also supports ethical farming practices.
              </motion.p>
            </motion.div>

            {/* Values */}
            <motion.div 
              className="grid sm:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Coffee className="w-8 h-8 text-amber-600" />
                </motion.div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality</h3>
                <p className="text-sm text-gray-600">Premium beans, expertly roasted</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Heart className="w-8 h-8 text-amber-600" />
                </motion.div>
                <h3 className="font-semibold text-gray-800 mb-2">Passion</h3>
                <p className="text-sm text-gray-600">Made with love and care</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="w-8 h-8 text-amber-600" />
                </motion.div>
                <h3 className="font-semibold text-gray-800 mb-2">Community</h3>
                <p className="text-sm text-gray-600">Bringing people together</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Coffee preparation"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            {/* <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-2xl -z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}