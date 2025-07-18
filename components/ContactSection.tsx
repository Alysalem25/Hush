'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

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

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-light text-gray-800 mb-8"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              variants={fadeInUp}
            >
              We'd love to hear from you. Visit us, call us, or send us a message.
            </motion.p>

            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-start gap-4"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Phone className="w-6 h-6 text-amber-600" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                  <p className="text-gray-600">(555) 123-HUSH</p>
                  <p className="text-gray-600">(555) 123-4874</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="w-6 h-6 text-amber-600" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">hello@hushcafe.com</p>
                  <p className="text-gray-600">info@hushcafe.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Clock className="w-6 h-6 text-amber-600" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 6:30 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-6 h-6 text-amber-600" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600">123 Main Street</p>
                  <p className="text-gray-600">Downtown, City 12345</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Send us a message
            </motion.h3>
            
            <motion.form 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeInUp}>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <motion.input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="John"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <motion.input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Doe"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold 
                         py-3 px-6 rounded-lg transition-colors duration-200"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}