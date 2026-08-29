import type { Stat } from "@/data/stats";
import { cn } from "@/lib/utils";

export interface StatsProps {
  stats: Stat[];
  className?: string;
}

/**
 * Stats — Grilla de estadísticas reutilizable.
 * Presentacional: recibe los datos por props y los distribuye responsive.
 */
export function Stats({ stats, className }: StatsProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4",
        className
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="border-l-2 border-primary/40 pl-4 text-center sm:text-left"
        >
          <dt className="order-2 mt-1 text-sm text-muted-foreground">
            {stat.label}
          </dt>
          <dd className="order-1 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}