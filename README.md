# 📖 GracefulHeart - Platform Alkitab & Konseling Spiritual AI

<p align="center">
  <img src="public/next.svg" alt="GracefulHeart Logo" width="120" />
</p>

<p align="center">
  <b>Aplikasi Alkitab Digital Modern dan Pendamping Perenungan Spiritual Berbasis AI</b>
</p>

<p align="center">
  <a href="#-fitur-utama">Fitur Utama</a> •
  <a href="#-teknologi-yang-digunakan">Teknologi</a> •
  <a href="#-cara-instalasi--memulai">Instalasi</a> •
  <a href="#-struktur-proyek">Struktur Proyek</a> •
  <a href="#-lisensi">Lisensi</a>
</p>

---

## 🌟 Tentang GracefulHeart

**GracefulHeart** adalah platform aplikasi web berbasis Next.js yang dirancang untuk membantu pengguna memperdalam kehidupan spiritual sehari-hari. Aplikasi ini menggabungkan kemudahan membaca Alkitab Bahasa Indonesia lengkap dengan fitur **HeartTalk AI Chat** — asisten spiritual cerdas yang siap mendengarkan, memberikan doa, dan membagikan firman yang relevan sesuai dengan suasana hati atau pergumulan Anda.

---

## ✨ Fitur Utama

- 📖 **Alkitab Digital Lengkap (TB - Bahasa Indonesia)**
  - Mencakup **66 Kitab** (Perjanjian Lama dan Perjanjian Baru).
  - Navigasi antar kitab dan pasal yang mudah, fleksibel, dan responsif.
  - Tampilan mode baca yang nyaman dan minim gangguan (*distraction-free*).

- 💬 **HeartTalk AI Chat (Asisten Spiritual AI)**
  - Teman curhat spiritual interaktif berbasis kecerdasan buatan.
  - Memberikan respon empatik, kutipan ayat Alkitab yang relevan, serta saran doa.
  - Rekomendasi topik konseling (Kedamaian, Kecemasan, Pengampunan, Harapan, dll.).

- 🏠 **Beranda & Ayat Harian**
  - Ringkasan ayat harian (*Verse of the Day*) untuk mengawali hari.
  - Navigasi cepat ke Alkitab, HeartTalk Chat, dan Jurnal Refleksi.
  - Tampilan statistik perenungan dan progres membaca.

- 📝 **Jurnal Refleksi Spiritual**
  - Catatan pribadi untuk menyimpan hasil perenungan dan doa harian.

- 🔐 **Autentikasi Pengguna**
  - Tampilan Login dan Pendaftaran pengguna yang aman dan elegan.

---

## 🛠️ Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan *tech stack* modern untuk memastikan performa yang cepat, aman, dan antarmuka yang indah:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi & Interaksi**: [Framer Motion](https://www.framer.com/motion/)
- **Ikonografi**: [Lucide React](https://lucide.dev/) & [Heroicons](https://heroicons.com/)
- **Komponen UI & Notifikasi**: [Sonner](https://sonner.emilkowal.ski/)
- **Data Alkitab**: `@anchovy_studios/alkitab` (Integrasi Teks Alkitab Terjemahan Baru Bahasa Indonesia)

---

## 🚀 Cara Instalasi & Memulai

### Prasyarat
Pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (Versi 18 atau lebih baru)
- `npm` / `yarn` / `pnpm`

### Langkah-Langkah

1. **Klon Repositori**
   ```bash
   git clone https://github.com/Xazorken/gracefulheart.git
   cd gracefulheart
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment Variables (Opsional)**
   Buat file `.env.local` di direktori utama dan tambahkan kunci API yang dibutuhkan (misalnya OpenAI API Key jika menggunakan model AI kustom):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

5. **Buka di Browser**
   Buka [http://localhost:3000](http://localhost:3000) pada peramban web Anda untuk melihat aplikasi.

---

## 📁 Struktur Proyek

```
Bible AI/
├── src/
│   ├── app/
│   │   ├── alkitab/               # Halaman & Navigasi Alkitab (Daftar Kitab, Pasal, Mode Baca)
│   │   ├── heart-talk-ai-chat/    # Halaman Konseling AI (HeartTalk Chat)
│   │   ├── home/                  # Halaman Utama / Beranda
│   │   ├── sign-up-login-screen/  # Halaman Autentikasi Pengguna
│   │   ├── layout.tsx             # Main Layout Aplikasi
│   │   └── page.tsx               # Redirect / Entry Point
│   ├── components/                # Komponen UI Global (AppLayout, TopNav, NavItem, dll)
│   └── lib/                       # Utility & Helper Functions
├── public/                        # Aset Statis (Gambar, Ikon)
├── package.json                   # Dependensi Proyek & Script
└── README.md                      # Dokumentasi Proyek
```

---

## 📜 Commands (Script)

| Command | Keterangan |
| :--- | :--- |
| `npm run dev` | Menjalankan server pengembangan (*development mode*) |
| `npm run build` | Membuat *production build* aplikasi |
| `npm run start` | Menjalankan aplikasi yang sudah di-build |
| `npm run lint` | Memeriksa kualitas & format kode dengan ESLint |

---

## 🤝 Kontribusi

Kontribusi selalu terbuka! Jika Anda memiliki saran, perbaikan bug, atau ide fitur baru, silakan buat *Pull Request* atau buka *Issue* pada repositori ini.

---

## 📄 Lisensi

Proyek ini dilindungi di bawah lisensi MIT. Silakan gunakan dan kembangkan sesuai kebutuhan Anda.
