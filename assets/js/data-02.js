/* ===========================================================
   Data materi — Pertemuan 9 s.d. 16
   =========================================================== */
window.MATERI = window.MATERI || [];
window.MATERI.push(

{
  id: 9,
  judul: "Header, Footer, Nomor Halaman, dan Section Break",
  level: "Menengah",
  durasi: "110 menit",
  deskripsi: "Membangun dokumen berstruktur: kop dan kaki halaman, penomoran halaman berbeda per bagian, halaman sampul tanpa nomor, serta penggunaan section break.",
  tujuan: [
    "Menyisipkan dan menyunting header serta footer dokumen.",
    "Menambahkan nomor halaman dengan format dan posisi yang tepat.",
    "Membuat sampul tanpa nomor halaman dan memulai penomoran dari halaman tertentu.",
    "Memahami perbedaan Page Break dengan Section Break.",
    "Mengelola header/footer berbeda untuk halaman ganjil, genap, dan halaman pertama."
  ],
  materi: [
    {
      h: "9.1 Konsep Header dan Footer",
      p: [
        "Header adalah area di bagian atas halaman, sedangkan footer berada di bagian bawah. Apa pun yang Anda letakkan di sana akan otomatis terulang di setiap halaman: kop surat, judul bab, logo, nomor halaman, tanggal, atau catatan kaki dokumen.",
        "Secara teknis, header dan footer bukan bagian dari badan dokumen. Isinya disimpan terpisah dan hanya tampil pada area margin atas serta bawah."
      ],
      steps: [
        "Buka tab **Insert** → **Header** atau **Footer**.",
        "Pilih salah satu gaya dari galeri, atau pilih **Edit Header** / **Edit Footer** untuk membuat sendiri.",
        "Ketik isi header/footer. Gunakan tab **Header & Footer** untuk menyisipkan nomor halaman, tanggal, gambar, atau mengatur posisi.",
        "Klik **Close Header and Footer** atau klik ganda di area badan dokumen untuk kembali menyunting isi utama.",
        "Untuk mengedit lagi, klik ganda pada area header/footer di halaman mana pun."
      ],
      tip: "Isi header/footer dapat memuat gambar, tabel, dan bahkan bentuk. Banyak perusahaan membuat kop surat lengkap dengan logo dan alamat di dalam header agar otomatis muncul di setiap halaman."
    },
    {
      h: "9.2 Opsi Header & Footer",
      tabel: {
        kepala: ["Opsi", "Fungsi"],
        rows: [
          ["Different First Page", "Halaman pertama memakai header/footer berbeda, biasanya dikosongkan untuk halaman sampul."],
          ["Different Odd & Even Pages", "Halaman ganjil dan genap memiliki header/footer masing-masing, seperti pada buku."],
          ["Show Document Text", "Menampilkan atau menyembunyikan isi badan dokumen saat menyunting header."],
          ["Link to Previous", "Menghubungkan header/footer section aktif dengan section sebelumnya. Bila dinonaktifkan, section itu berdiri sendiri."],
          ["Header from Top / Footer from Bottom", "Mengatur jarak header/footer dari tepi kertas."],
          ["Insert Alignment Tab", "Menyelaraskan teks header ke kiri, tengah, atau kanan."],
          ["Close Header and Footer", "Kembali ke penyuntingan badan dokumen."]
        ]
      },
      peringatan: "Bila Anda mengubah header di satu halaman dan seluruh dokumen ikut berubah, itu karena **Link to Previous** masih aktif. Matikan tautan tersebut agar perubahan hanya berlaku pada section itu."
    },
    {
      h: "9.3 Menambahkan Nomor Halaman",
      steps: [
        "Buka **Insert → Page Number**.",
        "Pilih posisi: **Top of Page**, **Bottom of Page**, **Page Margins**, atau **Current Position**.",
        "Pilih gaya penomoran dari galeri, misalnya **Plain Number 2** (tengah bawah) atau **Accent Bar 1**.",
        "Untuk mengubah format, klik **Format Page Numbers**.",
        "Pada **Number format**, pilih gaya angka: 1, 2, 3; i, ii, iii; I, II, III; a, b, c.",
        "Pada **Page numbering**, pilih **Continue from previous section** atau **Start at** dengan angka tertentu.",
        "Klik **OK**."
      ],
      catatan: "Nomor halaman sebenarnya adalah sebuah **field**. Ia akan selalu menyesuaikan diri saat halaman bertambah atau berkurang. Jangan pernah mengetik nomor halaman secara manual."
    },
    {
      h: "9.4 Studi Kasus: Sampul Tanpa Nomor dan Penomoran Romawi",
      p: ["Ini adalah kebutuhan paling umum pada skripsi, laporan, dan proposal. Struktur yang benar memerlukan **section break**."],
      steps: [
        "Buat halaman sampul, lalu letakkan kursor di akhir halaman sampul.",
        "Buka **Layout → Breaks → Next Page** untuk membuat section baru.",
        "Tulis bagian daftar isi dan kata pengantar pada section kedua.",
        "Letakkan kursor di akhir section kedua, buat lagi **Next Page** section break untuk bagian isi.",
        "Klik ganda pada footer section pertama (halaman sampul), lalu pada tab **Header & Footer** aktifkan **Different First Page**, atau hapus nomor halaman di sana.",
        "Pindah ke footer section kedua. Karena **Link to Previous** masih aktif, klik tombol itu untuk **mematikannya** sehingga section kedua berdiri sendiri.",
        "Sisipkan nomor halaman: **Insert → Page Number → Bottom of Page → Plain Number 2**.",
        "Klik **Format Page Numbers** → Number format pilih **i, ii, iii** → **Start at: i** → **OK**.",
        "Pindah ke footer section ketiga, matikan **Link to Previous**, lalu sisipkan nomor halaman dengan format **1, 2, 3** dan **Start at: 1**.",
        "Periksa hasilnya dengan menekan [[Ctrl+P]] untuk melihat seluruh halaman."
      ],
      tip: "Cara tercepat memeriksa batas section: aktifkan tanda pemformatan ([[Ctrl+Shift+8]]). Section break akan tampil sebagai garis ganda bertuliskan `Section Break (Next Page)`."
    },
    {
      h: "9.5 Page Break vs Section Break",
      tabel: {
        kepala: ["Jenis Pemisah", "Pintasan", "Kegunaan"],
        rows: [
          ["Page Break", "[[Ctrl+Enter]]", "Memindahkan teks setelahnya ke halaman baru. Pengaturan halaman tetap sama."],
          ["Column Break", "[[Ctrl+Shift+Enter]]", "Memindahkan teks ke kolom berikutnya."],
          ["Section Break: Next Page", "—", "Memulai section baru di halaman baru. Memungkinkan header/footer, margin, dan orientasi berbeda."],
          ["Section Break: Continuous", "—", "Memulai section baru di halaman yang sama. Dipakai untuk mengubah jumlah kolom."],
          ["Section Break: Even Page / Odd Page", "—", "Memulai section baru pada halaman genap atau ganjil berikutnya."]
        ],
        catatan: "Yang dapat berubah antar-section: margin, ukuran dan orientasi kertas, jumlah kolom, header/footer, penomoran halaman, border halaman, dan format catatan kaki. Yang **tidak** dapat berbeda antar-section: gaya huruf global dan tema dokumen."
      },
      steps: [
        "Untuk menghapus pemisah: aktifkan tanda pemformatan, letakkan kursor tepat sebelum garis pemisah, lalu tekan [[Delete]].",
        "Bila salah menghapus, tekan [[Ctrl+Z]] untuk mengembalikannya.",
        "Untuk melihat semua pemisah sekaligus, aktifkan **View → Draft** atau Navigation Pane."
      ]
    },
    {
      h: "9.6 Field Tanggal, Nama Berkas, dan Nomor Halaman",
      p: ["Header/footer dapat memuat field dinamis yang diperbarui otomatis:"],
      tabel: {
        kepala: ["Field", "Isi"],
        rows: [
          ["PAGE", "Nomor halaman saat ini"],
          ["NUMPAGES", "Jumlah seluruh halaman"],
          ["DATE", "Tanggal hari ini"],
          ["FILENAME", "Nama berkas dokumen"],
          ["AUTHOR", "Nama penulis dari properti dokumen"],
          ["STYLEREF", "Teks dari gaya tertentu, misalnya judul bab yang sedang aktif"]
        ]
      },
      steps: [
        "Letakkan kursor di header/footer.",
        "Buka **Insert → Quick Parts → Field** (atau **Header & Footer → Date & Time** untuk tanggal).",
        "Pilih kategori **Date and Time** atau **Document Information**.",
        "Pilih field yang diinginkan, tentukan format, lalu klik **OK**.",
        "Klik kanan field → **Update Field** atau tekan [[F9]] untuk memperbarui."
      ],
      tip: "Untuk menampilkan nomor halaman dengan format `Halaman X dari Y`, sisipkan teks `Halaman `, field PAGE, teks ` dari `, lalu field NUMPAGES."
    }
  ],
  praktikum: {
    judul: "Menyusun Laporan Tiga Bagian",
    deskripsi: "Anda akan membuat dokumen dengan sampul tanpa nomor, bagian pendahuluan bernomor romawi, dan isi bernomor angka arab.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 09 - Header Footer Section`.",
      "Tulis halaman sampul: judul laporan, nama penyusun, dan tahun. Posisikan rata tengah secara vertikal memakai **Layout → Page Setup → Layout → Vertical alignment: Center**.",
      "Letakkan kursor di akhir halaman sampul, lalu **Layout → Breaks → Next Page**.",
      "Tulis `KATA PENGANTAR` di halaman kedua beserta dua paragraf isi.",
      "Buat lagi **Next Page** section break setelahnya, lalu tulis `BAB I PENDAHULUAN` dan dua paragraf isi untuk bagian ketiga.",
      "Klik ganda di area footer halaman sampul. Pada tab Header & Footer, aktifkan **Different First Page**.",
      "Pindah ke footer halaman kedua, klik **Link to Previous** untuk mematikannya.",
      "Sisipkan nomor halaman: **Insert → Page Number → Bottom of Page → Plain Number 2**.",
      "Klik **Page Number → Format Page Numbers** → Number format **i, ii, iii** → **Start at: i**.",
      "Pada header halaman kedua, ketik `Laporan Kegiatan Pelatihan` rata kanan memakai **Insert Alignment Tab → Right**.",
      "Pindah ke footer halaman ketiga, matikan **Link to Previous**, sisipkan nomor halaman dengan format **1, 2, 3** dan **Start at: 1**.",
      "Tambahkan page break di dalam bagian ketiga ([[Ctrl+Enter]]) agar laporan menjadi empat halaman, lalu periksa penomoran tetap konsisten.",
      "Aktifkan **View → Multiple Pages** untuk melihat seluruh halaman sekaligus dan memastikan tidak ada nomor halaman pada sampul.",
      "Simpan dokumen."
    ]
  },
  latihan: [
    "Buat kop surat sederhana di header: logo di kiri, nama instansi di tengah, dan alamat di kanan, dengan garis pemisah di bawahnya.",
    "Buat footer dengan format `Halaman X dari Y` memakai field PAGE dan NUMPAGES.",
    "Jelaskan perbedaan Page Break dan Section Break, lalu sebutkan tiga hal yang dapat berbeda antar-section.",
    "Buat dokumen dengan header berbeda untuk halaman ganjil dan genap, seperti pada buku cetak.",
    "Praktikkan membuat penomoran halaman yang dimulai dari 1 pada halaman keempat, sementara tiga halaman sebelumnya tidak bernomor."
  ],
  shortcut: [
    { k: "Ctrl+Enter", f: "Menyisipkan page break" },
    { k: "Ctrl+Shift+Enter", f: "Menyisipkan column break" },
    { k: "Alt+Shift+P", f: "Menyisipkan nomor halaman di posisi kursor" },
    { k: "Alt+Shift+D", f: "Menyisipkan field tanggal" },
    { k: "Alt+Shift+T", f: "Menyisipkan field waktu" },
    { k: "F9", f: "Memperbarui field terpilih" },
    { k: "Ctrl+Shift+8", f: "Menampilkan tanda pemformatan dan batas section" }
  ],
  rangkuman: [
    "Header dan footer adalah area berulang di atas dan bawah halaman; isinya bukan bagian dari badan dokumen.",
    "Different First Page dan Different Odd & Even Pages memungkinkan header/footer berbeda pada halaman tertentu.",
    "Link to Previous menghubungkan header/footer antar-section; matikan bila ingin section berdiri sendiri.",
    "Nomor halaman adalah field PAGE, bukan angka yang diketik manual.",
    "Section break memungkinkan margin, orientasi, kolom, dan penomoran berbeda dalam satu dokumen."
  ],
  kuis: [
    {
      q: "Agar halaman sampul tidak memiliki nomor halaman, opsi yang paling tepat adalah…",
      opsi: ["Different Odd & Even Pages", "Different First Page", "Link to Previous", "Show Document Text"],
      jawab: 1,
      bahasan: "Different First Page membuat halaman pertama memakai header/footer tersendiri, sehingga nomor halaman dapat dikosongkan khusus pada sampul."
    },
    {
      q: "Tombol Link to Previous pada header/footer berfungsi untuk…",
      opsi: [
        "Menghubungkan section dengan section sebelumnya",
        "Menghapus semua header",
        "Menambah nomor halaman",
        "Mengubah margin"
      ],
      jawab: 0,
      bahasan: "Ketika Link to Previous aktif, header/footer section tersebut mengikuti section sebelumnya. Mematikannya membuat section itu memiliki header/footer sendiri."
    },
    {
      q: "Pintasan untuk menyisipkan pemisah halaman adalah…",
      opsi: ["Ctrl+Shift+Enter", "Ctrl+Enter", "Alt+Enter", "Shift+Enter"],
      jawab: 1,
      bahasan: "Ctrl+Enter menyisipkan page break. Ctrl+Shift+Enter adalah column break, sedangkan Shift+Enter adalah line break."
    },
    {
      q: "Field yang menampilkan jumlah seluruh halaman dokumen adalah…",
      opsi: ["PAGE", "NUMPAGES", "SECTIONPAGES", "DATE"],
      jawab: 1,
      bahasan: "NUMPAGES menampilkan total halaman dokumen, sedangkan PAGE menampilkan nomor halaman saat ini. SECTIONPAGES menampilkan jumlah halaman dalam section."
    },
    {
      q: "Pengaturan berikut yang dapat berbeda antar-section adalah…",
      opsi: [
        "Tema dokumen",
        "Gaya huruf Heading 1",
        "Orientasi halaman dan margin",
        "Kumpulan gaya dokumen"
      ],
      jawab: 2,
      bahasan: "Orientasi, margin, ukuran kertas, kolom, header/footer, dan penomoran halaman dapat berbeda antar-section. Tema dan kumpulan gaya berlaku untuk seluruh dokumen."
    }
  ]
},

