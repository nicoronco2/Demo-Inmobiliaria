import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  /** Etiqueta corta en mayúsculas sobre el título. */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * SectionHeading — Encabezado de sección reutilizable del design system.
 * Presentacional: recibe texto por props y aplica la jerarquía tipográfica NOVA
 * (eyebrow + título serif + descripción).
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
            centered && "text-center"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}