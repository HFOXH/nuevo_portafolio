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
} as const;

export type Lang = keyof typeof testimonialsContent;
