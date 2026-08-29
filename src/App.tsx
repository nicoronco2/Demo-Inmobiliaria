import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "motion/react";

import { PublicLayout } from "@/layouts/PublicLayout";
import { HomePage } from "@/pages/Home/HomePage";
import { PropertiesPage } from "@/pages/Properties/PropertiesPage";
import { PropertyDetailPage } from "@/pages/PropertyDetail/PropertyDetailPage";
import { ComprarPage } from "@/pages/Comprar/ComprarPage";
import { AlquilarPage } from "@/pages/Alquilar/AlquilarPage";
import { SellPage } from "@/pages/Sell/SellPage";
import { AboutPage } from "@/pages/About/AboutPage";
import { ContactPage } from "@/pages/Contact/ContactPage";
import { DesignSystemPage } from "@/pages/DesignSystem/DesignSystemPage";

/** Restablece el scroll al inicio al navegar (UX). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="propiedades" element={<PropertiesPage />} />
          <Route path="propiedades/:slug" element={<PropertyDetailPage />} />
          <Route path="comprar" element={<ComprarPage />} />
          <Route path="alquilar" element={<AlquilarPage />} />
          <Route path="vender" element={<SellPage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="design-system" element={<DesignSystemPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}

export default App;