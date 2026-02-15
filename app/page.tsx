"use client";

import { useState } from "react";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoItem } from "@/components/BentoItem";
import { Hero } from "@/components/modules/Hero";
import { TechStack } from "@/components/modules/TechStack";
import { Location } from "@/components/modules/Location";
import { Polyglot } from "@/components/modules/Polyglot";
import { ProjectCard } from "@/components/modules/ProjectCard";
import { Research } from "@/components/modules/Research";
import { Connect } from "@/components/modules/Connect";
import { X } from "lucide-react";

const projects = [
  {
    title: "Academy Transaction Manager",
    description: "Complex financial logic & Real-time database dashboard for educational institutions. Featues include student fee tracking, automated invoices, and role-based access control.",
    stack: ["React", "Vite", "Firebase", "Recharts"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "SheetLink CMS",
    description: "Turn Google Sheets into a database. Searchable tables + Image upload API. Allows non-technical users to manage content via spreadsheets while serving high-performance API.",
    stack: ["Next.js", "Sheets API", "Tailwind", "Vercel"],
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Home() {
  const [greeting, setGreeting] = useState("Hello");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <main className="min-h-screen p-4 md:p-8 pt-12 text-slate-200">
      <div className="mx-auto max-w-7xl animate-fade-in-up">
        <BentoGrid>
          {/* A. Hero Module (2x2) */}
          <BentoItem className="col-span-1 md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-800">
            <Hero greeting={greeting} />
          </BentoItem>

          {/* B. Tech Stack (2x1) */}
          <BentoItem className="col-span-1 md:col-span-2 md:row-span-1 bg-slate-900/50 backdrop-blur-md">
            <TechStack />
          </BentoItem>

          {/* C. Location (1x1) */}
          <BentoItem className="col-span-1 md:col-span-1 md:row-span-1 p-0 overflow-hidden relative border-none">
            <Location />
          </BentoItem>

          {/* D. Polyglot (1x1) */}
          <BentoItem className="col-span-1 md:col-span-1 md:row-span-1 bg-violet-900/10 border-violet-500/10 hover:border-violet-500/30">
            <Polyglot setGreeting={setGreeting} />
          </BentoItem>

          {/* E. Project: Academy (1x2 Vertical) */}
          <BentoItem
            className="col-span-1 md:col-span-1 md:row-span-2 p-0 border-none bg-slate-900 cursor-pointer"
            onClick={() => setSelectedProject(projects[0])}
          >
            <ProjectCard
              index={1}
              title={projects[0].title}
              description={projects[0].description}
              stack={projects[0].stack}
              color={projects[0].color}
            />
          </BentoItem>

          {/* F. Project: SheetLink (1x2 Vertical) */}
          <BentoItem
            className="col-span-1 md:col-span-1 md:row-span-2 p-0 border-none bg-slate-900 cursor-pointer"
            onClick={() => setSelectedProject(projects[1])}
          >
            <ProjectCard
              index={2}
              title={projects[1].title}
              description={projects[1].description}
              stack={projects[1].stack}
              color={projects[1].color}
            />
          </BentoItem>

          {/* G. Research (2x1) */}
          <BentoItem className="col-span-1 md:col-span-2 md:row-span-1 p-0 overflow-hidden border-none">
            <Research />
          </BentoItem>

          {/* H. Connect (2x1) */}
          <BentoItem className="col-span-1 md:col-span-2 md:row-span-1 p-0 border-none overflow-hidden">
            <Connect />
          </BentoItem>
        </BentoGrid>

        {/* Floating Greeting Overlay (Optional Enhancement) */}
        <div className="fixed bottom-8 right-8 z-50 pointer-events-none mix-blend-difference">
          <h1 className="text-9xl font-bold opacity-5 text-white select-none">{greeting}</h1>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-10 pointer-events-none`} />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.stack.map(tech => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="h-64 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 border border-slate-700/50">
                <span className="animate-pulse">Project Screenshot Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