{
  id: 10,
  judul: "Find, Replace, Pemeriksa Ejaan, dan Alat Penyuntingan",
  level: "Menengah",
  durasi: "100 menit",
  deskripsi: "Mempercepat pekerjaan penyuntingan: mencari dan mengganti teks secara massal, memakai wildcard, memeriksa ejaan dan tata bahasa, mencari sinonim, serta menghitung kata.",
  tujuan: [
    "Menggunakan Find, Replace, dan Go To secara efektif.",
    "Menerapkan penggantian lanjutan dengan wildcard dan pemformatan.",
    "Menjalankan pemeriksa ejaan, tata bahasa, dan Editor.",
    "Memanfaatkan Thesaurus, Word Count, dan AutoCorrect.",
    "Mengatur bahasa dan kamus khusus pada dokumen."
  ],
  materi: [
    {
      h: "10.1 Find (Mencari Teks)",
      steps: [
        "Tekan [[Ctrl+F]] untuk membuka panel **Navigation** di sisi kiri.",
        "Ketik kata yang dicari. Word akan menyorot semua kemunculannya di dokumen.",
        "Gunakan tombol panah untuk berpindah antarhasil temuan, atau klik hasil pada daftar untuk melompat langsung.",
        "Untuk pencarian lanjutan, klik panah kecil di kotak pencarian → **Advanced Find**.",
        "Pada kotak dialog **Find and Replace**, klik **More** untuk menampilkan opsi tambahan seperti Match case, Find whole words only, dan Use wildcards."
      ],
      tabel: {
        kepala: ["Opsi", "Fungsi"],
        rows: [
          ["Match case", "Membedakan huruf besar dan kecil. `Word` tidak akan menemukan `word`."],
          ["Find whole words only", "Hanya menemukan kata utuh, bukan bagian dari kata lain."],
          ["Use wildcards", "Mengaktifkan pencarian pola dengan karakter khusus."],
          ["Sounds like (English)", "Menemukan kata yang bunyinya mirip."],
          ["Find all word forms (English)", "Menemukan semua bentuk kata, misalnya run, running, ran."],
          ["Match prefix / Match suffix", "Mencocokkan awal atau akhir kata."],
          ["Ignore punctuation / Ignore white space", "Mengabaikan tanda baca atau spasi."]
        ]
      },
      tip: "Tekan [[Ctrl+F]] lalu ketik `^p` (di Advanced Find dengan wildcard mati) untuk mencari tanda paragraf. Berguna menemukan paragraf kosong yang berlebih."
    },
    {
      h: "10.2 Replace (Mengganti Teks)",
      steps: [
        "Tekan [[Ctrl+H]] untuk membuka kotak dialog **Find and Replace** pada tab **Replace**.",
        "Isi **Find what** dengan teks yang ingin diganti.",
        "Isi **Replace with** dengan teks pengganti.",
        "Klik **Find Next** untuk memeriksa satu per satu, lalu **Replace** untuk menggantinya.",
        "Klik **Replace All** untuk mengganti seluruh kemunculan sekaligus. Word akan melaporkan jumlah penggantian.",
        "Klik **OK** lalu **Close**."
      ],
      peringatan: "Selalu simpan dokumen ([[Ctrl+S]]) sebelum menekan **Replace All**. Kesalahan pola penggantian dapat merusak seluruh dokumen, dan Undo kadang tidak mampu memulihkannya secara sempurna pada dokumen besar."
    },
    {
      h: "10.3 Wildcard dan Pola Pencarian Lanjutan",
      p: ["Aktifkan **Use wildcards** pada dialog Find and Replace untuk memakai pola. Ini menghemat berjam-jam pekerjaan penyuntingan."],
      tabel: {
        kepala: ["Pola", "Arti", "Contoh"],
        rows: [
          ["?", "Satu karakter apa pun", "`k?ta` menemukan kata, kita, kuta"],
          ["*", "Nol atau lebih karakter", "`<head*>` menemukan seluruh kata berawalan head"],
          ["[abc]", "Salah satu karakter dalam kurung", "`[aeiou]` menemukan satu huruf vokal"],
          ["[a-z]", "Rentang karakter", "`[0-9]` menemukan satu digit angka"],
          ["[!abc]", "Karakter apa pun kecuali yang disebut", "`[!0-9]` menemukan karakter bukan angka"],
          ["{n}", "Tepat n kali pengulangan", "`^p{2}` menemukan dua paragraf kosong berturut-turut"],
          ["{n,m}", "Antara n sampai m kali", "`[0-9]{2,4}` menemukan angka 2 sampai 4 digit"],
          ["<", "Awal kata", "`<di` menemukan kata berawalan di"],
          [">", "Akhir kata", "`an>` menemukan kata berakhiran an"],
          ["@", "Satu atau lebih kemunculan sebelumnya", "`^p@` menemukan satu atau lebih paragraf kosong"],
          ["\\n", "Mengacu pada grup ke-n di Replace", "Ganti `([A-Za-z]+), ([A-Za-z]+)` menjadi `\\2 \\1` untuk membalik nama belakang dan depan"]
        ]
      },
      steps: [
        "Contoh praktis — menghapus paragraf kosong berlebih:",
        "Buka [[Ctrl+H]], klik **More**, centang **Use wildcards**.",
        "Isi **Find what** dengan `^p{2,}` dan **Replace with** dengan `^p`.",
        "Klik **Replace All**.",
        "Contoh lain — membalik urutan nama `Budi, Santoso` menjadi `Santoso Budi`:",
        "**Find what:** `([A-Za-z]+), ([A-Za-z]+)`",
        "**Replace with:** `\\2 \\1`",
        "Klik **Replace All** lalu periksa hasilnya."
      ],
      catatan: "Kode khusus penting: `^p` paragraf, `^t` tab, `^l` line break manual, `^m` page break, `^w` spasi kosong, `^#` angka apa pun, `^$` huruf apa pun."
    },
    {
      h: "10.4 Mengganti Format dan Gaya",
      p: ["Find and Replace juga dapat mengganti format, bukan hanya teks. Contoh: mengubah semua teks berwarna merah menjadi tebal, atau mengganti seluruh gaya Heading 2 menjadi Heading 3."],
      steps: [
        "Buka [[Ctrl+H]] lalu klik **More**.",
        "Letakkan kursor di **Find what**, lalu klik **Format → Font** dan tentukan format yang dicari, misalnya warna merah.",
        "Letakkan kursor di **Replace with**, klik **Format → Font**, dan tentukan format penggantinya, misalnya Bold.",
        "Klik **Replace All**.",
        "Untuk mengganti gaya: **Format → Style** → pilih gaya asal dan gaya tujuan.",
        "Untuk menghapus pengaturan format pencarian, klik **No Formatting**."
      ],
      tip: "Fitur ini sangat berguna saat menerima dokumen dari orang lain yang formatnya berantakan: ganti semua format manual menjadi gaya yang benar sekaligus."
    },
    {
      h: "10.5 Go To (Menuju Lokasi Tertentu)",
      steps: [
        "Tekan [[Ctrl+G]] atau buka tab **Go To** pada dialog Find and Replace.",
        "Pilih jenis tujuan di panel kiri: **Page, Section, Line, Bookmark, Comment, Footnote, Endnote, Field, Table, Graphic, Heading, Equation, Object**.",
        "Ketik nomornya pada kotak di kanan, misalnya `12` untuk halaman 12.",
        "Klik **Go To**, lalu **Close**."
      ],
      catatan: "Bila Anda mengetik `+3` pada kotak Page, Word akan melompat tiga halaman ke depan. Tanda `-` berarti mundur. Ini cara cepat berpindah tanpa menggulir."
    },
    {
      h: "10.6 Pemeriksa Ejaan, Tata Bahasa, dan Editor",
      sub: [
        {
          h: "Editor",
          p: ["Tab **Review → Editor** membuka panel yang merangkum masalah: ejaan, tata bahasa, kesederhanaan (clarity), kesopanan (formality), kosakata, dan inklusivitas. Setiap saran disertai penjelasan sehingga keputusan tetap ada pada penulis."]
        },
        {
          h: "Spelling & Grammar",
          p: ["Tekan [[F7]] untuk memulai pemeriksaan. Word menampilkan kata yang dicurigai, saran penggantian, serta tombol **Ignore Once**, **Ignore All**, **Add to Dictionary**, dan **Change All**."]
        },
        {
          h: "Bahasa dan kamus",
          p: ["Untuk memastikan pemeriksa memakai kamus Bahasa Indonesia, seleksi teks → **Review → Language → Set Proofing Language** → pilih **Indonesian**. Untuk seluruh dokumen, tekan [[Ctrl+A]] terlebih dahulu. Hilangkan centang **Detect language automatically** bila dokumen Anda bercampur bahasa."]
        },
        {
          h: "Thesaurus dan Word Count",
          list: [
            "**Thesaurus** ([[Shift+F7]]) menampilkan daftar sinonim dari kata yang dipilih, membantu menghindari pengulangan kata.",
            "**Word Count** ([[Ctrl+Shift+G]]) menampilkan jumlah halaman, kata, karakter tanpa spasi, karakter dengan spasi, paragraf, dan baris. Centang **Include textboxes, footnotes and endnotes** bila perlu.",
            "Jumlah kata juga tampil di status bar; klik angka tersebut untuk membuka kotak dialog Word Count."
          ]
        }
      ]
    },
    {
      h: "10.7 AutoCorrect dan AutoFormat",
      p: ["AutoCorrect memperbaiki kesalahan secara otomatis saat Anda mengetik. Atur di **File → Options → Proofing → AutoCorrect Options**."],
      tabel: {
        kepala: ["Tab", "Fungsi Penting"],
        rows: [
          ["AutoCorrect", "Mengganti teks saat mengetik: `teh` → `the`, `microsoft` → `Microsoft`. Dapat menambah entri sendiri, misalnya `nm` → nama lengkap Anda."],
          ["AutoFormat As You Type", "Mengubah karakter otomatis: `--` menjadi garis panjang, `1/2` menjadi ½, daftar bernomor otomatis, dan smart quotes."],
          ["AutoText", "Menyimpan potongan teks untuk disisipkan cepat."],
          ["Math AutoCorrect", "Mengubah `\\alpha` menjadi simbol α dan pola matematika lain."],
          ["Actions", "Menambahkan aksi otomatis untuk teks tertentu."]
        ],
        catatan: "Bila Word terus mengubah teks yang tidak Anda inginkan — misalnya mengubah `(c)` menjadi © atau membuat daftar bernomor sendiri — matikan opsi terkait di **AutoFormat As You Type**."
      },
      tip: "Manfaatkan AutoCorrect untuk mempercepat pengetikan: isi singkatan seperti `sk` menjadi `surat keputusan`, atau `dgn` menjadi `dengan`. Pastikan singkatannya tidak berupa kata nyata agar tidak mengganggu."
    }
  ],
  praktikum: {
    judul: "Menyunting Naskah Berantakan Secara Massal",
    deskripsi: "Anda akan membersihkan naskah hasil salin-tempel memakai Find and Replace, wildcard, dan pemeriksa ejaan.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 10 - Penyuntingan`.",
      "Salin atau ketik naskah berikut (sengaja dibuat berantakan):",
      "`PENGUMUMAN ini Adalah contoh teks.   yang  memiliki   spasi ganda, dan tanda baca ,yang salah.` lalu tekan Enter dua kali, lalu `Kata 'microsoft word' sering ditulis dengan huruf kecil ,dan tidak konsisten.`",
      "Simpan dokumen dengan [[Ctrl+S]] sebelum melakukan penggantian massal.",
      "Buka [[Ctrl+H]] dan ganti seluruh spasi ganda: **Find what** `  ` (dua spasi) → **Replace with** ` ` (satu spasi), klik **Replace All** berulang sampai muncul pesan tidak ada hasil.",
      "Ganti ` ,` (spasi sebelum koma) menjadi `,` memakai Replace All.",
      "Ganti `microsoft word` menjadi `Microsoft Word` dengan opsi **Match case** dimatikan, lalu periksa hasilnya.",
      "Aktifkan **Use wildcards**, isi **Find what** `^p{2,}` dan **Replace with** `^p`, lalu **Replace All** untuk menghapus paragraf kosong berlebih.",
      "Gunakan wildcard `([A-Za-z]+), ([A-Za-z]+)` → `\\2 \\1` untuk membalik urutan contoh nama yang berbentuk `Santoso, Budi` (tambahkan dulu satu baris contoh seperti itu di akhir dokumen).",
      "Uji **Go To**: tekan [[Ctrl+G]], pilih **Page**, ketik `1`, klik **Go To**.",
      "Uji pencarian dengan **Advanced Find** dan centang **Find whole words only** untuk kata `dan`.",
      "Tekan [[F7]] untuk menjalankan pemeriksaan ejaan. Perbaiki satu salah ejaan dan abaikan satu yang lain.",
      "Seleksi seluruh dokumen, lalu atur bahasa pemeriksaan ke **Indonesian**.",
      "Buka **Review → Editor** dan tinjau semua saran yang muncul.",
      "Klik angka jumlah kata di status bar dan catat: jumlah halaman, kata, karakter, dan paragraf.",
      "Simpan dokumen."
    ]
  },
  latihan: [
    "Ganti semua tanda hubung ganda `--` menjadi garis pisah panjang memakai Replace.",
    "Gunakan wildcard untuk menghapus seluruh spasi ganda pada paragraf yang dipilih saja (gunakan Replace pada seleksi).",
    "Ubah seluruh teks bergaya Heading 2 menjadi Heading 3 memakai Find and Replace → Format → Style.",
    "Buat lima entri AutoCorrect pribadi berupa singkatan yang sering Anda ketik.",
    "Cari semua angka 4 digit pada dokumen memakai pola `[0-9]{4}` dan catat hasilnya."
  ],
  shortcut: [
    { k: "Ctrl+F", f: "Membuka pencarian (Navigation pane)" },
    { k: "Ctrl+H", f: "Membuka Find and Replace" },
    { k: "Ctrl+G", f: "Membuka Go To" },
    { k: "F7", f: "Menjalankan pemeriksa ejaan dan tata bahasa" },
    { k: "Shift+F7", f: "Membuka Thesaurus" },
    { k: "Ctrl+Shift+G", f: "Membuka Word Count" },
    { k: "Alt+F7", f: "Melompat ke kesalahan ejaan berikutnya" },
    { k: "Ctrl+Alt+S", f: "Membuka panel Editor / Spelling" }
  ],
  rangkuman: [
    "Find (Ctrl+F) untuk mencari, Replace (Ctrl+H) untuk mengganti, dan Go To (Ctrl+G) untuk melompat ke lokasi tertentu.",
    "Wildcard memungkinkan pencarian berpola dan penggantian dengan pengelompokan, misalnya membalik urutan nama.",
    "Find and Replace juga dapat mengganti format dan gaya, bukan hanya teks.",
    "Editor, Spelling & Grammar, dan Thesaurus adalah alat penyuntingan utama di tab Review.",
    "AutoCorrect mempercepat pengetikan sekaligus mencegah kesalahan berulang."
  ],
  kuis: [
    {
      q: "Pintasan untuk membuka Find and Replace adalah…",
      opsi: ["Ctrl+F", "Ctrl+H", "Ctrl+G", "F7"],
      jawab: 1,
      bahasan: "Ctrl+H membuka kotak dialog Find and Replace pada tab Replace. Ctrl+F membuka panel pencarian, Ctrl+G membuka Go To, dan F7 adalah pemeriksa ejaan."
    },
    {
      q: "Kode pencarian untuk tanda paragraf adalah…",
      opsi: ["^t", "^p", "^l", "^m"],
      jawab: 1,
      bahasan: "^p menyatakan paragraf (Enter), ^t tab, ^l line break manual, dan ^m page break."
    },
    {
      q: "Agar Replace hanya mengganti teks pada bagian yang diseleksi, langkah yang harus dilakukan adalah…",
      opsi: [
        "Mencentang Match case",
        "Memilih opsi Down pada arah pencarian",
        "Menyeleksi teks lalu memilih All pada pencarian",
        "Mencentang Use wildcards"
      ],
      jawab: 1,
      bahasan: "Setelah menyeleksi teks, buka Find and Replace dan pilih arah **Down**. Word akan membatasi penggantian hanya pada area yang diseleksi."
    },
    {
      q: "Fungsi opsi Find whole words only adalah…",
      opsi: [
        "Menemukan kata utuh saja, bukan bagian dari kata lain",
        "Membedakan huruf besar dan kecil",
        "Mengabaikan tanda baca",
        "Menemukan semua bentuk kata"
      ],
      jawab: 0,
      bahasan: "Dengan opsi ini, pencarian `dan` tidak akan menemukan `pedang` atau `sederhana` karena hanya kata utuh yang dicocokkan."
    },
    {
      q: "Pintasan untuk memeriksa ejaan dan tata bahasa adalah…",
      opsi: ["F5", "F7", "F9", "F12"],
      jawab: 1,
      bahasan: "F7 menjalankan pemeriksa ejaan dan tata bahasa. F5 adalah Go To, F9 memperbarui field, dan F12 adalah Save As."
    }
  ]
},

