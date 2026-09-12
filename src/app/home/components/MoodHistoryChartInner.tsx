'use client';

import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';
import { TrendingUp } from 'lucide-react';

const moodData = [
    { day: 'Sen', mood: 'Cemas', value: 3, color: '#C98A3A' },
    { day: 'Sel', mood: 'Bersyukur', value: 7, color: '#5BA87A' },
    { day: 'Rab', mood: 'Lelah', value: 2, color: '#8A7560' },
    { day: 'Kam', mood: 'Sedih', value: 4, color: '#5B8DB8' },
    { day: 'Jum', mood: 'Bersyukur', value: 8, color: '#5BA87A' },
    { day: 'Sab', mood: 'Ragu', value: 5, color: '#5B8DB8' },
    { day: 'Min', mood: 'Cemas', value: 3, color: '#C98A3A' },
];

const moodFrequency = [
    { mood: 'Bersyukur', count: 12, emoji: '🙏', color: '#5BA87A' },
    { mood: 'Cemas', count: 8, emoji: '😰', color: '#C98A3A' },
    { mood: 'Sedih', count: 5, emoji: '😢', color: '#5B8DB8' },
    { mood: 'Lelah', count: 4, emoji: '😮‍💨', color: '#8A7560' },
    { mood: 'Ragu', count: 3, emoji: '🤔', color: '#7AAED4' },
];

interface TooltipProps {
    active?: boolean;
    payload?: Array<{ payload: { day: string; mood: string; value: number } }>;
}

function CustomTooltip({ active, payload }: TooltipProps) {
    if (!active || !payload || !payload.length) return null;
    const d = payload[0].payload;
    return (
        <div className="bg-card border border-border rounded-xl px-3 py-2.5 shadow-card-hover text-sm">
            <p className="font-bold text-foreground">{d.day}</p>
            <p className="text-muted-foreground text-xs">{d.mood}</p>
            <p className="text-primary font-semibold text-xs mt-0.5">Skor: {d.value}/10</p>
        </div>
    );
}

export default function MoodHistoryChartInner() {
    return (
        <div className="bg-card border border-border rounded-2xl p-5 xl:p-6 shadow-card h-full">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-base font-bold text-foreground">Riwayat Mood 7 Hari</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Pola emosi minggu ini</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-light border border-green-soft/30">
                    <TrendingUp size={12} className="text-green-soft" />
                    <span className="text-xs font-semibold text-green-soft">Minggu ini lebih positif</span>
                </div>
            </div>

            {/* Bar chart */}
            <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={moodData} barSize={28} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis
                            dataKey="day"
                            tick={{ fontSize: 11, fill: 'var(--muted-foreground)', fontWeight: 500 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }}
                            axisLine={false}
                            tickLine={false}
                            domain={[0, 10]}
                            ticks={[0, 5, 10]}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--muted)', opacity: 0.5 }} />
                        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                            {moodData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Mood frequency */}
            <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Mood Terbanyak Bulan Ini
                </p>
                <div className="flex flex-wrap gap-2">
                    {moodFrequency.map((m) => (
                        <div
                            key={`freq-${m.mood}`}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/50 border border-border"
                        >
                            <span className="text-sm">{m.emoji}</span>
                            <span className="text-xs font-semibold text-foreground">{m.mood}</span>
                            <span className="text-xs text-muted-foreground font-tabular">{m.count}x</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}