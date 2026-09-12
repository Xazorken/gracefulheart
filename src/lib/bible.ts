import alkitabData from '@/data/alkitab.json';

export const oldTestamentBooks = [
  'Kejadian', 'Keluaran', 'Imamat', 'Bilangan', 'Ulangan',
  'Yosua', 'Hakim-hakim', 'Rut', '1 Samuel', '2 Samuel',
  '1 Raja-raja', '2 Raja-raja', '1 Tawarikh', '2 Tawarikh',
  'Ezra', 'Nehemia', 'Ester', 'Ayub', 'Mazmur', 'Amsal',
  'Pengkhotbah', 'Kidung Agung', 'Yesaya', 'Yeremia',
  'Ratapan ', 'Yehezkiel', 'Daniel', 'Hosea', 'Yoel',
  'Amos', 'Obaja', 'Yunus', 'Mikha', 'Nahum', 'Habakuk',
  'Zefanya', 'Hagai', 'Zakharia', 'Maleakhi'
];

export const newTestamentBooks = [
  'Matius', 'Markus', 'Lukas', 'Yohanes', 'Kisah Para Rasul',
  'Roma', '1 Korintus', '2 Korintus', 'Galatia', 'Efesus',
  'Filipi', 'Kolose', '1 Tesalonika', '2 Tesalonika',
  '1 Timotius', '2 Timotius', 'Titus', 'Filemon', 'Ibrani',
  'Yakobus', '1 Petrus', '2 Petrus', '1 Yohanes', '2 Yohanes',
  '3 Yohanes', 'Yudas', 'Wahyu'
];

export interface BibleBook {
  book: string;
  chapter: string[][]; // Array of chapters, each containing an array of verses
}

export const getAllBooks = () => {
  return [...oldTestamentBooks, ...newTestamentBooks];
};

export const getBookData = (bookName: string): BibleBook | null => {
  // Decode in case it's URL encoded
  const decodedName = decodeURIComponent(bookName);
  
  // Try exact match first
  let data = (alkitabData as any)[decodedName];
  if (data) return data;
  
  // Try matching with trailing space just in case (e.g. 'Ratapan ')
  data = (alkitabData as any)[decodedName + ' '];
  if (data) return data;

  // Try matching lowercase
  const key = Object.keys(alkitabData).find(k => k.trim().toLowerCase() === decodedName.trim().toLowerCase());
  if (key) {
    return (alkitabData as any)[key];
  }

  return null;
};

export const getChapterVerses = (bookName: string, chapterNumber: number): string[] | null => {
  const book = getBookData(bookName);
  if (!book) return null;
  // chapterNumber is 1-indexed
  const chapterIdx = chapterNumber - 1;
  if (chapterIdx >= 0 && chapterIdx < book.chapter.length) {
    return book.chapter[chapterIdx];
  }
  return null;
};
