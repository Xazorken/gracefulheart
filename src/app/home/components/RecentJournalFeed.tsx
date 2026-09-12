import React from 'react';
import Link from 'next/link';
import { BookMarked, ArrowRight, Heart, MessageSquare } from 'lucide-react';

const recentEntries = [
    {
        id: 'journal-001',
        type: 'conversation',
        title: 'Tentang kecemasan pekerjaan',
        preview: 'HeartTalk merespons dengan Filipi 4:6-7 dan doa ketenangan...',
        mood: 'Cemas',
        moodEmoji: '😰',
        date: '10 Agu 2026',
        saved: true,
    },
    {
        id: 'journal-002',
        type: 'verse',
        title: 'Mazmur 23:1-4',
        preview: 'Tuhan adalah gembalaku, takkan kekurangan aku...',
        mood: 'Bersyukur',
        moodEmoji: '🙏',
        date: '09 Agu 2026',
        saved: true,
    },
    {
        id: 'journal-003',
        type: 'note',
        title: 'Refleksi pribadi — Kamis malam',
        preview: 'Hari ini aku belajar bahwa kelemahan bukan kegagalan...',
        mood: 'Sedih',
        moodEmoji: '😢',
        date: '07 Agu 2026',
        saved: false,
    },
];

const typeConfig: Record<string, { icon: React.ComponentType<{ size?: number | string; className?: string }>; label: string; bg: string }> = {
    conversation: { icon: MessageSquare, label: 'Percakapan', bg: 'bg-blue-light text-blue-soft' },
    verse: { icon: BookMarked, label: 'Ayat', bg: 'bg-amber-light text-amber-soft' },
    note: { icon: Heart, label: 'Catatan', bg: 'bg-green-light text-green-soft' },
};

export default function RecentJournalFeed() {
    return (
        <div className="bg-card border border-border rounded-2xl p-5 shadow-card h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-base font-bold text-foreground">Jurnal Terbaru</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Refleksi & percakapan tersimpan</p>
                </div>
                <Link
                    href="/journal"
                    className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                    Lihat semua
                    <ArrowRight size={12} />
                </Link>
            </div>

            <div className="flex flex-col gap-3 flex-1">
                {recentEntries.map((entry) => {
                    const config = typeConfig[entry.type];
                    const TypeIcon = config.icon;
                    return (
                        <div
                            key={entry.id}
                            className="group flex flex-col gap-2 p-3 rounded-xl border border-border bg-background hover:bg-muted/30 hover:border-primary/30 transition-all duration-200 cursor-pointer"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <div className={`w-6 h-6 rounded-md flex items-center justify-center ${config.bg} shrink-0`}>
                                        <TypeIcon size={12} />
                                    </div>
                                    <span className="text-xs font-semibold text-muted-foreground">{config.label}</span>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <span className="text-sm">{entry.moodEmoji}</span>
                                    <span className="text-[10px] text-muted-foreground">{entry.date}</span>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-foreground leading-snug">{entry.title}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{entry.preview}</p>
                        </div>
                    );
                })}
            </div>

            <Link
                href="/journal"
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 font-medium"
            >
                <BookMarked size={14} />
                Buka Jurnal Lengkap
            </Link>
        </div>
    );
}