"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { typedContent, Lang } from "@/i18n/typed";

export default function TypedText({ lang }: { lang: Lang }) {
    const el = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (!el.current) return;

        const typed = new Typed(el.current!, {
            strings: [...typedContent[lang]],
            typeSpeed: 75,
            startDelay: 1500,
            backSpeed: 75,
            smartBackspace: true,
            backDelay: 1500,
            loop: true,
        });

        return () => typed.destroy();
    }, [lang]);

    return (
        <span
            ref={el}
            className="typed1 text-white font-medium"
        />
    );
}