{
  id: 11,
  judul: "Styles: Kunci Dokumen Konsisten dan Profesional",
  level: "Menengah",
  durasi: "120 menit",
  deskripsi: "Menguasai sistem gaya (Styles): menerapkan Heading, memodifikasi gaya, membuat gaya baru, memakai Style Set dan tema, serta memanfaatkan Navigation Pane.",
  tujuan: [
    "Memahami konsep gaya paragraf, karakter, tabel, dan daftar.",
    "Menerapkan Heading 1–3 dan gaya bawaan secara benar.",
    "Memodifikasi gaya yang ada dan membuat gaya baru.",
    "Menggunakan Style Set, tema, dan Style Inspector.",
    "Memanfaatkan Navigation Pane dan Select Text with Similar Formatting."
  ],
  materi: [
    {
      h: "11.1 Mengapa Styles Penting?",
      p: [
        "Pemula memformat dokumen secara langsung: memilih teks, mengubah ukuran huruf, menebalkan, mengatur spasi — berulang untuk setiap judul. Cara ini disebut **direct formatting** dan merupakan sumber utama dokumen yang tidak konsisten.",
        "**Gaya (style)** adalah kumpulan pengaturan format yang diberi nama. Ketika Anda menerapkan gaya Heading 1, seluruh pengaturan (font, ukuran, warna, spasi, penomoran) diterapkan sekaligus. Ketika Anda mengubah definisi gaya itu, **seluruh dokumen ikut berubah seketika**."
      ],
      list: [
        "**Konsistensi:** semua judul bab pasti sama formatnya.",
        "**Efisiensi:** satu klik menggantikan lima belas klik format manual.",
        "**Dasar fitur otomatis:** daftar isi, Navigation Pane, penomoran bertingkat, dan bookmark PDF bekerja berdasarkan gaya.",
        "**Perubahan massal:** ubah warna seluruh subjudul dalam hitungan detik.",
        "**Kolaborasi:** rekan kerja dapat menerapkan tampilan seragam tanpa mengubah isi."
      ],
      tip: "Aturan praktis: **jangan pernah memformat judul secara manual.** Selalu pakai gaya. Dokumen Anda akan jauh lebih mudah dirawat."
    },
    {
      h: "11.2 Jenis-Jenis Gaya",
      tabel: {
        kepala: ["Jenis Gaya", "Cakupan", "Contoh"],
        rows: [
          ["Paragraph style", "Seluruh paragraf", "Normal, Heading 1, Heading 2, Title, Quote, List Paragraph, Caption"],
          ["Character style", "Teks terpilih di dalam paragraf", "Emphasis, Strong, Subtle Emphasis, Intense Emphasis"],
          ["Linked style", "Dapat berlaku sebagai paragraf atau karakter", "Heading 1–9"],
          ["Table style", "Seluruh tabel", "Grid Table, List Table, Plain Table"],
          ["List style", "Daftar berbutir atau bernomor", "List Bullet, List Number, List Paragraph"]
        ]
      },
      p: ["Gaya juga dibedakan berdasarkan asalnya:"],
      list: [
        "**Style bawaan (built-in):** sudah tersedia di setiap dokumen Word.",
        "**Style dari Style Set:** variasi tampilan untuk gaya bawaan, misalnya Modern, Classic, Elegant.",
        "**Style baru buatan Anda:** disimpan di dokumen atau di templat."
      ]
    },
    {
      h: "11.3 Menerapkan Gaya",
      steps: [
        "Letakkan kursor pada paragraf, atau seleksi beberapa paragraf.",
        "Pada tab **Home** → group **Styles**, klik gaya yang diinginkan, misalnya **Heading 1**.",
        "Bila gaya yang dicari tidak tampak, klik tombol **More** (panah bawah dengan garis) untuk membuka galeri lengkap.",
        "Untuk melihat seluruh gaya yang tersedia, tekan **Ctrl+Shift+S** (Apply Styles) atau buka **Styles pane** dengan [[Ctrl+Alt+Shift+S]] → **Options** → **All styles**.",
        "Pintasan cepat: [[Ctrl+Alt+1]] untuk Heading 1, [[Ctrl+Alt+2]] Heading 2, [[Ctrl+Alt+3]] Heading 3, dan [[Ctrl+Shift+N]] untuk Normal."
      ],
      tip: "Bila Anda tidak sengaja memformat judul secara manual, tekan [[Ctrl+Shift+N]] untuk mengembalikannya ke gaya Normal, lalu terapkan gaya Heading yang benar."
    },
    {
      h: "11.4 Memodifikasi Gaya",
      steps: [
        "Pada group **Styles**, **klik kanan** nama gaya (misalnya Heading 1) → pilih **Modify**.",
        "Pada kotak dialog Modify Style, ubah **font**, **size**, **color**, dan **alignment**.",
        "Klik tombol **Format** (kiri bawah) untuk mengatur hal yang lebih rinci: **Font, Paragraph, Tabs, Border, Language, Frame, Numbering, Shortcut key, Text Effects**.",
        "Perhatikan opsi **Style based on** dan **Style for following paragraph** — keduanya mengatur perilaku gaya saat Anda menekan Enter.",
        "Pilih **Only in this document** atau **New documents based on this template**.",
        "Klik **OK**. Seluruh teks bergaya sama di dokumen akan langsung berubah."
      ],
      p: ["Contoh modifikasi yang umum dilakukan:"],
      list: [
        "Heading 1: Times New Roman 14 pt, Bold, rata tengah, spasi setelah 12 pt.",
        "Heading 2: Times New Roman 12 pt, Bold, rata kiri, spasi sebelum 12 pt.",
        "Normal: Times New Roman 12 pt, spasi 1,5, spacing after 0 pt.",
        "Caption: Calibri 9 pt, italic, rata tengah.",
        "Quote: indentasi kiri-kanan 1 cm, italic, ukuran 11 pt."
      ]
    },
    {
      h: "11.5 Membuat Gaya Baru dan Menghapusnya",
      steps: [
        "Buka Styles pane ([[Ctrl+Alt+Shift+S]]), klik ikon **New Style** di kiri bawah.",
        "Isi **Name**, misalnya `Judul Bab Skripsi`.",
        "Pilih **Style type**: Paragraph, Character, Linked, Table, atau List.",
        "Atur **Style based on** dan **Style for following paragraph**.",
        "Tentukan format memakai tombol format di panel atau tombol **Format**.",
        "Centang **Add to the Styles gallery** agar muncul di ribbon.",
        "Klik **OK**.",
        "Untuk menghapus gaya: klik kanan gaya di Styles pane → **Delete**. Word akan mengembalikan teks bergaya tersebut ke gaya dasar."
      ],
      peringatan: "Gaya bawaan Word tidak dapat dihapus secara permanen; Anda hanya dapat menghapusnya dari galeri. Gaya yang dibuat sendiri dapat dihapus, dan teksnya kembali memakai gaya induknya."
    },
    {
      h: "11.6 Style Set, Tema, dan Style Inspector",
      sub: [
        {
          h: "Style Set",
          p: ["Tab **Design** → galeri gaya (Style Set) menawarkan variasi tampilan untuk seluruh gaya bawaan: **Default (Calibri)**, **Word 2003**, **Modern**, **Classic**, **Elegant**, **Fancy**, **Distinctive**. Satu klik akan mengubah tampilan seluruh dokumen tanpa mengubah strukturnya."]
        },
        {
          h: "Tema Dokumen",
          p: ["Grup **Document Formatting** di tab Design juga memuat **Themes, Colors, Fonts, Paragraph Spacing**, dan **Set as Default**. Tema mengatur kombinasi warna dan pasangan font yang konsisten di seluruh dokumen Office."]
        },
        {
          h: "Style Inspector",
          p: ["Tekan [[Shift+F1]] atau klik ikon kaca pembesar di Styles pane untuk membuka **Style Inspector**. Panel ini menunjukkan gaya paragraf dan gaya karakter yang sedang berlaku, serta setiap format manual (direct formatting) yang menimpa gaya tersebut. Alat terbaik untuk mendiagnosis dokumen yang tampak 'tidak mau berubah'."]
        },
        {
          h: "Reveal Formatting",
          p: ["Perintah **Reveal Formatting** (juga [[Shift+F1]]) menampilkan rincian lengkap format pada posisi kursor: font, paragraf, seksi, dan tabel, beserta sumbernya. Sangat membantu saat membandingkan dua bagian dokumen yang seharusnya sama."]
        }
      ]
    },
    {
      h: "11.7 Navigation Pane dan Select Similar Formatting",
      list: [
        "**Navigation Pane** ([[Ctrl+F]] atau View → Navigation Pane) menampilkan tab **Headings** berisi kerangka dokumen berdasarkan gaya Heading. Klik salah satu untuk melompat ke bagian itu. Anda juga dapat menarik heading di panel ini untuk **memindahkan seluruh bagian** dokumen.",
        "**Select Text with Similar Formatting:** klik kanan pada Styles pane → **Select All N Instance(s)** untuk menyeleksi seluruh teks bergaya sama. Berguna untuk memeriksa atau mengubah format sekaligus.",
        "**Expand/Collapse:** di Navigation Pane, klik panah kecil di samping heading untuk melipat bagian. Klik kanan pada heading → **Collapse All** atau **Expand All**.",
        "**Promote/Demote di panel:** klik kanan heading → **Promote** atau **Demote** untuk mengubah tingkatnya menjadi Heading 1/2/3."
      ],
      tip: "Navigation Pane adalah cara tercepat memeriksa struktur dokumen panjang. Bila panel Headings tampak kosong, berarti Anda belum memakai gaya Heading — tanda dokumen masih diformat secara manual."
    }
  ],
  praktikum: {
    judul: "Membangun Dokumen Bergaya Standar Skripsi",
    deskripsi: "Anda akan membuat kerangka dokumen dengan gaya yang dimodifikasi, lalu membuktikan manfaatnya saat mengubah format massal.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 11 - Styles`.",
      "Ketik tiga baris judul: `BAB I PENDAHULUAN`, `1.1 Latar Belakang`, `1.1.1 Konteks Masalah`.",
      "Terapkan gaya **Heading 1** pada baris pertama, **Heading 2** pada baris kedua, **Heading 3** pada baris ketiga (gunakan [[Ctrl+Alt+1]], [[Ctrl+Alt+2]], [[Ctrl+Alt+3]]).",
      "Ketik dua paragraf isi di bawah setiap subjudul, biarkan bergaya **Normal**.",
      "Buka Styles pane dengan [[Ctrl+Alt+Shift+S]] → **Options** → pilih **All styles** → **OK**.",
      "Klik kanan **Normal** → **Modify** → ubah font ke **Times New Roman 12 pt**, **Line spacing 1.5**, **Spacing After 0 pt** → **OK**. Perhatikan seluruh isi dokumen ikut berubah.",
      "Klik kanan **Heading 1** → **Modify** → Times New Roman 14 pt, Bold, warna hitam, rata tengah, Spacing Before 0 dan After 12 pt → **OK**.",
      "Klik kanan **Heading 2** → **Modify** → Times New Roman 12 pt, Bold, rata kiri, Spacing Before 12 pt → **OK**.",
      "Klik kanan **Heading 3** → **Modify** → Times New Roman 12 pt, Bold italic, rata kiri → **OK**.",
      "Buka Styles pane → **New Style** → nama `Isi Kutipan`, jenis Paragraph, based on Normal, font 11 pt italic, indentasi kiri-kanan 1 cm, spasi baris single → **OK**.",
      "Terapkan gaya `Isi Kutipan` pada satu paragraf.",
      "Aktifkan **View → Navigation Pane** dan tunjukkan bahwa kerangka dokumen muncul lengkap.",
      "Tarik **Heading 2** di Navigation Pane ke atas Heading 1 untuk memindahkan seluruh bagiannya, lalu tekan [[Ctrl+Z]] untuk membatalkan.",
      "Buka tab **Design** dan ganti **Style Set** menjadi **Modern**, amati perubahan seluruh dokumen, lalu kembalikan ke **Default (Calibri)** dan modifikasi gaya Anda diterapkan kembali.",
      "Gunakan **Shift+F1** (Style Inspector) pada satu paragraf untuk melihat gaya dan format langsung yang berlaku.",
      "Simpan dokumen."
    ]
  },
  latihan: [
    "Buat tiga gaya baru: `Judul Tabel`, `Isi Tabel`, dan `Catatan Kaki Khusus`, lalu terapkan pada dokumen contoh.",
    "Ubah warna seluruh Heading 2 menjadi biru tua hanya dengan memodifikasi definisi gaya.",
    "Jelaskan mengapa Navigation Pane hanya menampilkan judul yang sudah memakai gaya Heading.",
    "Bandingkan dua paragraf memakai Reveal Formatting dan temukan perbedaan formatnya.",
    "Buat Styles Set sesuai kebutuhan instansi Anda, lalu simpan sebagai default agar berlaku untuk dokumen baru."
  ],
  shortcut: [
    { k: "Ctrl+Alt+1 / 2 / 3", f: "Menerapkan Heading 1 / 2 / 3" },
    { k: "Ctrl+Shift+N", f: "Menerapkan gaya Normal" },
    { k: "Ctrl+Shift+S", f: "Membuka kotak Apply Styles" },
    { k: "Ctrl+Alt+Shift+S", f: "Membuka panel Styles" },
    { k: "Shift+F1", f: "Membuka Reveal Formatting / Style Inspector" },
    { k: "Ctrl+Shift+L", f: "Menerapkan gaya List Bullet" },
    { k: "Ctrl+Spacebar", f: "Menghapus format karakter langsung" }
  ],
  rangkuman: [
    "Style adalah kumpulan format bernama; mengubah definisinya mengubah seluruh dokumen sekaligus.",
    "Gaya paragraf berlaku untuk seluruh paragraf, gaya karakter hanya untuk teks terpilih.",
    "Heading 1–3 adalah fondasi daftar isi, Navigation Pane, dan bookmark PDF.",
    "Modify Style mengubah format gaya, sedangkan New Style membuat gaya baru.",
    "Style Set dan tema mengubah tampilan dokumen tanpa merusak strukturnya."
  ],
  kuis: [
    {
      q: "Manfaat utama memakai Styles dalam dokumen panjang adalah…",
      opsi: [
        "Dokumen menjadi lebih kecil ukurannya",
        "Format seluruh dokumen konsisten dan mudah diubah sekaligus",
        "Dokumen otomatis tersimpan",
        "Teks tidak dapat diubah orang lain"
      ],
      jawab: 1,
      bahasan: "Dengan gaya, satu perubahan definisi langsung berlaku ke semua teks bergaya sama sehingga konsistensi terjamin dan pekerjaan menjadi cepat."
    },
    {
      q: "Pintasan untuk menerapkan Heading 1 adalah…",
      opsi: ["Ctrl+1", "Ctrl+Alt+1", "Ctrl+Shift+1", "Alt+1"],
      jawab: 1,
      bahasan: "Ctrl+Alt+1 menerapkan Heading 1, Ctrl+Alt+2 Heading 2, dan Ctrl+Alt+3 Heading 3. Ctrl+1 mengatur spasi baris menjadi single."
    },
    {
      q: "Untuk mengubah format sebuah gaya, perintah yang dipakai adalah…",
      opsi: ["New Style", "Modify", "Delete", "Update to Match Selection"],
      jawab: 1,
      bahasan: "Klik kanan nama gaya di galeri Styles → Modify. Perubahan langsung diterapkan pada seluruh teks bergaya tersebut."
    },
    {
      q: "Navigation Pane menampilkan kerangka dokumen berdasarkan…",
      opsi: ["Warna teks", "Gaya Heading", "Jumlah kata", "Komentar"],
      jawab: 1,
      bahasan: "Tab Headings menampilkan hierarki berdasarkan gaya Heading yang diterapkan. Teks tanpa gaya Heading tidak akan muncul di sana."
    },
    {
      q: "Fitur yang menunjukkan gaya dan format manual yang sedang berlaku pada kursor adalah…",
      opsi: ["Reveal Formatting / Style Inspector", "Word Count", "Track Changes", "Compare"],
      jawab: 0,
      bahasan: "Reveal Formatting (Shift+F1) menampilkan rincian format beserta sumbernya, termasuk format manual yang menimpa gaya, sehingga mudah didiagnosis."
    }
  ]
},

