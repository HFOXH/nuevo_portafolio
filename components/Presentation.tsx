import Container from "@/components/Container";
import Image from "next/image";

const countries = [
    { code: "ca", name: "Canada" },
    { code: "co", name: "Colombia" },
    { code: "in", name: "India" },
    { code: "es", name: "Spain" },
    { code: "ve", name: "Venezuela" },
    { code: "de", name: "Germany" },
    { code: "gb", name: "United Kingdom" },
    { code: "us", name: "United States" },
];

export default function Presentation() {
    return (
        <section>
            <Container>
                <div className="max-w-6xl mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        <div className="flex justify-center">
                            <Image
                                src="https://avatars.githubusercontent.com/u/83876815?s=400&u=c03316b49c09206a6574de9e311b266b45b88ff4&v=4"
                                alt="Santiago Cárdenas"
                                width={384}
                                height={384}
                                className="rounded-full object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-main mb-8 text-3xl font-semibold">
                                Who am I?
                            </h2>

                            <p className="text-white text-lg leading-relaxed mb-6">
                                Hello World! I’m Santiago Cárdenas, a Systems Engineer and Full-Stack
                                Developer with a master’s degree in Cybersecurity. Passionate about
                                technology, problem-solving, and continuous learning — from building
                                scalable web applications to exploring ethical hacking.
                            </p>

                            <p className="text-white font-medium mb-3">
                                Experience working with international teams across:
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {countries.map((country) => (
                                    <div
                                        key={country.code}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5"
                                    >
                                        <Image
                                            src={`https://flagcdn.com/${country.code}.svg`}
                                            alt={country.name}
                                            width={24}
                                            height={18}
                                            className="object-cover"
                                        />
                                        <span className="text-sm text-white">
                                            {country.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
