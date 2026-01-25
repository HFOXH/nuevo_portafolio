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
  kr: {
    stats: [
      { value: "+5", label: "년의\n경험" },
      { value: "+37", label: "완료된\n프로젝트" },
      { value: "+22", label: "사용한\n기술" },
    ]
  }
} as const;

export type Lang = keyof typeof mainInformationContent;