{
  id: 12,
  judul: "Daftar Isi Otomatis, Bookmark, dan Hyperlink",
  level: "Menengah",
  durasi: "110 menit",
  deskripsi: "Membuat daftar isi otomatis yang dapat diperbarui, menandai lokasi dengan bookmark, menyisipkan hyperlink internal maupun eksternal, dan membuat cross-reference.",
  tujuan: [
    "Menyisipkan Table of Contents otomatis berbasis gaya Heading.",
    "Memperbarui dan menyesuaikan daftar isi.",
    "Membuat daftar isi manual dengan tab leader bila diperlukan.",
    "Menandai lokasi penting dengan Bookmark dan merujuknya lewat cross-reference.",
    "Menyisipkan hyperlink ke web, berkas, email, dan lokasi di dalam dokumen."
  ],
  materi: [
    {
      h: "12.1 Prasyarat Daftar Isi Otomatis",
      p: [
        "Daftar isi otomatis dibangun dari **gaya Heading**. Bila dokumen Anda belum memakai Heading 1, 2, atau 3, daftar isi hanya akan menampilkan pesan `No table of contents entries found`."
      ],
      steps: [
        "Pastikan setiap judul bab memakai **Heading 1**, subbab **Heading 2**, dan anak subbab **Heading 3**.",
        "Letakkan kursor di halaman tempat daftar isi akan diletakkan (biasanya setelah halaman judul).",
        "Buka tab **References** → **Table of Contents**.",
        "Pilih salah satu gaya otomatis, misalnya **Automatic Table 1**.",
        "Daftar isi langsung terbentuk lengkap dengan nomor halaman."
      ],
      tip: "Bila ada judul yang tidak ingin muncul di daftar isi, jangan memakai gaya Heading untuknya. Gunakan gaya lain yang tampilannya mirip, misalnya gaya kustom `Judul Tanpa TOC`."
    },
    {
      h: "12.2 Memperbarui dan Menyesuaikan Daftar Isi",
      steps: [
        "Klik di dalam daftar isi, lalu tekan [[F9]] atau klik tombol **Update Table** pada tab References.",
        "Pilih **Update page numbers only** bila hanya nomor halaman yang berubah.",
        "Pilih **Update entire table** bila ada judul yang ditambah, dihapus, atau diubah.",
        "Untuk pengaturan lanjutan, klik **Table of Contents → Custom Table of Contents**.",
        "Atur **Show levels** (jumlah tingkat judul yang ditampilkan), misalnya 3.",
        "Aktifkan **Show page numbers**, **Right align page numbers**, dan pilih **Tab leader** (titik, garis, atau kosong).",
        "Klik **Options** untuk menentukan gaya mana yang menjadi tingkat 1, 2, dan 3 — memungkinkan pemakaian gaya kustom.",
        "Klik **Modify** untuk mengubah format tampilan TOC 1, TOC 2, dan TOC 3.",
        "Klik **OK** untuk menutup setiap dialog."
      ],
      peringatan: "Jangan mengetik atau menghapus entri di dalam daftar isi secara manual. Perubahan manual akan hilang pada pembaruan berikutnya. Perbaiki sumbernya, yaitu gaya Heading pada judul, lalu perbarui TOC."
    },
    {
      h: "12.3 Daftar Isi Manual dan Daftar Gambar/Tabel",
      sub: [
        {
          h: "Daftar isi manual dengan tab leader",
          steps: [
            "Ketik judul bab, tekan [[Tab]], lalu ketik nomor halaman.",
            "Seleksi baris tersebut, buka kotak dialog **Paragraph → Tabs** (atau klik ganda pada Ruler).",
            "Isi **Tab stop position** dengan 15 cm (atau sesuai lebar teks), pilih **Alignment: Right**.",
            "Pada **Leader**, pilih tipe 2 (titik), lalu **Set** → **OK**."
          ]
        },
        {
          h: "Daftar gambar dan daftar tabel",
          p: ["Keduanya dibangun dari **Caption** (Insert Caption). Setelah semua gambar diberi caption, buka **References → Insert Table of Figures**, pilih **Caption label: Figure** untuk daftar gambar atau **Table** untuk daftar tabel. Cara memperbarui sama dengan TOC: tekan [[F9]]."]
        }
      ]
    },
    {
      h: "12.4 Bookmark",
      p: ["Bookmark menandai lokasi atau teks tertentu agar dapat dirujuk kembali. Tidak terlihat saat dicetak."],
      steps: [
        "Seleksi teks atau letakkan kursor di lokasi yang ingin ditandai.",
        "Buka **Insert → Bookmark**.",
        "Ketik nama bookmark. Nama harus diawali huruf dan tidak boleh mengandung spasi (gunakan garis bawah).",
        "Klik **Add**.",
        "Untuk melompat ke bookmark, buka **Insert → Bookmark**, pilih namanya, lalu klik **Go To**.",
        "Untuk menampilkan tanda bookmark di layar, aktifkan **File → Options → Advanced → Show bookmarks**.",
        "Untuk menghapus, pilih bookmark lalu klik **Delete**."
      ],
      tip: "Bookmark adalah dasar dari cross-reference. Beri nama yang deskriptif seperti `Gambar_Alur_Produksi` agar mudah dikenali."
    },
    {
      h: "12.5 Cross-reference",
      p: ["Cross-reference membuat rujukan otomatis ke bagian lain dokumen: `lihat Bab 3`, `pada Tabel 2`, atau `seperti Gambar 4`."],
      steps: [
        "Letakkan kursor di tempat rujukan akan ditulis.",
        "Buka **References → Cross-reference**.",
        "Pada **Reference type**, pilih jenis yang dirujuk: Numbered item, Heading, Bookmark, Footnote, Endnote, Equation, Figure, Table.",
        "Pada **Insert reference to**, pilih bentuk rujukan: Heading text, Page number, Above/Below, atau Entire caption.",
        "Pilih item tertentu pada daftar **For which heading**.",
        "Centang **Insert as hyperlink** agar dapat diklik.",
        "Klik **Insert**, lalu **Close**."
      ],
      catatan: "Cross-reference juga berupa field. Setelah dokumen berubah, tekan [[Ctrl+A]] lalu [[F9]] untuk memperbarui seluruh rujukan sekaligus."
    },
    {
      h: "12.6 Hyperlink",
      steps: [
        "Seleksi teks atau gambar yang akan dijadikan tautan, atau letakkan kursor di posisi penyisipan.",
        "Tekan [[Ctrl+K]] atau **Insert → Link → Hyperlink**.",
        "Untuk tautan web: pilih **Existing File or Web Page** → tempelkan URL pada kotak **Address**.",
        "Untuk berkas: pilih **Existing File or Web Page** → telusuri berkasnya. Centang **Create New Document** bila ingin membuat berkas baru.",
        "Untuk **Place in This Document**: pilih Heading atau Bookmark tujuan dari daftar — ini membuat tautan internal di dalam dokumen.",
        "Untuk email: pilih **E-mail Address**, isi alamat dan subjek. Word akan membuat tautan `mailto:`.",
        "Klik **OK**. Tambahkan **ScreenTip** agar muncul keterangan saat kursor diarahkan ke tautan."
      ],
      list: [
        "Teks bertautan otomatis berwarna biru dan bergaris bawah sesuai gaya **Hyperlink**.",
        "Untuk mengikuti tautan: tahan [[Ctrl]] lalu klik, atau klik langsung bila opsi Ctrl+click dimatikan pada Options → Advanced.",
        "Untuk menghapus tautan tanpa menghapus teks: klik kanan → **Remove Hyperlink**, atau tekan [[Ctrl+Shift+F9]] setelah teks diseleksi.",
        "Untuk mengedit: klik kanan → **Edit Hyperlink** ([[Ctrl+K]])."
      ],
      peringatan: "Word kadang mengubah teks yang mirip alamat web menjadi tautan otomatis. Untuk mematikannya, buka **File → Options → Proofing → AutoCorrect Options → AutoFormat As You Type** dan hilangkan centang **Internet and network paths with hyperlinks**."
    }
  ],
  praktikum: {
    judul: "Menghasilkan Dokumen Bernavigasi Lengkap",
    deskripsi: "Anda akan melengkapi dokumen bergaya dengan daftar isi otomatis, bookmark, cross-reference, dan hyperlink.",
    langkah: [
      "Buka dokumen hasil Latihan 11 atau buat dokumen baru minimal tiga halaman dengan Heading 1, 2, dan 3.",
      "Simpan sebagai `Latihan 12 - Daftar Isi dan Navigasi`.",
      "Sisipkan halaman baru di awal dokumen (letakkan kursor di awal, tekan [[Ctrl+Enter]] lalu pindah ke halaman baru).",
      "Ketik judul `DAFTAR ISI` dengan gaya Heading 1, lalu atur agar tidak muncul di daftar isi (opsional) dengan menghapus gaya Heading-nya setelah TOC dibuat.",
      "Letakkan kursor di bawah judul tersebut, buka **References → Table of Contents → Automatic Table 1**.",
      "Amati daftar isi terbentuk dengan nomor halaman di sisi kanan.",
      "Tambahkan satu subbab baru di bagian tengah dokumen dengan gaya Heading 2, lalu kembali ke daftar isi dan tekan [[F9]] → **Update entire table**.",
      "Buka **Table of Contents → Custom Table of Contents**, atur **Show levels: 2**, Tab leader titik, lalu **OK**.",
      "Tandai paragraf penting dengan **Insert → Bookmark**, beri nama `Bagian_Penting`.",
      "Letakkan kursor di paragraf lain, lalu sisipkan **References → Cross-reference** dengan Reference type **Bookmark** dan Insert reference to **Page number**, aktifkan **Insert as hyperlink**.",
      "Sisipkan hyperlink ke situs web: seleksi kata `sumber resmi`, tekan [[Ctrl+K]], pilih **Existing File or Web Page**, isi alamat `https://support.microsoft.com`, klik **OK**.",
      "Buat hyperlink internal: seleksi kata `lihat bagian penting`, tekan [[Ctrl+K]], pilih **Place in This Document**, pilih bookmark `Bagian_Penting`, klik **OK**.",
      "Uji kedua tautan dengan menahan [[Ctrl]] lalu klik.",
      "Perbarui seluruh field dokumen: tekan [[Ctrl+A]] lalu [[F9]].",
      "Simpan dokumen, lalu ekspor ke PDF dan pastikan bookmark navigasi terbentuk dari daftar isi."
    ]
  },
  latihan: [
    "Buat dokumen 5 halaman dengan struktur bab dan subbab, lalu hasilkan daftar isi otomatis tiga tingkat.",
    "Buat daftar gambar otomatis dari tiga gambar yang telah diberi caption.",
    "Jelaskan perbedaan Bookmark dengan Cross-reference dan bagaimana keduanya saling melengkapi.",
    "Buat hyperlink email yang otomatis mengisi subjek tertentu.",
    "Perbarui seluruh field dokumen dengan Ctrl+A lalu F9 dan jelaskan field apa saja yang ikut diperbarui."
  ],
  shortcut: [
    { k: "F9", f: "Memperbarui field / daftar isi" },
    { k: "Ctrl+Shift+F9", f: "Mengubah field menjadi teks biasa (melepas field)" },
    { k: "Alt+Shift+U", f: "Memperbarui daftar isi (bila field TOC terpilih)" },
    { k: "Ctrl+K", f: "Menyisipkan atau mengedit hyperlink" },
    { k: "Ctrl+Alt+F", f: "Menyisipkan catatan kaki" },
    { k: "Ctrl+Shift+F5", f: "Membuka dialog Bookmark" }
  ],
  rangkuman: [
    "Daftar isi otomatis dibangun dari gaya Heading dan harus diperbarui dengan F9 setelah dokumen berubah.",
    "Jangan menyunting entri daftar isi secara manual; perbaiki gaya judulnya.",
    "Daftar gambar dan daftar tabel dibangun dari Caption.",
    "Bookmark menandai lokasi, sedangkan cross-reference membuat rujukan otomatis ke lokasi tersebut.",
    "Hyperlink dapat menuju web, berkas, email, atau lokasi di dalam dokumen sendiri."
  ],
  kuis: [
    {
      q: "Daftar isi otomatis di Word dibangun berdasarkan…",
      opsi: ["Warna teks judul", "Gaya Heading", "Bookmark", "Komentar"],
      jawab: 1,
      bahasan: "Table of Contents mengambil entri dari paragraf yang memakai gaya Heading 1, 2, 3, dan seterusnya. Tanpa gaya Heading, daftar isi tidak akan terbentuk."
    },
    {
      q: "Pintasan untuk memperbarui daftar isi atau field lainnya adalah…",
      opsi: ["F5", "F7", "F9", "F11"],
      jawab: 2,
      bahasan: "F9 memperbarui field yang dipilih atau seluruh field bila dokumen diseleksi lebih dahulu dengan Ctrl+A."
    },
    {
      q: "Perintah untuk menyisipkan hyperlink adalah…",
      opsi: ["Ctrl+H", "Ctrl+K", "Ctrl+L", "Ctrl+Shift+H"],
      jawab: 1,
      bahasan: "Ctrl+K membuka kotak dialog Insert Hyperlink yang menyediakan tautan ke web, berkas, email, atau lokasi di dalam dokumen."
    },
    {
      q: "Fungsi Bookmark di Word adalah…",
      opsi: [
        "Menyimpan dokumen sebagai PDF",
        "Menandai lokasi atau teks untuk dirujuk kembali",
        "Menyembunyikan teks",
        "Membuat daftar isi"
      ],
      jawab: 1,
      bahasan: "Bookmark menandai lokasi sehingga dapat dilompati lewat Go To atau dirujuk lewat Cross-reference. Bookmark tidak tercetak."
    },
    {
      q: "Yang terjadi bila entri daftar isi diketik ulang secara manual adalah…",
      opsi: [
        "Daftar isi menjadi permanen",
        "Perubahan akan hilang saat daftar isi diperbarui",
        "Nomor halaman otomatis menyesuaikan",
        "Dokumen tidak dapat disimpan"
      ],
      jawab: 1,
      bahasan: "Daftar isi adalah field. Setiap pembaruan akan membangun ulang isinya dari dokumen sehingga suntingan manual terhapus."
    }
  ]
},

