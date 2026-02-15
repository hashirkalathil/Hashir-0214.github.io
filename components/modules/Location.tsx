"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export const Location = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden p-4">
            {/* Background Map Placeholder */}
            <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/76.0,11.0,10,0/600x600?access_token=PLACEHOLDER')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500">
                {/* Fallback pattern if image fails/token missing */}
                <div className="absolute inset-0 bg-[#0f172a] opacity-90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="z-10 flex items-center gap-2">
                <MapPin className="text-cyan-400 h-5 w-5" />
                <span className="text-xs font-medium tracking-wider text-cyan-100">KERALA, INDIA</span>
            </div>

            <div className="z-10 mt-auto">
                <div className="text-3xl font-bold text-white tracking-widest font-mono">{time}</div>
                <div className="text-[10px] text-slate-400 font-medium">IST (UTC+05:30)</div>
            </div>
        </div>
    );
};
