'use client';

import React from 'react';
import { Conversation } from '../data/mockConversations';
import { Plus, MessageSquare, Bookmark, Search } from 'lucide-react';

interface ConversationSidebarProps {
    conversations: Conversation[];
    activeId: string;
    onSelectConversation: (id: string) => void;
    onNewChat: () => void;
}

export default function ConversationSidebar({
    conversations,
    activeId,
    onSelectConversation,
    onNewChat,
}: ConversationSidebarProps) {
    return (
        <aside className="w-full md:w-80 border-r border-border bg-card/60 flex flex-col h-full shrink-0">
            {/* Top Bar */}
            <div className="p-4 border-b border-border flex items-center justify-between gap-2">
                <button
                    onClick={onNewChat}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition-all shadow-sm"
                >
                    <Plus size={16} />
                    <span>Percakapan Baru</span>
                </button>
            </div>

            {/* Search */}
            <div className="px-4 py-2">
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-2.5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Cari riwayat..."
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-muted text-xs text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-hide">
                {conversations.map((c) => {
                    const isActive = c.id === activeId;
                    return (
                        <button
                            key={c.id}
                            onClick={() => onSelectConversation(c.id)}
                            className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex flex-col gap-1 ${
                                isActive
                                    ? 'bg-primary/10 border border-primary/30 text-foreground'
                                    : 'hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-1.5 truncate">
                                    {c.moodEmoji && <span className="text-sm">{c.moodEmoji}</span>}
                                    <span className="text-xs font-bold text-foreground truncate">{c.title}</span>
                                </div>
                                {c.saved && <Bookmark size={12} className="text-primary fill-primary" />}
                            </div>
                            <p className="text-[11px] text-muted-foreground truncate w-full">{c.lastMessage}</p>
                            <span className="text-[9px] text-muted-foreground/70 self-end font-tabular">{c.date}</span>
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}
