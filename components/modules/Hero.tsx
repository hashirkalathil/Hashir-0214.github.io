"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
    greeting?: string;
}

export const Hero = ({ greeting = "Hello" }: HeroProps) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Web Designer", "Developer", "AI Implementer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div className="flex h-full w-full flex-col justify-between p-4 relative overflow-hidden">
            <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-xs font-medium text-emerald-400">Available for work</span>
                </div>
            </div>

            <div className="mt-8 z-10">
                <div className="overflow-hidden h-20 mb-2">
                    <motion.h1
                        key={greeting}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl font-bold tracking-tight text-white"
                    >
                        {greeting}
                    </motion.h1>
                </div>

                <div className="h-8">
                    <span className="text-xl text-violet-400 font-mono">
                        I am Hashir, <br />
                        &gt; {text}
                        <span className="animate-pulse">|</span>
                    </span>
                </div>
            </div>

            <div className="text-sm text-slate-400 mt-2 z-10">
                Building digital experiences with modern tech & design.
            </div>

            {/* Background Decoration */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
};
