import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:bg-white/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}