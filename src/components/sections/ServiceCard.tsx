import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  ctaLabel: string;
  className?: string;
  onCta?: () => void;
}

/**
 * ServiceCard — Tarjeta presentacional de un servicio (Comprar, Alquilar,
 * Vender, Invertir). Recibe todos los datos por props.
 */
export function ServiceCard({
  title,
  description,
  icon: Icon,
  ctaLabel,
  className,
  onCta,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group h-full p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-nova-lift",
        className
      )}
    >
      <CardContent className="flex h-full flex-col p-0">
        <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h3 className="font-display text-xl font-medium tracking-tight">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <button
          type="button"
          onClick={onCta}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </CardContent>
    </Card>
  );
}