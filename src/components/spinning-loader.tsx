"use client";

import { motion } from "framer-motion";

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="border-4 border-gray-200 border-opacity-25 rounded-full h-12 w-12"
        style={{ borderTopColor: "#3498db" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          loop: Infinity,
          ease: "linear",
        }}></motion.div>
    </div>
  );
};
