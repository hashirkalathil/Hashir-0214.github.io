"use client";

import { Github, Mail, Linkedin, FileText, Send } from "lucide-react";

export const Connect = () => {
    return (
        <div className="flex h-full w-full flex-col justify-between p-4 bg-violet-600/10 group hover:bg-violet-600/20 transition-colors duration-500">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Let's Connect</h3>
                    <p className="text-sm text-violet-200/70">Have a project in mind?</p>
                </div>
                <div className="h-10 w-10 bg-violet-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-violet-500/20">
                    <Send className="text-white h-5 w-5" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
                <a href="mailto:contact@hashir.dev" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-violet-500/30 group/link">
                    <Mail className="h-5 w-5 text-violet-400 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-200">Email</span>
                </a>
                <a href="https://github.com" target="_blank" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-violet-500/30 group/link">
                    <Github className="h-5 w-5 text-violet-400 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-200">GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-violet-500/30 group/link">
                    <Linkedin className="h-5 w-5 text-violet-400 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-200">LinkedIn</span>
                </a>
                <a href="/resume.pdf" target="_blank" className="flex items-center gap-3 p-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/20 group/link">
                    <FileText className="h-5 w-5 text-white group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-white">Resume</span>
                </a>
            </div>
        </div>
    );
};
