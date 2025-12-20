export const typedContent = {
  es: [
    "Ingeniero de Sistemas",
    "Desarrollador Full Stack",
    "Diseñador",
    "Hacker Ético",
  ],
  en: [
    "Systems Engineer",
    "Full Stack Developer",
    "Designer",
    "Ethical Hacker",
  ],
} as const;

export type Lang = keyof typeof typedContent;
