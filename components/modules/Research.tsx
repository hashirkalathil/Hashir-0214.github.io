export const Research = () => {
    return (
        <div className="flex h-full w-full flex-col justify-center items-center text-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>

            <div className="z-10">
                <h2 className="text-3xl md:text-4xl font-serif italic text-amber-100 mb-2 font-light tracking-wide group-hover:tracking-widest transition-all duration-500">Divine Aesthetics</h2>
                <div className="h-px w-12 bg-amber-500/50 mx-auto my-4 group-hover:w-24 transition-all duration-500"></div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-500/80 font-medium">Research & Arts</p>
                <p className="text-sm text-slate-300 mt-4 font-light max-w-xs mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                    Exploring the intersection of Qur'anic calligraphy and Mughal architectural geometry.
                </p>
            </div>
        </div>
    );
};
