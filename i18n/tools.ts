export const toolsContent = {
  es: {
    title: "¿Qué sé hacer?",
  },
  en: {
    title: "What do I know?",
  },
} as const;

export type Lang = keyof typeof toolsContent;
