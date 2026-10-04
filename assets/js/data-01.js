/* ===========================================================
   Data materi — Pertemuan 1 s.d. 8
   =========================================================== */
window.MATERI = window.MATERI || [];
window.MATERI.push(

{
  id: 1,
  judul: "Pengenalan Microsoft Word dan Antarmuka Kerja",
  level: "Dasar",
  durasi: "90 menit",
  deskripsi: "Berkenalan dengan Microsoft Word, memahami kegunaannya, mengenali bagian-bagian antarmuka, serta membuka dan menyimpan dokumen pertama Anda.",
  tujuan: [
    "Menjelaskan fungsi dan ruang lingkup penggunaan Microsoft Word.",
    "Mengenali versi Word dan perbedaan tampilan antarversi.",
    "Mengidentifikasi bagian antarmuka: Ribbon, tab, group, Quick Access Toolbar, dan status bar.",
    "Membuka, menyimpan, dan menutup dokumen dengan benar.",
    "Memahami jenis-jenis format berkas Word (.docx, .doc, .pdf, .rtf, .txt)."
  ],
  materi: [
    {
      h: "1.1 Apa Itu Microsoft Word?",
      p: [
        "Microsoft Word adalah program pengolah kata (word processor) yang dikembangkan Microsoft dan merupakan bagian dari paket Microsoft Office (kini Microsoft 365). Program ini dipakai untuk membuat, menyunting, memformat, dan mencetak dokumen berbasis teks.",
        "Sejak dirilis pertama kali pada 1983, Word berkembang dari aplikasi pengetikan sederhana menjadi alat produksi dokumen lengkap: pembuatan laporan, surat resmi, skripsi, proposal, sertifikat, hingga surat massal."
      ],
      list: [
        "**Menulis dan menyunting** teks dengan pemeriksa ejaan serta tata bahasa.",
        "**Memformat** huruf, paragraf, halaman, tabel, gambar, dan grafik.",
        "**Menyusun dokumen panjang** dengan daftar isi, catatan kaki, dan daftar pustaka otomatis.",
        "**Berkolaborasi** melalui komentar, pelacakan perubahan, dan penyuntingan bersama secara real-time.",
        "**Mengotomatisasi** pekerjaan berulang memakai gaya (styles), Quick Parts, dan makro.",
        "**Menerbitkan** dokumen ke PDF, atau langsung mencetaknya dengan tata letak profesional."
      ],
      tip: "Word dipakai hampir di semua bidang: administrasi perkantoran, akademik, hukum, kesehatan, pendidikan, hingga penerbitan. Menguasainya adalah keterampilan dasar yang nilainya bertahan lama."
    },
    {
      h: "1.2 Versi Microsoft Word yang Umum Ditemui",
      p: ["Tampilan Word berubah antarversi, tetapi logika menunya tetap mirip. Mengenali versi membantu Anda menemukan menu yang disebut dalam tutorial mana pun."],
      tabel: {
        kepala: ["Versi", "Tahun", "Ciri Khas"],
        rows: [
          ["Word 2003", "2003", "Masih memakai sistem menu tarik-turun (dropdown), format berkas .doc"],
          ["Word 2007", "2006", "Memperkenalkan **Ribbon** dan format berkas .docx"],
          ["Word 2010 / 2013", "2010 / 2013", "Ribbon dapat dikustomisasi, penyimpanan ke OneDrive mulai dikenal"],
          ["Word 2016 / 2019", "2015 / 2018", "Kolaborasi real-time, Tell Me / Search, versi beli sekali (perpetual)"],
          ["Word 2021", "2021", "Penyempurnaan tampilan, dukungan mode gelap"],
          ["Microsoft 365 (Word 365)", "2017–kini", "Langganan, selalu diperbarui, fitur AI (Editor, Copilot), kolaborasi awan"]
        ],
        catatan: "Dalam kursus ini, istilah menu mengacu pada Word 2016 ke atas. Bila versi Anda lebih lama, sebagian menu mungkin berada di tab atau grup berbeda, tetapi fungsinya sama."
      }
    },
    {
      h: "1.3 Tiga Cara Membuka Microsoft Word",
      steps: [
        "**Lewat menu Start:** klik tombol **Start** di Windows → ketik `Word` → tekan **Enter** pada hasil pencarian.",
        "**Lewat ikon desktop / taskbar:** klik ganda ikon **Word** (ikon huruf W biru) di desktop, atau klik sekali pada ikon di taskbar.",
        "**Lewat berkas dokumen:** klik ganda berkas `.docx` di File Explorer. Word akan terbuka sekaligus memuat berkas tersebut.",
        "Setelah terbuka, Anda disuguhkan layar **Start / Backstage awal** berisi pilihan **Blank document** (dokumen kosong) dan berbagai templat siap pakai."
      ],
      tip: "Tekan [[Ctrl+N]] dari dalam Word untuk langsung membuat dokumen kosong baru tanpa melewati layar awal."
    },
    {
      h: "1.4 Mengenal Antarmuka Microsoft Word",
      p: ["Antarmuka Word tersusun dari beberapa zona. Kenali namanya, karena seluruh instruksi dalam kursus ini akan merujuk pada istilah-istilah ini."],
      sub: [
        {
          h: "a. Title Bar (Bilah Judul)",
          p: ["Terletak paling atas. Menampilkan nama berkas dan nama aplikasi, misalnya `Proposal Kegiatan.docx - Word`. Di sisi kiri terdapat Quick Access Toolbar, di sisi kanan tombol minimize, maximize, dan close."]
        },
        {
          h: "b. Quick Access Toolbar (QAT)",
          p: ["Deretan ikon kecil di kiri atas: Save, Undo, dan Redo (secara bawaan). Toolbar ini dapat ditambah perintah favorit sehingga selalu tersedia apa pun tab yang sedang aktif. Klik panah kecil di ujungnya → pilih perintah, atau **More Commands** untuk menambah dari daftar lengkap."]
        },
        {
          h: "c. Ribbon",
          p: ["Area perintah utama berbentuk pita lebar di bawah Title Bar. Ribbon berisi **tab**, setiap tab berisi **group**, dan setiap group berisi tombol perintah (command). Contoh: tab **Home** memuat group **Clipboard, Font, Paragraph, Styles, Editing**."]
        },
        {
          h: "d. Tab Ribbon dan Fungsinya",
          tabel: {
            kepala: ["Tab", "Fungsi Utama"],
            rows: [
              ["File", "Membuka Backstage view: New, Open, Save, Print, Share, Export, Info, Options"],
              ["Home", "Perintah yang paling sering dipakai: Clipboard, Font, Paragraph, Styles, Editing"],
              ["Insert", "Menyisipkan objek: Pages, Table, Illustrations, Media, Links, Header & Footer, Text, Symbols"],
              ["Draw", "Menulis dan menggambar dengan pena, penyorot, penghapus, serta mengubah tinta menjadi bentuk"],
              ["Design", "Tema dokumen, kumpulan gaya (Style Set), warna halaman, batas halaman, watermark"],
              ["Layout", "Ukuran halaman, margin, orientasi, kolom, indentasi, jarak spasi, Arrange objek"],
              ["References", "Daftar isi, catatan kaki, sitasi, daftar pustaka, keterangan gambar, indeks"],
              ["Mailings", "Mail merge: envelopes, labels, surat massal, pemilihan penerima"],
              ["Review", "Proofing, Comments, Track Changes, Compare, Protect, Accessibility Checker"],
              ["View", "Mode tampilan, Ruler, Gridlines, Navigation Pane, Zoom, Window, Macros"],
              ["Help", "Bantuan, pelatihan, umpan balik, What's New"]
            ],
            catatan: "Tab kontekstual (misalnya Format Tabel, Picture Format, Header & Footer) hanya muncul saat objek terkait sedang dipilih. Tandanya: latar tab berwarna khusus."
          }
        },
        {
          h: "e. Area Dokumen, Ruler, dan Scrollbar",
          list: [
            "**Area dokumen (page):** kanvas putih tempat Anda mengetik, dengan batas halaman sesuai ukuran kertas.",
            "**Ruler:** penggaris horizontal dan vertikal untuk mengatur margin, indentasi, dan posisi tabulasi. Aktifkan lewat tab **View** → centang **Ruler**.",
            "**Scrollbar:** penggeser vertikal dan horizontal untuk menjelajah dokumen.",
            "**Tombol View Shortcuts** di kanan bawah: Read Mode, Print Layout, Web Layout.",
            "**Zoom slider:** mengatur persentase perbesaran tampilan (tidak memengaruhi hasil cetak)."
          ]
        },
        {
          h: "f. Status Bar",
          p: ["Garis tipis di bagian paling bawah jendela. Menampilkan nomor halaman dan jumlah halaman, jumlah kata, indikator bahasa, ikon pemeriksa ejaan, serta tombol pengubah tampilan. Klik kanan pada status bar untuk memilih informasi apa saja yang ingin ditampilkan."]
        }
      ],
      tip: "Jika Ribbon terasa memakan tempat, klik ganda nama tab aktif atau tekan [[Ctrl+F1]] untuk menyembunyikan/menampilkannya kembali."
    },
    {
      h: "1.5 Menyimpan Dokumen dan Memahami Format Berkas",
      steps: [
        "Tekan [[Ctrl+S]] atau klik **File → Save**.",
        "Jika dokumen baru, Word membuka **Backstage** dan meminta lokasi penyimpanan.",
        "Tentukan folder tujuan, misalnya `Dokumen\\Kursus Word`.",
        "Isi **File name** dengan nama yang deskriptif, contoh: `Latihan 01 - Pengenalan Word`.",
        "Pada dropdown **Save as type**, pilih format yang diinginkan, lalu klik **Save**."
      ],
      tabel: {
        kepala: ["Format", "Ekstensi", "Kapan Dipakai"],
        rows: [
          ["Word Document", ".docx", "Format standar modern. Pilihan utama untuk pekerjaan sehari-hari."],
          ["Word 97-2003 Document", ".doc", "Hanya bila dokumen harus dibuka pada Word versi sangat lama."],
          ["PDF", ".pdf", "Untuk dikirim/dicetak agar tata letak tidak berubah. Ukuran tampilan terkunci."],
          ["Rich Text Format", ".rtf", "Pertukaran antarprogram berbeda; mempertahankan sebagian besar format dasar."],
          ["Plain Text", ".txt", "Teks murni tanpa format sama sekali."],
          ["Web Page", ".htm/.html", "Untuk dipublikasikan ke web (jarang dipakai untuk dokumen kantor)."],
          ["Word Template", ".dotx", "Menyimpan sebagai kerangka dasar dokumen baru (dibahas pada Pertemuan 17)."],
          ["Word Macro-Enabled", ".docm", "Diperlukan bila dokumen memuat makro VBA (Pertemuan 21)."]
        ],
        catatan: "Sejak Word 2007, format bawaan adalah .docx berbasis XML. Format ini lebih kecil, lebih tahan rusak, dan mendukung fitur modern."
      },
      peringatan: "Simpan pekerjaan sejak awal, bukan setelah selesai. Kebiasaan menekan [[Ctrl+S]] setiap 5–10 menit mencegah kehilangan data akibat mati listrik atau aplikasi berhenti mendadak."
    },
    {
      h: "1.6 Menutup Dokumen dan Keluar dari Word",
      list: [
        "**Menutup dokumen saja:** **File → Close**, atau [[Ctrl+W]]. Jendela Word tetap terbuka dan menampilkan layar awal.",
        "**Keluar dari aplikasi:** **File → Close** pada dokumen terakhir, atau klik tombol **X** di kanan atas.",
        "Jika ada perubahan yang belum disimpan, Word menampilkan dialog **Save / Don't Save / Cancel**. Pilih **Save** untuk menyimpan, **Don't Save** untuk membuang perubahan."
      ],
      tip: "Biasakan memberi nama folder dan berkas yang konsisten, misalnya `2024-05-12 Laporan Bulanan.docx`. Penamaan rapi menghemat waktu saat mencari dokumen."
    }
  ],
  praktikum: {
    judul: "Tur Antarmuka dan Dokumen Pertama",
    deskripsi: "Praktik ini memastikan Anda mengenali setiap bagian antarmuka dan mampu menyimpan berkas dengan format yang tepat.",
    langkah: [
      "Buka Microsoft Word, pilih **Blank document**.",
      "Amati **Title Bar** di atas. Perhatikan tulisan `Document1 - Word` (nama sementara sebelum disimpan).",
      "Klik setiap tab Ribbon secara bergantian: **Home, Insert, Draw, Design, Layout, References, Mailings, Review, View, Help**. Catat satu perintah yang menarik perhatian Anda dari masing-masing tab.",
      "Pada tab **Home**, perhatikan nama group: **Clipboard, Font, Paragraph, Styles, Editing**.",
      "Klik kanan pada Ribbon → pilih **Customize the Ribbon** untuk melihat bagaimana tab dan group dapat diubah, lalu klik **Cancel**.",
      "Klik tab **View** → centang **Ruler** dan **Navigation Pane** agar penggaris serta panel navigasi tampil.",
      "Ketiklah dua baris berikut di halaman: baris pertama `Latihan Pertemuan 1 - Nama Anda`, baris kedua `Saya sedang belajar Microsoft Word.`",
      "Tekan [[Ctrl+S]]. Pada dialog simpan, buat folder baru bernama `Kursus Word` di Documents, beri nama berkas `Latihan 01 - Pengenalan Word`, lalu klik **Save**.",
      "Perhatikan Title Bar berubah menjadi nama berkas yang baru Anda simpan.",
      "Tekan **F12** (Save As), lalu simpan salinan kedua dengan format **PDF**. Beri nama `Latihan 01 - Pengenalan Word (PDF)`.",
      "Buka File Explorer, bandingkan ukuran berkas `.docx` dengan `.pdf` yang baru Anda buat.",
      "Tutup dokumen dengan [[Ctrl+W]], lalu buka kembali melalui **File → Open → Recent** untuk memastikan berkas tersimpan dengan baik."
    ]
  },
  latihan: [
    "Sebutkan dan jelaskan fungsi lima tab Ribbon yang menurut Anda paling sering dipakai dalam pekerjaan kantor.",
    "Buat tabel sederhana di buku catatan Anda yang memuat: nama tab, nama group di dalamnya, dan tiga perintah di setiap group untuk tab **Home**.",
    "Jelaskan perbedaan antara **menyimpan** dan **Save As**. Kapan masing-masing digunakan?",
    "Sebutkan tiga format berkas Word beserta situasi penggunaan yang tepat untuk masing-masing.",
    "Sebutkan minimal tiga cara membuka aplikasi Microsoft Word di komputer Anda."
  ],
  shortcut: [
    { k: "Ctrl+N", f: "Membuat dokumen baru" },
    { k: "Ctrl+O", f: "Membuka dokumen yang sudah ada" },
    { k: "Ctrl+S", f: "Menyimpan dokumen" },
    { k: "F12", f: "Save As (menyimpan sebagai berkas baru / format lain)" },
    { k: "Ctrl+W", f: "Menutup dokumen aktif" },
    { k: "Ctrl+P", f: "Membuka pengaturan cetak" },
    { k: "Ctrl+F1", f: "Menyembunyikan atau menampilkan Ribbon" },
    { k: "Esc", f: "Membatalkan perintah atau menutup kotak dialog" }
  ],
  rangkuman: [
    "Microsoft Word adalah pengolah kata untuk menulis, memformat, dan menerbitkan dokumen.",
    "Antarmuka Word terdiri atas Title Bar, Quick Access Toolbar, Ribbon (tab–group–perintah), area dokumen, Ruler, scrollbar, dan status bar.",
    "Setiap tab Ribbon menangani kelompok pekerjaan tertentu, dan tab kontekstual muncul saat objek tertentu dipilih.",
    "Format berkas standar modern adalah .docx; gunakan .pdf untuk dokumen yang akan dibagikan agar tata letaknya tetap.",
    "Simpan pekerjaan sejak awal dan lakukan penyimpanan berkala dengan Ctrl+S."
  ],
  kuis: [
    {
      q: "Bagian antarmuka Word yang berisi kumpulan tab, group, dan perintah disebut…",
      opsi: ["Status bar", "Ribbon", "Quick Access Toolbar", "Scrollbar"],
      jawab: 1,
      bahasan: "Ribbon adalah pita perintah utama. Di dalamnya terdapat tab (Home, Insert, dan seterusnya), setiap tab memuat group, dan setiap group memuat tombol perintah."
    },
    {
      q: "Format berkas bawaan Microsoft Word versi 2007 ke atas adalah…",
      opsi: [".doc", ".rtf", ".docx", ".txt"],
      jawab: 2,
      bahasan: "Sejak Word 2007 format bawaannya adalah .docx yang berbasis XML, lebih ringkas dan mendukung fitur modern. Format .doc adalah format lama Word 97-2003."
    },
    {
      q: "Perintah untuk menyimpan dokumen dengan nama atau format berbeda adalah…",
      opsi: ["Ctrl+S", "F12 (Save As)", "Ctrl+W", "Ctrl+O"],
      jawab: 1,
      bahasan: "F12 membuka Save As sehingga Anda dapat menyimpan salinan dengan nama, lokasi, atau format baru tanpa mengubah berkas aslinya."
    },
    {
      q: "Bagian antarmuka yang menampilkan jumlah kata dan nomor halaman adalah…",
      opsi: ["Title Bar", "Ribbon", "Status Bar", "Navigation Pane"],
      jawab: 2,
      bahasan: "Status Bar berada di bagian bawah jendela dan menampilkan nomor halaman, jumlah halaman, jumlah kata, indikator bahasa, serta ikon pemeriksa ejaan."
    },
    {
      q: "Tab Ribbon yang digunakan untuk menyisipkan tabel, gambar, dan header adalah…",
      opsi: ["Home", "Insert", "Layout", "Review"],
      jawab: 1,
      bahasan: "Tab Insert khusus untuk menyisipkan objek: Pages, Table, Illustrations, Media, Links, Header & Footer, Text, dan Symbols."
    }
  ]
},

{
  id: 2,
  judul: "Mengetik, Menavigasi Teks, dan Menyimpan Pekerjaan",
  level: "Dasar",
  durasi: "90 menit",
  deskripsi: "Membangun keterampilan mengetik yang benar, menavigasi dokumen dengan cepat, menyeleksi teks secara presisi, serta menguasai Undo, Redo, dan AutoSave.",
  tujuan: [
    "Mengetik dengan teknik dan postur tangan yang benar.",
    "Memindahkan kursor dan menjelajah dokumen memakai mouse maupun keyboard.",
    "Menyeleksi teks dengan berbagai cara: kata, baris, paragraf, blok, seluruh dokumen.",
    "Menggunakan Undo, Redo, Repeat, dan memahami batasannya.",
    "Mengaktifkan AutoSave dan AutoRecover untuk melindungi pekerjaan."
  ],
  materi: [
    {
      h: "2.1 Kebiasaan Mengetik yang Benar di Word",
      p: [
        "Word bukan mesin tik. Ada aturan dasar yang membuat dokumen Anda otomatis lebih rapi bila dipatuhi sejak awal."
      ],
      list: [
        "**Satu spasi setelah tanda baca.** Setelah titik, koma, titik dua, atau titik koma cukup satu kali tekan **Space**, bukan dua.",
        "**Jangan menekan Enter di akhir setiap baris.** Biarkan Word yang membungkus baris (word wrap). Enter hanya untuk mengakhiri paragraf.",
        "**Jangan memakai spasi untuk menggeser teks ke kanan.** Gunakan indentasi, tabulasi, atau perataan paragraf.",
        "**Jangan menekan Enter berulang-ulang** untuk pindah halaman. Gunakan **Ctrl+Enter** (page break).",
        "**Jangan membuat tabel dengan deretan spasi.** Gunakan fitur Table (Pertemuan 7).",
        "**Ratakan dokumen ke kiri (align left)** saat menulis, atur perataan setelah teks selesai."
      ],
      tip: "Menekan tombol [[Ctrl+Shift+8]] akan menampilkan tanda pemformatan (¶ untuk paragraf, · untuk spasi). Cara tercepat memeriksa apakah dokumen Anda masih bersih dari spasi ganda dan Enter berlebih."
    },
    {
      h: "2.2 Memindahkan Kursor dan Menjelajah Dokumen",
      p: ["Kursor (titik sisip / insertion point) adalah tempat teks akan diketik. Menguasai perpindahannya membuat Anda jauh lebih cepat bekerja."],
      sub: [
        {
          h: "Dengan mouse",
          list: [
            "Klik sekali untuk menempatkan kursor di posisi tertentu.",
            "Klik ganda pada sebuah kata untuk menyeleksinya.",
            "Klik tiga kali (triple click) di dalam paragraf untuk menyeleksi seluruh paragraf.",
            "**Ctrl + klik** untuk menyeleksi satu kalimat."
          ]
        },
        {
          h: "Dengan keyboard",
          list: [
            "[[←]] [[→]] satu karakter; [[Ctrl+←]] / [[Ctrl+→]] satu kata.",
            "[[↑]] [[↓]] satu baris; [[Ctrl+↑]] / [[Ctrl+↓]] satu paragraf.",
            "[[Home]] awal baris; [[End]] akhir baris.",
            "[[Ctrl+Home]] awal dokumen; [[Ctrl+End]] akhir dokumen.",
            "[[PgUp]] / [[PgDn]] satu layar ke atas atau ke bawah.",
            "[[Ctrl+PgUp]] / [[Ctrl+PgDn]] ke halaman sebelumnya atau berikutnya."
          ]
        },
        {
          h: "Navigation Pane",
          p: ["Aktifkan lewat tab **View** → centang **Navigation Pane** (atau tekan [[Ctrl+F]]). Panel kiri ini menampilkan tab **Headings** (kerangka dokumen berdasarkan gaya judul), **Pages** (thumbnail halaman), dan **Results** (hasil pencarian). Cara tercepat melompat ke bagian tertentu pada dokumen panjang."]
        }
      ]
    },
    {
      h: "2.3 Menyeleksi Teks (Selection)",
      p: ["Hampir semua perintah format bekerja pada teks yang terseleksi. Menyeleksi dengan tepat adalah keterampilan inti."],
      tabel: {
        kepala: ["Yang Ingin Diseleksi", "Cara Cepat"],
        rows: [
          ["Satu kata", "Klik ganda pada kata, atau [[Ctrl+Shift+→]]"],
          ["Satu baris", "Klik di margin kiri sejajar baris tersebut"],
          ["Beberapa baris", "Tarik (drag) di margin kiri"],
          ["Satu paragraf", "Klik tiga kali di dalam paragraf, atau [[Ctrl+Shift+↓]]"],
          ["Satu kalimat", "[[Ctrl]] + klik di dalam kalimat"],
          ["Blok sembarang", "Klik di awal, tahan [[Shift]], klik di akhir"],
          ["Seluruh dokumen", "[[Ctrl+A]], atau [[Ctrl]] + klik di margin kiri"],
          ["Teks vertikal (kolom)", "Tahan [[Alt]] lalu tarik dengan mouse"],
          ["Dari kursor ke akhir baris", "[[Shift+End]]"],
          ["Dari kursor ke awal dokumen", "[[Ctrl+Shift+Home]]"]
        ],
        catatan: "Menekan tombol panah apa pun setelah menyeleksi akan menghapus seleksi. Untuk membatalkan seleksi tanpa menghapus, klik di tempat lain atau tekan salah satu tombol Shift."
      },
      tip: "Bila seleksi meleset sedikit, jangan ulangi dari awal: tahan [[Shift]] lalu klik titik akhir yang benar untuk menyesuaikan."
    },
    {
      h: "2.4 Undo, Redo, dan Repeat",
      list: [
        "**Undo** ([[Ctrl+Z]]): membatalkan tindakan terakhir. Dapat ditekan berulang kali hingga 100 langkah ke belakang.",
        "**Redo** ([[Ctrl+Y]]): mengembalikan tindakan yang baru saja dibatalkan.",
        "**Repeat** ([[F4]] atau [[Ctrl+Y]]): mengulang tindakan terakhir pada posisi lain. Contoh: setelah menebalkan satu kata, pilih kata lain dan tekan [[F4]] agar ikut ditebalkan.",
        "**Riwayat Undo:** klik panah kecil di samping ikon Undo pada Quick Access Toolbar untuk melihat daftar tindakan dan melompat mundur langsung ke titik tertentu."
      ],
      peringatan: "Undo tidak dapat membatalkan tindakan yang sudah disimpan lalu dokumen ditutup. Selain itu, beberapa tindakan seperti penggantian gaya tertentu atau operasi makro mungkin tidak dapat di-undo."
    },
    {
      h: "2.5 Menyimpan, AutoSave, dan AutoRecover",
      sub: [
        {
          h: "AutoSave",
          p: ["Bila dokumen disimpan di OneDrive atau SharePoint, sakelar **AutoSave** di kiri atas dapat diaktifkan. Word akan menyimpan setiap perubahan secara otomatis, sehingga tidak ada lagi tombol simpan yang terlupa."]
        },
        {
          h: "AutoRecover",
          p: ["Untuk dokumen lokal, Word menyimpan salinan pemulihan secara berkala. Atur intervalnya di **File → Options → Save**. Jika Word menutup mendadak, dokumen akan ditawarkan kembali saat dibuka. Gunakan **File → Info → Manage Document → Recover Unsaved Documents** untuk mencari berkas yang belum pernah disimpan."]
        },
        {
          h: "Versi dokumen",
          p: ["Bila dokumen berada di OneDrive, **File → Info → Version History** menampilkan daftar versi lama yang dapat dibuka dan dipulihkan. Sangat berguna ketika perubahan terbaru justru merusak dokumen."]
        }
      ],
      steps: [
        "Buka **File → Options → Save**.",
        "Pastikan **Save AutoRecover information every** dicentang dan atur ke **5 menit**.",
        "Centang **Keep the last AutoRecovered version if I close without saving**.",
        "Klik **OK**, lalu simpan pengaturan dengan menekan [[Ctrl+S]] pada dokumen Anda."
      ]
    },
    {
      h: "2.6 Menampilkan dan Menyembunyikan Tanda Pemformatan",
      p: ["Tanda pemformatan membantu mendiagnosis masalah tata letak. Tekan [[Ctrl+Shift+8]] untuk menampilkan atau menyembunyikannya."],
      tabel: {
        kepala: ["Tanda", "Arti"],
        rows: [
          ["¶", "Akhir paragraf (hasil tekan Enter)"],
          ["·", "Spasi"],
          ["→", "Tab"],
          ["↵", "Akhir baris karena pembungkusan otomatis (line break)"],
          ["⌐ atau titik di margin", "Halaman, bagian, atau kolom baru"],
          ["::::", "Batas teks / margin teks"]
        ],
        catatan: "Tanda-tanda ini hanya tampil di layar dan tidak akan tercetak. Aktifkan saat mendesain tata letak, matikan saat membaca."
      }
    }
  ],
  praktikum: {
    judul: "Membersihkan Dokumen Berantakan",
    deskripsi: "Anda akan berlatih mengetik dengan aturan yang benar, lalu memperbaiki dokumen yang sengaja dibuat berantakan.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 02 - Teknik Mengetik`.",
      "Aktifkan tampilan tanda pemformatan dengan [[Ctrl+Shift+8]].",
      "Ketik satu paragraf tentang diri Anda minimal 60 kata tanpa menekan Enter di tengah paragraf.",
      "Perhatikan tanda ¶ hanya muncul di akhir paragraf, dan kata dibungkus otomatis oleh Word.",
      "Tekan [[Enter]] dua kali untuk membuat paragraf baru. Ketik paragraf kedua minimal 4 baris.",
      "Latih navigasi: tekan [[Ctrl+Home]] lalu [[Ctrl+End]], lalu bergerak kata per kata dengan [[Ctrl+→]].",
      "Seleksi kata pertama dengan klik ganda, lalu seluruh paragraf pertama dengan klik tiga kali.",
      "Seleksi satu kalimat dengan **Ctrl + klik**, lalu batalkan seleksi dengan menekan tombol panah kanan.",
      "Seleksi seluruh dokumen dengan [[Ctrl+A]], tekan [[Ctrl+B]] untuk menebalkan, lalu [[Ctrl+Z]] untuk membatalkannya.",
      "Uji **Repeat**: seleksi satu kata, tekan [[Ctrl+B]], seleksi kata lain, tekan [[F4]].",
      "Buka **View** → aktifkan **Navigation Pane**. Klik kanan paragraf → **Paragraph** → atur **Outline level** ke **Level 1** agar muncul di panel Headings.",
      "Matikan kembali tanda pemformatan dengan [[Ctrl+Shift+8]], lalu simpan dokumen."
    ]
  },
  latihan: [
    "Ketik paragraf berikut dengan benar, lalu perbaiki semua kesalahannya: `Hari ini    saya   belajar Word .Saya menekan enter di setiap baris`.",
    "Sebutkan tiga kebiasaan mengetik yang salah dan jelaskan cara memperbaikinya.",
    "Jelaskan perbedaan Undo, Redo, dan Repeat beserta satu contoh penggunaan masing-masing.",
    "Sebutkan lima cara menyeleksi teks dan situasi yang paling tepat untuk masing-masing cara.",
    "Jelaskan perbedaan AutoSave dengan AutoRecover dan kapan masing-masing bekerja."
  ],
  shortcut: [
    { k: "Ctrl+Z", f: "Membatalkan tindakan terakhir (Undo)" },
    { k: "Ctrl+Y", f: "Mengembalikan tindakan yang dibatalkan (Redo) / mengulang tindakan (Repeat)" },
    { k: "F4", f: "Mengulang tindakan terakhir pada posisi kursor" },
    { k: "Ctrl+A", f: "Menyeleksi seluruh dokumen" },
    { k: "Ctrl+Shift+8", f: "Menampilkan / menyembunyikan tanda pemformatan" },
    { k: "Ctrl+Home / Ctrl+End", f: "Pindah ke awal / akhir dokumen" },
    { k: "Shift+F5", f: "Kembali ke posisi edit terakhir" },
    { k: "Ctrl+Enter", f: "Menyisipkan pemisah halaman (page break)" }
  ],
  rangkuman: [
    "Aturan dasar mengetik di Word: satu spasi setelah tanda baca, Enter hanya untuk mengakhiri paragraf, dan hindari spasi ganda.",
    "Navigasi cepat memakai kombinasi tombol jauh lebih efisien daripada memakai mouse.",
    "Kemampuan menyeleksi teks dengan tepat menentukan kecepatan Anda memformat dokumen.",
    "Undo, Redo, dan Repeat adalah tiga senjata utama saat terjadi kesalahan.",
    "AutoSave dan AutoRecover melindungi pekerjaan; aktifkan keduanya sejak awal."
  ],
  kuis: [
    {
      q: "Untuk menyeleksi seluruh dokumen dengan cepat, pintasan yang tepat adalah…",
      opsi: ["Ctrl+Shift+A", "Ctrl+A", "Ctrl+E", "Shift+End"],
      jawab: 1,
      bahasan: "Ctrl+A (Select All) menyeleksi seluruh isi dokumen. Ctrl+Shift+A bukan pintasan baku di Word."
    },
    {
      q: "Menekan Ctrl+Enter di dalam dokumen akan…",
      opsi: ["Menyimpan dokumen", "Membuat paragraf baru", "Menyisipkan pemisah halaman", "Menutup dokumen"],
      jawab: 2,
      bahasan: "Ctrl+Enter menyisipkan page break sehingga teks setelahnya langsung berpindah ke halaman baru tanpa perlu menekan Enter berkali-kali."
    },
    {
      q: "Fungsi tombol F4 di Word adalah…",
      opsi: ["Menyimpan berkas", "Mengulang tindakan terakhir", "Membuka pencarian", "Menutup jendela"],
      jawab: 1,
      bahasan: "F4 menjalankan Repeat, yaitu mengulang tindakan terakhir pada posisi kursor baru. Sangat berguna untuk menerapkan format yang sama berulang kali."
    },
    {
      q: "Tanda ¶ pada tampilan dokumen menandakan…",
      opsi: ["Akhir paragraf", "Spasi", "Tab", "Kesalahan ejaan"],
      jawab: 0,
      bahasan: "¶ adalah tanda paragraf yang muncul setiap kali Anda menekan Enter. Tanda ini hanya tampil di layar dan tidak tercetak."
    },
    {
      q: "Yang benar tentang aturan mengetik di Word adalah…",
      opsi: [
        "Tekan Enter di akhir setiap baris agar rapi",
        "Gunakan spasi untuk menggeser teks ke tengah",
        "Cukup satu spasi setelah tanda baca",
        "Gunakan Enter berulang untuk pindah halaman"
      ],
      jawab: 2,
      bahasan: "Satu spasi setelah tanda baca adalah aturan baku. Perpindahan baris ditangani otomatis oleh Word, sedangkan perataan dan pindah halaman memakai fitur khusus."
    }
  ]
},

