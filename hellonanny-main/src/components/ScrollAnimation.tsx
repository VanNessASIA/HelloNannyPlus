"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType =
  | "fade-in"
  | "fade-in-left"
  | "fade-in-right"
  | "scale-in"
  | "stagger";

interface ScrollAnimationProps {
  children: React.ReactNode;
  type?: AnimationType;
  className?: string;
  delay?: number;
}

const classMap: Record<AnimationType, string> = {
  "fade-in": "scroll-fade-in",
  "fade-in-left": "scroll-fade-in-left",
  "fade-in-right": "scroll-fade-in-right",
  "scale-in": "scroll-scale-in",
  stagger: "stagger-children",
};

export default function ScrollAnimation({
  children,
  type = "fade-in",
  className = "",
  delay = 0,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`${classMap[type]} ${isVisible ? "visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
