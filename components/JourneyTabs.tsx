"use client";

import { useState } from "react";
import TimelineItem from "./TimelineItem";
import Link from "next/link";
import { journeyContent, Lang, TabKey } from "@/i18n/journey";
import Image from "next/image";

export default function JourneyTabs({ lang }: { lang: Lang }) {
    const t = journeyContent[lang];
    const [activeTab, setActiveTab] = useState<TabKey>("education");

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-main text-center mb-12">
                {t.title}
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:w-1/4">
                    {(Object.keys(t.tabs) as TabKey[]).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`rounded-xl px-6 py-4 text-left font-semibold transition-all cursor-pointer
                ${activeTab === key
                                    ? "bg-neutral-800 text-white"
                                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                                }`}
                        >
                            {t.tabs[key]}
                        </button>
                    ))}
                </div>

                <div className="md:w-3/4 rounded-2xl bg-neutral-900 p-8 min-h-75">
                    {activeTab === "education" &&
                        t.education.map((item, i) => (
                            <TimelineItem key={i} {...item} />
                        ))}

                    {activeTab === "work" &&
                        t.work.map((item, i) => (
                            <TimelineItem key={i} {...item} />
                        ))}

                    {activeTab === "courses" && (
                        <ul className="text-neutral-400 space-y-1">
                            {t.courses.map((course, i) => (
                                <li key={i}>
                                    <span className="text-main">➔</span> {course}
                                </li>
                            ))}
                        </ul>
                    )}

                    {activeTab === "projects" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {t.projects.map((project, i) => (
                                <Link
                                    key={i}
                                    href={project.url}
                                    target="_blank"
                                    className="group relative rounded-xl overflow-hidden bg-neutral-800"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={224}
                                        className="w-full h-56 object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100
                    transition-opacity flex items-center justify-center px-6 text-center">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-neutral-300 text-sm">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
