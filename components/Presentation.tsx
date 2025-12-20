"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { presentationContent, Lang } from "@/i18n/presentation";

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

export default function Presentation({ lang }: { lang: Lang }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const t = presentationContent[lang];

    return (
        <section>
            <Container>
                <div className="max-w-6xl mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        <div className="flex justify-center">
                            <Image
                                src="https://avatars.githubusercontent.com/u/83876815?s=400&v=4"
                                alt="Santiago Cárdenas"
                                width={384}
                                height={384}
                                className="rounded-full object-cover"
                                priority
                            />
                        </div>

                        <div>
                            <h2 className="text-main mb-8 text-3xl font-semibold">
                                {t.title}
                            </h2>

                            <p className="text-white text-lg leading-relaxed mb-6">
                                {t.description1}
                            </p>

                            <p className="text-white font-medium mb-3">
                                {t.experience}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {countries.map((country) => (
                                    <div
                                        key={country.code}
                                        onMouseMove={(e) => {
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            setMouse({
                                                x: e.clientX - rect.left,
                                                y: e.clientY - rect.top,
                                            });
                                        }}
                                        className="relative group
                      flex items-center gap-2 px-3 py-2
                      rounded-lg border border-white/10
                      bg-white/5
                      overflow-hidden"
                                    >
                                        <span
                                            className="pointer-events-none absolute inset-0
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300"
                                            style={{
                                                background: `radial-gradient(
                          120px circle at ${mouse.x}px ${mouse.y}px,
                          rgba(43, 255, 0, 0.77),
                          transparent 70%
                        )`,
                                            }}
                                        />

                                        <span
                                            className="pointer-events-none absolute inset-0
                        rounded-lg
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        ring-1 ring-main/70"
                                        />

                                        <Image
                                            src={`https://flagcdn.com/${country.code}.svg`}
                                            alt={country.name}
                                            width={24}
                                            height={18}
                                            className="relative z-10 object-cover"
                                        />

                                        <span className="relative z-10 text-sm text-white">
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
