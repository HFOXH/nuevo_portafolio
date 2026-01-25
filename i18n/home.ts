export const homeContent = {
  es: {
    intro: "Soy",
    name: "Santiago Cárdenas",
    download: "Descargar CV",
  },
  en: {
    intro: "I am",
    name: "Santiago Cárdenas",
    download: "Download CV",
  },
  de: {
    intro: "Ich bin",
    name: "Santiago Cárdenas",
    download: "Lebenslauf herunterladen",
  },
  fr: {
    intro: "Je suis",
    name: "Santiago Cárdenas",
    download: "Télécharger le CV",
  },
  kr: {
    intro: "나는",
    name: "Santiago Cárdenas",
    download: "이력서 다운로드",
  },
} as const;

export type Lang = keyof typeof homeContent;