{
  id: 3,
  judul: "Memformat Teks: Font, Ukuran, Gaya, dan Warna",
  level: "Dasar",
  durasi: "90 menit",
  deskripsi: "Menguasai group Font pada tab Home: jenis dan ukuran huruf, tebal-miring-garis bawah, warna, sorotan, efek, Change Case, serta Format Painter.",
  tujuan: [
    "Mengubah jenis huruf (font), ukuran, dan warna teks.",
    "Menerapkan gaya tebal, miring, garis bawah, coret, subskrip, dan superskrip.",
    "Menggunakan Change Case, Text Effects, Highlight, dan Clear Formatting.",
    "Memanfaatkan Format Painter dan kotak dialog Font secara efektif.",
    "Menerapkan prinsip tipografi dasar agar dokumen mudah dibaca."
  ],
  materi: [
    {
      h: "3.1 Group Font pada Tab Home",
      p: ["Semua perintah format huruf yang paling sering dipakai berkumpul di group **Font**. Urutan tombolnya dari kiri ke kanan:"],
      tabel: {
        kepala: ["Tombol", "Fungsi"],
        rows: [
          ["Font (kotak daftar)", "Memilih jenis huruf, misalnya Calibri, Times New Roman, Arial"],
          ["Font Size", "Mengatur ukuran huruf dalam satuan poin (pt)"],
          ["Increase / Decrease Font Size", "Memperbesar atau memperkecil satu tingkat ukuran huruf"],
          ["Bold (B)", "Menebalkan teks — [[Ctrl+B]]"],
          ["Italic (I)", "Memiringkan teks — [[Ctrl+I]]"],
          ["Underline (U)", "Menggarisbawahi teks — [[Ctrl+U]]; panah kecil menyediakan pilihan garis bergelombang, titik, dan warna garis"],
          ["Strikethrough", "Mencoret teks, sering dipakai untuk revisi"],
          ["Subscript / Superscript", "Menurunkan atau menaikkan posisi huruf, misalnya H₂O dan m²"],
          ["Text Effects and Typography", "Efek bayangan, kilau, kontur, serta pengaturan ligatur dan kerning"],
          ["Text Highlight Color", "Menyorot teks seperti spidol penanda"],
          ["Font Color", "Mengubah warna huruf"],
          ["Change Case", "Mengubah besar-kecil huruf: Sentence, lowercase, UPPERCASE, Capitalize Each Word, tOGGLE cASE"],
          ["Clear All Formatting", "Menghapus seluruh format dan mengembalikan teks ke format bawaan"]
        ]
      },
      tip: "Klik **panah kecil di sudut kanan bawah group Font** (dialog box launcher) untuk membuka kotak dialog Font lengkap, termasuk tab **Advanced** dengan pengaturan skala, kerning, dan posisi huruf."
    },
    {
      h: "3.2 Memilih Font yang Tepat",
      p: ["Jenis huruf terbagi menjadi beberapa keluarga besar. Memilih font yang sesuai konteks membuat dokumen tampak profesional."],
      tabel: {
        kepala: ["Kategori", "Contoh", "Kesan dan Penggunaan"],
        rows: [
          ["Serif", "Times New Roman, Cambria, Georgia, Garamond", "Formal, klasik, nyaman dibaca pada teks panjang. Cocok untuk laporan, skripsi, surat resmi."],
          ["Sans-serif", "Calibri, Arial, Verdana, Segoe UI, Helvetica", "Bersih dan modern. Cocok untuk presentasi, dokumen digital, materi pelatihan."],
          ["Monospace", "Consolas, Courier New, Cascadia Mono", "Setiap huruf sama lebar. Cocok untuk kode program dan data teknis."],
          ["Dekoratif / Script", "Brush Script, Lucida Handwriting, Impact", "Berekspresi kuat. Gunakan sangat terbatas, misalnya pada judul undangan."]
        ],
        catatan: "Naskah akademik di Indonesia umumnya mewajibkan Times New Roman 12 pt dengan spasi 1,5 atau 2. Selalu ikuti pedoman yang diberikan kampus atau instansi Anda."
      },
      sub: [
        {
          h: "Prinsip ukuran huruf",
          list: [
            "**Judul utama:** 16–20 pt (boleh lebih), tebal.",
            "**Subjudul:** 13–14 pt, tebal.",
            "**Isi/body text:** 11–12 pt.",
            "**Keterangan/catatan kaki:** 9–10 pt.",
            "**Jangan memakai lebih dari 2–3 jenis huruf** dalam satu dokumen.",
            "**Hindari teks berwarna cerah** untuk badan tulisan; warna terang sulit dibaca dan boros tinta saat dicetak."
          ]
        }
      ]
    },
    {
      h: "3.3 Menerapkan Format Huruf",
      steps: [
        "Seleksi teks yang ingin diformat (bila tidak diseleksi, format berlaku untuk teks yang akan Anda ketik berikutnya).",
        "Pada tab **Home** → group **Font**, klik tombol yang diinginkan, misalnya **Bold**.",
        "Untuk pilihan lebih lengkap, klik tombol peluncur dialog di sudut group Font, lalu atur Font, Font style, Size, Font color, dan Effects.",
        "Klik **OK** untuk menerapkan."
      ],
      list: [
        "**Bold** — untuk judul dan penekanan penting. Jangan menebalkan seluruh paragraf.",
        "**Italic** — untuk istilah asing, judul buku, atau penekanan halus.",
        "**Underline** — untuk tautan atau penekanan; hindari penggunaannya sebagai satu-satunya penanda, karena sulit dibedakan pembaca dengan gangguan penglihatan.",
        "**Strikethrough** — untuk menunjukkan teks yang dibatalkan tanpa menghapusnya.",
        "**Subscript/Superscript** — rumus kimia (CO₂), satuan (m³), pangkat (x²), atau catatan kaki.",
        "**Small Caps** — huruf kapital kecil, sering dipakai pada kop surat."
      ],
      tip: "Kotak dialog **Font** juga menyimpan tombol **Set As Default**. Bila Anda hampir selalu memakai Times New Roman 12 pt, atur sekali di sana agar setiap dokumen baru langsung memakainya."
    },
    {
      h: "3.4 Warna, Sorotan, dan Efek Teks",
      list: [
        "**Font Color:** klik tombol huruf A berwarna → pilih warna dari palet, atau **More Colors** untuk warna khusus. Warna yang baru saja dipakai muncul di bagian **Recent Colors**.",
        "**Text Highlight Color:** menyorot latar teks. Berguna untuk menandai bagian yang perlu ditinjau, mirip menandai dengan spidol.",
        "**Text Effects and Typography:** memberi bayangan (shadow), kilau (glow), kontur (outline), dan tampilan lain. Gunakan hemat untuk judul sampul saja.",
        "**Efek lain di kotak dialog Font:** Outline, Emboss, Engrave, Small caps, All caps, Hidden (menyembunyikan teks agar tidak tercetak)."
      ],
      peringatan: "Menyorot dan memberi warna adalah alat penanda sementara. Sebelum dokumen dicetak atau dikirim, bersihkan sorotan dengan **Text Highlight Color → No Color** agar dokumen tampak profesional."
    },
    {
      h: "3.5 Change Case dan Clear Formatting",
      steps: [
        "**Change Case:** seleksi teks → klik tombol **Aa** di group Font → pilih salah satu opsi:",
        "**Sentence case** — Huruf kapital hanya di awal kalimat.",
        "**lowercase** — Semua huruf menjadi kecil.",
        "**UPPERCASE** — Semua huruf menjadi kapital.",
        "**Capitalize Each Word** — Kapital di awal setiap kata.",
        "**tOGGLE cASE** — Membalik kapitalisasi huruf yang ada.",
        "**Clear All Formatting:** seleksi teks → klik ikon **A dengan penghapus**. Semua format dihapus dan teks kembali mengikuti format bawaan, tetapi isinya tetap utuh."
      ],
      tip: "Bila dokumen hasil salin-tempel dari internet tampak berantakan, tekan [[Ctrl+A]] lalu **Clear All Formatting**. Cara tercepat memulai dari kanvas bersih."
    },
    {
      h: "3.6 Format Painter",
      p: ["Format Painter menyalin format dari satu tempat ke tempat lain tanpa menyalin teksnya."],
      steps: [
        "Letakkan kursor pada teks yang formatnya ingin Anda tiru, atau seleksi sebagian teks tersebut.",
        "Pada tab **Home** → group **Clipboard**, klik **Format Painter** (ikon kuas). Untuk menerapkan ke beberapa bagian sekaligus, **klik ganda** ikonnya.",
        "Seleksi teks tujuan. Format akan langsung diterapkan.",
        "Tekan [[Esc]] atau klik ikon Format Painter sekali lagi untuk mengakhiri mode."
      ],
      catatan: "Alternatif keyboard: seleksi teks sumber → [[Ctrl+Shift+C]] (copy format), seleksi teks tujuan → [[Ctrl+Shift+V]] (paste format)."
    }
  ],
  praktikum: {
    judul: "Merapikan Brosur Satu Halaman",
    deskripsi: "Anda akan membuat halaman pengumuman sederhana dengan hierarki teks yang jelas.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 03 - Format Teks`.",
      "Ketik judul: `PENGUMUMAN KEGIATAN PELATIHAN KOMPUTER`.",
      "Seleksi judul: ubah font menjadi **Calibri**, ukuran **20 pt**, **Bold**, warna **biru tua**.",
      "Buat baris baru, ketik: `Diberikan kepada seluruh peserta didik SMK Nusantara`. Format: 12 pt, italic.",
      "Ketik tiga baris isi berikut: `Hari/Tanggal: Sabtu, 12 Oktober`, `Waktu: 08.00 - 12.00 WIB`, `Tempat: Laboratorium Komputer 2`.",
      "Seleksi seluruh baris isi → atur font Times New Roman 11 pt, lalu beri spasi 1,5 baris lewat group Paragraph.",
      "Blok tulisan `Laboratorium Komputer 2` → terapkan **Bold** dan **Text Highlight Color kuning**.",
      "Ketik baris penutup: `Demikian pengumuman ini disampaikan untuk diperhatikan.`",
      "Ubah kalimat tersebut menjadi huruf kapital semua memakai **Change Case → UPPERCASE**, lalu kembalikan ke **Sentence case**.",
      "Ketik rumus sederhana: `Luas = 12 m2`. Ubah angka 2 menjadi **Superscript** sehingga tertulis m².",
      "Ketik rumus kimia: `H2O`. Ubah angka 2 menjadi **Subscript**.",
      "Seleksi paragraf isi, salin formatnya ke baris penutup memakai **Format Painter**.",
      "Uji **Clear All Formatting**: seleksi seluruh dokumen, terapkan pembersihan format, lalu tekan **Ctrl+Z** untuk mengembalikannya.",
      "Simpan dokumen dan bandingkan tampilannya sebelum dan sesudah dirapikan."
    ]
  },
  latihan: [
    "Buat satu halaman berisi resep masakan dengan minimal 3 tingkat hierarki teks: judul besar, subjudul, dan isi.",
    "Sebutkan tiga kategori font beserta satu contoh dan konteks penggunaannya yang tepat.",
    "Jelaskan kapan sebaiknya memakai italic dan kapan memakai bold, serta mengapa tidak disarankan memakai keduanya sekaligus pada satu kata.",
    "Praktikkan: buat teks berisi 10 nama orang dalam huruf kecil, lalu ubah seluruhnya menjadi Capitalize Each Word.",
    "Perbaiki teks berikut memakai Change Case dan Clear Formatting: `PENGUMUMAN ini Adalah CONTOH teks Yang Berantakan.`"
  ],
  shortcut: [
    { k: "Ctrl+B / Ctrl+I / Ctrl+U", f: "Tebal / miring / garis bawah" },
    { k: "Ctrl+D", f: "Membuka kotak dialog Font" },
    { k: "Ctrl+Shift+>", f: "Memperbesar ukuran huruf" },
    { k: "Ctrl+Shift+<", f: "Memperkecil ukuran huruf" },
    { k: "Ctrl+] / Ctrl+[", f: "Menambah / mengurangi ukuran huruf satu poin" },
    { k: "Shift+F3", f: "Mengubah besar-kecil huruf (Change Case)" },
    { k: "Ctrl+= ", f: "Subscript" },
    { k: "Ctrl+Shift+=", f: "Superscript" },
    { k: "Ctrl+Shift+C / Ctrl+Shift+V", f: "Menyalin format / menerapkan format" },
    { k: "Ctrl+Spacebar", f: "Menghapus format huruf (Clear Formatting)" }
  ],
  rangkuman: [
    "Group Font pada tab Home menampung hampir semua perintah format huruf.",
    "Pemilihan font, ukuran, dan warna harus mengikuti konteks dokumen dan pedoman yang berlaku.",
    "Bold, italic, underline, subscript, dan superscript adalah format karakter dasar.",
    "Change Case mengubah kapitalisasi huruf, sedangkan Clear All Formatting mengembalikan teks ke format bawaan.",
    "Format Painter dan Ctrl+Shift+C/V menyalin format tanpa menyalin teks."
  ],
  kuis: [
    {
      q: "Pintasan untuk menghapus seluruh format huruf pada teks yang diseleksi adalah…",
      opsi: ["Ctrl+Shift+N", "Ctrl+Spacebar", "Ctrl+Q", "Ctrl+Shift+F"],
      jawab: 1,
      bahasan: "Ctrl+Spacebar menghapus format karakter. Ctrl+Q menghapus format paragraf, sedangkan Ctrl+Shift+N menerapkan gaya Normal."
    },
    {
      q: "Tombol yang berfungsi menyalin format tanpa menyalin teks adalah…",
      opsi: ["Clipboard", "Format Painter", "Change Case", "Styles"],
      jawab: 1,
      bahasan: "Format Painter (ikon kuas) menyalin atribut format seperti font, ukuran, warna, dan spasi, lalu menerapkannya ke teks lain."
    },
    {
      q: "Untuk menuliskan satuan meter persegi (m²), format yang dipakai adalah…",
      opsi: ["Subscript", "Superscript", "Strikethrough", "Small Caps"],
      jawab: 1,
      bahasan: "Superscript menaikkan posisi huruf, dipakai untuk pangkat seperti m² dan x². Subscript menurunkan posisi huruf, misalnya pada H₂O."
    },
    {
      q: "Jenis huruf berikut yang tergolong sans-serif adalah…",
      opsi: ["Times New Roman", "Cambria", "Calibri", "Garamond"],
      jawab: 2,
      bahasan: "Calibri tidak memiliki kait (serif) di ujung huruf sehingga tergolong sans-serif. Times New Roman, Cambria, dan Garamond adalah serif."
    },
    {
      q: "Perintah Change Case berguna untuk…",
      opsi: [
        "Mengubah warna huruf",
        "Mengubah besar-kecil huruf",
        "Mengubah ukuran huruf",
        "Mengubah jenis huruf"
      ],
      jawab: 1,
      bahasan: "Change Case mengubah kapitalisasi teks tanpa mengubah isinya: Sentence case, lowercase, UPPERCASE, Capitalize Each Word, dan tOGGLE cASE."
    }
  ]
},

