"use client";

interface LogoProps {
  readonly className?: string;
  readonly variant?: "dark" | "light";
}

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "#151418" : "#FBF5DD";

  return (
    <div className={`flex items-center gap-2 leading-none ${className}`}>
      <span 
        className="font-serif italic tracking-wide"
        style={{ 
          color: textColor,
          fontSize: "1.5rem",
          fontFamily: "'Georgia', 'Times New Roman', serif"
        }}
      >
        Cervecería
      </span>
      <span 
        className="font-bold tracking-tight"
        style={{ 
          color: "#99120f",
          fontSize: "1.75rem",
          fontFamily: "system-ui, -apple-system, sans-serif"
        }}
      >
        Burgos
      </span>
    </div>
  );
}
