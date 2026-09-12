'use client';

import React, { useState } from 'react';
import ConversationSidebar from './ConversationSidebar';
import ChatMainArea from './ChatMainArea';
import { mockConversations, Conversation, ChatMessage } from '../data/mockConversations';

export default function HeartTalkChatScreen() {
    const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
    const [activeId, setActiveId] = useState<string>(mockConversations[0]?.id || 'conv-001');

    const activeConv = conversations.find((c) => c.id === activeId) || conversations[0];

    const handleSelectConversation = (id: string) => {
        setActiveId(id);
    };

    const handleNewChat = () => {
        const newId = `conv-${Date.now()}`;
        const newConv: Conversation = {
            id: newId,
            title: 'Percakapan Baru',
            mood: null,
            moodEmoji: null,
            lastMessage: 'Percakapan dimulai...',
            date: 'Hari ini',
            messages: [],
            saved: false,
        };
        setConversations([newConv, ...conversations]);
        setActiveId(newId);
    };

    const handleSendMessage = (text: string) => {
        if (!activeConv) return;

        const userMsg: ChatMessage = {
            id: `msg-${Date.now()}-user`,
            role: 'user',
            content: text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        const aiMsg: ChatMessage = {
            id: `msg-${Date.now()}-ai`,
            role: 'ai',
            content: 'Terima kasih sudah berbagi. Ingatlah bahwa Tuhan peduli pada setiap pergumulanmu.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            aiResponse: {
                empathy: 'Aku mendengar isi hatimu. Perasaanmu sangat valid, dan kamu tidak sendirian menghadapinya.',
                verses: [
                    {
                        reference: 'Filipi 4:6-7',
                        text: 'Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur.',
                        book: 'Filipi',
                    },
                ],
                reflection: 'Cobalah untuk mengambil napas dalam-dalam dan serahkan ketakutanmu satu per satu dalam doa.',
                prayer: 'Tuhan, berikanlah aku kedamaian yang melampaui segala akal. Amin.',
            },
        };

        const updated = conversations.map((c) => {
            if (c.id === activeConv.id) {
                return {
                    ...c,
                    lastMessage: text,
                    messages: [...c.messages, userMsg, aiMsg],
                };
            }
            return c;
        });

        setConversations(updated);
    };

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col md:flex-row overflow-hidden border-t border-border">
            <ConversationSidebar
                conversations={conversations}
                activeId={activeId}
                onSelectConversation={handleSelectConversation}
                onNewChat={handleNewChat}
            />
            <ChatMainArea conversation={activeConv} onSendMessage={handleSendMessage} />
        </div>
    );
}