{
  id: 13,
  judul: "Catatan Kaki, Caption, Sitasi, dan Daftar Pustaka",
  level: "Menengah",
  durasi: "120 menit",
  deskripsi: "Melengkapi dokumen akademik: catatan kaki dan catatan akhir, keterangan gambar, penomoran otomatis, sitasi bergaya APA/IEEE, dan daftar pustaka otomatis.",
  tujuan: [
    "Menyisipkan dan mengatur Footnote serta Endnote.",
    "Memberi Caption pada gambar, tabel, dan persamaan.",
    "Membuat cross-reference ke caption dan catatan kaki.",
    "Menambahkan sitasi dengan gaya APA, MLA, Chicago, atau IEEE.",
    "Menghasilkan Bibliography otomatis dan mengelola Source Manager."
  ],
  materi: [
    {
      h: "13.1 Footnote dan Endnote",
      p: [
        "**Footnote** (catatan kaki) muncul di bagian bawah halaman tempat rujukan berada. **Endnote** (catatan akhir) dikumpulkan di akhir dokumen atau akhir bagian."
      ],
      steps: [
        "Letakkan kursor tepat setelah teks yang akan diberi catatan.",
        "Buka tab **References** → **Insert Footnote** ([[Ctrl+Alt+F]]) atau **Insert Endnote** ([[Ctrl+Alt+D]]).",
        "Word menyisipkan nomor dan langsung memindahkan kursor ke area catatan di bawah halaman.",
        "Ketik isi catatan.",
        "Klik kembali ke badan dokumen untuk melanjutkan menulis.",
        "Untuk mengatur format, klik tombol peluncur dialog group **Footnotes**.",
        "Pilih **Location** (Bottom of page / Below text untuk footnote; End of document / End of section untuk endnote).",
        "Pilih **Number format** (1, 2, 3; a, b, c; i, ii, iii; simbol) dan tentukan **Start at** serta **Numbering: Continuous / Restart each section / Restart each page**.",
        "Pada **Apply changes to**, pilih cakupan dan klik **Apply**."
      ],
      list: [
        "Untuk melompat antara teks dan catatannya, klik ganda nomor catatan.",
        "Untuk menghapus footnote, hapus nomor di badan teks — catatan di bawah halaman ikut terhapus dan nomor berikutnya otomatis menyesuaikan.",
        "Untuk mengonversi footnote menjadi endnote: klik kanan di area catatan → **Convert to Endnote**.",
        "Catatan kaki juga dapat memuat format, gambar, dan tabel kecil (walaupun sebaiknya dihindari)."
      ],
      peringatan: "Jangan mengetik nomor catatan secara manual. Nomor otomatis menyesuaikan saat ada penambahan atau penghapusan catatan di tengah dokumen."
    },
    {
      h: "13.2 Caption (Keterangan Gambar dan Tabel)",
      steps: [
        "Pilih objek yang akan diberi keterangan (gambar atau tabel), atau letakkan kursor di bawahnya.",
        "Buka **References → Insert Caption**.",
        "Pada **Label**, pilih **Figure**, **Table**, atau **Equation**. Gunakan **New Label** untuk membuat label sendiri seperti `Gambar` atau `Tabel`.",
        "Pada **Position**, pilih **Above selected item** atau **Below selected item**.",
        "Klik **Numbering** untuk memilih format angka (1, 2, 3; a, b, c; i, ii, iii) dan mencentang **Include chapter number** bila penomoran ingin mengikuti bab (misalnya Gambar 3.1).",
        "Ketik teks keterangan setelah label pada kotak **Caption**.",
        "Klik **OK**."
      ],
      list: [
        "Caption adalah field, sehingga nomor menyesuaikan otomatis bila gambar disisipkan atau dihapus.",
        "Untuk memperbarui nomor, tekan [[Ctrl+A]] lalu [[F9]].",
        "Bila nomor caption terlihat salah, klik kanan caption → **Update Field**.",
        "Untuk mengubah gaya tampilan caption, modifikasi gaya **Caption** pada Styles pane."
      ],
      tip: "Bila ingin caption dalam Bahasa Indonesia, buat label baru `Gambar` dan `Tabel` lewat **New Label** agar Word memakai kata tersebut secara konsisten."
    },
    {
      h: "13.3 Sitasi dan Bibliography",
      p: [
        "Fitur **Citations & Bibliography** pada tab References memungkinkan penulisan rujukan tanpa menghafal format. Anda menambahkan sumber satu kali, menyisipkannya sebagai sitasi, dan Word menyusun daftar pustaka secara otomatis."
      ],
      steps: [
        "Tentukan gaya sitasi pada dropdown **Style** di tab References: **APA**, **MLA**, **Chicago**, **IEEE**, **Harvard**, atau lainnya.",
        "Letakkan kursor setelah kalimat yang memerlukan rujukan.",
        "Klik **Insert Citation → Add New Source**.",
        "Pilih **Type of Source**: Book, Journal Article, Web Site, Report, Conference Proceedings, dan lain-lain.",
        "Isi semua bidang yang tersedia: Author, Title, Year, City, Publisher, atau URL dan tanggal akses untuk sumber daring.",
        "Centang **Show All Bibliography Fields** bila perlu bidang tambahan (volume, issue, pages, DOI).",
        "Klik **OK**. Sitasi akan tersisip di dalam tanda kurung sesuai gaya yang dipilih.",
        "Untuk menambahkan sumber yang sudah pernah dimasukkan, klik **Insert Citation** lalu pilih dari daftar.",
        "Letakkan kursor di halaman yang akan memuat daftar pustaka, lalu klik **Bibliography**.",
        "Pilih **Bibliography** (dengan judul) atau **Works Cited** (tanpa judul tambahan).",
        "Untuk memperbarui, klik di dalam daftar → **Update Citations and Bibliography**."
      ],
      tabel: {
        kepala: ["Perintah", "Fungsi"],
        rows: [
          ["Insert Citation", "Menyisipkan rujukan ke dalam teks; dapat menambah sumber baru"],
          ["Manage Sources", "Membuka Source Manager untuk menambah, mengedit, menghapus, dan menyalin sumber"],
          ["Style", "Memilih gaya sitasi: APA, MLA, Chicago, IEEE, Harvard, dan lainnya"],
          ["Bibliography", "Menyisipkan daftar pustaka yang dibangun dari seluruh sitasi"],
          ["Update Citations and Bibliography", "Menyusun ulang daftar pustaka setelah ada perubahan sumber"]
        ]
      },
      sub: [
        {
          h: "Source Manager dan Master List",
          p: ["**Manage Sources** memisahkan **Master List** (semua sumber yang pernah Anda simpan di komputer) dan **Current List** (sumber yang dipakai di dokumen ini). Sumber dari Master List dapat disalin ke Current List dengan tombol **Copy**, sehingga Anda tidak perlu mengetik ulang. Master List disimpan di berkas terpisah sehingga tetap ada meski dokumen ditutup."]
        },
        {
          h: "Placeholder",
          p: ["Bila detail sumber belum lengkap, klik **Insert Citation → Add New Placeholder**, beri nama sementara. Placeholder akan tampil di daftar pustaka dengan tanda tanya dan dapat dilengkapi kemudian lewat **Edit Source**."]
        },
        {
          h: "Catatan penting gaya IEEE",
          p: ["Gaya IEEE memakai nomor dalam kurung siku seperti [1], [2]. Bila Anda memakai gaya ini, pastikan gaya **Citation** dan **Bibliography** sudah benar dengan memilihnya di dropdown Style sebelum menyisipkan sitasi pertama."]
        }
      ],
      peringatan: "Bila Anda mengubah gaya sitasi setelah banyak sitasi tersisip, Word akan menyesuaikan seluruhnya otomatis. Namun bila Anda membuat daftar pustaka manual, penyesuaian itu tidak terjadi. Selalu pakai fitur Bibliography bawaan untuk dokumen akademik."
    },
    {
      h: "13.4 Menyisipkan Persamaan dan Nomor Persamaan",
      steps: [
        "Letakkan kursor di posisi persamaan.",
        "Buka **Insert → Equation** ([[Alt+=]]) untuk menyisipkan bidang persamaan kosong.",
        "Ketik persamaan memakai kotak **Equation** pada tab **Equation**.",
        "Gunakan **Fraction**, **Script**, **Radical**, **Integral**, **Large Operator**, dan galeri **Equation** untuk struktur lanjutan.",
        "Untuk menomori persamaan: ketik persamaan, tekan [[Tab]] dua kali, lalu sisipkan nomor dengan **References → Insert Caption** dengan label **Equation**.",
        "Untuk merujuk persamaan, gunakan **Cross-reference → Equation**."
      ],
      tip: "Persamaan juga dapat ditulis memakai sintaks LaTeX pada Word 365: pilih **Equation → LaTeX** pada tab Equation, lalu ketik perintah LaTeX dan tekan Enter atau Space."
    }
  ],
  praktikum: {
    judul: "Melengkapi Artikel Ilmiah Mini",
    deskripsi: "Anda akan menulis artikel mini dua halaman lengkap dengan catatan kaki, caption gambar, sitasi, dan daftar pustaka.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 13 - Referensi Akademik`.",
      "Ketik judul `Pengaruh Literasi Digital terhadap Produktivitas Kerja` dan nama Anda, lalu terapkan gaya Heading 1 dan Normal.",
      "Ketik paragraf pendahuluan minimal empat baris.",
      "Letakkan kursor di akhir kalimat pertama, lalu sisipkan **Footnote** dengan [[Ctrl+Alt+F]]. Ketik: `Badan Pusat Statistik, Survei Literasi Digital 2023, Jakarta.`",
      "Tambahkan satu **Endnote** di kalimat terakhir paragraf, berisi penjelasan tambahan tentang metodologi.",
      "Sisipkan sebuah gambar dari komputer, atur **Wrap Text → Top and Bottom**.",
      "Klik kanan gambar → **Insert Caption**, pilih label **Figure**, position **Below selected item**, lalu ketik `Diagram alur penelitian`.",
      "Ubah label menjadi Bahasa Indonesia: klik **New Label**, ketik `Gambar`, lalu terapkan pada gambar tersebut.",
      "Sisipkan tabel 3 kolom × 4 baris berisi data sederhana, lalu beri caption dengan label **Table** di posisi **Above selected item**.",
      "Pada paragraf, letakkan kursor setelah kalimat yang memerlukan rujukan, lalu **References → Style → APA**.",
      "Klik **Insert Citation → Add New Source** → **Book** → isi Author `Sugiyono`, Title `Metode Penelitian Kuantitatif`, Year `2019`, City `Bandung`, Publisher `Alfabeta` → **OK**.",
      "Tambahkan sumber kedua bertipe **Journal Article** dengan detail lengkap (Author, Title, Journal Name, Year, Pages).",
      "Sisipkan sitasi kedua sumber tersebut pada paragraf yang berbeda.",
      "Di akhir dokumen, buat Heading 1 `DAFTAR PUSTAKA`, lalu klik **Bibliography → Bibliography**.",
      "Buka **Manage Sources** dan tunjukkan bahwa kedua sumber muncul di Current List serta tersimpan di Master List.",
      "Sisipkan **Cross-reference** ke Gambar 1 di dalam paragraf pembahasan.",
      "Tekan [[Ctrl+A]] lalu [[F9]] untuk memperbarui semua field, lalu simpan dokumen."
    ]
  },
  latihan: [
    "Buat dokumen dengan tiga catatan kaki, lalu ubah format penomorannya menjadi huruf a, b, c.",
    "Konversi seluruh footnote pada dokumen menjadi endnote dan sebutkan perbedaan posisinya.",
    "Buat caption bergaya `Gambar 2.1` dengan opsi Include chapter number.",
    "Tambahkan lima sumber pustaka (buku, jurnal, situs web) lalu hasilkan daftar pustaka gaya IEEE.",
    "Jelaskan perbedaan Master List dan Current List pada Source Manager."
  ],
  shortcut: [
    { k: "Ctrl+Alt+F", f: "Menyisipkan footnote" },
    { k: "Ctrl+Alt+D", f: "Menyisipkan endnote" },
    { k: "Alt+Shift+I", f: "Menandai entri indeks" },
    { k: "Alt+= ", f: "Menyisipkan bidang persamaan" },
    { k: "F9", f: "Memperbarui field caption/sitasi" },
    { k: "Ctrl+Alt+M", f: "Menyisipkan komentar (pada versi tertentu)" }
  ],
  rangkuman: [
    "Footnote muncul di bawah halaman, endnote dikumpulkan di akhir dokumen atau akhir bagian.",
    "Caption adalah field yang memberi nomor otomatis pada gambar, tabel, dan persamaan.",
    "Citations & Bibliography menyusun sitasi dan daftar pustaka otomatis sesuai gaya yang dipilih.",
    "Source Manager memisahkan Master List dan Current List sehingga sumber dapat dipakai ulang.",
    "Seluruh field referensi diperbarui sekaligus dengan Ctrl+A lalu F9."
  ],
  kuis: [
    {
      q: "Pintasan untuk menyisipkan catatan kaki (footnote) adalah…",
      opsi: ["Ctrl+Alt+F", "Ctrl+Alt+D", "Ctrl+Alt+M", "Alt+Shift+I"],
      jawab: 0,
      bahasan: "Ctrl+Alt+F menyisipkan footnote di bawah halaman, sedangkan Ctrl+Alt+D menyisipkan endnote di akhir dokumen atau akhir bagian."
    },
    {
      q: "Caption pada gambar sebaiknya diletakkan…",
      opsi: ["Di atas gambar", "Di bawah gambar", "Di header", "Di margin"],
      jawab: 1,
      bahasan: "Kaidah penulisan ilmiah menempatkan keterangan gambar di bawah gambar, sedangkan keterangan tabel di atas tabel."
    },
    {
      q: "Fitur yang menyusun daftar pustaka secara otomatis adalah…",
      opsi: ["Insert Caption", "Insert Footnote", "Bibliography", "Cross-reference"],
      jawab: 2,
      bahasan: "Bibliography membangun daftar pustaka dari seluruh sitasi pada dokumen sesuai gaya yang dipilih, dan dapat diperbarui kapan saja."
    },
    {
      q: "Gaya sitasi berikut yang memakai penomoran dalam kurung siku seperti [1] adalah…",
      opsi: ["APA", "MLA", "Chicago", "IEEE"],
      jawab: 3,
      bahasan: "Gaya IEEE menggunakan nomor rujukan dalam kurung siku sesuai urutan kemunculan, sedangkan APA dan MLA umumnya memakai nama penulis dan tahun."
    },
    {
      q: "Cara menghapus footnote beserta isinya adalah…",
      opsi: [
        "Menghapus teks di bawah halaman",
        "Menghapus nomor catatan pada badan teks",
        "Menekan Delete pada header",
        "Menonaktifkan opsi Show Document Text"
      ],
      jawab: 1,
      bahasan: "Menghapus nomor footnote di badan teks akan menghapus catatannya sekaligus, dan nomor catatan berikutnya otomatis menyesuaikan."
    }
  ]
},

