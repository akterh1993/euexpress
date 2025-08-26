"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/banner/banner.png",
  "/images/banner/banner1.png",
  "/images/banner/banner2.jpg",
  "/images/banner/banner3.jpg",
  "/images/banner/banner4.png",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            Discover Amazing Products <br /> from Top Vendors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Shop from multiple vendors in one place. Fast, secure & reliable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Shop Now
            </button>
          </motion.div>
        </div>

        {/* Hero Carousel Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 relative h-[400px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`Hero ${current + 1}`}
                fill
                className="object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}



// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-blue-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center">
//         {/* Text Content */}
//         <div className="md:w-1/2 space-y-6">
//           <motion.h1
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold text-gray-800"
//           >
//             Discover Amazing Products <br /> from Top Vendors
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-gray-600 text-lg"
//           >
//             Shop from multiple vendors in one place. Fast, secure & reliable.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
//               Shop Now
//             </button>
//           </motion.div>
//         </div>

//         {/* Hero Image */}
//         <div className="md:w-1/2 mb-8 md:mb-0 relative">
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/images/banner/banner.png"
//               alt="Hero"
//               width={500}
//               height={400}
//               className="rounded-xl shadow-xl"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