{
  id: 4,
  judul: "Memformat Paragraf, Perataan, Indentasi, dan Daftar",
  level: "Dasar",
  durasi: "120 menit",
  deskripsi: "Membuat paragraf rapi: perataan, indentasi, jarak baris dan spasi antarparagraf, tabulasi, daftar berbutir, penomoran, serta daftar bertingkat.",
  tujuan: [
    "Mengatur perataan paragraf: kiri, tengah, kanan, dan justify.",
    "Menerapkan indentasi kiri, kanan, baris pertama, dan menggantung.",
    "Mengatur spasi antarparagraf serta jarak baris (line spacing).",
    "Menggunakan tabulasi dan tanda pemimpin titik (leader).",
    "Membuat bullet, penomoran, dan multilevel list yang tersusun benar."
  ],
  materi: [
    {
      h: "4.1 Anatomi Sebuah Paragraf di Word",
      p: [
        "Di Word, paragraf adalah satuan teks yang diakhiri oleh satu kali tekan Enter. Semua format paragraf — perataan, indentasi, spasi, dan daftar — berlaku pada paragraf tempat kursor berada, tanpa perlu menyeleksi seluruh teksnya.",
        "Karena itu, cukup letakkan kursor di dalam paragraf untuk mengubah formatnya. Bila ingin mengubah beberapa paragraf sekaligus, seleksilah paragraf-paragraf tersebut."
      ],
      tip: "Tekan [[Ctrl+Shift+8]] untuk melihat batas paragraf. Bila satu blok teks ternyata memiliki beberapa tanda ¶, itu berarti paragrafnya terpecah dan formatnya bisa berbeda satu dengan yang lain."
    },
    {
      h: "4.2 Perataan Paragraf (Alignment)",
      tabel: {
        kepala: ["Perataan", "Pintasan", "Penggunaan Tepat"],
        rows: [
          ["Align Left", "[[Ctrl+L]]", "Bawaan untuk hampir semua teks. Ujung kanan bergerigi, paling mudah dibaca."],
          ["Center", "[[Ctrl+E]]", "Judul, sampul, teks undangan, keterangan gambar."],
          ["Align Right", "[[Ctrl+R]]", "Tanggal surat, tanda tangan, nomor halaman, kolom angka."],
          ["Justify", "[[Ctrl+J]]", "Teks dua sisi rata seperti pada buku dan laporan resmi."]
        ],
        catatan: "Justify membuat kedua tepi rata, tetapi pada kolom sempit dapat menimbulkan celah lebar antarkata. Bila itu terjadi, aktifkan **Hyphenation** di tab Layout, atau gunakan align left."
      }
    },
    {
      h: "4.3 Indentasi",
      p: ["Indentasi adalah jarak paragraf terhadap margin. Ada empat jenis yang perlu Anda kuasai:"],
      list: [
        "**First line indent** — baris pertama menjorok ke dalam, baris lainnya rata margin. Lazim pada naskah sastra.",
        "**Hanging indent** — baris pertama rata margin, baris berikutnya menjorok. Wajib untuk daftar pustaka dan daftar bernomor.",
        "**Left indent** — seluruh paragraf digeser dari margin kiri.",
        "**Right indent** — seluruh paragraf digeser dari margin kanan."
      ],
      steps: [
        "**Cara cepat dengan Ruler:** aktifkan Ruler (tab View), lalu tarik **First Line Indent marker** (segitiga atas) atau **Hanging Indent marker** (segitiga bawah) di penggaris.",
        "**Cara presisi:** klik tombol peluncur dialog group **Paragraph** → tab **Indents and Spacing**.",
        "Pada bagian **Indentation**, isi **Left** dan **Right** (misalnya 1 cm).",
        "Pada **Special**, pilih **First line** atau **Hanging**, lalu isi **By** dengan besar indentasi (misalnya 1,27 cm atau 0,5 inci).",
        "Klik **OK**."
      ],
      tip: "Pintasan praktis: [[Ctrl+M]] menambah indentasi kiri, [[Ctrl+Shift+M]] menguranginya, [[Ctrl+T]] membuat hanging indent, dan [[Ctrl+Shift+T]] menguranginya."
    },
    {
      h: "4.4 Spasi Baris dan Spasi Antarparagraf",
      p: ["Jarak antarparagraf diatur lewat **Spacing Before/After**, bukan dengan menekan Enter berulang. Cara ini membuat jarak konsisten dan mudah diubah sekaligus."],
      steps: [
        "Letakkan kursor pada paragraf (atau seleksi beberapa paragraf).",
        "Buka **Paragraph** dialog → tab **Indents and Spacing**.",
        "Pada **Spacing**, atur **Before** (jarak sebelum paragraf) dan **After** (jarak sesudah paragraf), misalnya 0 pt dan 6 pt.",
        "Pada **Line spacing**, pilih **Single**, **1.5 lines**, **Double**, atau **Exactly** untuk nilai tetap.",
        "Hapus centang **Don't add space between paragraphs of the same style** bila Anda ingin jarak antarparagraf seragam.",
        "Klik **OK**."
      ],
      tabel: {
        kepala: ["Jenis Spasi Baris", "Pintasan", "Keterangan"],
        rows: [
          ["Single (1,0)", "[[Ctrl+1]]", "Rapat, sesuai tinggi baris font"],
          ["1.5 lines", "[[Ctrl+5]]", "Standar banyak laporan dan skripsi di Indonesia"],
          ["Double (2,0)", "[[Ctrl+2]]", "Sering diminta untuk naskah akademik tertentu"],
          ["Exactly / At least", "—", "Nilai tetap, dipakai bila ukuran baris harus dikunci"]
        ],
        catatan: "Sakelar cepat juga tersedia di tab Home → group Paragraph → **Line and Paragraph Spacing**."
      },
      peringatan: "Jangan menambah jarak antarbaris dengan menekan Enter. Selain membuat dokumen sulit diubah, jumlah halaman menjadi tidak konsisten."
    },
    {
      h: "4.5 Tabulasi (Tab Stops)",
      p: ["Tabulasi menyejajarkan teks pada posisi tertentu tanpa perlu membuat tabel. Sangat berguna untuk daftar isi sederhana, daftar harga, atau data berbentuk kolom."],
      tabel: {
        kepala: ["Jenis Tab", "Perilaku"],
        rows: [
          ["Left", "Teks mulai dari titik tab dan mengalir ke kanan"],
          ["Center", "Teks terpusat pada titik tab"],
          ["Right", "Teks berakhir tepat di titik tab (cocok untuk angka)"],
          ["Decimal", "Angka desimal disejajarkan pada tanda koma/titik"],
          ["Bar", "Menyisipkan garis vertikal pada titik tab"]
        ]
      },
      steps: [
        "Klik tombol pemilih jenis tab di ujung kiri Ruler hingga jenis yang diinginkan muncul (L, ⌐, ⅃, ⊥, |).",
        "Klik pada posisi di Ruler tempat Anda ingin menempatkan tab stop.",
        "Tekan [[Tab]] di dokumen untuk melompat ke tab stop tersebut.",
        "Untuk tab dengan titik pemimpin (leader), klik ganda tab stop di Ruler → kotak dialog **Tabs** → pilih **Leader** (1 None, 2 titik, 3 garis putus, 4 garis).",
        "Klik **Set** lalu **OK**."
      ],
      tip: "Tip klasik daftar isi: buat tab **Right** di posisi 15 cm dengan leader titik, lalu tekan [[Tab]] sebelum nomor halaman sehingga muncul deretan titik otomatis."
    },
    {
      h: "4.6 Bullet, Penomoran, dan Multilevel List",
      steps: [
        "Seleksi paragraf yang akan dijadikan daftar.",
        "Klik **Bullets** untuk daftar berbutir atau **Numbering** untuk daftar bernomor di group Paragraph.",
        "Klik **panah kecil** di samping tombol untuk memilih gaya butir atau format penomoran lain.",
        "Pilih **Change List Level** untuk menggeser tingkat daftar.",
        "Gunakan **Define New Bullet** atau **Define New Number Format** untuk menyesuaikan simbol, font, atau format penomoran.",
        "Untuk daftar bertingkat, pilih **Multilevel List** lalu tentukan gaya (misalnya 1 → 1.1 → 1.1.1)."
      ],
      list: [
        "[[Tab]] di awal baris daftar akan menurunkan satu tingkat; [[Shift+Tab]] menaikkannya.",
        "**Enter** membuat butir baru; **Enter dua kali** mengakhiri daftar dan kembali ke paragraf biasa.",
        "Bila penomoran melanjutkan nomor daftar sebelumnya padahal Anda ingin mulai dari 1, klik kanan nomor → **Restart at 1**.",
        "Bila penomoran malah mengulang dari 1 padahal ingin melanjutkan, klik kanan → **Continue Numbering**.",
        "Jangan mengetik angka secara manual (misalnya `1.` diketik tangan). Gunakan fitur Numbering agar mudah diubah dan diurutkan."
      ],
      peringatan: "Penomoran yang diketik manual tidak akan ikut berubah saat Anda menyisipkan atau menghapus butir. Gunakan fitur daftar otomatis, atau gunakan gaya **List Paragraph** agar konsisten."
    }
  ],
  praktikum: {
    judul: "Menyusun Prosedur Kerja Rapi",
    deskripsi: "Anda akan membuat halaman prosedur dengan perataan, indentasi, tabulasi, dan daftar bertingkat yang benar.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 04 - Format Paragraf`.",
      "Ketik judul `PROSEDUR PENDAFTARAN PESERTA`, rata tengah ([[Ctrl+E]]), tebal, 16 pt.",
      "Ketik paragraf pengantar minimal 3 baris, lalu terapkan **Justify** ([[Ctrl+J]]).",
      "Atur **Line spacing 1.5** ([[Ctrl+5]]) dan **Spacing After 6 pt** untuk paragraf tersebut.",
      "Buat subjudul `A. Persyaratan`, rata kiri, tebal.",
      "Di bawahnya, buat daftar berbutir (bullet) berisi 4 syarat pendaftaran.",
      "Buat subjudul `B. Langkah Pendaftaran`, lalu buat daftar bernomor berisi 5 langkah.",
      "Pada langkah ke-3, tekan [[Tab]] agar menjadi daftar bertingkat tingkat dua berisi 2 sublangkah.",
      "Ubah gaya nomor memakai **Multilevel List** sehingga tampil sebagai 1, 2, 3 dan 3.1, 3.2.",
      "Buat subjudul `C. Rincian Biaya`, lalu buat 3 baris dengan pola: nama item, tekan [[Tab]], tulis harga.",
      "Tetapkan tab stop **Right** dengan leader titik di posisi 14 cm pada baris rincian biaya agar harga sejajar rapi.",
      "Buat paragraf penutup, lalu terapkan **First line indent 1,27 cm**.",
      "Buat satu baris untuk daftar pustaka sederhana dan terapkan **Hanging indent 1,27 cm**.",
      "Periksa seluruh dokumen dengan menampilkan tanda pemformatan, pastikan tidak ada Enter berlebih.",
      "Simpan dokumen."
    ]
  },
  latihan: [
    "Buat daftar isi sederhana berisi 5 bab dengan nomor halaman yang sejajar rapi memakai tab stop right dan leader titik.",
    "Jelaskan perbedaan first line indent dengan hanging indent, dan sebutkan satu contoh penggunaan nyata masing-masing.",
    "Buat satu paragraf dengan spasi 1,5 dan after 10 pt, lalu bandingkan tampilannya dengan paragraf yang dibuat memakai 3 kali Enter.",
    "Buat struktur organisasi sederhana memakai multilevel list sampai tiga tingkat.",
    "Sebutkan kesalahan umum dalam membuat daftar bernomor dan cara memperbaikinya."
  ],
  shortcut: [
    { k: "Ctrl+E / Ctrl+L / Ctrl+R / Ctrl+J", f: "Rata tengah / kiri / kanan / justify" },
    { k: "Ctrl+1 / Ctrl+2 / Ctrl+5", f: "Spasi baris 1,0 / 2,0 / 1,5" },
    { k: "Ctrl+M / Ctrl+Shift+M", f: "Menambah / mengurangi indentasi kiri" },
    { k: "Ctrl+T / Ctrl+Shift+T", f: "Membuat / mengurangi hanging indent" },
    { k: "Tab / Shift+Tab (dalam daftar)", f: "Menurunkan / menaikkan tingkat daftar" },
    { k: "Ctrl+Shift+N", f: "Menerapkan gaya Normal" },
    { k: "Ctrl+Q", f: "Menghapus format paragraf" },
    { k: "Ctrl+Shift+8", f: "Menampilkan tanda pemformatan" }
  ],
  rangkuman: [
    "Paragraf di Word diakhiri oleh satu kali Enter; format paragraf berlaku pada paragraf tempat kursor berada.",
    "Empat perataan paragraf: kiri, tengah, kanan, dan justify, masing-masing punya konteks penggunaan.",
    "Indentasi mengatur jarak paragraf terhadap margin; hanging indent wajib untuk daftar pustaka.",
    "Jarak antarbaris diatur di kotak dialog Paragraph, bukan dengan menekan Enter.",
    "Bullet, numbering, dan multilevel list harus dibuat memakai fitur daftar otomatis agar mudah diubah."
  ],
  kuis: [
    {
      q: "Pintasan untuk membuat perataan justify adalah…",
      opsi: ["Ctrl+L", "Ctrl+E", "Ctrl+J", "Ctrl+R"],
      jawab: 2,
      bahasan: "Ctrl+J (Justify) membuat teks rata di kedua tepi. Ctrl+L rata kiri, Ctrl+E rata tengah, Ctrl+R rata kanan."
    },
    {
      q: "Jenis indentasi yang dipakai pada daftar pustaka adalah…",
      opsi: ["First line indent", "Hanging indent", "Right indent", "Center indent"],
      jawab: 1,
      bahasan: "Hanging indent membuat baris pertama rata margin sedangkan baris berikutnya menjorok ke dalam, sesuai kaidah penulisan daftar pustaka."
    },
    {
      q: "Cara yang tepat menambah jarak antarparagraf adalah…",
      opsi: [
        "Menekan Enter dua kali",
        "Menambah spasi kosong di awal paragraf",
        "Mengatur Spacing Before/After pada kotak dialog Paragraph",
        "Mengubah ukuran font"
      ],
      jawab: 2,
      bahasan: "Pengaturan Spacing Before/After menghasilkan jarak yang konsisten dan mudah diubah sekaligus. Menekan Enter berulang membuat tata letak sulit dikendalikan."
    },
    {
      q: "Dalam daftar bernomor, menekan Tab di awal baris akan…",
      opsi: ["Mengakhiri daftar", "Menurunkan tingkat daftar", "Menghapus nomor", "Mengubah jenis huruf"],
      jawab: 1,
      bahasan: "Tab menurunkan butir satu tingkat dan Shift+Tab menaikkannya. Enter dua kali mengakhiri daftar."
    },
    {
      q: "Jenis tab stop yang paling tepat untuk menyejajarkan nilai rupiah adalah…",
      opsi: ["Left tab", "Center tab", "Right tab", "Bar tab"],
      jawab: 2,
      bahasan: "Right tab membuat teks berakhir tepat di titik tab sehingga digit terakhir angka sejajar rapi, sangat cocok untuk kolom harga."
    }
  ]
},

