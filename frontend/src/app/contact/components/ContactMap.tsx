"use client";
import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="relative h-[400px] w-full">
      <motion.iframe
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src="https://www.google.com/maps/place/Berlin,+Germany/@52.5068041,13.0950867,10z/data=!4m15!1m8!3m7!1s0x47a84e373f035901:0x42120465b5e3b70!2sBerlin,+Germany!3b1!8m2!3d52.5200066!4d13.404954!16zL20vMDE1NnE!3m5!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954!16zL20vMDE1NnE?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
        className="w-full h-full border-0 rounded-lg shadow-lg"
        allowFullScreen={true}
        loading="lazy"
      ></motion.iframe>
    </section>
  );
}
