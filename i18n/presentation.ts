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
  kr: {
    title: "나는 누구인가?",
    description1:
      "안녕하세요! 저는 시스템 엔지니어이자 사이버 보안 석사 학위를 가진 풀스택 개발자 Santiago Cárdenas입니다. 확장 가능한 웹 애플리케이션을 구축하는 것부터 윤리적 해킹을 탐구하는 것까지, 기술·문제 해결·지속적인 학습에 열정을 가지고 있습니다.",
    experience:
      "국제적인 팀과 함께 다음 분야에서 일한 경험이 있습니다:",
  },
} as const;

export type Lang = keyof typeof presentationContent;