{
  id: 5,
  judul: "Tata Letak Halaman: Margin, Ukuran Kertas, Kolom, dan Watermark",
  level: "Dasar",
  durasi: "100 menit",
  deskripsi: "Mengatur halaman secara menyeluruh: ukuran kertas, orientasi, margin, kolom, garis batas halaman, warna halaman, watermark, hingga drop cap.",
  tujuan: [
    "Mengatur ukuran kertas dan orientasi halaman.",
    "Menetapkan margin standar maupun margin khusus (mirror, gutter).",
    "Membuat tata letak multi-kolom seperti koran atau buletin.",
    "Menambahkan page border, page color, dan watermark.",
    "Menggunakan Page Setup, line numbering, dan hyphenation."
  ],
  materi: [
    {
      h: "5.1 Tab Layout dan Page Setup",
      p: ["Tab **Layout** menangani segala hal yang berkaitan dengan kertas dan penempatan elemen di halaman. Bila perlu pengaturan lebih rinci, klik tombol peluncur dialog di group **Page Setup**."],
      tabel: {
        kepala: ["Group", "Perintah Utama"],
        rows: [
          ["Page Setup", "Margins, Orientation, Size, Columns, Breaks, Line Numbers, Hyphenation"],
          ["Paragraph", "Indent (Left/Right), Spacing (Before/After, Line spacing)"],
          ["Arrange", "Position, Wrap Text, Align, Group, Rotate objek"]
        ],
        catatan: "Pada Word 2003 dan sebelumnya, tab ini bernama **File → Page Setup**. Sejak Word 2007, pengaturannya berpindah ke tab Layout."
      }
    },
    {
      h: "5.2 Ukuran Kertas dan Orientasi",
      steps: [
        "Buka tab **Layout** → **Size**.",
        "Pilih ukuran standar: **A4** (21 × 29,7 cm, paling umum di Indonesia), **Letter**, **Legal**, atau **A3**.",
        "Bila perlu ukuran khusus, pilih **More Paper Sizes** lalu isi **Width** dan **Height** secara manual.",
        "Untuk mengubah orientasi, klik **Orientation** → **Portrait** (tegak) atau **Landscape** (mendatar).",
        "Pada kotak dialog Page Setup, perhatikan dropdown **Apply to**. Pilih **Whole document** untuk seluruh dokumen atau **This point forward** untuk mulai dari posisi kursor."
      ],
      tip: "Laporan keuangan dengan tabel lebar sering butuh halaman landscape di tengah dokumen portrait. Caranya: tempatkan kursor di awal halaman tersebut, buka Page Setup, pilih Landscape, dan atur **Apply to: This point forward**. Setelah halaman itu, buat lagi section baru dan kembalikan ke Portrait."
    },
    {
      h: "5.3 Margin dan Gutter",
      p: ["Margin adalah ruang kosong antara tepi kertas dan area teks. Word menyediakan beberapa pilihan siap pakai."],
      tabel: {
        kepala: ["Preset Margin", "Keterangan"],
        rows: [
          ["Normal", "Semua sisi 2,54 cm (1 inci). Bawaan Word."],
          ["Narrow", "Semua sisi 1,27 cm (0,5 inci). Untuk dokumen ringkas."],
          ["Moderate", "Atas-bawah 2,54 cm, kiri-kanan 1,91 cm."],
          ["Wide", "Atas-bawah 2,54 cm, kiri-kanan 5,08 cm."],
          ["Mirrored", "Margin kiri dan kanan bergantian, untuk dokumen berjilid dua sisi."],
          ["Custom Margins", "Mengatur sendiri setiap sisi, termasuk gutter."]
        ]
      },
      steps: [
        "Klik **Layout** → **Margins** → **Custom Margins**.",
        "Isi nilai **Top, Bottom, Left, Right** sesuai pedoman (misalnya skripsi: kiri 4 cm, atas 4 cm, kanan 3 cm, bawah 3 cm).",
        "Bila dokumen akan dijilid, isi **Gutter** (misalnya 0,5 cm) dan pilih posisi gutter **Left** atau **Top**.",
        "Pada **Apply to**, pilih cakupan penerapan, lalu klik **OK**.",
        "Bila dokumen memakai margin berhadapan, centang **Mirror margins**."
      ],
      tip: "Word menampilkan tanda batas margin sebagai garis putus-putus bila Anda mengarahkan kursor ke penggaris. Gunakan untuk memastikan teks tidak melampaui batas."
    },
    {
      h: "5.4 Kolom (Columns)",
      p: ["Kolom membagi halaman menjadi beberapa lajur vertikal. Sangat berguna untuk buletin, brosur, laporan majalah dinding, dan daftar istilah."],
      steps: [
        "Seleksi teks yang ingin dibuat berkolom (bila tidak diseleksi, kolom berlaku untuk seluruh dokumen).",
        "Klik **Layout** → **Columns**, lalu pilih **Two** atau **Three**.",
        "Untuk pengaturan lanjutan, pilih **More Columns**.",
        "Tentukan **Number of columns**, **Width** dan **Spacing** setiap kolom.",
        "Centang **Line between** untuk menambahkan garis pemisah antarkolom.",
        "Atur **Apply to** (Whole document, This point forward, atau Selected text), lalu klik **OK**."
      ],
      catatan: "Untuk mengakhiri tata letak berkolom dan kembali ke satu kolom penuh, sisipkan **Continuous Section Break** (Layout → Breaks → Continuous), lalu ubah jumlah kolom menjadi satu."
    },
    {
      h: "5.5 Page Border, Page Color, dan Watermark",
      sub: [
        {
          h: "Page Border (garis batas halaman)",
          steps: [
            "Buka tab **Design** → **Page Borders**.",
            "Pada tab **Page Border**, pilih **Box**, **Shadow**, **3-D**, atau **Custom**.",
            "Tentukan **Style**, **Color**, **Width**, dan **Art** (bila ingin motif).",
            "Perhatikan tombol **Options** untuk mengatur jarak border terhadap teks dan margin.",
            "Atur **Apply to** lalu klik **OK**."
          ]
        },
        {
          h: "Page Color (warna latar halaman)",
          p: ["Tab **Design** → **Page Color** memberi warna latar halaman. Pilihan **Fill Effects** menyediakan gradasi, tekstur, dan pola. Perlu diingat: warna latar tidak selalu tercetak kecuali opsi cetak latar diaktifkan pada **File → Options → Display → Print background colors and images**."]
        },
        {
          h: "Watermark (tanda air)",
          steps: [
            "Buka tab **Design** → **Watermark**.",
            "Pilih salah satu preset seperti **CONFIDENTIAL**, **DRAFT**, atau **SAMPLE**.",
            "Untuk membuat sendiri, pilih **Custom Watermark** → **Text watermark**.",
            "Isi **Text**, atur **Font**, **Size**, **Color**, dan pilih **Layout** Diagonal atau Horizontal.",
            "Klik **OK**. Watermark akan muncul di belakang teks pada setiap halaman."
          ],
          tip: "Bila ingin watermark hilang di halaman tertentu, buka header halaman tersebut dan hapus watermark-nya, lalu pastikan **Different First Page** tidak aktif pada halaman itu."
        }
      ],
      peringatan: "Watermark adalah elemen header. Bila Anda mengedit header secara manual, watermark bisa ikut terhapus. Untuk menghapusnya secara resmi, gunakan **Design → Watermark → Remove Watermark**."
    },
    {
      h: "5.6 Line Numbers, Hyphenation, dan Drop Cap",
      list: [
        "**Line Numbers** (Layout → Line Numbers) memberi nomor pada setiap baris. Dipakai pada dokumen hukum, naskah kontrak, atau berkas yang akan dirujuk barisnya.",
        "**Hyphenation** (Layout → Hyphenation) memenggal kata di akhir baris sehingga teks justify lebih rapi. Pilih **Automatic** atau **Manual**.",
        "**Drop Cap** (Insert → Drop Cap) memperbesar huruf pertama sebuah paragraf agar turun beberapa baris. Cocok untuk pembuka bab atau artikel majalah.",
        "**Text Direction** (Layout → Text Direction) memutar arah teks, dipakai untuk dokumen berbahasa vertikal atau label tertentu."
      ]
    }
  ],
  praktikum: {
    judul: "Membuat Buletin Dua Kolom dengan Watermark",
    deskripsi: "Latihan mengombinasikan ukuran kertas, margin, kolom, border, dan watermark dalam satu dokumen.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 05 - Tata Letak Halaman`.",
      "Buka **Layout → Size** dan pastikan ukuran kertas **A4**.",
      "Buka **Layout → Margins → Custom Margins**. Atur: Top 2,5 cm, Bottom 2,5 cm, Left 3 cm, Right 2,5 cm.",
      "Ketik judul buletin `WARTA SEKOLAH` rata tengah, ukuran 22 pt, tebal.",
      "Ketik satu paragraf pengantar penuh selebar halaman.",
      "Seleksi paragraf pengantar tersebut, lalu buka **Layout → Columns → Two** dengan **More Columns** untuk menambahkan garis pemisah (**Line between**).",
      "Ketik dua paragraf tambahan di dalam area berkolom dan amati aliran teks dari kolom kiri ke kolom kanan.",
      "Setelah artikel, sisipkan **Layout → Breaks → Continuous** untuk mengakhiri kolom.",
      "Ketik satu paragraf penutup selebar halaman penuh.",
      "Terapkan **Design → Page Borders** dengan gaya garis tipis berwarna biru, **Apply to: Whole document**.",
      "Tambahkan **Design → Watermark → Custom Watermark → Text watermark** bertuliskan `DRAFT`, ukuran besar, layout Diagonal.",
      "Sisipkan **Drop Cap** pada awal paragraf pertama artikel (Insert → Drop Cap → Dropped).",
      "Aktifkan **Layout → Hyphenation → Automatic** dan perhatikan perubahan pada paragraf yang justify.",
      "Simpan dokumen, lalu coba cetak pratinjau ([[Ctrl+P]]) untuk melihat hasil akhirnya."
    ]
  },
  latihan: [
    "Buat satu halaman dokumen dengan orientasi landscape dan dua kolom berisi daftar nama peserta.",
    "Buat dokumen berjilid dengan **Mirror margins** dan gutter 1 cm, lalu jelaskan perbedaannya dengan margin Normal.",
    "Buat sertifikat sederhana berukuran A4 landscape dengan page border bergaya art dan watermark bertuliskan nama lembaga.",
    "Jelaskan kapan memakai **This point forward** dan kapan memakai **Whole document** saat mengubah Page Setup.",
    "Buat artikel tiga kolom dengan drop cap pada paragraf pembuka."
  ],
  shortcut: [
    { k: "Alt+P", f: "Membuka tab Layout melalui Key Tips" },
    { k: "Ctrl+Enter", f: "Menyisipkan pemisah halaman" },
    { k: "Ctrl+Shift+Enter", f: "Menyisipkan pemisah kolom (column break)" },
    { k: "Alt+Shift+P", f: "Menyisipkan nomor halaman (field PAGE)" },
    { k: "Ctrl+F2", f: "Membuka Print Preview" },
    { k: "Alt+Ctrl+M", f: "Menyisipkan komentar (versi lama) / perintah terkait margin" }
  ],
  rangkuman: [
    "Tab Layout mengatur kertas: size, orientation, margins, columns, breaks, dan hyphenation.",
    "Dropdown Apply to menentukan cakupan penerapan pengaturan halaman.",
    "Kolom dibuat lewat Layout → Columns dan diakhiri dengan Continuous Section Break bila ingin kembali satu kolom.",
    "Page border dan page color diatur pada tab Design.",
    "Watermark adalah elemen header; hapus secara resmi lewat Design → Watermark → Remove Watermark."
  ],
  kuis: [
    {
      q: "Margin Normal pada Word secara bawaan adalah…",
      opsi: ["1,27 cm semua sisi", "2,54 cm semua sisi", "3 cm kiri dan 2 cm kanan", "4 cm kiri dan 3 cm kanan"],
      jawab: 1,
      bahasan: "Preset Normal memakai 2,54 cm (1 inci) di keempat sisi. Preset Narrow 1,27 cm, dan Wide 5,08 cm di sisi kiri-kanan."
    },
    {
      q: "Pilihan Apply to: This point forward berarti pengaturan diterapkan…",
      opsi: [
        "Pada seluruh dokumen",
        "Hanya pada halaman aktif",
        "Mulai dari posisi kursor ke bagian berikutnya",
        "Hanya pada teks yang diseleksi"
      ],
      jawab: 2,
      bahasan: "This point forward menerapkan pengaturan mulai dari posisi kursor hingga akhir dokumen, biasanya dengan membuat section baru secara otomatis."
    },
    {
      q: "Perintah untuk menghapus watermark secara benar adalah…",
      opsi: [
        "Menghapus teksnya langsung di halaman",
        "Design → Watermark → Remove Watermark",
        "Menekan Delete pada header",
        "Layout → Breaks"
      ],
      jawab: 1,
      bahasan: "Watermark adalah objek header. Menghapusnya lewat menu resmi memastikan tidak ada sisa objek yang tertinggal di header."
    },
    {
      q: "Untuk membuat artikel dua kolom dengan garis pemisah, perintah yang dipakai adalah…",
      opsi: ["Layout → Columns → More Columns", "Insert → Table", "Layout → Breaks", "Design → Page Borders"],
      jawab: 0,
      bahasan: "Kotak dialog More Columns menyediakan Number of columns, Width, Spacing, dan opsi Line between untuk menambahkan garis pemisah."
    },
    {
      q: "Agar teks justify tidak berlubang lebar, fitur yang sebaiknya diaktifkan adalah…",
      opsi: ["Line Numbers", "Hyphenation", "Drop Cap", "Watermark"],
      jawab: 1,
      bahasan: "Hyphenation memenggal kata di akhir baris sehingga jarak antarkata pada paragraf justify menjadi lebih merata."
    }
  ]
},

