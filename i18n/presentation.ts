export const presentationContent = {
  es: {
    title: "¿Quién soy?",
    description1:
      "¡Hola Mundo! Soy Santiago Cárdenas, Ingeniero de Sistemas y Desarrollador Full-Stack con una maestría en Ciberseguridad. Apasionado por la tecnología, la resolución de problemas y el aprendizaje continuo — desde construir aplicaciones web escalables hasta explorar el hacking ético.",
    experience:
      "Experiencia trabajando con equipos internacionales en:",
  },
  en: {
    title: "Who am I?",
    description1:
      "Hello World! I’m Santiago Cárdenas, a Systems Engineer and Full-Stack Developer with a master’s degree in Cybersecurity. Passionate about technology, problem-solving, and continuous learning — from building scalable web applications to exploring ethical hacking.",
    experience:
      "Experience working with international teams across:",
  },
} as const;

export type Lang = keyof typeof presentationContent;
