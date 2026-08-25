export function LogoIcon({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "h-7 w-7 text-xs rounded-lg",
    md: "h-9 w-9 text-base rounded-xl",
    lg: "h-10 w-10 text-lg rounded-xl",
  };

  const selectedSize =
    typeof size === "string"
      ? sizeClasses[size] || sizeClasses.md
      : "h-9 w-9 text-base rounded-xl";

  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold ${selectedSize} ${className}`}
    >
      $
    </div>
  );
}

export function BrandLogo({ size = "md", showText = true, className = "" }) {
  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <div className={`flex items-center gap-2.5 shrink-0 group ${className}`}>
      <LogoIcon size={size} />
      {showText && (
        <span
          className={`font-bold tracking-tight text-white ${
            textSizes[size] || "text-lg"
          }`}
        >
          Spend<span className="text-emerald-400">Wise</span>
        </span>
      )}
    </div>
  );
}

export default BrandLogo;
