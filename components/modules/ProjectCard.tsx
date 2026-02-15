"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    stack: string[];
    index: number;
    color: string;
}

export const ProjectCard = ({ title, description, stack, index, color }: ProjectCardProps) => {
    return (
        <div className="flex h-full w-full flex-col justify-between p-4 group relative overflow-hidden">
            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className="flex justify-between items-start z-10">
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-black/20 backdrop-blur-md">
                    <span className="text-sm font-medium text-slate-300">{index}</span>
                </div>
                <ArrowUpRight className="text-slate-500 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <div className="z-10 mt-4 space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                    {title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="z-10 mt-4 flex flex-wrap gap-2">
                {stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-medium px-2 py-1 rounded-full bg-white/5 border border-white/5 text-slate-300">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Abstract shape for visual interest */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-tr from-white/5 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        </div>
    );
};
