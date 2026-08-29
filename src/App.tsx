import { Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/PublicLayout";
import { HomePage } from "@/pages/Home/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;