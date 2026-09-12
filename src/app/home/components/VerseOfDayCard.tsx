import React from 'react';
import { BookOpen, Share2, Bookmark } from 'lucide-react';

const verseOfDay = {
    text: 'Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur.',
    reference: 'Filipi 4:6',
    book: 'Perjanjian Baru',
    theme: 'Ketenangan',
    reflection: 'Allah mengundangmu untuk membawa setiap beban kepadaNya — bukan karena masalahmu kecil, tetapi karena kasihNya bagimu sangat besar.',
};

export default function VerseOfDayCard() {
    return (
        <div className="hero-verse-card rounded-2xl p-6 xl:p-8 relative overflow-hidden h-full min-h-[220px] flex flex-col justify-between shadow-gold">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 -translate-y-12 translate-x-12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-8 -translate-x-8 pointer-events-none" />
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                        <BookOpen size={14} className="text-white" />
                    </div>
                    <div>
                        <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest">Ayat Hari Ini</p>
                        <p className="text-white/80 text-xs font-medium">{verseOfDay?.book}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-white/15 text-white/80 text-[10px] font-semibold">
                        {verseOfDay?.theme}
                    </span>
                </div>
            </div>
            {/* Verse Text */}
            <div className="relative z-10 flex-1">
                <p className="verse-serif text-white text-base xl:text-lg leading-relaxed mb-3">
                    &ldquo;{verseOfDay?.text}&rdquo;
                </p>
                <p className="text-white/70 text-sm font-semibold">— {verseOfDay?.reference}</p>
            </div>
            {/* Reflection + Actions */}
            <div className="relative z-10 mt-4 pt-4 border-t border-white/20 flex items-start justify-between gap-4">
                <p className="text-white/75 text-xs leading-relaxed flex-1">
                    {verseOfDay?.reflection}
                </p>
                <div className="flex items-center gap-1.5 shrink-0">
                    <button className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white/80 hover:bg-white/25 transition-all duration-200 hover:scale-105">
                        <Bookmark size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white/80 hover:bg-white/25 transition-all duration-200 hover:scale-105">
                        <Share2 size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}