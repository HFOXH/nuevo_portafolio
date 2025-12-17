"use client";

import { useState } from "react";
import TimelineItem from "./TimelineItem";
import Link from "next/link";

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
                <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:w-1/4">
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
    const projects = [
        {
            title: "RescuePets",
            description: "A Mision TIC project, a web platform designed to facilitate pet adoption.",
            image: "https://santic.netlify.app/assets/img/Rescuepets.png",
            url: "https://rescuepets.netlify.app/"
        },
        {
            title: "Graduation Project",
            description: "This was our graduation project for systems engineering. The project included 5 different types of software, developed in less than 7 months with 8 teammates.",
            image: "https://santic.netlify.app/assets/img/Asistencia.png",
            url: "https://santic.netlify.app/proyectogrado"
        },
        {
            title: "Cyber Virus Research",
            description: "A research project I did with a colleague about the origin, creator, and transmission methods of viruses.",
            image: "https://santic.netlify.app/assets/img/computador.jpg",
            url: "#"
        },
        {
            title: "Security Bikes",
            description: "A project where I learned web development and databases (Oracle, MySQL).",
            image: "https://santic.netlify.app/assets/img/security.png",
            url: "#"
        },
        {
            title: "C# Appointment Program",
            description: "As a final project for the ADSI program, I developed this program.",
            image: "https://santic.netlify.app/assets/img/citas.png",
            url: "#"
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <Link
                    key={index}
                    href={project.url}
                    target="_blank"
                    className="group relative rounded-xl overflow-hidden bg-neutral-800 flex md:block cursor-pointer"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-1/3 md:w-full h-full md:h-56 object-cover"
                    />

                    <div className="p-4 md:hidden">
                        <h3 className="text-lg font-semibold text-white">
                            {project.title}
                        </h3>
                        <p className="text-sm text-neutral-400 mt-1">
                            {project.description}
                        </p>
                    </div>

                    <div
                        className="
                            hidden md:flex
                            absolute inset-0
                            bg-black/70
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            items-center justify-center
                            text-center px-6
                        "
                    >
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
    );
}
