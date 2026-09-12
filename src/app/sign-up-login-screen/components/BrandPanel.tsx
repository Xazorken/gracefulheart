import React from 'react';

const inspirationalVerses = [
    { text: '"Janganlah takut, sebab Aku menyertai engkau."', ref: 'Yesaya 41:10' },
    { text: '"Tuhan adalah gembalaku, takkan kekurangan aku."', ref: 'Mazmur 23:1' },
    { text: '"Serahkanlah segala kekuatiranmu kepada-Nya, sebab Ia yang memelihara kamu."', ref: '1 Petrus 5:7' },
];

export default function BrandPanel() {
    return (
        <div className="w-full hero-verse-card flex flex-col justify-between p-12 xl:p-16 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute top-1/2 right-8 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            {/* Logo */}
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">🕊️</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">GracefulHeart</h1>
                        <p className="text-white/70 text-xs font-medium tracking-wide uppercase">
                            Alkitab & Mood Companion AI
                        </p>
                    </div>
                </div>
            </div>
            {/* Center content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center gap-8">
                <div>
                    <h2 className="text-3xl xl:text-4xl font-bold text-white leading-snug mb-3">
                        Temukan Kedamaian
                        <br />
                        dalam Firman-Nya
                    </h2>
                    <p className="text-white/80 text-base leading-relaxed max-w-sm">
                        Bagikan perasaanmu, dan biarkan Firman Allah
                        menyentuh hatimu melalui pendamping AI yang penuh kasih.
                    </p>
                </div>

                {/* Feature bullets */}
                <div className="flex flex-col gap-3">
                    {[
                        { icon: '✨', text: 'Ayat harian yang disesuaikan dengan emosimu' },
                        { icon: '💬', text: 'HeartTalk AI — teman bicara alkitabiah' },
                        { icon: '📖', text: 'Alkitab LAI/TB lengkap dengan pencarian' },
                    ]?.map((feat) => (
                        <div key={`feat-${feat?.icon}`} className="flex items-center gap-3">
                            <span className="text-lg">{feat?.icon}</span>
                            <span className="text-white/85 text-sm">{feat?.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Bottom verse rotator */}
            <div className="relative z-10 bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="verse-serif text-white/90 text-sm leading-relaxed mb-2">
                    {inspirationalVerses?.[0]?.text}
                </p>
                <p className="text-white/60 text-xs font-semibold tracking-wide uppercase">
                    — {inspirationalVerses?.[0]?.ref}
                </p>
            </div>
        </div>
    );
}