'use client';

import React, { useState } from 'react';
import { Conversation } from '../data/mockConversations';
import ChatMessageBubble from './ChatMessageBubble';
import MoodQuickPrompts from './MoodQuickPrompts';
import { Send, Sparkles } from 'lucide-react';

interface ChatMainAreaProps {
    conversation?: Conversation;
    onSendMessage: (text: string) => void;
}

export default function ChatMainArea({ conversation, onSendMessage }: ChatMainAreaProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSendMessage(input);
        setInput('');
    };

    const handlePromptSelect = (promptText: string) => {
        onSendMessage(promptText);
    };

    return (
        <main className="flex-1 flex flex-col h-full bg-background relative overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-border bg-card/80 backdrop-blur-md flex items-center justify-between">
                <div>
                    <h2 className="text-base font-bold text-foreground flex items-center gap-2">
                        <span>{conversation?.title || 'HeartTalk AI'}</span>
                        {conversation?.moodEmoji && <span>{conversation.moodEmoji}</span>}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                        Konselor Alkitabiah AI • Siap Mendengarkan 24/7
                    </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    <Sparkles size={14} />
                    <span>Mode Empati</span>
                </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                {!conversation || conversation.messages.length === 0 ? (
                    <div className="max-w-xl mx-auto my-8 space-y-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-2xl font-bold">
                            🙏
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Selamat Datang di HeartTalk AI</h3>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                Bagikan isi hatimu, keluh kesahmu, atau pertanyaan hidup. HeartTalk AI hadir menyemangati dengan ayat-ayat Alkitab dan doa hangat.
                            </p>
                        </div>
                        <MoodQuickPrompts onSelectPrompt={handlePromptSelect} />
                    </div>
                ) : (
                    conversation.messages.map((msg) => (
                        <ChatMessageBubble key={msg.id} message={msg} />
                    ))
                )}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-border bg-card/90">
                <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-4xl mx-auto">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Tulis curahan hatimu di sini..."
                        className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim()}
                        className="p-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 transition-all shadow-sm shrink-0"
                    >
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </main>
    );
}
