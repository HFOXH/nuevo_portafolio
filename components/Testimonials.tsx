"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const testimonials = [
    {
        name: "Moises Maussa",
        role: "Software Engineer",
        company: "Universitaria de Colombia University",
        message: "In the time I've known him, he has always been an active, talkative, and very friendly person. One of those people you get along with immediately. Not to mention his enthusiasm and love for learning, his agility, skills, and understanding in different areas of systems engineering, among other things I've witnessed. He is also a person with strong values."
    },
    {
        name: "Frank Solano",
        role: "Lawyer",
        company: "Abogados Solano",
        message: "I've known him for seven years, in terms of appearance, treatment, and communication, as a study partner and friend. I can attest that he is an honest, respectable, responsible person with impeccable conduct and habits."
    },
    {
        name: "Sergio Cogollos",
        role: "Web Developer & SEO",
        company: "Universitaria de Colombia university",
        message: "He is very capable of completing any task assigned, resourceful, decisive, and very self-confident. As he says, if he doesn't know something, he learns it extremely fast and becomes the best at it."
    },
    {
        name: "Kevin Gil",
        role: "Systems Engineer",
        company: "Freelance",
        message: "He is very committed to his work and dedicated, performs well under pressure, and is punctual with his deliveries."
    },
    {
        name: "Ingrid Espitia",
        role: "Management Assistant",
        company: "Universitaria de Colombia Unicersity",
        message: "I was impressed by his punctuality and effort on each assigned task. He proved to be highly responsible, committed, and ethical. His professionalism and attention to detail reflect a high level of dedication, making the experience even more satisfying. He is a person who keeps his promises."
    }
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
        filter: "blur(4px)",
    }),
    center: {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -80 : 80,
        opacity: 0,
        filter: "blur(4px)",
    }),
};

export default function Testimonials() {
    const [[current, direction], setCurrent] = useState<[number, number]>([
        0,
        0,
    ]);

    const paginate = (newDirection: number) => {
        setCurrent(([prev]) => {
            let next = prev + newDirection;
            if (next < 0) next = testimonials.length - 1;
            if (next >= testimonials.length) next = 0;
            return [next, newDirection];
        });
    };

    const testimonial = testimonials[current];

    return (
        <section className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-main text-center mb-12">
                What people say
            </h2>

            <div className="relative bg-neutral-900 rounded-2xl p-10 shadow-xl overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            duration: 0.45,
                            ease: "easeInOut",
                        }}
                    >
                        <p className="text-neutral-300 text-lg text-center mb-6 leading-relaxed">
                            “{testimonial.message}”
                        </p>

                        <div className="text-center">
                            <p className="font-semibold text-white">
                                {testimonial.name}
                            </p>
                            <p className="text-sm text-neutral-400">
                                {testimonial.role} · {testimonial.company}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-between mt-10">
                    <button
                        onClick={() => paginate(-1)}
                        className="
            group inline-flex items-center gap-2
            px-6 py-3 rounded-full
            border border-main text-main
            overflow-hidden
            transition-colors duration-300
            hover:bg-main hover:text-black cursor-pointer
        "
                    >
                        <HiArrowLeft
                            className="
                text-xl opacity-0 -translate-x-2
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-x-0
            "
                        />
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            Prev
                        </span>
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="
            group inline-flex items-center gap-2
            px-6 py-3 rounded-full
            border border-main text-main
            overflow-hidden
            transition-colors duration-300
            hover:bg-main hover:text-black cursor-pointer
        "
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            Next
                        </span>
                        <HiArrowRight
                            className="
                text-xl opacity-0 translate-x-2
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-x-0
            "
                        />
                    </button>
                </div>

            </div>
        </section>
    );
}
