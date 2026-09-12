'use client';

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import BrandPanel from './BrandPanel';

export default function AuthScreen() {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    return (
        <div className="min-h-screen bg-background flex">
            {/* Left Brand Panel — hidden on mobile */}
            <div className="hidden lg:flex lg:w-1/2 xl:w-5/12 relative overflow-hidden">
                <BrandPanel />
            </div>

            {/* Right Form Panel */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:px-12 xl:px-16 2xl:px-24 bg-background">
                {/* Mobile Logo */}
                <div className="lg:hidden mb-8 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-3xl">✝️</span>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-foreground">GracefulHeart</h1>
                        <p className="text-sm text-muted-foreground mt-1">Alkitab & Mood Companion AI</p>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="w-full max-w-md">
                    <div className="flex bg-muted rounded-xl p-1 mb-8">
                        <button
                            onClick={() => setActiveTab('login')}
                            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${activeTab === 'login' ? 'bg-card text-foreground shadow-card' : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Masuk
                        </button>
                        <button
                            onClick={() => setActiveTab('register')}
                            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${activeTab === 'register' ? 'bg-card text-foreground shadow-card' : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Daftar
                        </button>
                    </div>

                    {/* Forms */}
                    <div className="animate-fade-in">
                        {activeTab === 'login' ? (
                            <LoginForm onSwitchToRegister={() => setActiveTab('register')} />
                        ) : (
                            <RegisterForm onSwitchToLogin={() => setActiveTab('login')} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}