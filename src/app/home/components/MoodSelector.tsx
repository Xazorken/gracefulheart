'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

interface Mood {
    id: string;
    label: string;
    emoji: string;
    color: string;
    description: string;
}

const moods: Mood[] = [
    { id: 'cemas', label: 'Cemas', emoji: '😰', color: 'bg-amber-light text-amber-soft border-amber-soft/40', description: 'Merasa khawatir atau gelisah' },
    { id: 'sedih', label: 'Sedih', emoji: '😢', color: 'bg-blue-light text-blue-soft border-blue-soft/40', description: 'Merasa berduka atau hampa' },
    { id: 'bersyukur', label: 'Bersyukur', emoji: '🙏', color: 'bg-green-light text-green-soft border-green-soft/40', description: 'Penuh rasa syukur' },
    { id: 'marah', label: 'Marah', emoji: '😠', color: 'bg-red-light text-red-soft border-red-soft/40', description: 'Merasa frustrasi atau marah' },
    { id: 'kesepian', label: 'Kesepian', emoji: '🥺', color: 'bg-secondary text-secondary-foreground border-border', description: 'Merasa sendiri atau terisolasi' },
    { id: 'lelah', label: 'Lelah', emoji: '😮‍💨', color: 'bg-muted text-muted-foreground border-border', description: 'Kelelahan fisik atau emosional' },
    { id: 'ragu', label: 'Ragu', emoji: '🤔', color: 'bg-blue-light text-blue-soft border-blue-soft/30', description: 'Merasa bimbang atau tidak yakin' },
];

export default function MoodSelector() {
    const router = useRouter();
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

    const handleMoodSelect = (moodId: string) => {
        setSelectedMood(moodId === selectedMood ? null : moodId);
    };

    const handleContinue = () => {
        if (selectedMood) {
            router.push(`/heart-talk-ai-chat?mood=${selectedMood}`);
        }
    };

    return (
        <div className="bg-card border border-border rounded-2xl p-5 xl:p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-base font-bold text-foreground">Bagaimana Perasaanmu Hari Ini?</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Pilih yang paling mewakili hatimu saat ini</p>
                </div>
                {selectedMood && (
                    <button
                        onClick={handleContinue}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-gold animate-fade-in"
                    >
                        <span>Curhat ke HeartTalk</span>
                        <ArrowRight size={14} />
                    </button>
                )}
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                {moods.map((mood) => {
                    const isSelected = selectedMood === mood.id;
                    return (
                        <button
                            key={`mood-${mood.id}`}
                            onClick={() => handleMoodSelect(mood.id)}
                            className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-200 ${isSelected
                                ? 'mood-chip-active border-primary'
                                : `${mood.color} hover:scale-105 hover:shadow-card`
                                }`}
                            title={mood.description}
                        >
                            <span className="text-2xl">{mood.emoji}</span>
                            <span className={`text-xs font-semibold ${isSelected ? 'text-primary-foreground' : ''}`}>
                                {mood.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {selectedMood && (
                <div className="mt-4 px-4 py-3 rounded-xl bg-primary/5 border border-primary/20 animate-fade-in">
                    <p className="text-sm text-foreground">
                        Kamu memilih:{' '}
                        <strong className="text-primary">
                            {moods.find((m) => m.id === selectedMood)?.emoji}{' '}
                            {moods.find((m) => m.id === selectedMood)?.label}
                        </strong>
                        {' '}— HeartTalk AI siap menemanimu dengan Firman Allah yang relevan.
                    </p>
                </div>
            )}
        </div>
    );
}