{
  id: 14,
  judul: "Mail Merge Dasar: Surat Massal dengan Sumber Data",
  level: "Menengah",
  durasi: "120 menit",
  deskripsi: "Membuat surat massal profesional: menyiapkan dokumen utama, menghubungkan sumber data Excel, menyisipkan merge field, dan menggabungkan hasilnya.",
  tujuan: [
    "Menjelaskan konsep dan manfaat mail merge.",
    "Menyiapkan dokumen utama (main document) dan sumber data (data source).",
    "Memilih penerima dan menyisipkan merge field ke dalam surat.",
    "Melakukan pratinjau serta menyelesaikan penggabungan ke dokumen baru atau printer.",
    "Mengatasi masalah umum pada mail merge."
  ],
  materi: [
    {
      h: "14.1 Konsep Mail Merge",
      p: [
        "**Mail Merge** (surat massal) menggabungkan satu dokumen kerangka dengan daftar data sehingga menghasilkan banyak dokumen personal dalam satu kali proses. Setiap penerima menerima dokumen yang tampak ditulis khusus untuknya."
      ],
      list: [
        "**Surat undangan** kegiatan dengan nama dan alamat penerima yang berbeda.",
        "**Sertifikat** pelatihan dengan nama peserta otomatis tercetak.",
        "**Label alamat** dan **amplop** untuk pengiriman massal.",
        "**Ijazah** dan piagam penghargaan.",
        "**Tagihan** dan surat pemberitahuan dengan rincian per penerima.",
        "**Kartu ucapan** dan penawaran pemasaran."
      ],
      p: ["Mail merge memerlukan tiga komponen:"],
      tabel: {
        kepala: ["Komponen", "Peran"],
        rows: [
          ["Main document", "Dokumen kerangka berisi teks tetap dan merge field. Boleh berupa Letters, E-mail Messages, Envelopes, Labels, atau Directory."],
          ["Data source", "Daftar penerima berisi kolom data seperti Nama, Alamat, Kota, Jabatan. Dapat berupa tabel Word, berkas Excel, CSV, daftar Outlook, atau Access."],
          ["Merge field", "Penanda seperti `«Nama»` yang akan digantikan oleh data nyata dari sumber."]
        ]
      },
      tip: "Untuk pemula, sumber data dari Excel paling mudah dikelola. Pastikan baris pertama berisi **nama kolom** tanpa spasi (gunakan garis bawah) dan tidak ada baris kosong di tengah data."
    },
    {
      h: "14.2 Menyiapkan Sumber Data",
      steps: [
        "Buka Microsoft Excel, buat tabel dengan baris pertama berisi nama kolom: `No`, `Nama`, `Jabatan`, `Instansi`, `Alamat`, `Kota`.",
        "Isi minimal 10 baris data penerima.",
        "Simpan berkas sebagai `Data Penerima.xlsx`.",
        "Tutup berkas Excel (Word tidak dapat membuka berkas yang sedang dipakai secara eksklusif pada sebagian versi).",
        "Alternatif: sumber data dapat dibuat langsung di Word lewat **Mailings → Select Recipients → Type a New List → Create**."
      ],
      peringatan: "Hindari kolom tanpa nama, baris judul bergabung (merged cell), dan baris kosong di tengah data. Semuanya menyebabkan kegagalan penggabungan atau data bergeser."
    },
    {
      h: "14.3 Membuat Surat Massal Langkah demi Langkah",
      steps: [
        "Buka dokumen baru di Word, simpan sebagai `Surat Massal.docx`.",
        "Buka tab **Mailings** → **Start Mail Merge** → pilih **Letters**.",
        "Klik **Select Recipients** → **Use an Existing List** → telusuri berkas Excel Anda.",
        "Pada dialog **Select Table**, pilih lembar kerja yang memuat data, lalu klik **OK**.",
        "Ketik isi surat: nomor surat, tanggal, tujuan, salam pembuka, isi, dan penutup.",
        "Letakkan kursor pada posisi nama penerima, lalu **Insert Merge Field** → pilih `Nama`.",
        "Ulangi untuk `Jabatan`, `Instansi`, `Alamat`, dan `Kota`.",
        "Klik **Preview Results** untuk melihat bagaimana surat tampil untuk penerima pertama.",
        "Gunakan tombol panah di group **Preview Results** untuk berpindah antarpenerima dan memastikan data benar.",
        "Uji **Find Recipient** untuk mencari penerima tertentu berdasarkan nama.",
        "Untuk menyelesaikan, klik **Finish & Merge** → pilih salah satu:",
        "**Edit Individual Documents** — hasil digabung ke dokumen baru sehingga dapat disunting per surat.",
        "**Print Documents** — langsung mencetak seluruh surat.",
        "**Send Email Messages** — mengirim melalui Outlook."
      ],
      catatan: "Sebelum menggabungkan, selalu simpan dokumen utama. Dokumen utama tetap memuat merge field sehingga dapat dipakai ulang untuk daftar penerima yang berbeda."
    },
    {
      h: "14.4 Mengatur dan Memeriksa Daftar Penerima",
      steps: [
        "Klik **Edit Recipient List** pada tab Mailings.",
        "Pada kotak dialog **Mail Merge Recipients**, centang penerima yang ingin disertakan.",
        "Klik judul kolom untuk mengurutkan data, atau klik **Sort** untuk pengurutan bertingkat.",
        "Klik **Filter** untuk menyaring data, misalnya hanya penerima dengan Kota = `Bandung`.",
        "Klik **Find** untuk mencari penerima tertentu.",
        "Klik **Validate Addresses** bila memakai sumber data Outlook.",
        "Klik **OK** untuk menerapkan."
      ],
      tabel: {
        kepala: ["Tombol", "Fungsi"],
        rows: [
          ["Checkbox pada baris", "Menentukan penerima yang ikut digabung"],
          ["Sort", "Mengurutkan berdasarkan beberapa kolom sekaligus"],
          ["Filter", "Menyaring data dengan kriteria tertentu"],
          ["Find", "Mencari entri tertentu"],
          ["Refine recipient list", "Menyaring duplikat atau entri kosong"],
          ["Edit", "Menyunting data penerima langsung dari dialog ini"]
        ]
      },
      tip: "Untuk membuat surat yang hanya ditujukan kepada penerima di kota tertentu, gunakan **Filter**. Contoh: Kota **Equal to** `Jakarta`. Filter jauh lebih efisien daripada menghapus centang penerima satu per satu."
    },
    {
      h: "14.5 Aturan Penggabungan (Rules)",
      p: ["Group **Write & Insert Fields** menyediakan **Rules** yang membuat surat lebih pintar."],
      tabel: {
        kepala: ["Rules", "Fungsi"],
        rows: [
          ["If...Then...Else", "Menampilkan teks berbeda berdasarkan kondisi data, misalnya mencetak `Bapak` atau `Ibu` sesuai kolom Gender"],
          ["Skip Record If", "Melewati penerima yang memenuhi syarat tertentu"],
          ["Next Record", "Berpindah ke penerima berikutnya di dalam satu halaman (dipakai pada label dan direktori)"],
          ["Next Record If", "Berpindah ke penerima berikutnya bila syarat terpenuhi"],
          ["Merge Record #", "Menyisipkan nomor urut catatan hasil gabungan"],
          ["Merge Sequence #", "Menyisipkan nomor urut hasil penggabungan"],
          ["Fill-in", "Meminta masukan pemakai saat penggabungan dijalankan"],
          ["Ask", "Menyimpan nilai masukan ke dalam bookmark untuk dipakai berulang"]
        ]
      },
      steps: [
        "Contoh **If...Then...Else**: letakkan kursor sebelum nama penerima.",
        "Klik **Rules → If...Then...Else**.",
        "Pada **Field name**, pilih `Gender`.",
        "Pada **Comparison**, pilih **Equal to**, dan isi **Compare to** dengan `L`.",
        "Isi **Insert this text** dengan `Bapak ` dan **Otherwise insert this text** dengan `Ibu `.",
        "Klik **OK**, lalu lanjutkan dengan menyisipkan merge field `Nama` setelahnya."
      ],
      peringatan: "Bila aturan tidak berjalan sesuai harapan, aktifkan **Preview Results** lalu periksa data penerima yang bersangkutan. Kesalahan biasanya terletak pada nilai di sumber data, misalnya `Laki-laki` padahal kondisi membandingkan dengan `L`."
    },
    {
      h: "14.6 Masalah Umum dan Solusinya",
      tabel: {
        kepala: ["Masalah", "Penyebab dan Solusi"],
        rows: [
          ["Merge field tampil sebagai «Nama» di hasil", "Preview Results belum diaktifkan, atau dokumen digabung ke printer tanpa pratinjau. Klik Preview Results terlebih dahulu."],
          ["Data salah tempat atau bergeser", "Ada baris/kolom kosong pada sumber data. Rapikan tabel Excel dan pilih ulang penerima."],
          ["Nama kolom tidak muncul saat Insert Merge Field", "Baris pertama Excel bukan judul kolom, atau sel judul digabung. Pisahkan dan ulangi pemilihan sumber."],
          ["Angka hilang nol di depan (misalnya 007)", "Excel memperlakukannya sebagai angka. Format kolom sebagai Text di Excel, atau gunakan opsi perlakuan khusus."],
          ["Tanggal tampil dalam format Amerika", "Sisipkan field tanggal memakai **Insert → Quick Parts → Field** dengan format yang diinginkan, bukan merge field biasa."],
          ["Koneksi ke Excel gagal", "Berkas Excel sedang dibuka atau dipakai proses lain. Tutup berkas lalu hubungkan kembali."],
          ["Dokumen hasil terlalu banyak", "Gunakan **Filter** atau hilangkan centang penerima yang tidak diperlukan sebelum Finish & Merge."]
        ]
      },
      tip: "Selalu lakukan **Finish & Merge → Edit Individual Documents → All** pada tahap uji, bukan langsung Print. Anda dapat memeriksa seluruh surat sebelum kertas dan tinta terpakai."
    }
  ],
  praktikum: {
    judul: "Surat Undangan Massal untuk 10 Peserta",
    deskripsi: "Anda akan membuat sumber data, dokumen surat, dan menggabungkannya menjadi 10 surat personal.",
    langkah: [
      "Buka Microsoft Excel dan buat tabel dengan kolom: `No`, `Nama`, `Jabatan`, `Instansi`, `Kota`.",
      "Isi 10 baris data peserta dengan nama yang berbeda-beda.",
      "Simpan sebagai `Data Peserta.xlsx`, lalu tutup Excel.",
      "Buka Word, buat dokumen baru, simpan sebagai `Latihan 14 - Surat Massal`.",
      "Buka tab **Mailings → Start Mail Merge → Letters**.",
      "Klik **Select Recipients → Use an Existing List**, pilih `Data Peserta.xlsx`, pilih lembar kerja yang benar pada dialog Select Table, klik **OK**.",
      "Ketik kop surat: `YAYASAN PENDIDIKAN NUSANTARA` dan alamat di bawahnya, rata tengah, tebal.",
      "Ketik `Nomor: 045/YP-N/2024` rata kanan, lalu `Hal: Undangan Pelatihan`.",
      "Ketik pembuka: `Kepada Yth.` lalu tekan Enter, dan sisipkan merge field `Nama` dari **Insert Merge Field**.",
      "Di baris berikutnya sisipkan `Jabatan`, lalu `Instansi`, dan `Kota`.",
      "Ketik paragraf isi undangan: `Dengan hormat, kami mengundang Saudara untuk mengikuti pelatihan Microsoft Word yang akan dilaksanakan pada...`",
      "Ketik penutup dan tanda tangan, sisipkan merge field `Nama` pada baris tanda tangan.",
      "Klik **Preview Results** dan periksa surat penerima pertama.",
      "Gunakan tombol panah untuk berpindah antarpenerima, pastikan setiap nama dan instansi sesuai.",
      "Klik **Edit Recipient List** → **Sort** berdasarkan kolom `Nama` menaik → **OK**.",
      "Klik **Edit Recipient List** → **Filter** dengan kriteria `Kota` **Equal to** `Bandung` → **OK**. Catat berapa penerima yang tersisa.",
      "Hapus filter agar seluruh penerima kembali disertakan.",
      "Letakkan kursor sebelum merge field Nama, lalu tambahkan **Rules → If...Then...Else** pada field `Jabatan` dengan kondisi `Equal to` `Ketua` → teks `Yang terhormat ` dan lainnya `Saudara `.",
      "Klik **Preview Results** lagi untuk memastikan aturan berjalan.",
      "Klik **Finish & Merge → Edit Individual Documents → All**.",
      "Periksa dokumen hasil yang memuat 10 surat (satu per halaman), lalu simpan sebagai `Latihan 14 - Hasil Surat Massal`.",
      "Kembali ke dokumen utama dan pastikan merge field masih ada sehingga dapat dipakai ulang."
    ]
  },
  latihan: [
    "Buat sertifikat pelatihan memakai mail merge dengan data nama peserta, nomor sertifikat, dan tanggal.",
    "Buat surat pemberitahuan tagihan dengan merge field untuk nomor pelanggan, jumlah tagihan, dan jatuh tempo.",
    "Ubah sumber data dengan menambahkan kolom `Email`, lalu lakukan penggabungan ke pesan email.",
    "Jelaskan perbedaan Edit Individual Documents dengan Print Documents pada Finish & Merge.",
    "Buat filter yang menampilkan hanya penerima dengan jabatan tertentu, lalu jelaskan cara menghapusnya."
  ],
  shortcut: [
    { k: "Alt+M", f: "Membuka tab Mailings melalui Key Tips" },
    { k: "Ctrl+F9", f: "Menyisipkan tanda kurung field kosong `{ }`" },
    { k: "Alt+Shift+K", f: "Membuka Preview Results (versi tertentu)" },
    { k: "F9", f: "Memperbarui field" },
    { k: "Ctrl+6", f: "Menampilkan/menyembunyikan tanda merge field" }
  ],
  rangkuman: [
    "Mail merge menggabungkan dokumen kerangka dengan sumber data untuk menghasilkan banyak dokumen personal.",
    "Tiga komponennya: main document, data source, dan merge field.",
    "Sumber data paling mudah berasal dari tabel Excel dengan baris judul kolom yang bersih.",
    "Preview Results wajib dilakukan sebelum menyelesaikan penggabungan.",
    "Rules If...Then...Else membuat isi surat menyesuaikan kondisi data penerima."
  ],
  kuis: [
    {
      q: "Komponen mail merge yang berisi kerangka surat disebut…",
      opsi: ["Data source", "Main document", "Merge field", "Recipient list"],
      jawab: 1,
      bahasan: "Main document adalah dokumen kerangka berisi teks tetap dan merge field. Data source menyediakan datanya, sedangkan merge field adalah penanda pengganti."
    },
    {
      q: "Syarat penting baris pertama sumber data Excel adalah…",
      opsi: [
        "Harus dikosongkan",
        "Berisi nama kolom",
        "Berisi nomor urut",
        "Digabung (merge cell)"
      ],
      jawab: 1,
      bahasan: "Baris pertama harus berisi nama kolom karena Word memakainya sebagai nama merge field. Sel yang digabung akan mengganggu pemetaan data."
    },
    {
      q: "Perintah untuk memilih penerima tertentu berdasarkan kriteria disebut…",
      opsi: ["Sort", "Filter", "Find", "Validate"],
      jawab: 1,
      bahasan: "Filter menyaring daftar penerima berdasarkan kriteria, misalnya Kota sama dengan Bandung. Sort hanya mengurutkan, bukan menyaring."
    },
    {
      q: "Rules yang menampilkan teks berbeda berdasarkan kondisi data adalah…",
      opsi: ["Next Record", "Skip Record If", "If...Then...Else", "Merge Record #"],
      jawab: 2,
      bahasan: "If...Then...Else membandingkan nilai sebuah field dengan nilai tertentu, lalu menampilkan teks yang sesuai kondisi."
    },
    {
      q: "Langkah yang harus dilakukan sebelum mencetak hasil mail merge adalah…",
      opsi: [
        "Menghapus merge field",
        "Mengaktifkan Preview Results dan memeriksa data",
        "Menyimpan sumber data sebagai PDF",
        "Menutup dokumen utama"
      ],
      jawab: 1,
      bahasan: "Preview Results memastikan setiap surat memuat data penerima yang benar sebelum dicetak atau digabungkan, sehingga menghindari kesalahan yang mahal."
    }
  ]
},

