import React from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { notFound } from 'next/navigation';
import { getBookData, getAllBooks } from '@/lib/bible';
import { ChevronLeft, Book } from 'lucide-react';

export const metadata = {
  title: 'Pilih Pasal | GracefulHeart',
};

// Required for static site generation with dynamic routes if we want,
// but Next.js App Router works dynamically by default.
export function generateStaticParams() {
  return getAllBooks().map((book) => ({
    book: book,
  }));
}

export default function BookPage({ params }: { params: { book: string } }) {
  const decodedBookName = decodeURIComponent(params.book);
  const data = getBookData(decodedBookName);

  if (!data) {
    notFound();
  }

  const chapterCount = data.chapter?.length || 0;
  const chapters = Array.from({ length: chapterCount }, (_, i) => i + 1);

  return (
    <AppLayout>
      <div className="pb-12 animate-fade-in max-w-4xl mx-auto">
        {/* Navigation */}
        <Link 
          href="/bible"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft size={16} />
          Kembali ke Daftar Kitab
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Book className="text-primary" size={32} />
              {data.book}
            </h1>
            <p className="text-muted-foreground">Pilih pasal untuk mulai membaca</p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-semibold text-sm">
            {chapterCount} Pasal
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
          {chapters.map((chapter) => (
            <Link
              key={chapter}
              href={`/bible/${params.book}/${chapter}`}
              className="group relative flex items-center justify-center aspect-square bg-card hover:bg-primary border border-border hover:border-primary rounded-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-300 z-10">
                {chapter}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
