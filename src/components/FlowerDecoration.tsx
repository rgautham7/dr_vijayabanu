"use client";

import { motion } from "framer-motion";

interface FlowerDecorationProps {
  clockwise?: boolean;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function FlowerDecoration({
  clockwise = true,
  size = 100,
  color = "#D8B79B",
  strokeWidth = 2.2,
}: FlowerDecorationProps) {
  const petals = [
    "M50 50 C50 32 43 20 50 10 C57 20 50 32 50 50",
    "M50 50 C67 45 79 33 88 40 C80 52 67 54 50 50",
    "M50 50 C61 65 66 80 58 90 C47 84 47 70 50 50",
    "M50 50 C39 65 34 80 42 90 C53 84 53 70 50 50",
    "M50 50 C33 45 21 33 12 40 C20 52 33 54 50 50",
  ];

  return (
    <motion.div
      initial={{ rotate: 0 }}
       whileInView={{ rotate: clockwise ? 360 : -360 }}
        viewport={{ once: true, amount: 0.6 }}
      transition={{
        delay: 3,
        duration: 18,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        width: size,
        height: size,
      }}
    >
    
        <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        >
        {Array.from({ length: 5 }).map((_, i) => (
            <motion.g
            key={i}
            transform={`rotate(${i * 72} 50 50)`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: i * 0.45,
            }}
            >
            <motion.path
                d="
                M50 50
                C46 34 46 18 50 10
                C54 18 54 34 50 50
                "
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{
                    pathLength: 1,
                    opacity: 1,
                }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                duration: 0.45,
                delay: i * 0.45,
                ease: "easeInOut",
                }}
            />
            </motion.g>
        ))}

        <motion.circle
            cx="50"
            cy="50"
            r="4"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            initial={{
            pathLength: 0,
            opacity: 0,
            }}
            whileInView={{
                pathLength:1,
                opacity:1
            }}
            viewport={{ once:true, amount:0.6 }}
            transition={{
            duration: 0.4,
            delay: 2.35,
            }}
        />
        </svg>

    </motion.div>
  );
}