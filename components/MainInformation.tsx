const stats = [
    { value: "+5", label: "Years of\nExperience" },
    { value: "+37", label: "Projects\nCompleted" },
    { value: "+22", label: "Technologies\nUsed" },
];

import { mainInformationContent, Lang } from "@/i18n/mainInformation";

export default function MainInformation({ lang }: { lang: Lang }) {
  const { stats } = mainInformationContent[lang];

  return (
    <section className="w-full bg-black py-1">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 px-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="
              bg-black-second rounded-2xl p-10 text-center
              shadow-lg transition-all duration-300
              hover:-translate-y-1 hover:shadow-2xl
            "
          >
            <p className="text-4xl font-bold text-white mb-3">
              {stat.value}
            </p>

            <p className="text-gray-300 text-lg whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
