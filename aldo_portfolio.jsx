import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AldoPortfolio() {
  const [language, setLanguage] = useState("es");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"));
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const content = {
    es: {
      header: "Aldo Hugo Larrain – Project Manager & ERP Specialist",
      about:
        "Soy Project Manager con experiencia en implementaciones de Odoo y SAP, formación en inteligencia artificial aplicada a la gestión, y pasión por la documentación, automatización y mejora continua.",
      experience: "Experiencia",
      projects: "Proyectos Destacados",
      skills: "Habilidades",
      education: "Educación y Certificaciones",
      contact: "Contacto",
    },
    en: {
      header: "Aldo Hugo Larrain – Project Manager & ERP Specialist",
      about:
        "I am a Project Manager with experience in Odoo and SAP implementations, training in AI applied to management, and a strong focus on documentation, automation, and continuous improvement.",
      experience: "Experience",
      projects: "Highlighted Projects",
      skills: "Skills",
      education: "Education & Certifications",
      contact: "Contact",
    },
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="flex justify-end p-4 gap-2">
        <Button variant="outline" onClick={toggleLanguage}>
          {language === "es" ? "EN" : "ES"}
        </Button>
        <Button variant="outline" onClick={toggleDarkMode}>
          {darkMode ? "Light" : "Dark"}
        </Button>
      </div>

      <main className="max-w-5xl mx-auto p-6 space-y-12">
        <section>
          <h1 className="text-3xl font-bold mb-2">{content[language].header}</h1>
          <p className="text-lg leading-relaxed">{content[language].about}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{content[language].experience}</h2>
          {/* Aquí se puede mapear la experiencia completa como tarjetas */}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{content[language].projects}</h2>
          {/* Aquí se muestran los proyectos destacados */}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{content[language].skills}</h2>
          {/* Lista de habilidades: técnicas, blandas, herramientas */}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{content[language].education}</h2>
          {/* Maestría, certificaciones, cursos */}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{content[language].contact}</h2>
          <p>aldo.larrain@gmail.com</p>
          <p>LinkedIn: https://linkedin.com/in/aldo-larrain</p>
        </section>
      </main>
    </div>
  );
}
