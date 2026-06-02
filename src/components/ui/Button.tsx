"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#f4a900] text-[#4a403a] hover:bg-[#e09500] focus:ring-[#f4a900]",
    secondary: "bg-[#c1666b] text-white hover:bg-[#a85559] focus:ring-[#c1666b]",
    outline:
      "border-2 border-[#4a403a] text-[#4a403a] hover:bg-[#4a403a] hover:text-white focus:ring-[#4a403a]",
    ghost: "text-[#4a403a] hover:bg-[#d4b896]/20 focus:ring-[#d4b896]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </Component>
  );
}