{
  id: 6,
  judul: "Mencetak, Mengekspor, dan Mengelola Dokumen",
  level: "Dasar",
  durasi: "90 menit",
  deskripsi: "Menguasai Backstage view: pratinjau cetak, pengaturan printer, pencetakan dua sisi, ekspor ke PDF, mengelola berkas, serta mengatur properti dokumen.",
  tujuan: [
    "Menggunakan Print Preview dan memahami setiap pilihan pencetakan.",
    "Mencetak halaman tertentu, rentang halaman, dan dokumen dua sisi.",
    "Mengekspor dokumen ke PDF dan mengatur opsinya.",
    "Mengelola berkas lewat Info, Open, Recent, dan Recover Unsaved Documents.",
    "Mengisi properti dokumen dan memahami Inspect Document."
  ],
  materi: [
    {
      h: "6.1 Backstage View dan Menu File",
      p: ["Klik tab **File** akan membuka **Backstage view**, yaitu tampilan layar penuh berisi perintah tingkat berkas, bukan tingkat penyuntingan. Bagian ini berisi:"],
      tabel: {
        kepala: ["Menu", "Fungsi"],
        rows: [
          ["Home / New", "Membuat dokumen baru dari kosong atau templat"],
          ["Open", "Membuka dari OneDrive, This PC, atau Recent"],
          ["Info", "Properti dokumen, proteksi, Inspect Document, Manage Document, Version History"],
          ["Save / Save As", "Menyimpan dan menyimpan salinan dengan format/lokasi berbeda"],
          ["Print", "Pratinjau cetak, pemilihan printer, pengaturan halaman, cetak"],
          ["Share", "Membagikan tautan kolaborasi lewat OneDrive/SharePoint"],
          ["Export", "Membuat PDF/XPS, mengubah jenis berkas, membuat video (jarang)"],
          ["Close", "Menutup dokumen aktif"],
          ["Account", "Informasi akun, lisensi, tema Office, pembaruan"],
          ["Options", "Pengaturan menyeluruh Word: tampilan, penyuntingan, penyimpanan, bahasa"]
        ]
      },
      tip: "Tekan [[Esc]] atau klik tombol panah kembali di kiri atas untuk keluar dari Backstage view tanpa menjalankan perintah apa pun."
    },
    {
      h: "6.2 Pratinjau dan Pengaturan Cetak",
      steps: [
        "Tekan [[Ctrl+P]] atau pilih **File → Print**.",
        "Di sisi kiri, atur **Copies** (jumlah salinan).",
        "Pilih **Printer** yang tersedia. Bila ingin menghemat tinta, pilih **Microsoft Print to PDF** untuk menghasilkan berkas.",
        "Pada **Settings**, tentukan bagian yang dicetak: Print All Pages, Print Current Page, Print Selection, atau Custom Range.",
        "Tentukan **Print One Sided** atau **Print on Both Sides** (dua sisi).",
        "Pilih **Collated** (terurut per set) atau **Uncollated** untuk cetak banyak salinan.",
        "Pilih orientasi **Portrait/Landscape** dan ukuran kertas.",
        "Atur **Margins**, lalu **Pages per Sheet** (1, 2, 4, 6, 8, 16) untuk mencetak beberapa halaman dalam satu lembar.",
        "Periksa pratinjau di sisi kanan. Gunakan **Zoom to Page** untuk melihat keseluruhan halaman.",
        "Klik **Print**."
      ],
      tabel: {
        kepala: ["Pilihan Settings", "Keterangan"],
        rows: [
          ["Print All Pages", "Mencetak seluruh dokumen"],
          ["Print Current Page", "Hanya halaman tempat kursor berada"],
          ["Print Selection", "Hanya teks/objek yang sedang diseleksi"],
          ["Custom Range", "Mengetik rentang, contoh: `1-3, 5, 8-10`"],
          ["Print Odd Pages Only / Even Pages Only", "Untuk mencetak dua sisi secara manual"],
          ["Print Markup", "Mencetak komentar dan perubahan terlacak"],
          ["Document Properties / Document Info", "Mencetak properti dokumen di akhir halaman"]
        ],
        catatan: "Pencetakan bisa juga memakai **Page Range** di kotak dialog Print versi lama dengan sintaks: `1-3` (rentang), `5` (satu halaman), dan `s3` (section 3)."
      },
      tip: "Untuk menghemat kertas saat menyunting draf, gunakan **Pages per Sheet: 2** dan cetak hanya halaman yang berubah memakai Custom Range."
    },
    {
      h: "6.3 Mencetak Dua Sisi (Duplex) dan Buku Lipat",
      list: [
        "**Duplex otomatis:** bila printer mendukung, pilih **Print on Both Sides → Flip on Long Edge** (jilid samping) atau **Flip on Short Edge** (jilid atas).",
        "**Duplex manual:** cetak halaman ganjil lebih dahulu (Print Odd Pages Only), balik kertas, lalu cetak halaman genap (Print Even Pages Only).",
        "**Booklet:** pada printer yang mendukung, pilih **Print on Both Sides** lalu **Booklet** untuk mencetak dalam format lipatan buku.",
        "**Mirror margins** wajib diaktifkan bila dokumen akan dijilid agar teks tidak tertutup lipatan."
      ]
    },
    {
      h: "6.4 Mengekspor ke PDF",
      steps: [
        "Buka **File → Export → Create PDF/XPS Document** → **Create PDF/XPS**.",
        "Tentukan lokasi dan nama berkas.",
        "Pada **Options**, atur halaman yang diekspor, serta centang **Document structure tags for accessibility** dan **Create bookmarks using: Headings** bila dokumen memiliki gaya judul.",
        "Klik **Publish**."
      ],
      catatan: "Cara cepat: **File → Save As** lalu pilih format **PDF** pada dropdown Save as type. Cara lain: **File → Print** → pilih **Microsoft Print to PDF** sebagai printer.",
      list: [
        "**PDF** menjaga tata letak tetap sama di perangkat apa pun dan sulit diubah, cocok untuk dokumen final.",
        "**XPS** adalah format serupa PDF dari Microsoft, jarang dipakai.",
        "Bila ingin PDF yang dapat diisi (form), buat form di Word terlebih dahulu (Pertemuan 18), lalu ekspor.",
        "Bila perlu PDF berukuran kecil, pada Options pilih kualitas standar/kompresi, atau optimalkan gambar terlebih dahulu."
      ]
    },
    {
      h: "6.5 Mengelola Dokumen: Info, Properti, dan Inspeksi",
      sub: [
        {
          h: "Properti dokumen",
          p: ["**File → Info** menampilkan dan memungkinkan penyuntingan properti seperti Title, Tags, Comments, dan Author. Properti ini berguna saat pencarian berkas di sistem manajemen dokumen. Untuk properti lanjutan, klik **Properties → Advanced Properties**."]
        },
        {
          h: "Inspect Document",
          p: ["**File → Info → Check for Issues → Inspect Document** memeriksa dan menghapus informasi tersembunyi: komentar, revisi, data pribadi, teks tersembunyi, serta XML khusus. Sangat penting sebelum dokumen dibagikan ke luar organisasi."]
        },
        {
          h: "Recover Unsaved Documents",
          p: ["**File → Info → Manage Document → Recover Unsaved Documents** membuka daftar berkas yang belum pernah disimpan. Berguna bila Word atau komputer berhenti mendadak sebelum Anda menekan Save."]
        },
        {
          h: "Recent dan Pin",
          p: ["**File → Open → Recent** menampilkan berkas terakhir. Klik ikon pin di sebelah kanan nama berkas untuk menahannya agar selalu tampil di daftar paling atas."]
        }
      ],
      peringatan: "Sebelum mengirim dokumen ke pihak luar, jalankan **Inspect Document** dan hapus komentar serta revisi. Banyak kebocoran informasi organisasi terjadi karena komentar internal ikut terkirim."
    }
  ],
  praktikum: {
    judul: "Menyiapkan Dokumen Siap Cetak dan PDF",
    deskripsi: "Latihan menyiapkan dokumen tiga halaman, mencetaknya secara selektif, lalu mengekspornya menjadi PDF yang rapi.",
    langkah: [
      "Buka dokumen dari Pertemuan 5 atau buat dokumen baru minimal tiga halaman berisi teks panjang.",
      "Simpan sebagai `Latihan 06 - Cetak dan Ekspor`.",
      "Tekan [[Ctrl+P]] untuk membuka Print Preview. Periksa bahwa tidak ada teks terpotong di tepi halaman.",
      "Pada **Settings**, pilih **Print All Pages** lalu ubah ke **Custom Range** dan isi `1-2`. Amati pratinjau hanya menampilkan halaman 1–2.",
      "Ubah **Pages per Sheet** menjadi **2 pages per sheet** dan perhatikan perubahan tata letak pada pratinjau.",
      "Kembalikan ke 1 page per sheet, lalu pilih **Print on Both Sides → Flip on Long Edge**.",
      "Tutup panel cetak dengan [[Esc]], lalu buka **File → Info** dan isi properti: Title = `Latihan Cetak`, Author = nama Anda, Tags = `kursus, word`.",
      "Jalankan **Check for Issues → Inspect Document** → centang semua opsi → **Inspect** → tinjau hasilnya → **Close**.",
      "Buka **File → Export → Create PDF/XPS**, aktifkan **Create bookmarks using: Headings**, lalu publikasikan sebagai `Latihan 06 - Cetak dan Ekspor.pdf`.",
      "Buka berkas PDF tersebut dengan peramban atau pembaca PDF, lalu periksa apakah bookmark muncul di panel samping.",
      "Kembali ke Word, buka **File → Info → Version History** untuk melihat riwayat versi dokumen.",
      "Terakhir, jalankan **File → Options → Display**, aktifkan **Print background colors and images**, lalu bandingkan hasil cetak jika dokumen memakai warna latar."
    ]
  },
  latihan: [
    "Jelaskan perbedaan **Create PDF/XPS** pada menu Export dengan **Save As → PDF**. Kapan masing-masing lebih menguntungkan?",
    "Sebutkan sintaks rentang halaman untuk mencetak halaman 1, 3 sampai 5, dan 10.",
    "Jelaskan langkah mencetak dokumen 20 halaman secara dua sisi pada printer yang tidak mendukung duplex otomatis.",
    "Apa risiko membagikan dokumen Word yang masih memuat komentar dan revisi? Bagaimana cara mencegahnya?",
    "Praktikkan membuat PDF dengan bookmark berdasarkan Heading, lalu buktikan bookmark tersebut berfungsi."
  ],
  shortcut: [
    { k: "Ctrl+P", f: "Membuka pengaturan cetak" },
    { k: "Ctrl+F2", f: "Membuka Print Preview" },
    { k: "Ctrl+Shift+S", f: "Save As" },
    { k: "Ctrl+F12", f: "Membuka dialog Open" },
    { k: "Esc", f: "Menutup Backstage view / membatalkan" },
    { k: "Alt+F", f: "Membuka tab File melalui Key Tips" }
  ],
  rangkuman: [
    "Backstage view (tab File) mengelola berkas: New, Open, Info, Save, Print, Export, dan Options.",
    "Print Preview memastikan tata letak benar sebelum kertas dan tinta terpakai.",
    "Custom Range memungkinkan pencetakan halaman tertentu, dan pencetakan ganjil-genap memungkinkan duplex manual.",
    "PDF adalah format terbaik untuk dokumen final yang dibagikan; aktifkan bookmark berbasis Heading agar mudah dinavigasi.",
    "Inspect Document wajib dijalankan sebelum dokumen dibagikan keluar organisasi."
  ],
  kuis: [
    {
      q: "Sintaks Custom Range untuk mencetak halaman 1 sampai 3 dan halaman 7 adalah…",
      opsi: ["1,3,7", "1-3, 7", "1→3, 7", "1;3;7"],
      jawab: 1,
      bahasan: "Tanda hubung (-) menyatakan rentang dan koma (,) memisahkan bagian. Jadi 1-3, 7 berarti halaman 1, 2, 3, dan 7."
    },
    {
      q: "Fitur yang memeriksa dan menghapus komentar serta data pribadi sebelum dokumen dibagikan adalah…",
      opsi: ["Inspect Document", "Version History", "AutoRecover", "Compare"],
      jawab: 0,
      bahasan: "Inspect Document diakses melalui File → Info → Check for Issues. Fungsinya menemukan informasi tersembunyi seperti komentar, revisi, dan properti pribadi."
    },
    {
      q: "Agar PDF memiliki bookmark navigasi, saat ekspor harus diaktifkan opsi…",
      opsi: [
        "Document structure tags for accessibility",
        "Create bookmarks using: Headings",
        "ISO 19005-1 compliant (PDF/A)",
        "Bitmap text when fonts may not be embedded"
      ],
      jawab: 1,
      bahasan: "Opsi Create bookmarks using: Headings membangun panel navigasi PDF dari gaya Heading yang dipakai di dokumen."
    },
    {
      q: "Pilihan Flip on Long Edge pada pencetakan dua sisi akan menghasilkan…",
      opsi: [
        "Jilid di sisi panjang (seperti buku)",
        "Jilid di sisi pendek (seperti kalender)",
        "Cetakan satu sisi",
        "Cetakan terbalik"
      ],
      jawab: 0,
      bahasan: "Flip on Long Edge membalik halaman pada sisi panjang sehingga cocok untuk jilid buku. Flip on Short Edge dipakai untuk jilid atas seperti kalender meja."
    },
    {
      q: "Untuk mencetak hanya teks yang sedang diseleksi, pilihan Settings yang tepat adalah…",
      opsi: ["Print All Pages", "Print Current Page", "Print Selection", "Print Markup"],
      jawab: 2,
      bahasan: "Print Selection mencetak hanya bagian yang diseleksi. Pilihan ini aktif hanya bila ada teks atau objek yang diseleksi sebelum membuka menu Print."
    }
  ]
},

