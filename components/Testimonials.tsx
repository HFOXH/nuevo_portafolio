"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { testimonialsContent, Lang } from "@/i18n/testimonials";

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

export default function Testimonials({ lang }: { lang: Lang }) {
    const t = testimonialsContent[lang];

    const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);

    const paginate = (newDirection: number) => {
        setCurrent(([prev]) => {
            let next = prev + newDirection;
            if (next < 0) next = t.testimonials.length - 1;
            if (next >= t.testimonials.length) next = 0;
            return [next, newDirection];
        });
    };

    const testimonial = t.testimonials[current];

    return (
        <section className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-main text-center mb-12">
                {t.title}
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
                        transition={{ duration: 0.45, ease: "easeInOut" }}
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
              transition-colors duration-300
              hover:bg-main hover:text-black cursor-pointer
            "
                    >
                        <HiArrowLeft className="text-xl" />
                        <span>{t.prev}</span>
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="
              group inline-flex items-center gap-2
              px-6 py-3 rounded-full
              border border-main text-main
              transition-colors duration-300
              hover:bg-main hover:text-black cursor-pointer
            "
                    >
                        <span>{t.next}</span>
                        <HiArrowRight className="text-xl" />
                    </button>
                </div>
            </div>
        </section>
    );
}
