"use client";
import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <motion.h1
      className="text-[60px] font-extrabold text-center"
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.7, ease: "easeOut" }}
    >
      Sushmitha Pandith
    </motion.h1>
  );
}
