/**
 * Estadísticas de la demo NOVA.
 * Datos de presentación ficticios para la sección de métricas de la landing.
 */
export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "stat-001", value: "350+", label: "Propiedades gestionadas" },
  { id: "stat-002", value: "12", label: "Años de trayectoria" },
  { id: "stat-003", value: "98%", label: "Vecinos satisfechos" },
  { id: "stat-004", value: "45", label: "Zonas de cobertura" },
];