import { motion } from "framer-motion";
import happy from "@/assets/codey-happy.png";
import thinking from "@/assets/codey-thinking.png";
import celebrating from "@/assets/codey-celebrating.png";
import { cn } from "@/lib/utils";

type Mood = "happy" | "thinking" | "celebrating";

const SRC: Record<Mood, string> = {
  happy,
  thinking,
  celebrating,
};

interface CodeyProps {
  mood?: Mood;
  size?: number;
  className?: string;
  bounce?: boolean;
}

export function Codey({ mood = "happy", size = 120, className, bounce = true }: CodeyProps) {
  return (
    <motion.img
      src={SRC[mood]}
      alt={`Codey the robot, ${mood}`}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      loading="lazy"
      className={cn("drop-shadow-lg select-none pointer-events-none", className)}
      animate={bounce ? { y: [0, -6, 0] } : undefined}
      transition={bounce ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" } : undefined}
    />
  );
}
