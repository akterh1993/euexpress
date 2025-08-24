"use client";
import { motion } from "framer-motion";
import { FaUsers, FaShoppingBag, FaGlobe, FaRobot } from "react-icons/fa";

export default function ValuesSection() {
  const values = [
    { icon: <FaUsers />, title: "Customer First", desc: "We prioritize customer satisfaction above all else." },
    { icon: <FaShoppingBag />, title: "Smart Commerce", desc: "AI-driven shopping experience with personalization." },
    { icon: <FaGlobe />, title: "Global Reach", desc: "Connecting vendors and customers across the globe." },
    { icon: <FaRobot />, title: "AI Innovation", desc: "Empowered by intelligent automation and machine learning." },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {values.map((value, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center"
          >
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