{
  id: 15,
  judul: "Mail Merge Lanjutan: Label, Amplop, dan Direktori",
  level: "Mahir",
  durasi: "110 menit",
  deskripsi: "Memanfaatkan mail merge untuk label alamat, amplop, direktori, dan dokumen berkondisi, termasuk pengaturan Next Record dan penataan tata letak label.",
  tujuan: [
    "Membuat label alamat massal dengan tata letak yang tepat.",
    "Mencetak amplop dengan alamat pengirim dan penerima.",
    "Membuat direktori atau daftar data memakai mail merge.",
    "Menggunakan Next Record untuk menampilkan beberapa data dalam satu halaman.",
    "Menyelesaikan dan menyimpan hasil merge secara efisien."
  ],
  materi: [
    {
      h: "15.1 Jenis Dokumen Utama pada Mail Merge",
      tabel: {
        kepala: ["Jenis", "Kegunaan", "Ciri Khas"],
        rows: [
          ["Letters", "Surat massal", "Satu dokumen per penerima"],
          ["E-mail Messages", "Surel massal", "Dikirim melalui Outlook, satu pesan per penerima"],
          ["Envelopes", "Amplop", "Ukuran amplop dipilih, alamat pengirim dan penerima"],
          ["Labels", "Label alamat atau stiker", "Grid label, banyak penerima per halaman"],
          ["Directory", "Daftar/katalog data", "Semua data dalam satu dokumen tanpa jeda halaman"]
        ]
      },
      tip: "Directory adalah pilihan yang jarang dikenal tetapi sangat berguna: ia menampilkan seluruh data dalam satu dokumen berkelanjutan, misalnya daftar peserta rapat atau katalog nama."
    },
    {
      h: "15.2 Membuat Label Alamat Massal",
      steps: [
        "Buka dokumen baru di Word.",
        "Buka **Mailings → Start Mail Merge → Labels**.",
        "Pada **Label Options**, pilih **Vendor** (misalnya Avery A4/A5) dan **Product number** (misalnya 5160 atau L7160).",
        "Klik **OK**. Word akan menampilkan halaman berisi grid label kosong.",
        "Hubungkan sumber data: **Select Recipients → Use an Existing List**, pilih berkas Excel Anda.",
        "Klik **Insert Merge Field** dan susun isi label pada kotak pertama: `Nama`, Enter, `Alamat`, Enter, `Kota`.",
        "Klik **Update Labels** agar seluruh kotak label pada halaman memakai susunan field yang sama.",
        "Aktifkan **Preview Results** dan periksa bahwa setiap kotak memuat data penerima berbeda.",
        "Bila data tidak berganti antarkotak, sisipkan **Rules → Next Record** pada setiap kotak label (kecuali yang terakhir).",
        "Klik **Finish & Merge → Edit Individual Documents → All** untuk menghasilkan dokumen label.",
        "Cetak pada lembar label atau kertas biasa untuk uji coba."
      ],
      peringatan: "Bila label tampak berisi data yang sama berulang, penyebabnya adalah aturan Next Record yang hilang. Pada label, setiap kotak harus memuat aturan Next Record agar Word melompat ke data berikutnya."
    },
    {
      h: "15.3 Membuat Amplop",
      steps: [
        "Buka dokumen baru, lalu **Mailings → Start Mail Merge → Envelopes**.",
        "Pada dialog **Envelope Options**, pilih **Envelope size** (misalnya DL 110 × 220 mm atau C6).",
        "Atur **Delivery address** dan **Return address** beserta jarak dari tepi (from left, from top).",
        "Buka tab **Printing Options** untuk menyesuaikan cara pencetakan pada amplop Anda.",
        "Klik **OK**.",
        "Ketik alamat pengirim pada area kiri atas, atau sisipkan gambar logo.",
        "Pada area alamat penerima, klik **Insert Merge Field** dan susun: `Nama`, Enter, `Alamat`, Enter, `Kota`.",
        "Hubungkan sumber data melalui **Select Recipients**.",
        "Klik **Preview Results**, lalu periksa posisi cetak dengan menyisipkan selembar kertas uji.",
        "Klik **Finish & Merge** untuk mencetak atau menyimpan hasil."
      ],
      tip: "Sebelum mencetak banyak amplop, uji dengan satu amplop kosong atau kertas biasa yang dipotong sesuai ukuran. Kesalahan posisi pada amplop mahal harganya."
    },
    {
      h: "15.4 Direktori dan Daftar Data",
      steps: [
        "Buka dokumen baru, pilih **Mailings → Start Mail Merge → Directory**.",
        "Ketik satu baris struktur data: sisipkan merge field `No`, tekan [[Tab]], `Nama`, [[Tab]], `Instansi`, [[Tab]], `Kota`.",
        "Hubungkan sumber data melalui **Select Recipients**.",
        "Klik **Preview Results** untuk melihat bagaimana data dirangkai.",
        "Klik **Finish & Merge → Edit Individual Documents → All**.",
        "Seluruh data akan tersusun berurutan dalam satu dokumen tanpa jeda halaman."
      ],
      catatan: "Bila hasil direktori tampil dalam banyak halaman terpisah, pastikan **Next Record** tidak diperlukan — pada Directory, Word mengalirkan data secara otomatis. Masalah biasanya muncul bila Anda tidak sengaja memilih tipe Letters."
    },
    {
      h: "15.5 Menyusun Field dan Teks Bersyarat Lanjutan",
      steps: [
        "Letakkan kursor pada posisi yang diinginkan, lalu **Mailings → Rules → If...Then...Else**.",
        "Susun kondisi bertingkat dengan menambahkan aturan lain di dalam teks **Insert this text**.",
        "Untuk membandingkan angka, gunakan operator **Greater than**, **Less than**, **Greater than or equal**, atau **Not equal to**.",
        "Untuk menampilkan field yang tidak boleh kosong, gunakan aturan **Skip Record If** dengan kondisi `Alamat` **Is blank** agar penerima tanpa alamat dilewati.",
        "Gunakan **Ask** bila ingin meminta satu nilai masukan yang dipakai di seluruh dokumen, misalnya nomor surat yang diisi saat penggabungan.",
        "Gunakan **Fill-in** untuk meminta masukan setiap kali penggabungan dijalankan."
      ],
      tip: "Kombinasi If...Then...Else bertingkat memungkinkan pembuatan surat dengan sapaan yang tepat untuk banyak skenario: `Bapak`, `Ibu`, `Saudara`, atau `Bapak/Ibu` bila kolom jenis kelamin kosong."
    },
    {
      h: "15.6 Menyimpan dan Menggunakan Ulang Pengaturan Merge",
      steps: [
        "Simpan dokumen utama (surat/label/amplop) dalam format `.docx` agar merge field tetap tersimpan.",
        "Untuk memakai ulang dengan daftar penerima berbeda: buka dokumen utama, klik **Select Recipients** dan pilih berkas data baru.",
        "Bila ingin membuat templat, simpan sebagai **Word Template (.dotx)** sehingga dokumen utama dapat dipakai ulang tanpa risiko tertimpa.",
        "Untuk mengirim dokumen hasil merge, gunakan **Finish & Merge → Send Email Messages** dengan mengisi kolom **To**, **Subject line**, dan **Mail format**.",
        "Untuk hasil berjumlah besar, gabungkan ke dokumen baru lalu simpan sebagai PDF dan bagian-bagiannya dikirim terpisah.",
        "Bersihkan komentar dan revisi dari dokumen hasil sebelum dikirim ke pihak luar."
      ],
      peringatan: "Dokumen hasil penggabungan tidak lagi memuat merge field, melainkan teks nyata. Jangan menyimpan hasil merge sebagai dokumen utama karena tidak dapat dipakai ulang."
    }
  ],
  praktikum: {
    judul: "Membuat Label Alamat dan Amplop Massal",
    deskripsi: "Anda akan membuat dua jenis keluaran mail merge sekaligus: label alamat satu halaman berisi banyak penerima dan amplop resmi.",
    langkah: [
      "Gunakan berkas `Data Peserta.xlsx` dari pertemuan sebelumnya, atau buat ulang bila belum ada.",
      "Buka Word dan buat dokumen baru, simpan sebagai `Latihan 15 - Label dan Amplop`.",
      "Buka **Mailings → Start Mail Merge → Labels**.",
      "Pada **Label Options**, pilih Vendor **Avery A4/A5** dan Product number yang tersedia, lalu klik **OK**.",
      "Hubungkan data: **Select Recipients → Use an Existing List** → pilih `Data Peserta.xlsx`.",
      "Pada label pertama, sisipkan merge field: `Nama`, Enter, `Alamat`, Enter, `Kota`.",
      "Klik **Update Labels** sehingga seluruh grid label memakai susunan yang sama.",
      "Aktifkan **Preview Results** dan periksa beberapa kotak label memuat data berbeda.",
      "Bila data sama berulang, sisipkan **Rules → Next Record** pada setiap kotak dan periksa lagi.",
      "Klik **Finish & Merge → Edit Individual Documents → All**, lalu periksa jumlah label yang dihasilkan sesuai jumlah penerima.",
      "Simpan hasil label sebagai `Latihan 15 - Hasil Label`.",
      "Kembali ke dokumen label, lalu ubah jenis dokumen: **Start Mail Merge → Envelopes**.",
      "Pada dialog Envelope Options, pilih ukuran amplop **DL**, atur jarak alamat penerima **from left 10 cm**, **from top 5 cm**, klik **OK**.",
      "Pada area alamat pengirim, ketik nama dan alamat lembaga Anda.",
      "Pada area alamat penerima, sisipkan merge field `Nama`, `Alamat`, dan `Kota`.",
      "Klik **Preview Results** dan pastikan posisi alamat tampak tepat pada pratinjau.",
      "Klik **Finish & Merge → Edit Individual Documents → All** untuk menghasilkan dokumen amplop.",
      "Simpan dokumen utama dalam format **Word Template (.dotx)** dengan nama `Templat Amplop Resmi` untuk dipakai ulang."
    ]
  },
  latihan: [
    "Buat label undangan berukuran kecil berisi nama dan jabatan saja.",
    "Buat direktori peserta yang menampilkan Nomor, Nama, Instansi, dan Kota dalam satu daftar berkelanjutan.",
    "Jelaskan mengapa Next Record diperlukan pada label tetapi tidak pada surat biasa.",
    "Buat amplop dengan logo lembaga di sudut kiri atas dan alamat penerima dari sumber data.",
    "Simpan dokumen utama sebagai templat, lalu gunakan kembali dengan berkas data berbeda."
  ],
  shortcut: [
    { k: "Alt+M", f: "Membuka tab Mailings" },
    { k: "Ctrl+6", f: "Menampilkan atau menyembunyikan merge field" },
    { k: "F9", f: "Memperbarui field" },
    { k: "Ctrl+F9", f: "Menyisipkan tanda field kosong" },
    { k: "Ctrl+Shift+F9", f: "Mengubah field menjadi teks biasa" }
  ],
  rangkuman: [
    "Jenis dokumen utama mail merge meliputi Letters, E-mail Messages, Envelopes, Labels, dan Directory.",
    "Update Labels menerapkan susunan field yang sama ke seluruh kotak label pada halaman.",
    "Next Record diperlukan pada label agar setiap kotak memuat data penerima berbeda.",
    "Amplop memerlukan pengaturan ukuran dan posisi cetak yang diuji lebih dahulu.",
    "Simpan dokumen utama sebagai .docx atau .dotx agar dapat dipakai ulang dengan sumber data baru."
  ],
  kuis: [
    {
      q: "Perintah yang menyalin susunan merge field ke seluruh kotak label adalah…",
      opsi: ["Insert Merge Field", "Update Labels", "Preview Results", "Highlight Merge Fields"],
      jawab: 1,
      bahasan: "Update Labels menerapkan susunan field dari kotak pertama ke semua kotak label pada halaman sehingga tidak perlu disusun satu per satu."
    },
    {
      q: "Pada pembuatan label, aturan yang diperlukan agar setiap kotak memuat data berbeda adalah…",
      opsi: ["Skip Record If", "Next Record", "Merge Sequence #", "Fill-in"],
      jawab: 1,
      bahasan: "Next Record memindahkan penggabungan ke penerima berikutnya pada kotak label berikutnya. Tanpa itu, semua kotak akan memuat data penerima yang sama."
    },
    {
      q: "Jenis mail merge yang menghasilkan semua data dalam satu dokumen tanpa jeda halaman adalah…",
      opsi: ["Letters", "Envelopes", "Labels", "Directory"],
      jawab: 3,
      bahasan: "Directory mengalirkan seluruh data secara berurutan dalam satu dokumen sehingga cocok untuk katalog atau daftar peserta."
    },
    {
      q: "Sebelum mencetak banyak amplop, langkah pencegahan yang paling bijak adalah…",
      opsi: [
        "Langsung mencetak seluruhnya",
        "Menguji posisi cetak pada kertas biasa atau satu amplop",
        "Menghapus merge field",
        "Mengubah sumber data menjadi PDF"
      ],
      jawab: 1,
      bahasan: "Uji cetak pada kertas biasa memastikan posisi alamat sudah tepat sebelum amplop asli yang relatif mahal digunakan."
    },
    {
      q: "Format berkas yang paling tepat untuk menyimpan dokumen utama agar dapat dipakai ulang adalah…",
      opsi: [".pdf", ".txt", ".docx atau .dotx", ".rtf"],
      jawab: 2,
      bahasan: "Dokumen utama harus disimpan dalam format Word (.docx) atau sebagai templat (.dotx) agar merge field dan pengaturannya tetap tersimpan."
    }
  ]
},