{
  id: 7,
  judul: "Tabel: Membuat, Memformat, dan Mengolah Data",
  level: "Menengah",
  durasi: "120 menit",
  deskripsi: "Membuat dan mengelola tabel secara profesional: menyisipkan, menggabungkan sel, mengatur ukuran, memformat desain, mengurutkan data, dan menghitung sederhana.",
  tujuan: [
    "Menyisipkan tabel dengan berbagai cara dan mengatur ukurannya.",
    "Menyisipkan serta menghapus baris dan kolom, dan menggabungkan atau memecah sel.",
    "Menerapkan Table Styles, border, shading, dan pengaturan tata letak tabel.",
    "Mengurutkan data dan mengulang baris judul pada halaman berikutnya.",
    "Mengonversi teks menjadi tabel dan sebaliknya, serta memakai rumus sederhana."
  ],
  materi: [
    {
      h: "7.1 Menyisipkan Tabel",
      steps: [
        "Buka tab **Insert** → **Table**.",
        "**Cara 1 — Grid:** geser kursor pada kotak-kotak hingga jumlah kolom dan baris yang diinginkan, lalu klik.",
        "**Cara 2 — Insert Table:** pilih baris ini untuk membuka kotak dialog dan mengisi **Number of columns** serta **Number of rows** secara tepat.",
        "**Cara 3 — Draw Table:** menggambar tabel manual memakai pena, berguna untuk membuat tabel tidak beraturan.",
        "**Cara 4 — Convert Text to Table:** mengubah teks yang sudah dipisahkan tab/koma menjadi tabel.",
        "**Cara 5 — Quick Tables:** memilih tabel siap pakai seperti kalender dan daftar tabel.",
        "**Cara 6 — Excel Spreadsheet:** menyisipkan lembar kerja Excel di dalam dokumen Word."
      ],
      tip: "Untuk menghapus tabel dengan cepat, letakkan kursor di dalamnya lalu tekan [[Alt+A]] kemudian [[D]] kemudian [[T]], atau gunakan **Layout (Table Tools) → Delete → Delete Table**."
    },
    {
      h: "7.2 Tab Kontekstual Table Tools",
      p: ["Saat kursor berada di dalam tabel, muncul dua tab tambahan berwarna khusus:"],
      tabel: {
        kepala: ["Tab", "Group dan Perintah Penting"],
        rows: [
          ["Table Design", "Table Style Options (Header Row, Banded Rows, First Column), Table Styles, Borders, Shading, Border Painter"],
          ["Table Layout", "Table (Select, View Gridlines, Properties), Rows & Columns (Insert/Delete, Merge, Split), Merge (Merge Cells, Split Cells, Split Table), Cell Size, Alignment, Data (Sort, Convert to Text, Formula, Repeat Header Rows)"]
        ]
      }
    },
    {
      h: "7.3 Menambah, Menghapus, dan Mengatur Sel",
      list: [
        "**Menambah baris:** tempatkan kursor di sel terakhir tabel lalu tekan [[Tab]] — baris baru otomatis dibuat.",
        "**Menambah baris di posisi tertentu:** klik kanan baris → **Insert → Insert Rows Above / Below**.",
        "**Menambah kolom:** klik kanan kolom → **Insert → Insert Columns to the Left / Right**.",
        "**Menghapus:** klik kanan → **Delete Cells / Rows / Columns / Table**.",
        "**Menggabungkan sel (Merge Cells):** seleksi beberapa sel → klik kanan → **Merge Cells**, atau Table Layout → **Merge Cells**.",
        "**Memecah sel (Split Cells):** klik kanan sel → **Split Cells**, tentukan jumlah baris dan kolom hasil pemecahan.",
        "**Memecah tabel:** letakkan kursor di baris yang akan menjadi awal tabel baru → Table Layout → **Split Table**.",
        "**Mengubah ukuran kolom:** tarik garis batas kolom, atau tentukan nilai pasti di Table Properties → tab **Column → Preferred width**.",
        "**Menyejajarkan tabel:** Table Properties → **Table → Alignment → Left / Center / Right**."
      ],
      tip: "Tahan [[Alt]] saat menarik garis batas kolom untuk mengatur lebar secara presisi; penggaris akan menampilkan ukuran dalam sentimeter."
    },
    {
      h: "7.4 Desain Tabel",
      sub: [
        {
          h: "Table Styles",
          p: ["Tab **Table Design** menyediakan galeri gaya tabel. Bila kursor diarahkan ke sebuah gaya, Word menampilkan pratinjau langsung pada tabel Anda. Gunakan **Modify Table Style** untuk menyesuaikan warna dan garis secara permanen."]
        },
        {
          h: "Table Style Options",
          list: [
            "**Header Row** — baris pertama diformat khusus dan diulang di setiap halaman.",
            "**Total Row** — menonjolkan baris terakhir untuk nilai total.",
            "**Banded Rows** — baris ganjil/genap bergantian warna (zebra striping) agar mudah dibaca.",
            "**First Column** — menonjolkan kolom pertama.",
            "**Last Column** — menonjolkan kolom terakhir.",
            "**Banded Columns** — kolom bergantian warna."
          ]
        },
        {
          h: "Borders dan Shading",
          steps: [
            "Seleksi sel atau seluruh tabel.",
            "Tab **Table Design** → **Borders** → pilih posisi garis (All Borders, Outside Borders, No Border, dan lainnya).",
            "Untuk garis khusus, pilih **Borders and Shading** → tab **Borders**, atur **Style**, **Color**, **Width**, dan posisi garis.",
            "Tab **Shading** → pilih warna latar untuk sel terpilih.",
            "Klik **OK**."
          ]
        }
      ],
      peringatan: "Border bawaan **Table Grid** sering dianggap terlalu tebal untuk dokumen formal. Untuk laporan resmi, gunakan garis tipis (0,5 pt) dan hindari warna mencolok."
    },
    {
      h: "7.5 Mengurutkan Data dan Rumus Sederhana",
      steps: [
        "**Sort:** letakkan kursor di tabel → Table Layout → **Sort**.",
        "Tentukan kolom pengurutan pada **Sort by**, jenis isi (**Text, Number, Date**), dan urutan **Ascending** atau **Descending**.",
        "Bila tabel memiliki baris judul, pastikan pilihan **Header row** aktif.",
        "**Formula:** letakkan kursor pada sel hasil → Table Layout → **Formula**.",
        "Tulis rumusnya, misalnya `=SUM(ABOVE)` untuk menjumlahkan semua nilai di atasnya, atau `=AVERAGE(LEFT)` untuk rata-rata nilai di sebelah kiri.",
        "Pilih **Number format** lalu klik **OK**."
      ],
      tabel: {
        kepala: ["Rumus", "Fungsi"],
        rows: [
          ["=SUM(ABOVE)", "Menjumlahkan seluruh sel di atas kursor pada kolom yang sama"],
          ["=SUM(LEFT)", "Menjumlahkan seluruh sel di sebelah kiri pada baris yang sama"],
          ["=AVERAGE(ABOVE)", "Menghitung rata-rata sel di atas"],
          ["=MAX(LEFT)", "Nilai terbesar di sebelah kiri"],
          ["=MIN(ABOVE)", "Nilai terkecil di atas"],
          ["=COUNT(LEFT)", "Menghitung banyaknya sel berisi angka di sebelah kiri"]
        ],
        catatan: "Rumus Word bersifat statis: hasilnya tidak otomatis berubah saat data diubah. Untuk memperbarui, klik kanan sel hasil → **Update Field** (atau tekan [[F9]]). Untuk perhitungan yang sering berubah, lebih baik memakai tabel Excel yang disisipkan."
      }
    },
    {
      h: "7.6 Convert Text to Table dan Sebaliknya",
      steps: [
        "**Teks → Tabel:** seleksi teks yang setiap barisnya memisahkan kolom dengan Tab, koma, atau karakter lain → **Insert → Table → Convert Text to Table** → tentukan **Separate text at** (Tabs/Commas/Other) → klik **OK**.",
        "**Tabel → Teks:** klik di dalam tabel → Table Layout → **Convert to Text** → pilih pemisah (Tabs, Paragraph marks, Commas) → **OK**.",
        "Cara ini sangat berguna saat menyalin data dari Excel atau Notepad ke Word."
      ],
      tip: "Bila hasil salin-tempel dari Excel berantakan, gunakan **Paste Special** ([[Ctrl+Alt+V]]) → **Unformatted Text** atau **Keep Text Only**, lalu ubah menjadi tabel dengan pemisah Tab."
    }
  ],
  praktikum: {
    judul: "Membuat Daftar Nilai Peserta",
    deskripsi: "Anda akan membuat tabel nilai lengkap dengan pengurutan, penghitungan, dan pengulangan baris judul.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 07 - Tabel Nilai`.",
      "Ketik judul `DAFTAR NILAI PESERTA PELATIHAN`, rata tengah, tebal.",
      "Sisipkan tabel **Insert → Table → Insert Table** dengan 5 kolom dan 8 baris.",
      "Isi baris pertama: `No`, `Nama Peserta`, `Nilai Teori`, `Nilai Praktik`, `Rata-rata`.",
      "Isi tujuh baris berikutnya dengan nama rekan/kreatif Anda sendiri beserta nilai antara 60 sampai 100.",
      "Seleksi baris pertama → Table Design → aktifkan **Header Row** dan **Banded Rows**.",
      "Pilih gaya tabel yang rapi dari galeri **Table Styles**, misalnya **Grid Table 4 - Accent 1**.",
      "Pada kolom Rata-rata setiap baris, gunakan **Formula** dengan `=AVERAGE(LEFT)` dan Number format `0.00`.",
      "Perbarui hasil dengan memilih seluruh tabel lalu tekan [[F9]].",
      "Sisipkan satu baris di paling bawah, tulis `Rata-rata Kelas` pada kolom Nama, dan isi kolom Rata-rata dengan `=AVERAGE(ABOVE)`.",
      "Urutkan tabel berdasarkan kolom Rata-rata secara **Descending** memakai Table Layout → Sort.",
      "Tambahkan satu kolom di kanan untuk `Keterangan` (Lulus/Tidak Lulus) dengan lebar lebih sempit.",
      "Buka **Table Properties → Row** → aktifkan **Repeat as header row at the top of each page**.",
      "Aktifkan **Allow row to break across pages** → matikan agar satu baris tidak terpotong dua halaman.",
      "Sejajarkan seluruh tabel ke tengah halaman memakai Table Properties → Table → Alignment → Center.",
      "Terapkan **Shading** warna kuning muda pada baris yang nilainya di bawah 70.",
      "Simpan dokumen."
    ]
  },
  latihan: [
    "Buat tabel jadwal pelajaran mingguan dengan 6 kolom (Jam, Senin–Jumat) dan gabungkan sel untuk jam istirahat.",
    "Buat tabel anggaran sederhana, lalu hitung totalnya memakai `=SUM(ABOVE)` dan rata-ratanya memakai `=AVERAGE(ABOVE)`.",
    "Salin data dari Excel atau Notepad ke Word, lalu ubah menjadi tabel dengan pemisah Tab.",
    "Jelaskan perbedaan Merge Cells dengan Split Cells dan berikan satu contoh penggunaan masing-masing.",
    "Buat tabel berisi 15 baris data, atur agar baris judul terulang di halaman kedua, lalu buktikan hasilnya di Print Preview."
  ],
  shortcut: [
    { k: "Tab (di sel terakhir)", f: "Menambah baris baru di akhir tabel" },
    { k: "Shift+Tab", f: "Pindah ke sel sebelumnya" },
    { k: "Alt+Shift+↑ / ↓", f: "Memindahkan baris ke atas / ke bawah" },
    { k: "Alt+5 (numpad)", f: "Menyeleksi seluruh tabel" },
    { k: "F9", f: "Memperbarui hasil rumus / field" },
    { k: "Ctrl+Tab", f: "Menyisipkan tab di dalam sel tabel" },
    { k: "Alt+Home / Alt+End", f: "Pindah ke sel pertama / terakhir pada baris" }
  ],
  rangkuman: [
    "Tabel dapat dibuat melalui grid, kotak dialog, menggambar, konversi teks, Quick Tables, atau lembar Excel.",
    "Tab Table Design mengatur gaya dan garis, sedangkan Table Layout mengatur struktur dan data.",
    "Merge Cells menggabungkan sel, Split Cells memecahnya, dan Split Table memisahkan tabel.",
    "Sort mengurutkan data, sedangkan Formula menyediakan perhitungan dasar yang perlu diperbarui manual.",
    "Repeat as header row membuat baris judul tetap tampil di setiap halaman pada tabel panjang."
  ],
  kuis: [
    {
      q: "Cara tercepat menambah baris baru di akhir tabel adalah…",
      opsi: [
        "Klik kanan → Insert → Rows Below",
        "Tekan Tab pada sel terakhir tabel",
        "Tekan Enter dua kali di sel terakhir",
        "Menekan Ctrl+Shift+Plus"
      ],
      jawab: 1,
      bahasan: "Menekan Tab pada sel terakhir tabel akan otomatis menambahkan satu baris baru di bagian bawah."
    },
    {
      q: "Rumus untuk menjumlahkan seluruh angka di atas sel aktif adalah…",
      opsi: ["=TOTAL(ABOVE)", "=SUM(ABOVE)", "=ADD(UP)", "=COUNT(ABOVE)"],
      jawab: 1,
      bahasan: "=SUM(ABOVE) menjumlahkan semua nilai pada kolom yang sama di atas sel tempat rumus diletakkan. Hasilnya perlu diperbarui dengan F9 bila data berubah."
    },
    {
      q: "Agar baris judul tabel terulang di setiap halaman, opsi yang harus diaktifkan adalah…",
      opsi: [
        "Allow row to break across pages",
        "Repeat as header row at the top of each page",
        "Preferred width",
        "Band rows"
      ],
      jawab: 1,
      bahasan: "Opsi tersebut terdapat pada Table Properties → tab Row. Tanpa itu, tabel panjang akan kehilangan judul kolom di halaman berikutnya."
    },
    {
      q: "Fitur untuk mengubah teks berpemisah Tab menjadi tabel adalah…",
      opsi: ["Convert Text to Table", "Quick Tables", "Draw Table", "Merge Cells"],
      jawab: 0,
      bahasan: "Convert Text to Table mengubah blok teks yang terpisah oleh Tab, koma, atau karakter lain menjadi tabel dengan kolom yang sesuai."
    },
    {
      q: "Opsi tabel yang membuat baris bergantian warna untuk memudahkan pembacaan adalah…",
      opsi: ["Header Row", "Total Row", "Banded Rows", "First Column"],
      jawab: 2,
      bahasan: "Banded Rows memberi warna berbeda pada baris ganjil dan genap sehingga mata lebih mudah mengikuti baris data."
    }
  ]
},

