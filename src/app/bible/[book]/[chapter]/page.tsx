import React from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { notFound } from 'next/navigation';
import { getBookData, getChapterVerses, getAllBooks } from '@/lib/bible';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Baca Alkitab | GracefulHeart',
};

// Next.js params type for nested dynamic routes
type Params = {
  book: string;
  chapter: string;
};

export default function ChapterPage({ params }: { params: Params }) {
  const decodedBookName = decodeURIComponent(params.book);
  const chapterNumber = parseInt(params.chapter, 10);
  
  const bookData = getBookData(decodedBookName);
  const verses = getChapterVerses(decodedBookName, chapterNumber);

  if (!bookData || !verses || isNaN(chapterNumber)) {
    notFound();
  }

  const totalChapters = bookData.chapter.length;
  const hasPrev = chapterNumber > 1;
  const hasNext = chapterNumber < totalChapters;

  return (
    <AppLayout>
      <div className="pb-16 animate-fade-in max-w-3xl mx-auto">
        {/* Top Navigation */}
        <Link 
          href={`/bible/${params.book}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft size={16} />
          Daftar Pasal {bookData.book}
        </Link>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
            <BookOpen size={24} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {bookData.book} {chapterNumber}
          </h1>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Reading Area */}
        <div className="bg-card rounded-3xl p-6 md:p-10 shadow-sm border border-border mb-10">
          <div className="space-y-4">
            {verses.map((verseText, index) => {
              const verseNumber = index + 1;
              return (
                <div key={verseNumber} className="flex items-start gap-4 group">
                  <span className="text-primary font-bold text-sm min-w-[24px] text-right mt-1 select-none opacity-60 group-hover:opacity-100 transition-opacity">
                    {verseNumber}
                  </span>
                  <p className="verse-serif text-foreground text-lg md:text-xl leading-relaxed">
                    {verseText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between gap-4">
          {hasPrev ? (
            <Link
              href={`/bible/${params.book}/${chapterNumber - 1}`}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Pasal Sebelumnya</span>
              <span className="sm:hidden">Seb</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          
          {hasNext ? (
            <Link
              href={`/bible/${params.book}/${chapterNumber + 1}`}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
            >
              <span className="hidden sm:inline">Pasal Selanjutnya</span>
              <span className="sm:hidden">Sel</span>
              <ChevronRight size={20} />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </AppLayout>
  );
}
