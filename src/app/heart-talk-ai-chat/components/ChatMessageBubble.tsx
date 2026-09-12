'use client';

import React from 'react';
import { ChatMessage } from '../data/mockConversations';
import { Sparkles, BookOpen, Heart, Bookmark } from 'lucide-react';
import AppLogo from '@/components/UI/AppLogo';

interface ChatMessageBubbleProps {
    message: ChatMessage;
}

export default function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
    const isUser = message.role === 'user';

    if (isUser) {
        return (
            <div className="flex justify-end mb-4 animate-fade-in">
                <div className="max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl bg-primary text-primary-foreground shadow-sm">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    <span className="text-[10px] text-primary-foreground/70 block text-right mt-1 font-tabular">
                        {message.timestamp}
                    </span>
                </div>
            </div>
        );
    }

    const res = message.aiResponse;

    return (
        <div className="flex gap-3 mb-6 animate-fade-in">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                <AppLogo size={20} />
            </div>

            <div className="flex-1 max-w-[90%] sm:max-w-[80%] space-y-3">
                {/* Empathetic Greeting / Answer */}
                <div className="p-4 rounded-2xl bg-card border border-border shadow-card">
                    <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                        {res?.empathy || message.content}
                    </p>
                </div>

                {/* Bible Verses Card if present */}
                {res?.verses && res.verses.length > 0 && (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-foreground">
                        <div className="flex items-center justify-between mb-2">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                                <BookOpen size={14} /> Firman Penguat
                            </span>
                            <button className="text-muted-foreground hover:text-primary transition-colors">
                                <Bookmark size={14} />
                            </button>
                        </div>
                        {res.verses.map((v, i) => (
                            <div key={i} className="mb-2 last:mb-0">
                                <p className="text-sm font-medium verse-serif italic text-foreground leading-relaxed">
                                    &quot;{v.text}&quot;
                                </p>
                                <span className="text-xs font-semibold text-primary block mt-1">
                                    — {v.reference}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Reflection Card */}
                {res?.reflection && (
                    <div className="p-4 rounded-2xl bg-muted/40 border border-border">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-1">
                            <Sparkles size={14} /> Renungan & Aplikasi
                        </span>
                        <p className="text-sm text-foreground leading-relaxed">{res.reflection}</p>
                    </div>
                )}

                {/* Prayer Card */}
                {res?.prayer && (
                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                            <Heart size={14} /> Doa Singkat
                        </span>
                        <p className="text-sm italic text-foreground leading-relaxed">&quot;{res.prayer}&quot;</p>
                    </div>
                )}

                <span className="text-[10px] text-muted-foreground block text-left font-tabular pl-1">
                    HeartTalk AI • {message.timestamp}
                </span>
            </div>
        </div>
    );
}
