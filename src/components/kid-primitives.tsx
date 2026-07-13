import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

/* ---------- BigButton ---------- */

const VARIANTS = {
  sky: "bg-sky text-sky-foreground hover:brightness-105",
  sunshine: "bg-sunshine text-sunshine-foreground hover:brightness-105",
  coral: "bg-coral text-coral-foreground hover:brightness-105",
  mint: "bg-mint text-mint-foreground hover:brightness-105",
  indigo: "bg-indigo text-indigo-foreground hover:brightness-110",
  lavender: "bg-lavender text-lavender-foreground hover:brightness-105",
  outline:
    "bg-card text-foreground border-2 border-indigo/40 hover:border-indigo hover:bg-secondary",
} as const;

export type KidColor = keyof typeof VARIANTS;

interface BigButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: KidColor;
  size?: "md" | "lg";
}

export const BigButton = React.forwardRef<HTMLButtonElement, BigButtonProps>(
  ({ className, variant = "sky", size = "md", children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-2xl font-display font-semibold",
          "transition-all active:translate-y-0.5 active:shadow-none kid-shadow",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
          size === "lg" ? "px-8 py-4 text-lg" : "px-5 py-3 text-base",
          VARIANTS[variant],
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
BigButton.displayName = "BigButton";

/* ---------- KidCard ---------- */

interface KidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: KidColor;
  interactive?: boolean;
}

export function KidCard({ className, color, interactive, children, ...rest }: KidCardProps) {
  const tone =
    color === "sky"
      ? "bg-sky/10 border-sky/30"
      : color === "sunshine"
        ? "bg-sunshine/15 border-sunshine/40"
        : color === "coral"
          ? "bg-coral/10 border-coral/30"
          : color === "mint"
            ? "bg-mint/15 border-mint/40"
            : color === "indigo"
              ? "bg-indigo/10 border-indigo/30"
              : color === "lavender"
                ? "bg-lavender/20 border-lavender/40"
                : "bg-card border-border";

  return (
    <div
      className={cn(
        "rounded-3xl border-2 p-6 kid-shadow",
        tone,
        interactive && "cursor-pointer transition-transform hover:-translate-y-1",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ---------- ChoiceButton ---------- */

interface ChoiceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: "idle" | "correct" | "wrong" | "selected";
}

export function ChoiceButton({ className, state = "idle", children, ...rest }: ChoiceButtonProps) {
  const stateClass =
    state === "correct"
      ? "bg-mint/40 border-mint text-mint-foreground"
      : state === "wrong"
        ? "bg-coral/30 border-coral text-coral-foreground"
        : state === "selected"
          ? "bg-sky/20 border-sky"
          : "bg-card border-border hover:bg-secondary hover:border-sky/50";

  return (
    <button
      className={cn(
        "w-full text-left rounded-2xl border-2 px-5 py-4 font-body text-base",
        "transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40",
        "kid-shadow disabled:cursor-not-allowed",
        stateClass,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ---------- TeacherNoteCallout ---------- */

export function TeacherNoteCallout({ note }: { note: string }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-indigo/40 bg-indigo/5 p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-indigo font-semibold">
        <Sparkles className="h-3.5 w-3.5" /> Teacher Note
      </div>
      <p className="mt-1 text-sm text-foreground/80">{note}</p>
    </div>
  );
}

/* ---------- ProgressBar ---------- */

export function KidProgressBar({ value, max }: { value: number; max: number }) {
  const pct = Math.min(100, Math.max(0, (value / Math.max(1, max)) * 100));
  return (
    <div className="w-full h-3 rounded-full bg-secondary overflow-hidden border border-border">
      <motion.div
        className="h-full bg-gradient-to-r from-sky via-mint to-sunshine"
        initial={false}
        animate={{ width: `${pct}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </div>
  );
}
