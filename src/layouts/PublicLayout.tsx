import { Outlet } from "react-router-dom";

/**
 * Layout público (Etapa 1 - Landing).
 * En este sprint solo provee la estructura base: Navbar/Footer se integrarán
 * cuando se desarrolle la landing (Sprint siguiente).
 */
export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}