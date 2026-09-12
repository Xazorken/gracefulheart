import React from 'react';
import Link from 'next/link';
import { MessageCircleHeart, Sparkles, ArrowRight } from 'lucide-react';

export default function HomeActionBanner() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-card to-blue-light/30 p-5 xl:p-6 shadow-card">
            {/* Decorative blob */}
            <div className="absolute right-0 top-0 w-40 h-40 rounded-full bg-primary/5 -translate-y-8 translate-x-8 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                        <MessageCircleHeart size={24} className="text-primary" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base font-bold text-foreground">HeartTalk AI</h3>
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-light border border-green-soft/30">
                                <Sparkles size={10} className="text-green-soft" />
                                <span className="text-[10px] font-bold text-green-soft">Online</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                            Ceritakan isi hatimu. HeartTalk AI akan merespons dengan empati, ayat-ayat Alkitab yang relevan, dan doa singkat yang dipersonalisasi untukmu.
                        </p>
                    </div>
                </div>

                <Link
                    href="/heart-talk-ai-chat"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-gold shrink-0 whitespace-nowrap"
                >
                    Mulai Percakapan
                    <ArrowRight size={15} />
                </Link>
            </div>
        </div>
    );
}