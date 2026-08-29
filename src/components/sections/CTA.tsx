import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CTAProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryAction?: () => void;
  secondaryLabel?: string;
  secondaryAction?: () => void;
  className?: string;
}

/**
 * CTA — Llamado a la acción reutilizable.
 * Presentacional: recibe título, descripción y acciones por props. Se usa como
 * cierre de secciones en la landing.
 */
export function CTA({
  title,
  description,
  primaryLabel,
  primaryAction,
  secondaryLabel,
  secondaryAction,
  className,
}: CTAProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-primary/20 bg-primary px-6 py-12 text-center shadow-nova-lift sm:px-12 sm:py-16",
        className
      )}
    >
      <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight text-primary-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
          {description}
        </p>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {primaryLabel ? (
          <Button onClick={primaryAction} variant="brand">
            {primaryLabel}
          </Button>
        ) : null}
        {secondaryLabel ? (
          <Button
            onClick={secondaryAction}
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}