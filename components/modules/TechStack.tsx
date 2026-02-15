"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    FileJson,
    Globe,
    Layers,
    Layout,
    Server,
    Smartphone
} from "lucide-react";

const stack = [
    { name: "Next.js", icon: <Globe /> },
    { name: "React", icon: <Layout /> },
    { name: "TypeScript", icon: <Code2 /> },
    { name: "Tailwind", icon: <Layers /> },
    { name: "Node.js", icon: <Server /> },
    { name: "Firebase", icon: <Database /> },
    { name: "JSON", icon: <FileJson /> },
    { name: "Mobile", icon: <Smartphone /> },
];

export const TechStack = () => {
    return (
        <div className="flex h-full w-full flex-col justify-center overflow-hidden p-4">
            <h3 className="mb-4 text-sm font-medium text-slate-400 uppercase tracking-widest">Tech Stack</h3>
            <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                <motion.div
                    className="flex min-w-full shrink-0 gap-8 py-4 pr-8"
                    animate={{
                        translateX: "-50%",
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {[...stack, ...stack].map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors duration-300">
                            {tech.icon}
                            <span className="whitespace-nowrap font-medium">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
