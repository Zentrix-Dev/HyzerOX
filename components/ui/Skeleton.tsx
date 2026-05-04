"use client";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-elevated overflow-hidden relative rounded-md ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1.5, repeatType: "mirror" }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-surface/40 to-transparent z-10"
        animate={{ translateX: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </motion.div>
  );
}
