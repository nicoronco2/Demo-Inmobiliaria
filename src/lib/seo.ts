import { useEffect } from "react";

/**
 * Hook ligero de SEO para Single Page Application.
 * Actualiza el <title> y la meta description del documento al montar la página.
 * No introduce dependencias (sin react-helmet).
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);
}

export interface PageMeta {
  title: string;
  description: string;
}

/** Metadata base del sitio público. */
export const siteMeta: PageMeta = {
  title: "NOVA Inmobiliaria — Propiedades en Córdoba",
  description:
    "NOVA Inmobiliaria: comprá, alquilá o vendé propiedades en Córdoba con asesoramiento premium. Demo ilustrativa.",
};