{
  id: 8,
  judul: "Gambar, Bentuk, Ikon, dan SmartArt",
  level: "Menengah",
  durasi: "120 menit",
  deskripsi: "Menyisipkan dan mengolah elemen visual: gambar, bentuk (shapes), ikon, SmartArt, bagan, screenshot, serta mengatur pembungkusan teks dan posisi objek.",
  tujuan: [
    "Menyisipkan gambar dari komputer, internet, dan tangkapan layar.",
    "Memotong, mengatur ukuran, dan memperbaiki tampilan gambar.",
    "Mengatur Wrap Text dan posisi objek terhadap teks.",
    "Membuat diagram memakai Shapes, Icons, dan SmartArt.",
    "Mengelompokkan, menyelaraskan, dan mengurutkan objek (z-order)."
  ],
  materi: [
    {
      h: "8.1 Jenis Objek Visual di Tab Insert",
      tabel: {
        kepala: ["Perintah", "Fungsi dan Contoh Penggunaan"],
        rows: [
          ["Pictures → This Device", "Menyisipkan gambar dari komputer. Format populer: JPG, PNG, GIF, BMP, TIFF, SVG."],
          ["Pictures → Stock Images", "Gambar stok berlisensi dari pustaka Microsoft (butuh koneksi internet)."],
          ["Pictures → Online Pictures", "Mencari gambar di web langsung dari Word. Perhatikan hak cipta."],
          ["Shapes", "Bentuk geometris: persegi, lingkaran, panah, bagan alur, bintang, spanduk."],
          ["Icons", "Ikon vektor siap pakai: bisnis, teknologi, komunikasi, dan sebagainya."],
          ["3D Models", "Model tiga dimensi yang dapat diputar dan diubah sudut pandangnya."],
          ["SmartArt", "Diagram siap pakai: daftar, proses, hierarki, hubungan, matriks, piramida, gambar."],
          ["Chart", "Grafik data dengan lembar kerja Excel mini di dalam Word."],
          ["Screenshot", "Menangkap jendela aplikasi lain yang sedang terbuka."],
          ["Screen Recording", "Merekam aktivitas layar (fitur Microsoft 365)."]
        ]
      }
    },
    {
      h: "8.2 Menyisipkan dan Menyesuaikan Gambar",
      steps: [
        "Letakkan kursor pada posisi penyisipan.",
        "Buka **Insert → Pictures → This Device**.",
        "Pilih berkas gambar, lalu klik **Insert**.",
        "Setelah gambar tersisip, tab kontekstual **Picture Format** otomatis aktif.",
        "Atur ukuran memakai **Size** pada tab Picture Format, atau tarik handle di sudut gambar sambil menahan [[Shift]] agar perbandingan sisi terjaga.",
        "Gunakan **Crop** untuk memotong bagian yang tidak diperlukan. Pilih **Crop to Shape** untuk memotong mengikuti bentuk tertentu.",
        "Terapkan **Corrections** (kecerahan/kontras), **Color** (kejenuhan/nada), **Artistic Effects**, **Picture Border**, dan **Picture Effects**.",
        "Klik **Compress Pictures** untuk mengecilkan ukuran berkas dokumen.",
        "Isi **Alt Text** melalui klik kanan gambar → **Edit Alt Text** agar dokumen aksesibel."
      ],
      tip: "Untuk mengganti gambar tanpa mengubah ukuran dan posisinya, klik kanan gambar → **Change Picture → This Device**. Semua pengaturan format dipertahankan otomatis."
    },
    {
      h: "8.3 Wrap Text: Mengatur Posisi Gambar terhadap Teks",
      p: ["Wrap Text menentukan bagaimana teks mengalir di sekitar gambar. Ini pengaturan paling penting dan paling sering menjadi sumber masalah tata letak."],
      tabel: {
        kepala: ["Opsi Wrap", "Perilaku"],
        rows: [
          ["In Line with Text", "Gambar berperilaku seperti huruf; posisinya mengikuti aliran teks. Bawaan saat gambar disisipkan."],
          ["Square", "Teks mengalir mengelilingi kotak batas gambar."],
          ["Tight", "Teks mengikuti kontur bentuk gambar, lebih rapat daripada Square."],
          ["Through", "Teks mengisi juga bagian kosong di dalam gambar."],
          ["Top and Bottom", "Teks berhenti di atas dan melanjut setelah gambar. Gambar tidak diapit teks di sisinya."],
          ["Behind Text", "Gambar berada di belakang teks — cocok untuk watermark atau latar."],
          ["In Front of Text", "Gambar menutupi teks — cocok untuk stempel atau tanda tangan."]
        ]
      },
      steps: [
        "Klik gambar, lalu buka tab **Picture Format**.",
        "Klik **Wrap Text** dan pilih opsi yang diinginkan.",
        "Untuk pengaturan rinci, pilih **More Layout Options** → tab **Text Wrapping**.",
        "Tentukan **Distance from text** (jarak gambar terhadap teks) dan opsi **Wrap text** (Both sides, Left only, Right only, Largest only).",
        "Gunakan **Position** untuk menempatkan gambar pada posisi relatif terhadap margin, halaman, atau paragraf.",
        "Untuk mengunci posisi gambar terhadap paragraf tertentu, centang **Move object with text**.",
        "Untuk mencegah gambar berpindah-pindah, centang **Lock anchor**."
      ],
      peringatan: "Bila gambar tiba-tiba meloncat ke halaman lain, penyebabnya biasanya anchor (ikon jangkar) yang tertambat pada paragraf yang berpindah. Aktifkan **Show anchors** lewat **File → Options → Display**, lalu periksa posisi anchor tersebut."
    },
    {
      h: "8.4 Shapes: Membuat Bentuk dan Diagram Sendiri",
      steps: [
        "Buka **Insert → Shapes**.",
        "Pilih kategori bentuk: Lines, Rectangles, Basic Shapes, Block Arrows, Equation Shapes, Flowchart, Stars and Banners, Callouts.",
        "Tarik di halaman untuk menggambar bentuk.",
        "Setelah digambar, tab **Shape Format** aktif. Ubah **Shape Fill** (warna isi), **Shape Outline** (garis tepi), dan **Shape Effects** (bayangan, pantulan).",
        "Gunakan **Add Text** untuk mengetik di dalam bentuk.",
        "Pada group **Insert Shapes**, pilih **Text Box** untuk menyisipkan kotak teks bebas, atau **Draw Text Box** untuk menggambar langsung.",
        "Untuk menggabungkan bentuk, seleksi beberapa bentuk → **Shape Format → Merge Shapes** (Union, Combine, Fragment, Intersect, Subtract)."
      ],
      tip: "Saat menggambar garis atau panah, tahan [[Shift]] agar garis lurus sempurna (horizontal, vertikal, atau 45 derajat). Tahan [[Ctrl]] saat menarik bentuk agar digambar dari titik tengahnya."
    },
    {
      h: "8.5 SmartArt: Diagram Profesional dalam Hitungan Detik",
      steps: [
        "Buka **Insert → SmartArt**.",
        "Pilih kategori di panel kiri: **List, Process, Cycle, Hierarchy, Relationship, Matrix, Pyramid, Picture**.",
        "Pilih tata letak yang sesuai, lalu klik **OK**.",
        "Klik setiap kotak dan ketik teksnya. Bila perlu, gunakan **Text Pane** di sisi kiri untuk memasukkan seluruh teks sekaligus.",
        "Tekan [[Tab]] di Text Pane untuk menurunkan tingkat dan [[Shift+Tab]] untuk menaikkannya.",
        "Gunakan tab **SmartArt Design** untuk **Add Shape**, **Promote/Demote**, **Move Up/Down**, serta **Change Layout**.",
        "Gunakan tab **Format** untuk mengubah gaya warna, efek, dan **Convert to Shapes** agar diagram dapat diedit bebas."
      ],
      catatan: "SmartArt **Hierarchy** adalah cara tercepat membuat bagan struktur organisasi. Cukup ketik nama jabatan dan atasan, lalu atur tingkatnya dengan Tab/Shift+Tab."
    },
    {
      h: "8.6 Menata Banyak Objek: Align, Group, dan Z-Order",
      list: [
        "**Align:** seleksi beberapa objek → Picture Format/Shape Format → **Align** → Align Left, Center, Right, Top, Middle, Bottom.",
        "**Distribute Horizontally / Vertically:** membuat jarak antarobjek sama rata.",
        "**Group:** seleksi beberapa objek → klik kanan → **Group** agar bergerak sebagai satu kesatuan. **Ungroup** untuk memisahkannya kembali.",
        "**Z-Order:** **Bring Forward / Send Backward** mengatur objek mana yang tampak di depan.",
        "**Selection Pane:** View/Format → **Selection Pane** menampilkan daftar semua objek sehingga mudah memilih objek yang tertimbun objek lain.",
        "**Rotate:** memutar objek dengan sudut tertentu atau membaliknya (Flip Vertical/Horizontal).",
        "**Align to Page/Margin:** pada menu Align, aktifkan **Align to Page** atau **Align to Margin** agar acuan penyelarasan sesuai."
      ],
      tip: "Sebelum menyelaraskan banyak objek, aktifkan **View → Gridlines** dan centang **Snap to Grid** agar objek menempel pada kisi sehingga tata letak lebih konsisten."
    },
    {
      h: "8.7 Menyisipkan Tangkapan Layar dan Grafik",
      steps: [
        "**Screenshot:** buka jendela aplikasi yang ingin ditangkap (jangan ditutup), kembali ke Word, lalu **Insert → Screenshot**. Pilih jendela dari galeri **Available Windows**, atau pilih **Screen Clipping** untuk menangkap sebagian layar.",
        "**Chart:** **Insert → Chart** → pilih jenis (Column, Line, Pie, Bar, Area, X Y Scatter, dan lainnya) → klik **OK**.",
        "Sebuah jendela Excel mini akan terbuka. Isi data pada tabelnya; grafik di Word akan langsung mengikuti.",
        "Tutup jendela Excel mini, lalu atur grafik memakai tab **Chart Design** dan **Format**.",
        "Gunakan **Chart Elements** (ikon +) untuk menampilkan judul, label sumbu, legenda, dan label data."
      ],
      catatan: "Grafik di Word terhubung pada data yang disimpan di dalam dokumen. Untuk mengeditnya kembali, klik grafik → **Chart Design → Edit Data**."
    }
  ],
  praktikum: {
    judul: "Membuat Halaman Profil dengan Elemen Visual",
    deskripsi: "Anda akan membuat satu halaman profil organisasi/kelas yang memadukan gambar, bentuk, ikon, dan SmartArt.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 08 - Elemen Visual`.",
      "Sisipkan **SmartArt Hierarchy** (Insert → SmartArt → Hierarchy → Organization Chart) untuk struktur pengurus kelas: Ketua, Wakil, Sekretaris, Bendahara, dan dua anggota.",
      "Isi teks setiap kotak sesuai struktur tersebut. Gunakan [[Tab]] dan [[Shift+Tab]] untuk mengatur tingkat.",
      "Ubah warna SmartArt lewat **SmartArt Design → Change Colors**, lalu pilih gaya **Intense Effect**.",
      "Di bawahnya, buat judul `Visi dan Misi` dan sisipkan **2 Ikon** dari Insert → Icons (misalnya ikon target dan buku).",
      "Ubah warna ikon memakai **Graphics Format → Graphics Fill** agar senada dengan SmartArt.",
      "Sisipkan sebuah **gambar** (foto apa saja) dari Insert → Pictures → This Device.",
      "Atur **Wrap Text → Square** dan letakkan gambar di sisi kanan dengan **Position → Top Right with Square Text Wrapping**.",
      "Atur **Distance from text** menjadi 0,3 cm pada semua sisi melalui More Layout Options.",
      "Terapkan **Picture Border** tipis berwarna abu-abu dan **Picture Effects → Shadow → Offset Bottom Right**.",
      "Gunakan **Crop** untuk memotong gambar menjadi rasio persegi, lalu **Compress Pictures** untuk mengecilkan ukuran berkas.",
      "Isi **Alt Text** pada gambar: `Foto kegiatan pengurus kelas`.",
      "Buat diagram alur sederhana memakai **Shapes → Flowchart** berisi tiga kotak: `Input Data` → `Proses` → `Output`.",
      "Seleksi ketiga kotak → **Shape Format → Align → Align Middle**, lalu **Distribute Horizontally**.",
      "Klik kanan seleksi → **Group** agar ketiga bentuk bergerak bersama.",
      "Tambahkan **Text Box** berisi catatan kecil, beri **Shape Fill → No Fill** dan **No Outline** agar tampak menyatu dengan halaman.",
      "Simpan dokumen, lalu tekan [[Ctrl+P]] untuk memeriksa bahwa tidak ada gambar yang terpotong di tepi halaman."
    ]
  },
  latihan: [
    "Buat bagan struktur organisasi OSIS lengkap dengan SmartArt Hierarchy minimal tiga tingkat.",
    "Sisipkan tiga gambar berjajar dengan ukuran sama, lalu ratakan memakai Align Middle dan Distribusikan Horizontal.",
    "Jelaskan perbedaan Wrap Text Square, Tight, dan Through beserta contoh kasus penggunaannya.",
    "Buat diagram siklus (Cycle) berisi lima tahapan proses kerja memakai SmartArt.",
    "Buat grafik batang sederhana berisi data nilai lima mata pelajaran, lalu tampilkan label datanya."
  ],
  shortcut: [
    { k: "Shift + tarik handle", f: "Mengubah ukuran objek dengan perbandingan sisi tetap" },
    { k: "Ctrl + tarik bentuk", f: "Menggambar bentuk dari titik tengah" },
    { k: "Shift + tarik garis", f: "Membuat garis lurus horizontal/vertikal/45°" },
    { k: "Alt + tarik handle", f: "Penyesuaian ukuran secara presisi (halus)" },
    { k: "Ctrl+G / Ctrl+Shift+G", f: "Mengelompokkan / memisahkan objek" },
    { k: "Ctrl + klik objek", f: "Menyeleksi beberapa objek sekaligus" },
    { k: "Alt+F10", f: "Menampilkan Selection Pane" }
  ],
  rangkuman: [
    "Tab Insert menyediakan Pictures, Shapes, Icons, SmartArt, Chart, dan Screenshot sebagai elemen visual dokumen.",
    "Wrap Text menentukan bagaimana teks mengalir di sekitar objek dan merupakan kunci tata letak yang stabil.",
    "Shapes dipakai untuk menggambar bentuk dan diagram; Merge Shapes menggabungkan beberapa bentuk.",
    "SmartArt mempercepat pembuatan diagram terstruktur dan dapat diubah menjadi bentuk biasa.",
    "Align, Distribute, Group, dan Selection Pane membantu menata banyak objek dengan rapi."
  ],
  kuis: [
    {
      q: "Pengaturan yang menentukan bagaimana teks mengalir di sekitar gambar adalah…",
      opsi: ["Position", "Wrap Text", "Crop", "Compress Pictures"],
      jawab: 1,
      bahasan: "Wrap Text menyediakan opsi In Line with Text, Square, Tight, Through, Top and Bottom, Behind Text, dan In Front of Text."
    },
    {
      q: "Untuk membuat bagan struktur organisasi paling cepat, fitur yang dipakai adalah…",
      opsi: ["Shapes → Flowchart", "SmartArt → Hierarchy", "Chart", "Icons"],
      jawab: 1,
      bahasan: "SmartArt kategori Hierarchy sudah berbentuk bagan bertingkat. Cukup mengetik nama jabatan dan mengatur tingkatnya dengan Tab atau Shift+Tab."
    },
    {
      q: "Fungsi opsi Wrap Text → Behind Text adalah…",
      opsi: [
        "Menempatkan gambar di belakang teks",
        "Menempatkan gambar di depan teks",
        "Memotong gambar mengikuti bentuk",
        "Menghapus latar belakang gambar"
      ],
      jawab: 0,
      bahasan: "Behind Text menempatkan gambar di lapisan belakang sehingga teks tetap terbaca di atasnya, sering dipakai untuk watermark atau latar halaman."
    },
    {
      q: "Untuk memindahkan beberapa objek sebagai satu kesatuan, perintah yang dipakai adalah…",
      opsi: ["Align", "Distribute", "Group", "Bring Forward"],
      jawab: 2,
      bahasan: "Group (Ctrl+G) menyatukan beberapa objek sehingga dapat dipindah, diubah ukurannya, dan diformat bersama-sama. Ungroup memisahkannya kembali."
    },
    {
      q: "Fitur untuk mengecilkan ukuran berkas dokumen yang memuat banyak gambar adalah…",
      opsi: ["Crop", "Compress Pictures", "Artistic Effects", "Change Picture"],
      jawab: 1,
      bahasan: "Compress Pictures menurunkan resolusi gambar di dalam dokumen sehingga ukuran berkas berkurang, dengan pilihan penerapan hanya pada gambar terpilih atau semua gambar."
    }
  ]
}

);
