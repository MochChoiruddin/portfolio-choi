"use client";

import { motion } from "framer-motion";
import { useMotionPreference } from "@/components/useMotionPreference";

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useMotionPreference();
  return (
    <motion.div
      className={className}
      initial={false}
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduced ? undefined : "visible"}
      variants={{
        visible: { opacity: [0.68, 1], y: [12, 0] },
      }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.48, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
