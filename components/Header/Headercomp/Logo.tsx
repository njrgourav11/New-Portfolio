import React from "react";
import { motion } from "framer-motion";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: props.finishedLoading ? 0 : 8,
          duration: 0,
        }}
        className="flex justify-center items-center"
      >
        <motion.span
          initial={{ x: 1 }}
          className="text-3xl font-Header text-AAsecondary" // Increased font size to 3xl
        >
          Gourav.
        </motion.span>
      </motion.div>
    </>
  );
}
