export const mainInformationContent = {
  es: {
    stats: [
      { value: "+5", label: "Años de\nExperiencia" },
      { value: "+37", label: "Proyectos\nCompletados" },
      { value: "+22", label: "Tecnologías\nUtilizadas" },
    ],
  },
  en: {
    stats: [
      { value: "+5", label: "Years of\nExperience" },
      { value: "+37", label: "Projects\nCompleted" },
      { value: "+22", label: "Technologies\nUsed" },
    ],
  },
} as const;

export type Lang = keyof typeof mainInformationContent;
