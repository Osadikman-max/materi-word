# Kursus Microsoft Word — Website Materi 24 Pertemuan

Website statis berisi materi lengkap Microsoft Word dari nol hingga mahir, terstruktur dalam
**24 pertemuan** yang dikelompokkan menjadi **7 unit** pembelajaran.

Tidak perlu server, tidak perlu internet, tidak ada dependensi. Cukup buka berkas `index.html`.

---

## Cara Membuka

1. Buka File Explorer dan masuk ke folder `materi-word`.
2. Klik ganda **`index.html`** — situs akan terbuka di peramban (Chrome, Edge, atau Firefox).
3. Gunakan panel kiri untuk berpindah pertemuan, atau kotak pencarian di kanan atas.

> Ingin tampilan seperti aplikasi? Klik titik tiga di peramban → **Cast, save, and share / Aplikasi** →
> **Install this site as an app** (Chrome/Edge). Situs akan berjalan seperti aplikasi desktop dan tetap offline.

---

## Fitur Situs

| Fitur | Keterangan |
|---|---|
| 24 pertemuan lengkap | Tujuan pembelajaran, materi berbab, praktikum bertahap, latihan, rangkuman, dan kuis |
| Pencarian | Cari kata kunci apa pun (mis. `mail merge`, `daftar isi`) — hasil muncul di panel kiri dan halaman |
| Progres belajar | Tombol **Tandai selesai** per pertemuan, tersimpan otomatis di peramban (localStorage) |
| Kuis interaktif | Skor otomatis, penanda jawaban benar/salah, dan pembahasan setiap soal |
| Tema terang/gelap | Tombol bulan di kanan atas, mengikuti pengaturan sistem bila belum dipilih |
| Siap cetak | Tombol printer di kanan atas dan tombol **Cetak pertemuan ini** (termasuk gaya khusus cetak) |
| Navigasi lengkap | Tombol sebelumnya/berikutnya, daftar isi silabus, kembali ke atas, pintasan `Ctrl+K` untuk pencarian |
| Responsif | Tampil rapi di desktop, tablet, dan ponsel |

---

## Struktur Folder

```
materi-word/
├── index.html                  # kerangka situs (satu halaman, navigasi berbasis hash)
├── assets/
│   ├── css/style.css           # seluruh gaya tampilan, tema gelap, dan gaya cetak
│   └── js/
│       ├── app.js              # mesin aplikasi: router, render, kuis, progres, pencarian
│       ├── data-01.js          # materi pertemuan 1–8
│       ├── data-02.js          # materi pertemuan 9–16
│       └── data-03.js          # materi pertemuan 17–24
├── tools/
│   ├── validate.js             # pemeriksa kelengkapan struktur data materi
│   └── smoke.js                # uji render seluruh halaman tanpa browser
└── README.md
```

---

## Peta 24 Pertemuan

### Unit 1 — Fondasi & Antarmuka (1–3)
1. Pengenalan Microsoft Word dan Antarmuka Kerja
2. Mengetik, Menavigasi Teks, dan Menyimpan Pekerjaan
3. Memformat Teks: Font, Ukuran, Gaya, dan Warna

### Unit 2 — Paragraf & Tata Letak Halaman (4–6)
4. Memformat Paragraf, Perataan, Indentasi, dan Daftar
5. Tata Letak Halaman: Margin, Ukuran Kertas, Kolom, dan Watermark
6. Mencetak, Mengekspor, dan Mengelola Dokumen

### Unit 3 — Objek & Struktur Dokumen (7–9)
7. Tabel: Membuat, Memformat, dan Mengolah Data
8. Gambar, Bentuk, Ikon, dan SmartArt
9. Header, Footer, Nomor Halaman, dan Section Break

### Unit 4 — Produktivitas & Referensi (10–13)
10. Find, Replace, Pemeriksa Ejaan, dan Alat Penyuntingan
11. Styles: Kunci Dokumen Konsisten dan Profesional
12. Daftar Isi Otomatis, Bookmark, dan Hyperlink
13. Catatan Kaki, Caption, Sitasi, dan Daftar Pustaka