{
  id: 16,
  judul: "Kolaborasi: Track Changes, Komentar, dan Proteksi Dokumen",
  level: "Mahir",
  durasi: "110 menit",
  deskripsi: "Bekerja bersama tim: melacak perubahan, memberi komentar, membandingkan versi dokumen, menggabungkan revisi, serta melindungi dokumen dari perubahan tidak sah.",
  tujuan: [
    "Mengaktifkan dan mengatur Track Changes.",
    "Menerima atau menolak perubahan dari rekan kerja.",
    "Menambahkan, membalas, dan menyelesaikan komentar.",
    "Membandingkan dua versi dokumen dan menggabungkan revisi.",
    "Membatasi penyuntingan, menandai dokumen final, dan mengenkripsi dengan kata sandi."
  ],
  materi: [
    {
      h: "16.1 Track Changes (Lacak Perubahan)",
      p: ["Track Changes merekam setiap penambahan, penghapusan, dan perubahan format yang dilakukan, lengkap dengan nama pengubah dan waktunya. Fitur wajib dalam penyuntingan naskah, penyusunan kontrak, dan kerja tim."],
      steps: [
        "Buka tab **Review** → **Track Changes** ([[Ctrl+Shift+E]]).",
        "Pada dropdown di sebelahnya, pilih tampilan: **Simple Markup**, **All Markup**, **No Markup**, atau **Original**.",
        "Sunting dokumen seperti biasa. Setiap perubahan akan tercatat.",
        "Klik **Show Markup** untuk memilih jenis perubahan yang ditampilkan: Comments, Insertions and Deletions, Formatting, Balloons.",
        "Aktifkan **Reviewing Pane** (vertikal atau horizontal) untuk melihat daftar ringkas semua perubahan.",
        "Untuk menerima perubahan: letakkan kursor pada perubahan → **Accept** → **Accept This Change** atau **Accept All Changes**.",
        "Untuk menolak: **Reject** → **Reject This Change** atau **Reject All Changes**.",
        "Gunakan **Previous / Next** untuk berpindah antarrevisi.",
        "Matikan Track Changes dengan menekan [[Ctrl+Shift+E]] kembali setelah selesai menyunting."
      ],
      tabel: {
        kepala: ["Tampilan Markup", "Keterangan"],
        rows: [
          ["Simple Markup", "Perubahan ditandai garis vertikal di margin; tampilan bersih"],
          ["All Markup", "Semua perubahan tampil dengan warna dan garis coret"],
          ["No Markup", "Tampilan seolah semua perubahan sudah diterima"],
          ["Original", "Tampilan dokumen sebelum ada perubahan"]
        ]
      },
      peringatan: "Bila dokumen memuat revisi yang belum diterima lalu dikirim ke pihak lain, revisi itu masih dapat dibaca. Jalankan **File → Info → Check for Issues → Inspect Document** atau terima/tolak semua perubahan sebelum berkas dibagikan."
    },
    {
      h: "16.2 Komentar",
      steps: [
        "Seleksi teks yang akan dikomentari, lalu **Review → New Comment** ([[Ctrl+Alt+M]]).",
        "Ketik komentar pada panel di kanan, lalu tekan tombol **Post** atau klik di luar panel.",
        "Untuk membalas, klik **Reply** di bawah komentar dan ketik tanggapan Anda.",
        "Untuk menandai selesai, klik ikon centang **Resolve** pada komentar.",
        "Gunakan **Previous / Next** pada group Comments untuk berpindah antarkomentar.",
        "Untuk menghapus, klik **Delete** pada komentar tertentu, atau **Delete All Comments in Document**.",
        "Atur tampilan komentar lewat **Show Comments** dan dropdown **Markup**."
      ],
      catatan: "Komentar tidak tampil di Print Layout biasa kecuali markup diaktifkan, tetapi tetap tersimpan di dalam berkas. Komentar juga dapat dicetak dengan memilih **Print Markup** pada pengaturan cetak."
    },
    {
      h: "16.3 Compare dan Combine",
      tabel: {
        kepala: ["Perintah", "Fungsi"],
        rows: [
          ["Compare", "Membandingkan dokumen asli dengan dokumen yang sudah diubah, lalu menampilkan perbedaannya sebagai revisi"],
          ["Combine", "Menggabungkan revisi dari beberapa penyunting ke dalam satu dokumen"]
        ]
      },
      steps: [
        "Buka **Review → Compare → Compare** (atau Combine).",
        "Pada **Original document**, pilih berkas versi awal.",
        "Pada **Revised document**, pilih berkas versi yang sudah disunting.",
        "Klik **More** untuk memilih apa yang dibandingkan: gerakan, tabel, komentar, format, dan lainnya.",
        "Tentukan tujuan hasil: **New document**, **Original document**, atau **Revised document**.",
        "Klik **OK**. Word menampilkan dokumen hasil dengan panel perbandingan di kedua sisi.",
        "Terima atau tolak setiap revisi sesuai keputusan tim, lalu simpan dokumen bersih.",
        "Untuk menyimpan ringkasan, gunakan **Review → Reviewing Pane** lalu salin isinya, atau ekspor hasil perbandingan ke PDF."
      ],
      tip: "Compare dan Combine memerlukan berkas asli. Karena itu, biasakan menyimpan versi naskah secara berurutan (`naskah-v1`, `naskah-v2`) agar perbandingan dapat dilakukan kapan pun."
    },
    {
      h: "16.4 Membatasi Penyuntingan dan Proteksi",
      steps: [
        "Buka **Review → Restrict Editing** (atau **File → Info → Protect Document → Restrict Editing**).",
        "Pada panel yang muncul, bagian **1. Formatting restrictions**, centang **Limit formatting to a selection of styles** bila ingin membatasi gaya yang boleh dipakai.",
        "Bagian **2. Editing restrictions**, centang **Allow only this type of editing in the document**.",
        "Pilih jenis pembatasan: **No changes (Read only)**, **Tracked changes**, **Comments**, atau **Filling in forms**.",
        "Bila ingin memberi pengecualian kepada orang tertentu, klik **More users** dan tambahkan alamat email, lalu centang bagian dokumen yang boleh mereka sunting.",
        "Klik **Yes, Start Enforcing Protection**.",
        "Masukkan kata sandi bila ingin melindungi pembatasan, lalu klik **OK**.",
        "Untuk menghentikan, klik **Stop Protection** dan masukkan kata sandi bila diminta."
      ],
      p: ["Pilihan proteksi lain di **File → Info → Protect Document**:"],
      tabel: {
        kepala: ["Pilihan", "Fungsi"],
        rows: [
          ["Mark as Final", "Menandai dokumen sebagai versi final; dokumen menjadi read-only namun mudah dibatalkan pihak lain"],
          ["Encrypt with Password", "Mengunci dokumen dengan kata sandi agar tidak dapat dibuka tanpa sandi"],
          ["Restrict Editing", "Membatasi jenis penyuntingan dan format"],
          ["Restrict Access", "Membatasi izin lewat Information Rights Management (lingkungan organisasi)"],
          ["Always Open Read-Only", "Menyarankan dokumen dibuka dalam mode hanya baca"]
        ]
      },
      peringatan: "**Mark as Final** bukan alat keamanan. Siapa pun dapat membatalkan tanda tersebut dengan satu klik. Untuk perlindungan nyata, gunakan **Encrypt with Password**. Simpan kata sandi di tempat aman — kata sandi yang hilang tidak dapat dipulihkan."
    },
    {
      h: "16.5 Kolaborasi Real-Time dan Mode Bersama",
      steps: [
        "Simpan dokumen di **OneDrive** atau **SharePoint**.",
        "Aktifkan **AutoSave** di sudut kiri atas.",
        "Klik **Share** dan masukkan alamat email rekan kerja, lalu tentukan izin **Can edit** atau **Can view**.",
        "Beberapa orang dapat menyunting dokumen yang sama pada waktu bersamaan. Kursor setiap orang tampil dengan warna berbeda.",
        "Gunakan **Comments** untuk berdiskusi tanpa mengubah isi naskah.",
        "Lihat **Version History** untuk memeriksa atau memulihkan versi sebelumnya."
      ],
      tip: "Untuk dokumen yang akan disunting bersama, sepakati aturan terlebih dahulu: apa yang boleh diubah langsung, apa yang harus lewat komentar, dan gaya mana yang dipakai. Aturan ini menghemat banyak waktu rekonsiliasi."
    },
    {
      h: "16.6 Memeriksa Aksesibilitas dan Konsistensi",
      steps: [
        "Buka **Review → Check Accessibility**.",
        "Panel **Accessibility** menampilkan daftar masalah: gambar tanpa teks alternatif, tabel tanpa baris judul, teks dengan kontras rendah, hyperlink tanpa keterangan, serta urutan baca yang tidak logis.",
        "Klik setiap **Inspection Result** untuk melihat rincian dan saran perbaikan.",
        "Perbaiki masalah yang terdeteksi, lalu periksa kembali.",
        "Gunakan juga **File → Info → Check for Issues → Inspect Document** untuk membersihkan properti dan komentar tersembunyi."
      ],
      list: [
        "Tambahkan **Alt Text** pada semua gambar (klik kanan gambar → Edit Alt Text).",
        "Gunakan **gaya Heading** agar struktur dokumen terbaca pembaca layar.",
        "Aktifkan **Repeat as header row** pada tabel panjang.",
        "Pastikan kontras warna teks dengan latar mencukupi.",
        "Tulis teks tautan yang bermakna, bukan `klik di sini`."
      ]
    }
  ],
  praktikum: {
    judul: "Simulasi Penyuntingan Naskah oleh Dua Reviwer",
    deskripsi: "Anda akan berperan sebagai penulis sekaligus reviwer: mengaktifkan Track Changes, memberi komentar, membandingkan versi, dan melindungi dokumen final.",
    langkah: [
      "Buat dokumen baru berisi dua paragraf naskah pendek, simpan sebagai `Latihan 16 - Kolaborasi v1`.",
      "Aktifkan **Review → Track Changes** ([[Ctrl+Shift+E]]).",
      "Hapus satu kalimat, tambahkan satu kalimat baru, dan ubah format satu kata menjadi tebal.",
      "Perhatikan markup yang muncul: sisipan bergaris bawah berwarna, hapusan bergaris coret, dan balon di margin.",
      "Ubah tampilan markup dari **All Markup** ke **Simple Markup**, lalu **No Markup**, dan **Original**. Amati perbedaannya.",
      "Aktifkan **Reviewing Pane → Vertical** untuk melihat ringkasan seluruh perubahan.",
      "Seleksi satu frasa dan tambahkan **New Comment** berisi `Mohon data ini diverifikasi.`",
      "Tambahkan **Reply** pada komentar tersebut berisi `Sudah diverifikasi, terima kasih.`, lalu klik **Resolve**.",
      "Terima satu perubahan dengan **Accept → Accept This Change**, dan tolak satu perubahan dengan **Reject → Reject This Change**.",
      "Matikan Track Changes, lalu simpan sebagai `Latihan 16 - Kolaborasi v2`.",
      "Simpan dokumen yang sama dengan nama `Latihan 16 - Kolaborasi v3`, lalu ubah dua kalimat di dalamnya.",
      "Buka dokumen v2, gunakan **Review → Compare → Compare**, pilih v2 sebagai Original dan v3 sebagai Revised.",
      "Klik **OK** dan periksa dokumen hasil perbandingan beserta panel di kedua sisi.",
      "Simpan hasil perbandingan sebagai `Latihan 16 - Hasil Perbandingan`.",
      "Buka kembali v2, lalu **Review → Restrict Editing** → centang **Allow only this type of editing** → pilih **Comments** → klik **Yes, Start Enforcing Protection** tanpa kata sandi.",
      "Coba sunting isi dokumen dan buktikan bahwa penyuntingan langsung ditolak; hanya komentar yang diizinkan.",
      "Hentikan proteksi dengan **Stop Protection**.",
      "Buka **Review → Check Accessibility** dan perbaiki minimal satu masalah yang terdeteksi.",
      "Terakhir, jalankan **File → Info → Check for Issues → Inspect Document**, hapus komentar dan revisi, lalu simpan sebagai dokumen final."
    ]
  },
  latihan: [
    "Jelaskan perbedaan Compare dan Combine beserta situasi penggunaan masing-masing.",
    "Praktikkan membuat dokumen yang hanya dapat diisi pada bagian tertentu memakai Restrict Editing dan pengecualian pengguna.",
    "Sebutkan tiga alasan mengapa Mark as Final tidak dapat dianggap sebagai pengamanan dokumen.",
    "Buat dokumen dengan lima komentar, lalu hapus hanya komentar yang sudah selesai.",
    "Jalankan Accessibility Checker pada dokumen berisi gambar dan tabel, lalu perbaiki semua temuan."
  ],
  shortcut: [
    { k: "Ctrl+Shift+E", f: "Mengaktifkan / mematikan Track Changes" },
    { k: "Ctrl+Alt+M", f: "Menyisipkan komentar baru" },
    { k: "Ctrl+Alt+Shift+M", f: "Menyisipkan komentar (alternatif versi lain)" },
    { k: "Alt+Ctrl+M", f: "Membuka panel Reviewing Pane (versi tertentu)" },
    { k: "Ctrl+Shift+C", f: "Menyalin format (bukan Track Changes)" },
    { k: "Alt+R", f: "Membuka tab Review melalui Key Tips" }
  ],
  rangkuman: [
    "Track Changes merekam semua penyuntingan beserta identitas pengubahnya.",
    "Accept dan Reject menyelesaikan setiap revisi; Reviewing Pane menampilkan ringkasannya.",
    "Komentar menjadi sarana diskusi tanpa mengubah isi naskah dan dapat ditandai Resolve.",
    "Compare membandingkan dua versi, sedangkan Combine menggabungkan revisi beberapa penyunting.",
    "Mark as Final hanya bersifat penanda, sedangkan Encrypt with Password adalah pengamanan nyata."
  ],
  kuis: [
    {
      q: "Pintasan untuk mengaktifkan atau mematikan Track Changes adalah…",
      opsi: ["Ctrl+Shift+E", "Ctrl+Alt+M", "Ctrl+Shift+C", "Ctrl+Alt+E"],
      jawab: 0,
      bahasan: "Ctrl+Shift+E menyalakan atau mematikan pelacakan perubahan. Ctrl+Alt+M menyisipkan komentar baru."
    },
    {
      q: "Perintah yang membandingkan dua versi dokumen dan menampilkan perbedaannya adalah…",
      opsi: ["Combine", "Compare", "Merge", "Inspect Document"],
      jawab: 1,
      bahasan: "Compare membandingkan dokumen asli dengan dokumen yang direvisi, sedangkan Combine menggabungkan revisi dari beberapa penyunting ke satu dokumen."
    },
    {
      q: "Pilihan proteksi yang benar-benar mengunci dokumen dengan kata sandi adalah…",
      opsi: ["Mark as Final", "Always Open Read-Only", "Encrypt with Password", "Restrict Editing tanpa sandi"],
      jawab: 2,
      bahasan: "Encrypt with Password mengenkripsi berkas sehingga tidak dapat dibuka tanpa kata sandi. Mark as Final dan Always Open Read-Only hanya bersifat saran yang mudah dibatalkan."
    },
    {
      q: "Untuk menerima seluruh perubahan yang tercatat, perintah yang dipakai adalah…",
      opsi: ["Accept All Changes", "Next Change", "Show Markup", "Reviewing Pane"],
      jawab: 0,
      bahasan: "Accept All Changes pada dropdown Accept menerima semua revisi sekaligus. Accept This Change hanya menerima revisi tempat kursor berada."
    },
    {
      q: "Fitur untuk memeriksa gambar tanpa teks alternatif dan tabel tanpa baris judul adalah…",
      opsi: ["Check Accessibility", "Track Changes", "Compare", "Restrict Editing"],
      jawab: 0,
      bahasan: "Check Accessibility menampilkan temuan seperti gambar tanpa Alt Text, tabel tanpa header, kontras rendah, dan struktur heading yang tidak logis."
    }
  ]
}

);
