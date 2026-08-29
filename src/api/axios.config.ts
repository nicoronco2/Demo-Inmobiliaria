import axios from "axios";

/**
 * Instancia de Axios centralizada.
 * Regla de arquitectura: las páginas y componentes NO deben llamar a Axios
 * directamente; el acceso a datos se resuelve a través de repositories.
 * Esta instancia queda preparada para cuando exista una REST API.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "/api",
  headers: {
    "Content-Type": "application/json",
  },
});