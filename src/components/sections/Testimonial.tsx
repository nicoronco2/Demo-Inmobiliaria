import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

/**
 * Testimonial — Tarjeta de testimonio presentacional.
 * Los testimonios de la demo son ficticios y no deben presentarse como
 * reseñas reales (ver `data/testimonials.ts`).
 */
export function Testimonial({
  quote,
  author,
  role,
  className,
}: TestimonialProps) {
  return (
    <Card
      className={cn(
        "h-full p-6 transition-[box-shadow] duration-300 hover:shadow-nova-card",
        className
      )}
    >
      <CardContent className="flex h-full flex-col p-0">
        <Quote
          className="mb-4 h-8 w-8 text-primary/40"
          aria-hidden="true"
          strokeWidth={1.5}
        />
        <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-foreground">
          “{quote}”
        </blockquote>
        <figcaption className="mt-5 border-t border-border/70 pt-4">
          <p className="font-display text-base font-medium text-foreground">
            {author}
          </p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </figcaption>
      </CardContent>
    </Card>
  );
}