'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/UI/AppLogo';
import {
    Home,
    MessageCircleHeart,
    BookOpen,
    Sun,
    Moon,
    Bell,
    User,
    Menu,
    X,
} from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import Icon from '@/components/UI/AppIcon';


interface NavItem {
    label: string;
    labelId: string;
    href: string;
    icon: React.ComponentType<{ size?: number | string; className?: string }>;
    badge?: number;
}

const navItems: NavItem[] = [
    { label: 'Home', labelId: 'Beranda', href: '/home', icon: Home },
    { label: 'HeartTalk AI', labelId: 'HeartTalk', href: '/heart-talk-ai-chat', icon: MessageCircleHeart, badge: 0 },
    { label: 'Bible', labelId: 'Alkitab', href: '/bible', icon: BookOpen },
];

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const pathname = usePathname();
    const { isDark, toggle } = useDarkMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 border-b border-border bg-card shadow-card">
                <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-10 2xl:px-16 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/home" className="flex items-center gap-2.5 group">
                        <AppLogo size={36} />
                        <span className="font-bold text-lg text-foreground tracking-tight hidden sm:block group-hover:text-primary transition-colors duration-200">
                            GracefulHeart
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={`nav-${item.href}`}
                                    href={item.href}
                                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span>{item.labelId}</span>
                                    {item.badge && item.badge > 0 ? (
                                        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-soft text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                            {item.badge}
                                        </span>
                                    ) : null}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggle}
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200">
                            <Bell size={18} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
                        </button>
                        <Link
                            href="/profile"
                            className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-200 overflow-hidden"
                        >
                            <User size={18} />
                        </Link>

                        {/* Mobile menu toggle */}
                        <button
                            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-border bg-card animate-fade-in">
                        <nav className="px-4 py-3 flex flex-col gap-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={`mobile-nav-${item.href}`}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                                ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        <span>{item.labelId}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-screen-2xl mx-auto w-full px-4 lg:px-8 xl:px-10 2xl:px-16 py-6">
                {children}
            </main>

            {/* Mobile Bottom Tab Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
                <div className="flex items-center justify-around h-16 px-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={`bottom-nav-${item.href}`}
                                href={item.href}
                                className={`relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg transition-all duration-200 ${isActive ? 'text-primary' : 'text-muted-foreground'
                                    }`}
                            >
                                <Icon size={20} />
                                <span className="text-[10px] font-medium">{item.labelId}</span>
                                {isActive && (
                                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}