### Unit 5 — Mail Merge & Kolaborasi (14–16)
14. Mail Merge Dasar: Surat Massal dengan Sumber Data
15. Mail Merge Lanjutan: Label, Amplop, dan Direktori
16. Kolaborasi: Track Changes, Komentar, dan Proteksi Dokumen

### Unit 6 — Template, Formulir & Otomatisasi (17–21)
17. Template, Tema, dan Standarisasi Dokumen
18. Formulir Interaktif dengan Content Control dan Developer Tab
19. Dokumen Panjang: Outline, Penomoran Bertingkat, dan Master Document
20. Simbol, Persamaan Matematika, Drop Cap, dan Text Box
21. Pintasan, Quick Access Toolbar, dan Makro Dasar

### Unit 7 — Profesionalisme & Proyek Akhir (22–24)
22. Produktivitas Lanjutan: Quick Parts, AutoText, dan Alat Bantu Modern
23. Troubleshooting, Optimasi, Keamanan, dan Aksesibilitas
24. Proyek Akhir: Menyusun Dokumen Profesional Lengkap

---

## Statistik Materi

- **144** bagian materi terstruktur
- **403** langkah praktikum terbimbing
- **120** soal kuis dengan pembahasan
- **158** entri pintasan keyboard
- ± **32.000 kata** materi berbahasa Indonesia

---

## Cara Menambah atau Mengubah Materi

Materi disimpan sebagai objek JavaScript. Untuk menambah pertemuan, buka salah satu berkas
di `assets/js/`, lalu tambahkan objek baru ke dalam `window.MATERI.push(...)`:

```js
{
  id: 25,                                  // nomor pertemuan (urut)
  judul: "Judul Pertemuan",
  level: "Dasar",                          // Dasar | Menengah | Mahir
  durasi: "90 menit",
  deskripsi: "Ringkasan singkat pertemuan.",
  tujuan: ["Tujuan pertama", "Tujuan kedua", "Tujuan ketiga"],
  materi: [
    {
      h: "25.1 Judul Subbab",
      p: ["Paragraf pertama.", "Paragraf kedua."],
      list: ["Poin daftar"],
      steps: ["Langkah praktik pertama", "Langkah kedua"],
      tabel: { kepala: ["Kolom A"], rows: [["Isi A"]], catatan: "Catatan opsional" },
      tip: "Teks tip opsional.",
      peringatan: "Teks peringatan opsional.",
      catatan: "Teks catatan opsional."
    }
  ],
  praktikum: { judul: "Judul Praktikum", deskripsi: "Pengantar.", langkah: ["Langkah 1", "Langkah 2"] },
  latihan: ["Soal latihan 1", "Soal latihan 2"],
  shortcut: [{ k: "Ctrl+S", f: "Menyimpan dokumen" }],
  rangkuman: ["Poin rangkuman 1", "Poin rangkuman 2"],
  kuis: [{ q: "Pertanyaan?", opsi: ["A", "B", "C"], jawab: 1, bahasan: "Penjelasan jawaban." }]
}
```

Format teks dalam materi mendukung penanda ringan:

- `**teks**` → **tebal**
- `*teks*` → *miring*
- `` `teks` `` → `kode`
- `[[Ctrl+S]]` → <kbd>Ctrl+S</kbd>

Bila pertemuan baru melewati rentang unit yang ada, sesuaikan array `UNITS` di bagian atas
`assets/js/app.js`.

---

## Memeriksa Kesehatan Data

Jalankan salah satu perintah berikut dari dalam folder `materi-word` (memerlukan Node.js):

```powershell
node tools\validate.js   # memeriksa kelengkapan struktur seluruh pertemuan
node tools\smoke.js      # merender beranda dan 24 halaman, mendeteksi galat runtime
```
