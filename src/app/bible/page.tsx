import React from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { BookOpen, ChevronRight } from 'lucide-react';
import { oldTestamentBooks, newTestamentBooks, getBookData } from '@/lib/bible';

export const metadata = {
  title: 'Alkitab | GracefulHeart',
  description: 'Baca Alkitab terjemahan baru dengan nyaman',
};

function BookCard({ name }: { name: string }) {
  const data = getBookData(name);
  const chapterCount = data?.chapter?.length || 0;
  // Make URL safe
  const href = `/bible/${encodeURIComponent(name.trim())}`;

  return (
    <Link href={href} className="group relative bg-card hover:bg-muted border border-border rounded-xl p-4 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500 ease-out" />
      
      <div className="flex items-start justify-between relative z-10">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
          <BookOpen size={16} />
        </div>
        <div className="w-6 h-6 rounded-full bg-background/50 flex items-center justify-center text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <ChevronRight size={14} />
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="font-semibold text-foreground text-sm mb-1">{name}</h3>
        <p className="text-xs text-muted-foreground">{chapterCount} Pasal</p>
      </div>
    </Link>
  );
}

export default function BiblePage() {
  return (
    <AppLayout>
      <div className="pb-12 animate-fade-in">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden bg-primary/10 mb-10 border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                   <BookOpen className="text-primary" size={20} />
               </div>
               <h1 className="text-2xl md:text-3xl font-bold text-foreground">Alkitab</h1>
            </div>
            <p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed">
              Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku. Jelajahi dan pelajari firman Tuhan setiap hari.
            </p>
          </div>
        </div>

        {/* Perjanjian Lama */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-foreground">Perjanjian Lama</h2>
            <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-bold">
              {oldTestamentBooks.length} Kitab
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {oldTestamentBooks.map(book => (
              <BookCard key={book} name={book} />
            ))}
          </div>
        </section>

        {/* Perjanjian Baru */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-foreground">Perjanjian Baru</h2>
            <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-bold">
              {newTestamentBooks.length} Kitab
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {newTestamentBooks.map(book => (
              <BookCard key={book} name={book} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
