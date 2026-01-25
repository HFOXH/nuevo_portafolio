export const testimonialsContent = {
  es: {
    title: "Lo que dicen de mí",
    prev: "Anterior",
    next: "Siguiente",
    testimonials: [
      {
        name: "Moises Maussa",
        role: "Ingeniero de Software",
        company: "Universitaria de Colombia",
        message:
          "En el tiempo que lo he conocido siempre ha sido una persona activa, conversadora y muy amigable. De esas personas con las que uno conecta de inmediato. Sin mencionar su entusiasmo y amor por el aprendizaje, su agilidad, habilidades y comprensión en distintas áreas de la ingeniería de sistemas. Además, es una persona con valores muy sólidos.",
      },
      {
        name: "Frank Solano",
        role: "Abogado",
        company: "Abogados Solano",
        message:
          "Lo conozco desde hace siete años como compañero de estudio y amigo. Puedo dar fe de que es una persona honesta, respetuosa, responsable y con una conducta y hábitos impecables.",
      },
      {
        name: "Sergio Cogollos",
        role: "Desarrollador Web & SEO",
        company: "Universitaria de Colombia",
        message:
          "Es muy capaz de completar cualquier tarea asignada, recursivo, decidido y con mucha confianza en sí mismo. Como él dice, si no sabe algo, lo aprende muy rápido y se vuelve el mejor en ello.",
      },
      {
        name: "Kevin Gil",
        role: "Ingeniero de Sistemas",
        company: "Freelance",
        message:
          "Es muy comprometido con su trabajo, dedicado, se desempeña bien bajo presión y es puntual con sus entregas.",
      },
      {
        name: "Ingrid Espitia",
        role: "Asistente de Gestión",
        company: "Universitaria de Colombia",
        message:
          "Me impresionó su puntualidad y esfuerzo en cada tarea asignada. Demostró ser altamente responsable, comprometido y ético. Su profesionalismo y atención al detalle reflejan un alto nivel de dedicación. Es una persona que cumple su palabra.",
      },
    ],
  },

  en: {
    title: "What people say",
    prev: "Prev",
    next: "Next",
    testimonials: [
      {
        name: "Moises Maussa",
        role: "Software Engineer",
        company: "Universitaria de Colombia University",
        message:
          "In the time I've known him, he has always been an active, talkative, and very friendly person. One of those people you get along with immediately. Not to mention his enthusiasm and love for learning, his agility, skills, and understanding in different areas of systems engineering. He is also a person with strong values.",
      },
      {
        name: "Frank Solano",
        role: "Lawyer",
        company: "Abogados Solano",
        message:
          "I've known him for seven years as a study partner and friend. I can attest that he is an honest, respectable, responsible person with impeccable conduct and habits.",
      },
      {
        name: "Sergio Cogollos",
        role: "Web Developer & SEO",
        company: "Universitaria de Colombia University",
        message:
          "He is very capable of completing any task assigned, resourceful, decisive, and very self-confident. As he says, if he doesn't know something, he learns it extremely fast and becomes the best at it.",
      },
      {
        name: "Kevin Gil",
        role: "Systems Engineer",
        company: "Freelance",
        message:
          "He is very committed to his work and dedicated, performs well under pressure, and is punctual with his deliveries.",
      },
      {
        name: "Ingrid Espitia",
        role: "Management Assistant",
        company: "Universitaria de Colombia University",
        message:
          "I was impressed by his punctuality and effort on each assigned task. He proved to be highly responsible, committed, and ethical. His professionalism and attention to detail reflect a high level of dedication. He is a person who keeps his promises.",
      },
    ],
  },
  kr: {
    title: "사람들이 말하는 나",
    prev: "이전",
    next: "다음",
    testimonials: [
      {
        name: "Moises Maussa",
        role: "소프트웨어 엔지니어",
        company: "콜롬비아 대학교",
        message:
          "그를 알게 된 이후로 항상 활동적이고 대화하기 좋으며 매우 친절한 사람이라는 인상을 받았습니다. 처음부터 쉽게 친해질 수 있는 타입이죠. 학습에 대한 열정, 빠른 이해력, 그리고 시스템 공학의 다양한 분야에서의 뛰어난 역량은 말할 것도 없습니다. 무엇보다도 강한 가치관을 가진 사람입니다.",
      },
      {
        name: "Frank Solano",
        role: "변호사",
        company: "Abogados Solano",
        message:
          "7년 동안 학업 동료이자 친구로 지내며 그가 정직하고, 존중할 줄 알며, 책임감 있고, 생활 태도와 습관이 매우 모범적인 사람이라는 것을 확신할 수 있습니다.",
      },
      {
        name: "Sergio Cogollos",
        role: "웹 개발자 & SEO",
        company: "콜롬비아 대학교",
        message:
          "맡은 일은 무엇이든 해내는 사람이며, 문제 해결 능력이 뛰어나고 결단력이 있으며 자신감도 매우 높습니다. 그가 말하듯이, 모르는 것이 있으면 아주 빠르게 배우고 결국 최고 수준에 도달합니다.",
      },
      {
        name: "Kevin Gil",
        role: "시스템 엔지니어",
        company: "프리랜서",
        message:
          "업무에 매우 헌신적이고 책임감이 강하며, 압박 속에서도 잘 해내고 항상 기한을 철저히 지킵니다.",
      },
      {
        name: "Ingrid Espitia",
        role: "경영 보조",
        company: "콜롬비아 대학교",
        message:
          "항상 시간 약속을 잘 지키고 맡은 일마다 최선을 다하는 모습이 인상적이었습니다. 매우 책임감 있고, 헌신적이며, 윤리적인 사람입니다. 그의 전문성과 세심함은 높은 수준의 몰입도를 보여줍니다. 약속을 지키는 사람입니다.",
      },
    ],
  },
} as const;

export type Lang = keyof typeof testimonialsContent;
