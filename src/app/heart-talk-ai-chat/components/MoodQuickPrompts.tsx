'use client';

import React from 'react';

interface MoodQuickPromptsProps {
    onSelectPrompt: (prompt: string, mood?: string) => void;
}

const prompts = [
    { mood: 'Cemas', emoji: '😰', text: 'Aku merasa sangat cemas tentang pekerjaan dan masa depan.' },
    { mood: 'Lelah', emoji: '😮‍💨', text: 'Aku merasa lelah secara mental dan butuh kedamaian.' },
    { mood: 'Sedih', emoji: '🥺', text: 'Aku merasa kesepian dan patah hati hari ini.' },
    { mood: 'Bersyukur', emoji: '🙏', text: 'Aku ingin bersyukur atas hal baik yang terjadi.' },
];

export default function MoodQuickPrompts({ onSelectPrompt }: MoodQuickPromptsProps) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Rekomendasi Topik Curhat
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {prompts.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => onSelectPrompt(item.text, item.mood)}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-card border border-border hover:border-primary/50 text-left transition-all hover:shadow-card group"
                    >
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.text}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
