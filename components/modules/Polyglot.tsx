"use client";

interface PolyglotProps {
    setGreeting: (text: string) => void;
}

const languages = [
    { code: "EN", label: "English", greeting: "Hello" },
    { code: "ML", label: "Malayalam", greeting: "Namaskaram" },
    { code: "AR", label: "Arabic", greeting: "Marhaba" },
    { code: "UR", label: "Urdu", greeting: "Assalam" },
];

export const Polyglot = ({ setGreeting }: PolyglotProps) => {
    return (
        <div className="flex h-full w-full flex-col p-4 justify-between">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Speaking</h3>

            <div className="grid grid-cols-2 gap-2 mt-2">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        className="flex flex-col items-center justify-center rounded-lg bg-white/5 p-3 hover:bg-violet-500/20 hover:border-violet-500/50 border border-transparent transition-all duration-300 group"
                        onMouseEnter={() => setGreeting(lang.greeting)}
                        onMouseLeave={() => setGreeting("Hello")}
                    >
                        <span className="text-2xl font-bold text-slate-200 group-hover:text-violet-300">{lang.code}</span>
                        <span className="text-[10px] text-slate-500 font-medium group-hover:text-violet-200">{lang.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
