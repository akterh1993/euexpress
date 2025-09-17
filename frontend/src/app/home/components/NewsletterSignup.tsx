"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center drop-shadow-lg"
      >
        Join Our Newsletter
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl"
      >
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 rounded-full w-full sm:w-auto flex-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Subscribe
        </button>
      </motion.form>
    </section>
  );
}
