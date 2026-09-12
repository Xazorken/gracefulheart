'use client';

import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('gracefulheart-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')?.matches;
        const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
        setIsDark(shouldBeDark);
        if (shouldBeDark) {
            document.documentElement?.classList?.add('dark');
        } else {
            document.documentElement?.classList?.remove('dark');
        }
    }, []);

    const toggle = () => {
        setIsDark((prev) => {
            const next = !prev;
            if (next) {
                document.documentElement?.classList?.add('dark');
                localStorage.setItem('gracefulheart-theme', 'dark');
            } else {
                document.documentElement?.classList?.remove('dark');
                localStorage.setItem('gracefulheart-theme', 'light');
            }
            return next;
        });
    };

    return { isDark, toggle };
}