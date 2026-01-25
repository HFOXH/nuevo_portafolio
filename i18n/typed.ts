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
  kr: [
    "시스템 엔지니어",
    "풀스택 개발자",
    "디자이너",
    "윤리적 해커",
  ],
} as const;

export type Lang = keyof typeof typedContent;
