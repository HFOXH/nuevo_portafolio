export const toolsContent = {
  es: {
    title: "¿Qué sé hacer?",
  },
  en: {
    title: "What do I know?",
  },
  kr: {
    title: "내가 할 수 있는 것은?",
  },
} as const;

export type Lang = keyof typeof toolsContent;
