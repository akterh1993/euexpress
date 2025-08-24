"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        
        {/* Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-900"/>
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-900"/>
            <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-900"></textarea>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">📍 Our Office</h3>
            <p className="text-gray-600 dark:text-gray-400">123 Business Street, Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">📞 Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+880 123 456 789</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">📧 Email</h3>
            <p className="text-gray-600 dark:text-gray-400">support@euexpress.co</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
