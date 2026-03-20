import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className={cn("text-3xl sm:text-4xl font-bold tracking-tight", light ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg max-w-2xl", centered && "mx-auto", light ? "text-silver" : "text-gray-500")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
