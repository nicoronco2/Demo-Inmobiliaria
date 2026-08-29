import { cn } from "@/lib/utils";

/**
 * Skeleton — Placeholder de carga (shadcn/ui) adaptado al DS NOVA.
 * Se usa para preparar estados de carga futuros cuando las propiedades
 * provengan de una API (Etapa 2). Presentacional.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted-foreground/15",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };