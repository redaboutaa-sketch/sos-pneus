import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;         // si true, on rend <a> au lieu de <button>
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;             // utile si asChild=true
};

export function Button({
  asChild,
  className = "",
  variant = "default",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors border focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const variants: Record<string, string> = {
    default: "bg-black text-white hover:opacity-90 border-black",
    outline: "bg-transparent text-black border hover:bg-gray-100",
    ghost: "bg-transparent text-black border-0 hover:bg-gray-100",
  };
  const sizes: Record<string, string> = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-11 px-5 text-base",
  };
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild && href) {
    return (
      <a href={href} className={cls} {...(props as any)}>
        {props.children}
      </a>
    );
  }
  return <button className={cls} {...props} />;
}

export default Button;
