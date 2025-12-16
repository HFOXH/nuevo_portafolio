"use client";

import { useState } from "react";

const tabs = [
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
    { id: "courses", label: "Courses" },
    { id: "projects", label: "Projects" },
];

export default function JourneyTabs() {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-main text-center mb-12">
                My personal Journey
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex md:flex-col gap-4 md:w-1/4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`rounded-xl px-6 py-4 text-left font-semibold transition-all duration-300 ease-out cursor-pointer
                                ${activeTab === tab.id
                                    ? "bg-neutral-800 text-white"
                                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="md:w-3/4 rounded-2xl bg-neutral-900 p-8 min-h-[300px]">
                    {activeTab === "education" && <Education />}
                    {activeTab === "work" && <Work />}
                    {activeTab === "courses" && <Courses />}
                    {activeTab === "projects" && <Projects />}
                </div>
            </div>
        </section>
    );
}

function Education() {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p className="text-neutral-400">
                Ingeniería de Sistemas, enfoque en desarrollo web y software moderno.
            </p>
        </div>
    );
}

function Work() {
    return <p className="text-neutral-400">Experiencia laboral acá.</p>;
}

function Courses() {
    return <p className="text-neutral-400">Cursos y certificaciones.</p>;
}

function Projects() {
    return <p className="text-neutral-400">Proyectos destacados.</p>;
}
