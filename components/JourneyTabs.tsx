"use client";

import { useState } from "react";
import TimelineItem from "./TimelineItem";

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
        <div className="space-y-2">
            <TimelineItem
                title="Postgraduate Degree in AI and Machine Learning"
                subtitle="Cambrian College"
                date="2025 - 2026"
            />

            <TimelineItem
                title="Master in cibersecurity"
                subtitle="Isabel I University"
                date="2023 - 2024"
            />

            <TimelineItem
                title="Degree in Systems Engineering"
                subtitle="Universitaria de Colombia University"
                date="2020 - 2023"
            />

            <TimelineItem
                title="Technician in Analysis and Development of Information Systems"
                subtitle="SENA"
                date="2020 - 2022"
            />

            <TimelineItem
                title="Diploma in Mobile Application Development"
                subtitle="UTP & Mision TIC, Bogotá, Colombia"
                date="2021 - 2021"
            />
        </div>
    );
}

function Work() {
    return (
        <div className="space-y-2">
            <TimelineItem
                title="Full Stack Developer"
                subtitle="Symplifica, Bogotá, Colombia"
                date="10/2023 - Present"
            />

            <TimelineItem
                title="Full Stack Developer Collaborator Freelance"
                subtitle="BotsLovers, Madrid, Spain"
                date="02/2025 - 04/2025"
            />

            <TimelineItem
                title="Analyst Survey Scripter"
                subtitle="Ipsos, Bogotá, Colombia"
                date="10/2022 - 02/2024"
            />

            <TimelineItem
                title="Ethical Hacker Freelance"
                subtitle="Enterkey LLC, Miami, USA"
                date="01/2023 - 06/2023"
            />

            <TimelineItem
                title="Full Stack Developer & Scrum Master - Intern"
                subtitle="Universitaria de Colombia University, Bogotá, Colombia"
                date="03/2022 - 03/2023"
            />

            <TimelineItem
                title="Web Master"
                subtitle="Universitaria de Colombia University, Bogotá, Colombia"
                date="12/2021 - 08/2022"
            />
        </div>
    );
}

function Courses() {
    return (
        <div>
            <ul className="text-neutral-400 space-y-1">
                <li>
                    <span className="text-main">➔</span> Introduction to Artificial Intelligence – Platzi
                </li>
                <li>
                    <span className="text-main">➔</span> Introduction to Machine Learning – Platzi
                </li>
                <li>
                    <span className="text-main">➔</span> Artificial Intelligence Tools for Developers – Platzi
                </li>
                <li>
                    <span className="text-main">➔</span> Ethical Hacking – El Bosque University
                </li>
                <li>
                    <span className="text-main">➔</span> Ethical Hacking – Platzi
                </li>
                <li>
                    <span className="text-main">➔</span> Photoshop – SENA
                </li>
                <li>
                    <span className="text-main">➔</span> Electronics – SENA
                </li>
                <li>
                    <span className="text-main">➔</span> Web Development I & II – Google
                </li>
                <li>
                    <span className="text-main">➔</span> Cybersecurity for SMEs – Google
                </li>
                <li>
                    <span className="text-main">➔</span> Digital Apprentice – SENA
                </li>
                <li>
                    <span className="text-main">➔</span> Computer Architecture – SENA
                </li>
                <li>
                    <span className="text-main">➔</span> Software Quality Assurance – SENA
                </li>
                <li>
                    <span className="text-main">➔</span> AutoCAD – SENA
                </li>
                <li>
                    <span className="text-main">➔</span> English Level 9 – SENA
                </li>
                <li>
                    <span className="text-main">➔</span> Python – Udemy
                </li>
                <li>
                    <span className="text-main">➔</span> SCRUM Certification: Fundamentals
                </li>
            </ul>
        </div>
    );
}

function Projects() {
    return <p className="text-neutral-400">Proyectos destacados.</p>;
}
