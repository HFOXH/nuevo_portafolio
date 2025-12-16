'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedText() {
    const el = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const typed = new Typed(el.current!, {
            strings: [
                'Systems Engineer',
                'Fullstack Developer',
                'Designer',
                'Ethical Hacker',
            ],
            typeSpeed: 75,
            startDelay: 2000,
            backSpeed: 75,
            smartBackspace: true,
            backDelay: 1500,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <span
            ref={el}
            className="typed1 text-white font-medium"
        />
    );
}
