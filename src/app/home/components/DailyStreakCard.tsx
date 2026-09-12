import React from 'react';
import { Flame, Trophy, Calendar } from 'lucide-react';

const streakData = {
    currentStreak: 7,
    longestStreak: 14,
    totalDays: 34,
    weekActivity: [true, true, false, true, true, true, true],
    weekLabels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
};

export default function DailyStreakCard() {
    return (
        <div className="bg-card border border-border rounded-2xl p-5 h-full flex flex-col gap-4 shadow-card">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-light flex items-center justify-center">
                        <Flame size={16} className="text-amber-soft" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Streak Harian</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <Trophy size={14} className="text-primary" />
                    <span className="text-xs font-bold text-primary">{streakData?.longestStreak} hari terbaik</span>
                </div>
            </div>
            {/* Main streak number */}
            <div className="text-center py-2">
                <p className="text-5xl font-bold text-foreground font-tabular">{streakData?.currentStreak}</p>
                <p className="text-sm text-muted-foreground mt-1">hari berturut-turut</p>
            </div>
            {/* Week dots */}
            <div className="flex items-center justify-between">
                {streakData?.weekActivity?.map((active, i) => (
                    <div key={`week-dot-${i}`} className="flex flex-col items-center gap-1.5">
                        <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-200 ${active
                                ? 'bg-primary text-primary-foreground shadow-gold'
                                : 'bg-muted text-muted-foreground'
                                }`}
                        >
                            {active ? '✓' : '·'}
                        </div>
                        <span className="text-[10px] text-muted-foreground font-medium">
                            {streakData?.weekLabels?.[i]}
                        </span>
                    </div>
                ))}
            </div>
            {/* Footer stat */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/50">
                <Calendar size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                    Total <strong className="text-foreground">{streakData?.totalDays} hari</strong> bersama GracefulHeart
                </span>
            </div>
        </div>
    );
}