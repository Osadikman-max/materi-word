/* ===========================================================
   Data materi — Pertemuan 17 s.d. 24
   =========================================================== */
window.MATERI = window.MATERI || [];
window.MATERI.push(

{
  id: 17,
  judul: "Template, Tema, dan Standarisasi Dokumen",
  level: "Mahir",
  durasi: "100 menit",
  deskripsi: "Membuat dokumen yang dapat dipakai berulang: templat organisasi, tema warna dan font, kop surat otomatis, serta standarisasi format seluruh instansi.",
  tujuan: [
    "Menjelaskan perbedaan dokumen biasa, templat, dan tema.",
    "Membuat templat dokumen (.dotx) lengkap dengan gaya dan kop surat.",
    "Mengatur tema, warna tema, dan pasangan font dokumen.",
    "Menerapkan Style Set dan menyimpannya sebagai default.",
    "Menggunakan Personal Templates dan menyimpan templat ke folder Office."
  ],
  materi: [
    {
      h: "17.1 Dokumen, Templat, dan Tema",
      tabel: {
        kepala: ["Istilah", "Pengertian", "Ekstensi"],
        rows: [
          ["Dokumen", "Berkas kerja berisi isi yang sedang disusun", ".docx"],
          ["Templat", "Kerangka dasar berisi gaya, kop surat, dan pengaturan halaman, dipakai untuk membuat dokumen baru", ".dotx"],
          ["Templat bermakro", "Templat yang memuat makro VBA", ".dotm"],
          ["Tema", "Kombinasi warna, font, dan efek yang berlaku di seluruh dokumen", "bagian dari dokumen"],
          ["Style Set", "Variasi tampilan untuk gaya bawaan dokumen", "bagian dari dokumen"]
        ]
      },
      p: ["Tiga lapisan pengaturan dokumen bekerja berurutan: **tema** menentukan palet warna dan pasangan font, **Style Set** menentukan tampilan gaya bawaan, dan **gaya** menentukan format setiap paragraf."],
      tip: "Bila ingin dokumen baru otomatis memakai gaya dan kop surat organisasi, simpan sebagai templat lalu letakkan di folder **Custom Office Templates**. Dokumen itu akan tampil saat Anda memilih **File → New → Personal**."
    },
    {
      h: "17.2 Membuat Templat Dokumen",
      steps: [
        "Buka dokumen yang sudah rapi dan akan dijadikan dasar, atau buat dokumen baru.",
        "Susun semua elemen tetap: kop surat di header, footer dengan nomor halaman, gaya Heading, dan gaya kustom.",
        "Hapus isi yang bersifat sementara, sisakan kerangka dan contoh teks bergaya.",
        "Buka **File → Save As**, pilih **Word Template (*.dotx)** pada **Save as type**.",
        "Word otomatis mengarahkan penyimpanan ke folder **Custom Office Templates**. Beri nama berkas, misalnya `Templat Laporan Resmi`.",
        "Klik **Save**.",
        "Untuk menggunakannya: **File → New → Personal**, pilih templat tersebut. Word membuat **salinan baru** sehingga berkas templat asli tetap aman.",
        "Untuk menyunting templatnya: **File → Open**, telusuri berkas `.dotx`, lalu simpan kembali dalam format yang sama."
      ],
      peringatan: "Jangan menyunting langsung berkas templat untuk pekerjaan sehari-hari. Buka templat selalu melalui **File → New** agar Word membuat dokumen baru, bukan mengubah templat aslinya."
    },
    {
      h: "17.3 Tema, Warna Tema, dan Pasangan Font",
      steps: [
        "Buka tab **Design**.",
        "Klik **Themes** untuk memilih tema bawaan seperti Office, Facet, Integral, Ion, Retrospect, Slice, Wisp, atau Berlin.",
        "Klik **Colors** untuk memilih palet, atau **Customize Colors** untuk menentukan sepuluh warna tema (Accent 1–6, Text/Background).",
        "Klik **Fonts** untuk memilih pasangan font (Heading + Body), atau **Customize Fonts** untuk menentukan pasangan sendiri.",
        "Klik **Paragraph Spacing** untuk memilih jarak paragraf bawaan: No Paragraph Space, Compact, Open, Relaxed, Double.",
        "Klik **Effects** untuk memilih gaya efek objek, seperti bayangan dan kilau pada gambar.",
        "Simpan pengaturan sebagai tema kustom dengan **Themes → Save Current Theme**, beri nama `.thmx`."
      ],
      catatan: "Tema memengaruhi warna dan font yang dipakai gaya bawaan. Bila Anda sudah mengganti warna Heading secara manual pada Modify Style dengan warna tetap, perubahan tema tidak akan mengubah warna tersebut. Gunakan warna tema agar dokumen mudah diubah."
    },
    {
      h: "17.4 Menerapkan dan Menyimpan Style Set",
      steps: [
        "Buka tab **Design** dan arahkan kursor ke galeri gaya (Style Set) untuk melihat pratinjau langsung.",
        "Klik gaya yang diinginkan, misalnya **Modern**, **Elegant**, atau **Word 2003**.",
        "Untuk menjadikannya default bagi dokumen baru, klik **Set as Default** pada galeri tersebut, lalu pilih **All documents based on the Normal template**.",
        "Klik **OK** pada konfirmasi."
      ],
      tip: "Bila ingin menyimpan kombinasi tema dan gaya sebagai satu kesatuan, simpan tema lewat **Themes → Save Current Theme**, lalu simpan dokumen sebagai templat. Keduanya bersama-sama membentuk identitas visual instansi Anda."
    },
    {
      h: "17.5 Standarisasi Dokumen dalam Organisasi",
      p: ["Membuat standar dokumen berarti semua orang memakai gaya yang sama sehingga hasilnya seragam dan mudah dirawat."],
      list: [
        "**Buat satu templat induk** berisi kop surat, footer, dan seluruh gaya yang diperlukan.",
        "**Gunakan warna tema** untuk semua format, bukan warna tetap, agar mudah disesuaikan.",
        "**Tetapkan nama gaya yang konsisten**, misalnya `Judul Bab`, `Sub Bab`, `Isi Kutipan`, `Tabel Isi`.",
        "**Batasi jumlah gaya**, idealnya di bawah lima belas untuk dokumen kantor.",
        "**Kunci format** memakai **Restrict Editing → Limit formatting to a selection of styles** agar penyunting tidak memakai gaya sembarangan.",
        "**Bagikan templat** melalui folder jaringan, SharePoint, atau pustaka templat organisasi.",
        "**Dokumentasikan aturan** dalam satu halaman panduan singkat: gaya mana untuk keperluan apa."
      ],
      steps: [
        "Untuk membatasi gaya: **Review → Restrict Editing**.",
        "Centang **Limit formatting to a selection of styles**, lalu klik **Settings**.",
        "Pilih gaya yang boleh dipakai, dan tentukan apakah format manual diizinkan (**Formatting: Allow/Block**).",
        "Klik **OK**, lalu **Yes, Start Enforcing Protection**.",
        "Masukkan kata sandi bila ingin mencegah perubahan pembatasan."
      ]
    },
    {
      h: "17.6 Mengelola Templat dan Lokasi Penyimpanan",
      tabel: {
        kepala: ["Lokasi", "Cara Menemukan Berkasnya"],
        rows: [
          ["Custom Office Templates", "`C:\\Users\\<nama>\\Documents\\Custom Office Templates`"],
          ["Templat bawaan Word", "Tampil pada File → New saat terhubung internet"],
          ["Templat organisasi", "Folder jaringan atau pustaka dokumen SharePoint"],
          ["Templat kerja (workgroup)", "Diatur pada File → Options → Advanced → File Locations"]
        ]
      },
      steps: [
        "Buka **File → Options → Advanced**, gulir ke bagian **General** → **File Locations**.",
        "Periksa lokasi **Workgroup templates** dan **User templates**.",
        "Klik **Modify** untuk mengubah lokasi bila templat organisasi disimpan di folder jaringan.",
        "Klik **OK** untuk menyimpan pengaturan."
      ],
      tip: "Simpan templat di folder jaringan bersama agar seluruh tim memakai versi terbaru. Cukup ganti satu berkas templat, dan semua dokumen baru mengikuti standar baru."
    }
  ],
  praktikum: {
    judul: "Membuat Templat Laporan Resmi Instansi",
    deskripsi: "Anda akan membangun templat lengkap yang siap dipakai berulang oleh seluruh anggota tim.",
    langkah: [
      "Buat dokumen baru dan simpan sebagai `Latihan 17 - Templat Laporan` (format .docx sementara).",
      "Buka **Layout → Margins → Custom Margins**: atas 2,5 cm, bawah 2,5 cm, kiri 3 cm, kanan 2,5 cm.",
      "Buat kop surat di **header**: sisipkan logo (atau bentuk persegi sebagai placeholder) di kiri, nama instansi rata tengah tebal 14 pt, alamat 9 pt di bawahnya, dan garis horizontal di bawahnya memakai **Borders → Bottom Border**.",
      "Atur jarak header dari tepi atas menjadi 1,5 cm.",
      "Buat **footer** dengan nomor halaman di tengah bawah (Plain Number 2) dan teks `Dokumen Internal - Tidak untuk Disebarkan` di kiri, ukuran 8 pt.",
      "Modifikasi gaya **Normal**: Times New Roman 12 pt, spasi 1,5, Spacing After 6 pt.",
      "Modifikasi **Heading 1**: Times New Roman 14 pt, Bold, rata tengah, Spacing After 12 pt, warna dari tema (bukan warna tetap).",
      "Modifikasi **Heading 2**: Times New Roman 12 pt, Bold, rata kiri, Spacing Before 12 pt.",
      "Buat gaya baru `Isi Tabel` (Calibri 10 pt, spasi single) dan `Catatan Khusus` (Calibri 9 pt, italic, warna abu-abu tema).",
      "Buka tab **Design** → **Colors → Customize Colors**, atur Accent 1 sesuai warna instansi, simpan sebagai `Warna Instansi`.",
      "Buka **Fonts → Customize Fonts**, atur Heading = Times New Roman, Body = Times New Roman, simpan sebagai `Font Laporan`.",
      "Simpan tema dengan **Themes → Save Current Theme** bernama `Tema Laporan Instansi`.",
      "Hapus isi contoh, sisakan struktur gaya dan satu contoh paragraf tiap gaya sebagai panduan.",
      "Simpan sebagai **Word Template (*.dotx)** dengan nama `Templat Laporan Instansi`.",
      "Uji templat: buka **File → New → Personal**, pilih templat tersebut, dan pastikan Word membuat dokumen baru bernama `Document1`.",
      "Ketik judul dan subjudul pada dokumen baru, lalu pastikan gaya, kop surat, footer, dan nomor halaman muncul otomatis.",
      "Kembali ke templat, aktifkan **Review → Restrict Editing → Limit formatting to a selection of styles**, pilih hanya gaya yang diizinkan, lalu aktifkan proteksi.",
      "Simpan templat sekali lagi dan tutup."
    ]
  },
  latihan: [
    "Buat templat surat resmi berukuran A4 dengan kop surat, nomor surat, dan penomoran halaman otomatis.",
    "Buat tema kustom dengan tiga warna instansi dan satu pasangan font, lalu simpan sebagai berkas tema.",
    "Jelaskan perbedaan pengaruh perubahan tema dengan perubahan Style Set pada dokumen.",
    "Buat templat faktur sederhana berisi tabel dengan gaya `Isi Tabel` dan perhitungan SUM.",
    "Jelaskan langkah membagikan templat kepada seluruh anggota tim melalui folder jaringan."
  ],
  shortcut: [
    { k: "Alt+G", f: "Membuka tab Design melalui Key Tips" },
    { k: "Alt+Ctrl+Shift+S", f: "Membuka panel Styles" },
    { k: "Ctrl+Shift+N", f: "Mengembalikan paragraf ke gaya Normal" },
    { k: "F12", f: "Save As (untuk menyimpan sebagai .dotx)" },
    { k: "Ctrl+Alt+Shift+S", f: "Membuka Styles pane" }
  ],
  rangkuman: [
    "Templat (.dotx) adalah kerangka dokumen yang dipakai berulang; dokumen baru selalu dibuat sebagai salinan.",
    "Tema mengatur warna, font, spasi paragraf, dan efek objek secara menyeluruh.",
    "Style Set mengubah tampilan gaya bawaan tanpa mengubah struktur dokumen.",
    "Standarisasi dokumen memerlukan templat, gaya bernama konsisten, dan pembatasan format.",
    "Templat dapat dibagikan melalui folder Custom Office Templates, folder jaringan, atau SharePoint."
  ],
  kuis: [
    {
      q: "Ekstensi berkas templat Word adalah…",
      opsi: [".docx", ".dotx", ".thmx", ".docm"],
      jawab: 1,
      bahasan: ".dotx adalah templat Word standar, .dotm templat bermakro, .docm dokumen bermakro, dan .thmx berkas tema."
    },
    {
      q: "Cara yang benar membuka templat untuk membuat dokumen baru adalah…",
      opsi: [
        "Klik ganda berkas templat di File Explorer",
        "File → New → Personal, lalu pilih templat",
        "Klik kanan templat → Open",
        "Menarik templat ke area dokumen"
      ],
      jawab: 1,
      bahasan: "Melalui File → New → Personal, Word membuat dokumen baru berbasis templat sehingga berkas templat asli tidak berubah."
    },
    {
      q: "Fitur yang mengatur palet warna dan pasangan font secara menyeluruh adalah…",
      opsi: ["Style Set", "Tema", "Caption", "Bookmark"],
      jawab: 1,
      bahasan: "Tema (Design → Themes/Colors/Fonts) menentukan warna dan font yang dipakai gaya bawaan, serta efek objek di seluruh dokumen."
    },
    {
      q: "Untuk membatasi gaya yang boleh dipakai penyunting, fitur yang digunakan adalah…",
      opsi: [
        "Mark as Final",
        "Restrict Editing → Limit formatting to a selection of styles",
        "Track Changes",
        "Compare",
      ],
      jawab: 1,
      bahasan: "Pembatasan format pada Restrict Editing memungkinkan Anda menentukan gaya mana yang boleh dipakai sehingga dokumen tetap sesuai standar."
    },
    {
      q: "Berkas tema yang disimpan dari Word berekstensi…",
      opsi: [".dotx", ".thmx", ".docx", ".xml"],
      jawab: 1,
      bahasan: "Save Current Theme menyimpan tema sebagai berkas .thmx yang dapat diterapkan pada dokumen Office lain."
    }
  ]
},

{
  id: 18,
  judul: "Formulir Interaktif dengan Content Control dan Developer Tab",
  level: "Mahir",
  durasi: "110 menit",
  deskripsi: "Membuat formulir yang dapat diisi: mengaktifkan tab Developer, memakai content control, membuat properti kontrol, dan melindungi formulir.",
  tujuan: [
    "Menampilkan tab Developer pada Ribbon.",
    "Menyisipkan dan mengatur plain text, rich text, picture, dropdown, date picker, checkbox, dan building block control.",
    "Mengatur properti setiap content control.",
    "Melindungi formulir dengan mode Filling in forms.",
    "Menyiapkan formulir untuk didistribusikan dan diekspor."
  ],
  materi: [
    {
      h: "18.1 Mengaktifkan Tab Developer",
      steps: [
        "Buka **File → Options → Customize Ribbon**.",
        "Pada daftar kanan **Main Tabs**, centang **Developer**.",
        "Klik **OK**.",
        "Tab **Developer** kini tampil di Ribbon, berisi group **Code, Add-ins, Controls, Mapping, Protect, Templates**."
      ],
      catatan: "Tab Developer menyembunyikan fitur teknis: Visual Basic, Macros, Record Macro, content control, pemetaan XML, dan proteksi dokumen."
    },
    {
      h: "18.2 Konsep Content Control",
      p: ["**Content control** adalah kotak yang membungkus isi dokumen dan dapat diberi batasan, judul, serta instruksi. Ketika formulir dilindungi, pengguna hanya dapat mengisi content control dan tidak dapat mengubah bagian lainnya."],
      tabel: {
        kepala: ["Kontrol", "Fungsi"],
        rows: [
          ["Rich Text", "Kotak teks yang mempertahankan format (tebal, miring, warna)"],
          ["Plain Text", "Kotak teks tanpa format, untuk nama, nomor, atau kode"],
          ["Picture", "Kotak khusus gambar yang dapat diklik untuk menyisipkan foto"],
          ["Building Block Gallery", "Pilihan potongan konten yang telah disimpan (Quick Parts)"],
          ["Combo Box", "Daftar pilihan yang masih dapat diisi nilai baru oleh pengguna"],
          ["Drop-Down List", "Daftar pilihan tertutup; pengguna hanya memilih dari daftar"],
          ["Check Box", "Kotak centang dengan simbol terpilih dan tidak terpilih"],
          ["Date Picker", "Pemilih tanggal dengan format dan kalender"],
          ["Repeating Section", "Bagian yang dapat digandakan pengguna, untuk daftar dinamis"],
          ["Legacy Tools", "Kontrol lama seperti Form Field teks, kotak centang, dan daftar"]
        ]
      }
    },
    {
      h: "18.3 Membuat Formulir Langkah demi Langkah",
      steps: [
        "Buat dokumen baru, simpan sebagai `Latihan 18 - Formulir Pendaftaran`.",
        "Ketik judul `FORMULIR PENDAFTARAN PESERTA PELATIHAN` rata tengah, tebal.",
        "Ketik `Nama Lengkap:` lalu tekan [[Tab]] satu kali untuk membuat posisi sejajar.",
        "Buka **Developer → Rich Text Content Control** (atau **Plain Text**) untuk menyisipkan kotak isian.",
        "Klik **Properties** pada group Controls untuk memberi **Title** `NamaLengkap` dan **Tag** yang sesuai.",
        "Ulangi untuk baris berikut: `NIK:`, `Tempat Lahir:`, `Tanggal Lahir:` (pakai **Date Picker**), `Alamat:`, `Email:`, `Telepon:`.",
        "Untuk `Jenis Kelamin:`, sisipkan **Drop-Down List Content Control**.",
        "Klik **Properties**, lalu **Add** untuk menambahkan pilihan `Laki-laki` dan `Perempuan`.",
        "Atur **Display Name** setiap pilihan, lalu klik **OK**.",
        "Untuk bagian `Pilihan Jadwal:`, sisipkan **Combo Box Content Control** dan tambahkan beberapa pilihan jadwal.",
        "Untuk `Setuju mengikuti seluruh kegiatan:`, sisipkan **Check Box Content Control**.",
        "Untuk bagian foto, sisipkan **Picture Content Control** dan beri judul `Foto Peserta`.",
        "Untuk bagian yang dapat digandakan (misalnya daftar pengalaman), sisipkan **Repeating Section Content Control**.",
        "Atur tampilan kontrol bila perlu: **Design Mode** pada group Controls memungkinkan pengeditan placeholder langsung.",
        "Aktifkan **Developer → Restrict Editing** dan centang **Allow only this type of editing in the document** → pilih **Filling in forms**.",
        "Klik **Yes, Start Enforcing Protection** dan masukkan kata sandi bila perlu.",
        "Simpan dokumen, lalu uji dengan mengisi seluruh field dan memastikan bagian lain tidak dapat diubah.",
        "Hentikan proteksi dengan **Stop Protection** untuk menyunting lebih lanjut."
      ],
      tip: "Beri **Title** yang jelas pada setiap content control. Judul itu berguna bila Anda mengimpor data formulir, dan memudahkan pengguna pembaca layar memahami isian."
    },
    {
      h: "18.4 Properti Content Control",
      tabel: {
        kepala: ["Properti", "Fungsi"],
        rows: [
          ["Title", "Nama kontrol yang tampil sebagai label dan dipakai untuk identifikasi data"],
          ["Tag", "Penanda teknis untuk pemetaan data, tidak tampil ke pengguna"],
          ["Show as", "Menentukan tampilan: Bounding Box, Tags, atau None"],
          ["Color", "Warna penanda kontrol saat mode desain"],
          ["Use a style to format contents", "Menerapkan gaya tertentu pada isi kontrol"],
          ["Content is locked", "Mencegah penghapusan kontrol"],
          ["Contents cannot be edited", "Membuat isi kontrol hanya dapat dibaca"],
          ["Placeholder text", "Teks petunjuk yang tampil sebelum pengguna mengisi"]
        ]
      },
      peringatan: "Content control yang tidak diberi judul akan sulit dikenali saat dokumen dipakai pihak lain. Biasakan mengisi Title untuk setiap kontrol, terutama pada formulir yang panjang."
    },
    {
      h: "18.5 Formulir Lama (Legacy Form Fields) dan Perbandingannya",
      p: ["Word masih menyediakan kontrol lama melalui **Developer → Legacy Tools**."],
      tabel: {
        kepala: ["Aspek", "Content Control", "Legacy Form Field"],
        rows: [
          ["Kemudahan pembuatan", "Mudah, dengan pratinjau langsung", "Perlu kotak dialog Properties terpisah"],
          ["Dukungan format", "Lebih kaya, mendukung gambar dan repeating section", "Terbatas: teks, checkbox, dropdown"],
          ["Kecocokan versi", "Word 2007 ke atas", "Kompatibel hingga versi lama"],
          ["Kemampuan otomatis", "Dapat dipetakan ke XML dan dihubungkan ke data", "Terbatas, umumnya dengan makro"],
          ["Rekomendasi", "Gunakan untuk dokumen modern", "Gunakan hanya bila harus dibuka di Word 2003"]
        ]
      },
      steps: [
        "Aktifkan **Developer → Legacy Tools**.",
        "Sisipkan **Text Form Field**, **Check Box Form Field**, atau **Drop-Down Form Field**.",
        "Klik **Form Field Options** (ikon properties) untuk mengatur nama bookmark, tipe data, format, dan pilihan.",
        "Setelah selesai, aktifkan **Protect Document** dengan mode **Filling in forms**."
      ]
    },
    {
      h: "18.6 Mendistribusikan dan Mengolah Formulir",
      list: [
        "**Distribusi Word:** kirim berkas .docx atau .dotx dengan proteksi aktif. Penerima mengisi lalu menyimpan kembali.",
        "**Distribusi PDF:** **File → Export → Create PDF/XPS** menghasilkan PDF yang masih dapat diisi bila kontrol formulir didukung pembaca PDF.",
        "**Distribusi cetak:** formulir juga dapat dicetak untuk diisi dengan tangan bila tidak memerlukan pengolahan data.",
        "**Mengumpulkan data:** bila formulir disimpan sebagai templat di SharePoint atau Microsoft Forms, hasil isian dapat dikumpulkan otomatis ke daftar atau lembar kerja.",
        "**Mengimpor data:** content control dengan Tag dapat dipetakan ke bidang XML sehingga data formulir dapat dipertukarkan dengan sistem lain."
      ],
      tip: "Jangan lupa menghapus **Design Mode** sebelum mengunci formulir. Bila Design Mode masih aktif, pengguna akan melihat placeholder dan dapat mengubah kontrolnya."
    }
  ],
  praktikum: {
    judul: "Formulir Pendaftaran Kursus yang Terkunci",
    deskripsi: "Anda akan membuat formulir lengkap, mengatur propertinya, melindunginya, dan mengujinya seperti pengguna akhir.",
    langkah: [
      "Tampilkan tab Developer melalui **File → Options → Customize Ribbon**.",
      "Buat dokumen baru, simpan sebagai `Latihan 18 - Formulir Pendaftaran`.",
      "Ketik judul formulir, nama lembaga, dan satu paragraf petunjuk pengisian.",
      "Buat tabel 2 kolom × 8 baris untuk merapikan tata letak formulir: kolom kiri untuk label, kolom kanan untuk isian.",
      "Isi kolom kiri dengan label: `Nama Lengkap`, `NIK`, `Tempat/Tanggal Lahir`, `Jenis Kelamin`, `Alamat`, `Email`, `Telepon`, `Jadwal Pilihan`.",
      "Pada kolom kanan, sisipkan kontrol yang sesuai:",
      "`Nama Lengkap` → **Rich Text Content Control**, Title `Nama`.",
      "`NIK` → **Plain Text Content Control**, Title `NIK`, batasi dengan placeholder `16 digit angka`.",
      "`Tempat/Tanggal Lahir` → **Date Picker Content Control**, Title `TglLahir`.",
      "`Jenis Kelamin` → **Drop-Down List Content Control** dengan pilihan `Laki-laki` dan `Perempuan`.",
      "`Alamat` → **Rich Text Content Control**, Title `Alamat`.",
      "`Email` → **Plain Text Content Control**, Title `Email`.",
      "`Telepon` → **Plain Text Content Control**, Title `Telepon`.",
      "`Jadwal Pilihan` → **Combo Box Content Control** dengan tiga pilihan jadwal.",
      "Tambahkan baris untuk **Check Box Content Control** dengan label `Saya menyatakan data yang diisi benar`.",
      "Tambahkan **Picture Content Control** berlabel `Foto 3x4` di bagian bawah formulir.",
      "Tambahkan **Repeating Section Content Control** berlabel `Riwayat Pelatihan` sebagai daftar yang dapat digandakan.",
      "Aktifkan **Restrict Editing → Filling in forms**, lalu klik **Yes, Start Enforcing Protection** dengan kata sandi `kursus2024`.",
      "Simpan dokumen, lalu uji: isi seluruh field, coba ubah judul formulir, dan pastikan perubahan judul ditolak.",
      "Hentikan proteksi memakai kata sandi untuk memastikan kata sandi berfungsi.",
      "Aktifkan kembali proteksi, lalu ekspor formulir ke PDF dan periksa apakah field masih dapat diisi."
    ]
  },
  latihan: [
    "Buat formulir izin cuti karyawan dengan date picker, dropdown jenis cuti, dan checkbox persetujuan atasan.",
    "Buat formulir pendaftaran seminar dengan repeating section untuk daftar peserta tambahan.",
    "Jelaskan perbedaan Content Control dengan Legacy Form Field dan kapan masing-masing dipakai.",
    "Buat formulir penilaian kinerja dengan dropdown skor 1–5 dan kolom catatan.",
    "Kunci formulir dengan kata sandi, lalu buktikan bahwa penyuntingan tidak mungkin dilakukan tanpa membuka proteksi."
  ],
  shortcut: [
    { k: "Alt+L", f: "Membuka tab Developer melalui Key Tips" },
    { k: "Alt+Q", f: "Membuka kotak Tell Me / Search untuk mencari perintah" },
    { k: "F11", f: "Membuka editor Visual Basic (dari tab Developer)" },
    { k: "Alt+F8", f: "Membuka daftar makro" }
  ],
  rangkuman: [
    "Tab Developer menyediakan content control untuk pembuatan formulir.",
    "Content control membatasi isian pada kotak tertentu sehingga bagian lain dokumen tetap terlindungi.",
    "Setiap kontrol sebaiknya diberi Title dan placeholder yang jelas.",
    "Proteksi formulir memakai Restrict Editing dengan mode Filling in forms.",
    "Formulir dapat didistribusikan sebagai dokumen Word, PDF yang dapat diisi, atau dicetak."
  ],
  kuis: [
    {
      q: "Tab yang harus diaktifkan untuk membuat formulir dengan content control adalah…",
      opsi: ["Developer", "Review", "Mailings", "Layout"],
      jawab: 0,
      bahasan: "Tab Developer diaktifkan melalui File → Options → Customize Ribbon. Tab ini memuat group Controls tempat content control berada."
    },
    {
      q: "Kontrol yang paling tepat untuk memilih satu dari beberapa pilihan tertutup adalah…",
      opsi: ["Rich Text", "Drop-Down List", "Picture", "Date Picker"],
      jawab: 1,
      bahasan: "Drop-Down List membatasi pilihan pada daftar yang sudah ditentukan, sedangkan Combo Box masih memungkinkan pengguna mengetik nilai baru."
    },
    {
      q: "Mode proteksi yang dipakai agar pengguna hanya dapat mengisi formulir adalah…",
      opsi: [
        "No changes (Read only)",
        "Tracked changes",
        "Filling in forms",
        "Comments"
      ],
      jawab: 2,
      bahasan: "Filling in forms mengizinkan pengisian pada content control dan form field, sementara bagian lain dokumen tidak dapat diubah."
    },
    {
      q: "Kontrol yang memungkinkan pengguna menambah baris isian secara dinamis adalah…",
      opsi: ["Check Box", "Repeating Section", "Plain Text", "Picture"],
      jawab: 1,
      bahasan: "Repeating Section dapat digandakan pengguna sehingga cocok untuk daftar yang panjangnya tidak tetap, misalnya riwayat pelatihan."
    },
    {
      q: "Langkah yang harus dilakukan sebelum mengunci formulir adalah…",
      opsi: [
        "Mengaktifkan Track Changes",
        "Mematikan Design Mode",
        "Menyimpan sebagai PDF",
        "Menghapus semua tabel"
      ],
      jawab: 1,
      bahasan: "Design Mode harus dimatikan agar placeholder tidak tampil dan pengguna tidak dapat mengubah properti kontrol."
    }
  ]
},

{
  id: 19,
  judul: "Dokumen Panjang: Outline, Penomoran Bertingkat, dan Master Document",
  level: "Mahir",
  durasi: "120 menit",
  deskripsi: "Mengelola dokumen puluhan hingga ratusan halaman: Outline view, penomoran bab bertingkat otomatis, navigasi cepat, master document, dan indeks.",
  tujuan: [
    "Menggunakan Outline view untuk menyusun kerangka dokumen.",
    "Membuat penomoran bab dan subbab bertingkat yang otomatis.",
    "Mengelola dokumen panjang dengan section, heading, dan Navigation Pane.",
    "Membuat master document dan subdocument.",
    "Menyusun indeks dan daftar istilah otomatis."
  ],
  materi: [
    {
      h: "19.1 Outline View: Menyusun Kerangka Sebelum Menulis",
      steps: [
        "Buka **View → Outline**.",
        "Ketik judul bab; secara bawaan Word menerapkannya sebagai **Level 1**.",
        "Tekan [[Tab]] untuk menurunkan tingkat menjadi Level 2, [[Shift+Tab]] untuk menaikkannya.",
        "Gunakan **Promote** (panah kiri) dan **Demote** (panah kanan) pada tab **Outlining** untuk mengatur hierarki.",
        "Atur dropdown **Show Level** untuk menampilkan hanya sampai tingkat tertentu — cara efektif melihat kerangka besar tanpa terganggu detail.",
        "Pindahkan bagian dengan **Move Up** / **Move Down** ([[Alt+Shift+↑]]/[[Alt+Shift+↓]]).",
        "Klik **+** atau **−** untuk melipat dan membuka bagian.",
        "Gunakan **Show Text Formatting** untuk melihat format nyata pada tampilan outline.",
        "Setelah kerangka selesai, klik **Close Outline View** dan lanjutkan menulis di Print Layout."
      ],
      tip: "Mahasiswa dan penulis profesional sering menyusun kerangka di Outline view terlebih dahulu. Isi bab menjadi terstruktur, dan daftar isi otomatis sudah terbentuk sejak awal."
    },
    {
      h: "19.2 Penomoran Bab Bertingkat Otomatis",
      p: ["Alih-alih mengetik `BAB I` dan `1.1` secara manual, buat penomoran bertingkat yang terhubung ke gaya Heading sehingga nomor selalu benar."],
      steps: [
        "Buka **Home → Multilevel List → Define New Multilevel List**.",
        "Klik **More** untuk membuka opsi lengkap.",
        "Pada **Click level to modify**, pilih **1**.",
        "Pada **Link level to style**, pilih **Heading 1**.",
        "Pada **Enter formatting for number**, ketik `BAB ` lalu pilih **Number style: I, II, III** dan tambahkan tanda titik bila perlu.",
        "Atur **Position → Aligned at** dan **Text indent at** sesuai pedoman (misalnya 0 cm dan 0 cm untuk tengah).",
        "Pilih level **2**, hubungkan ke **Heading 2**, atur format menjadi `1.1` dengan **Include level number from: Level 1**.",
        "Pilih level **3**, hubungkan ke **Heading 3**, atur format menjadi `1.1.1`.",
        "Tambahkan pengaturan **Follow number with: Tab character** dan pastikan posisi indentasi rapi.",
        "Klik **OK**. Seluruh paragraf bergaya Heading kini bernomor otomatis.",
        "Uji dengan menyisipkan bab baru; nomor bab dan subbab akan menyesuaikan sendiri."
      ],
      peringatan: "Jangan mencampur penomoran otomatis dengan nomor yang diketik manual. Bila satu judul memakai nomor manual, penomoran otomatis akan tampak ganda dan sulit diperbaiki."
    },
    {
      h: "19.3 Strategi Mengelola Dokumen Panjang",
      list: [
        "**Gunakan gaya Heading secara disiplin** — seluruh fitur otomatis bergantung pada ini.",
        "**Pecah dokumen dengan section break** bila memerlukan orientasi, margin, atau penomoran berbeda.",
        "**Aktifkan Navigation Pane** untuk melompat antarbab dengan satu klik.",
        "**Manfaatkan daftar isi otomatis** dan perbarui dengan [[F9]] setiap kali ada perubahan struktur.",
        "**Simpan versi berkala** seperti `laporan-v1.docx`, `laporan-v2.docx` untuk keamanan dan pembandingan.",
        "**Kompres gambar** (Picture Format → Compress Pictures) agar berkas tidak terlalu besar.",
        "**Pecah berkas bila sangat besar** — berkas di atas 50 MB cenderung lambat dibuka dan mudah rusak.",
        "**Gunakan Repeat Header Rows** pada tabel panjang agar judul kolom tetap tampil.",
        "**Periksa konsistensi** memakai Style Inspector dan Reveal Formatting."
      ]
    },
    {
      h: "19.4 Master Document dan Subdocument",
      p: ["Bila dokumen sangat besar atau dikerjakan banyak orang, master document memungkinkan penggabungan beberapa berkas menjadi satu dokumen induk."],
      steps: [
        "Buka dokumen baru, lalu **View → Outline**.",
        "Pada tab **Outlining**, klik **Show Document** untuk menampilkan panel tambahan.",
        "Klik **Create** untuk mulai memasukkan subdocument, atau",
        "Letakkan kursor di posisi yang diinginkan lalu klik **Insert** untuk menambahkan berkas yang sudah ada sebagai subdocument.",
        "Setiap subdocument tampil sebagai bagian dengan lambang berkas.",
        "Klik **Expand Subdocuments** untuk menampilkan seluruh isi, atau **Collapse Subdocuments** untuk meringkas tampilan.",
        "Simpan master document; Word akan menyimpan daftar subdocument beserta lokasinya.",
        "Gunakan **Unlink** untuk memisahkan subdocument dari induknya menjadi berkas mandiri.",
        "Gunakan **Merge** untuk menggabungkan subdocument menjadi satu bagian."
      ],
      peringatan: "Master document adalah fitur yang sensitif. Jangan memindahkan atau mengganti nama berkas subdocument, karena master document akan kehilangan jejak. Buat cadangan berkala, dan untuk kerja tim modern pertimbangkan SharePoint atau OneDrive dengan dokumen terpisah yang digabung di akhir."
    },
    {
      h: "19.5 Indeks dan Daftar Istilah",
      steps: [
        "Seleksi kata atau frasa yang akan dimasukkan ke indeks.",
        "Buka **References → Mark Entry** ([[Alt+Shift+X]]).",
        "Pada **Main entry**, periksa teksnya. Pada **Subentry**, isi subkategori bila perlu.",
        "Pilih **Cross-reference** bila entri ini menunjuk ke entri lain, misalnya `lihat juga Produktivitas`.",
        "Pilih **Current page** atau **Page range** untuk menunjukkan halaman.",
        "Klik **Mark** untuk satu entri, atau **Mark All** untuk seluruh kemunculan kata tersebut.",
        "Ulangi untuk semua istilah penting.",
        "Letakkan kursor di akhir dokumen, lalu **References → Insert Index**.",
        "Atur **Type** (Indented atau Run-in), **Columns**, dan **Tab leader**, lalu klik **OK**.",
        "Untuk memperbarui indeks, klik di dalamnya dan tekan [[F9]]."
      ],
      catatan: "Tanda entri indeks hanya tampil bila **Show formatting marks** aktif, dan tidak akan tercetak. Untuk menyembunyikannya, matikan tampilan tanda pemformatan."
    },
    {
      h: "19.6 Tampilan Membaca dan Alat Bantu Dokumen Panjang",
      list: [
        "**View → Read Mode** menampilkan dokumen dalam dua kolom seperti buku, dengan navigasi sederhana dan tanpa gangguan menu.",
        "**View → Immersive Reader** menyediakan pembacaan nyaring, penyorotan baris, pengaturan lebar kolom, dan terjemahan.",
        "**View → Focus Mode** menyembunyikan segala hal kecuali dokumen dan satu baris alat minimal.",
        "**View → Multiple Pages** menampilkan beberapa halaman sekaligus untuk memeriksa keseragaman tata letak.",
        "**View → Side by Side** membandingkan dua dokumen berdampingan, dengan opsi **Synchronous Scrolling**.",
        "**View → Split** membagi jendela menjadi dua bagian dokumen yang sama, berguna menyalin teks antar bagian yang berjauhan.",
        "**Zoom → Page Width / Text Width / Whole Page** menyesuaikan tampilan dengan kebutuhan."
      ],
      tip: "Untuk memeriksa keseragaman seluruh dokumen panjang, gunakan **Multiple Pages** dengan zoom 40–50%. Ketidakkonsistenan jarak dan penomoran akan langsung terlihat."
    }
  ],
  praktikum: {
    judul: "Menyusun Laporan 10 Halaman Berkerangka Otomatis",
    deskripsi: "Anda akan membangun struktur bab otomatis, menomori bertingkat, membuat daftar isi, dan menambahkan indeks.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 19 - Dokumen Panjang`.",
      "Buka **View → Outline** dan susun kerangka berikut (Level 1 untuk bab, Level 2 untuk subbab):",
      "`PENDAHULUAN` dengan subbab `Latar Belakang`, `Rumusan Masalah`, `Tujuan`.",
      "`TINJAUAN PUSTAKA` dengan subbab `Kajian Teori`, `Penelitian Terdahulu`.",
      "`METODE PENELITIAN` dengan subbab `Jenis Penelitian`, `Teknik Pengumpulan Data`, `Analisis Data`.",
      "`HASIL DAN PEMBAHASAN` dengan subbab `Hasil`, `Pembahasan`.",
      "`KESIMPULAN` dengan subbab `Simpulan`, `Saran`.",
      "Klik **Close Outline View** lalu kembalikan setiap judul ke gayanya: Heading 1 untuk bab, Heading 2 untuk subbab.",
      "Buat penomoran otomatis: **Home → Multilevel List → Define New Multilevel List**.",
      "Hubungkan level 1 ke **Heading 1** dengan format `BAB ` + angka romawi, dan level 2 ke **Heading 2** dengan format `1.1`.",
      "Hubungkan level 3 ke **Heading 3** dengan format `1.1.1`, lalu klik **OK**.",
      "Periksa bahwa seluruh bab dan subbab sudah bernomor otomatis.",
      "Isi setiap subbab dengan dua hingga tiga paragraf teks.",
      "Sisipkan halaman baru di awal dan buat **Daftar Isi** otomatis (References → Table of Contents → Automatic Table 2).",
      "Perbarui daftar isi dengan [[F9]] → **Update entire table**.",
      "Tandai lima istilah penting untuk indeks: seleksi istilah → **References → Mark Entry** → **Mark All**.",
      "Di halaman terakhir, tambahkan heading `INDEKS` dan sisipkan **References → Insert Index** dengan 2 kolom.",
      "Tambahkan **page break** di antara bab sehingga setiap bab dimulai di halaman baru ([[Ctrl+Enter]]).",
      "Aktifkan **View → Navigation Pane** dan gunakan untuk melompat antarbab.",
      "Ubah tampilan ke **View → Multiple Pages** dengan zoom 40% untuk memeriksa keseragaman tata letak.",
      "Simpan dokumen, lalu ekspor ke PDF dengan bookmark dari Heading."
    ]
  },
  latihan: [
    "Buat dokumen tiga bab dengan penomoran bertingkat sampai Level 3, lalu perbarui daftar isinya.",
    "Buat indeks berisi minimal delapan istilah dengan dua subentri.",
    "Jelaskan risiko pemakaian master document dan alternatif modernnya untuk kerja tim.",
    "Bandingkan dua dokumen berdampingan memakai View → Side by Side dengan Synchronous Scrolling.",
    "Susun ulang kerangka bab memakai Outline view, lalu buktikan perubahannya tercermin di daftar isi."
  ],
  shortcut: [
    { k: "Alt+Shift+← / →", f: "Promote / Demote tingkat outline" },
    { k: "Alt+Shift+↑ / ↓", f: "Memindahkan paragraf atau bagian ke atas / ke bawah" },
    { k: "Alt+Shift+X", f: "Menandai entri indeks" },
    { k: "Alt+Shift+I", f: "Menandai entri daftar isi (Table of Authorities)" },
    { k: "Ctrl+Shift+8", f: "Menampilkan tanda pemformatan" },
    { k: "Alt+Ctrl+S", f: "Membagi jendela dokumen (Split)" }
  ],
  rangkuman: [
    "Outline view dipakai menyusun kerangka dokumen dengan tingkat Promote dan Demote.",
    "Define New Multilevel List menghubungkan penomoran ke gaya Heading sehingga nomor bab selalu benar.",
    "Dokumen panjang dikelola dengan gaya Heading disiplin, section break, daftar isi otomatis, dan versi berkala.",
    "Master document menggabungkan beberapa subdocument, tetapi memerlukan kehati-hatian dalam pengelolaan berkas.",
    "Indeks dibangun dari Mark Entry dan diperbarui dengan F9."
  ],
  kuis: [
    {
      q: "Tampilan yang paling tepat untuk menyusun kerangka dokumen panjang adalah…",
      opsi: ["Print Layout", "Outline", "Web Layout", "Read Mode"],
      jawab: 1,
      bahasan: "Outline view menampilkan hierarki judul berdasarkan tingkatannya sehingga struktur dokumen mudah disusun dan diatur ulang."
    },
    {
      q: "Pintasan untuk menaikkan tingkat paragraf pada Outline view adalah…",
      opsi: ["Alt+Shift+←", "Alt+Shift+→", "Ctrl+Shift+←", "Tab"],
      jawab: 0,
      bahasan: "Alt+Shift+← melakukan Promote (naik satu tingkat) dan Alt+Shift+→ melakukan Demote (turun satu tingkat)."
    },
    {
      q: "Agar penomoran bab otomatis, multilevel list harus dihubungkan dengan…",
      opsi: ["Bookmark", "Gaya Heading", "Caption", "Komentar"],
      jawab: 1,
      bahasan: "Link level to style menghubungkan setiap tingkat penomoran dengan gaya Heading sehingga nomor menyesuaikan saat struktur dokumen berubah."
    },
    {
      q: "Pintasan untuk menandai entri indeks adalah…",
      opsi: ["Alt+Shift+X", "Alt+Shift+I", "Ctrl+Shift+X", "Alt+Shift+D"],
      jawab: 0,
      bahasan: "Alt+Shift+X membuka dialog Mark Index Entry. Alt+Shift+I dipakai untuk menandai entri Table of Authorities."
    },
    {
      q: "Hal yang paling berisiko dalam pemakaian master document adalah…",
      opsi: [
        "Nomor halaman tidak muncul",
        "Kehilangan jejak subdocument bila berkas dipindahkan atau diganti nama",
        "Tabel tidak dapat dibuat",
        "Gambar tidak dapat disisipkan"
      ],
      jawab: 1,
      bahasan: "Master document menyimpan tautan ke berkas subdocument. Bila lokasi atau namanya berubah, tautan menjadi rusak dan isi tidak dapat dimuat."
    }
  ]
},

{
  id: 20,
  judul: "Simbol, Persamaan Matematika, Drop Cap, dan Text Box",
  level: "Menengah",
  durasi: "100 menit",
  deskripsi: "Menyisipkan elemen khusus: simbol dan karakter khusus, persamaan matematika yang rapi, drop cap, text box, serta objek tertanam dan tertaut.",
  tujuan: [
    "Menyisipkan simbol dan karakter khusus dengan cepat.",
    "Membangun persamaan matematika memakai Equation Editor.",
    "Menerapkan Drop Cap dan Text Box untuk menata tampilan.",
    "Menyisipkan objek OLE: lembar kerja Excel, diagram, dan berkas lain.",
    "Mengatur properti, posisi, dan pembungkusan text box."
  ],
  materi: [
    {
      h: "20.1 Simbol dan Karakter Khusus",
      steps: [
        "Letakkan kursor di posisi penyisipan.",
        "Buka **Insert → Symbol → More Symbols**.",
        "Pilih **Font** yang diinginkan; font seperti **Symbol**, **Wingdings**, dan **Webdings** memuat banyak simbol grafis.",
        "Pada dropdown **Subset**, pilih kelompok simbol, misalnya Arrows, Mathematical Operators, Currency Symbols.",
        "Klik simbol yang diinginkan lalu **Insert**.",
        "Perhatikan baris **Recently used symbols** untuk simbol yang sering dipakai.",
        "Buka tab **Special Characters** untuk menyisipkan karakter seperti Nonbreaking Space, Em Dash, En Dash, Ellipsis, Copyright, Registered, dan Trademark.",
        "Pada tab Special Characters, klik **Shortcut Key** untuk membuat pintasan sendiri bagi karakter favorit Anda."
      ],
      tabel: {
        kepala: ["Karakter", "Fungsi dan Pintasan"],
        rows: [
          ["Nonbreaking space", "Spasi yang tidak memisahkan kata — [[Ctrl+Shift+Space]]"],
          ["Nonbreaking hyphen", "Garis hubung yang tidak memutus kata — [[Ctrl+Shift+Minus]]"],
          ["Em dash (—)", "Garis pisah panjang — [[Alt+Ctrl+Minus]]"],
          ["En dash (–)", "Garis pisah pendek — [[Ctrl+Minus]]"],
          ["Ellipsis (…)", "Titik tiga — [[Alt+Ctrl+Period]]"],
          ["© ® ™", "Simbol hak cipta, merek terdaftar, dan merek dagang"],
          ["Optional hyphen", "Tanda hubung yang hanya tampil bila kata terpenggal — [[Ctrl+Minus]]"]
        ]
      },
      tip: "Gunakan Nonbreaking Space pada penulisan seperti `Rp 1.000.000` atau `Bab IV` agar angka dan satuannya tidak terpisah di akhir baris."
    },
    {
      h: "20.2 Persamaan Matematika",
      steps: [
        "Letakkan kursor, lalu tekan [[Alt+=]] atau **Insert → Equation**.",
        "Tab **Equation** aktif. Pada dropdown, pilih struktur yang diperlukan: **Fraction**, **Script**, **Radical**, **Integral**, **Large Operator**, **Bracket**, **Function**, **Accent**, **Limit and Log**, **Operator**, **Matrix**.",
        "Ketik nilai pada setiap kotak kosong. Gunakan tombol panah untuk berpindah antarplaceholder.",
        "Untuk format tampilan, pilih **Professional** atau **Linear** pada group **Tools**.",
        "Gunakan **Convert** untuk mengubah persamaan linear menjadi tampilan profesional dan sebaliknya.",
        "Simpan persamaan yang sering dipakai: seleksi persamaan → **Equation → Save as New Equation**.",
        "Untuk menulis dengan sintaks LaTeX, pilih **LaTeX** pada group Conversions, ketik perintahnya, lalu tekan Enter.",
        "Untuk memberi nomor persamaan: letakkan kursor di akhir persamaan, tekan [[Tab]] dua kali, lalu sisipkan nomor dengan **References → Insert Caption** menggunakan label **Equation**."
      ],
      p: ["Contoh penulisan yang sering diperlukan:"],
      list: [
        "**Pecahan:** `(a+b)/(c+d)` disusun dengan struktur Fraction.",
        "**Pangkat dan indeks:** gunakan Script untuk x², aₙ, atau x_i^2.",
        "**Akar:** Radical untuk √x atau akar pangkat tiga.",
        "**Integral:** Integral dengan batas atas dan bawah serta variabel integrasi.",
        "**Matriks:** Matrix dengan ukuran 2×2 hingga 4×4.",
        "**Limit dan sigma:** Limit and Log serta Large Operator untuk ∑ dan ∏."
      ],
      peringatan: "Bila persamaan tampak miring atau jaraknya aneh, periksa **Equation Options** pada dropdown Equation. Pastikan pengaturan font dan perataan sesuai, misalnya **Right-aligned** untuk penomoran di margin."
    },
    {
      h: "20.3 Drop Cap",
      steps: [
        "Letakkan kursor pada paragraf yang huruf pertamanya akan diperbesar.",
        "Buka **Insert → Drop Cap**.",
        "Pilih **Dropped** (huruf turun ke dalam paragraf) atau **In margin** (huruf di luar margin).",
        "Bila perlu pengaturan khusus, pilih **Drop Cap Options**.",
        "Atur **Font**, **Lines to drop** (biasanya 2 atau 3), dan **Distance from text**.",
        "Klik **OK**."
      ],
      catatan: "Drop Cap hanya berlaku pada huruf pertama paragraf. Bila paragraf diawali tanda kutip atau angka, Drop Cap akan mengambil karakter tersebut. Hapus tanda kutip sementara bila hasilnya kurang tepat."
    },
    {
      h: "20.4 Text Box",
      steps: [
        "Buka **Insert → Text Box**.",
        "Pilih gaya dari galeri seperti **Simple Text Box**, **Sidebar**, **Quote**, atau **Banded Quote**.",
        "Ketik isi text box. Teks dapat diformat seperti paragraf biasa.",
        "Atur **Shape Fill**, **Shape Outline**, dan **Shape Effects** pada tab **Shape Format**.",
        "Atur **Wrap Text** agar teks badan dokumen mengalir di sekitarnya.",
        "Gunakan **Position** untuk menempatkan text box pada lokasi tertentu relatif halaman.",
        "Untuk menghubungkan dua text box sehingga teks mengalir antar keduanya, gunakan **Create Link** pada tab Shape Format (fitur lanjutan).",
        "Untuk mengunci posisi, aktifkan **Lock Anchor** pada More Layout Options."
      ],
      tip: "Text box sangat berguna untuk membuat kutipan menarik (pull quote), keterangan samping (sidebar), atau label pada gambar. Gunakan **No Fill** dan **No Outline** bila ingin teks tampak menyatu dengan halaman."
    },
    {
      h: "20.5 Objek Tertanam (Embedded) dan Tertaut (Linked)",
      p: ["Word dapat memuat objek dari aplikasi lain, misalnya tabel Excel atau diagram. Ada dua cara: **tertanam** dan **tertaut**."],
      tabel: {
        kepala: ["Aspek", "Embedded (tertanam)", "Linked (tertaut)"],
        rows: [
          ["Penyimpanan data", "Data tersimpan di dalam dokumen Word", "Data tetap di berkas sumber, Word hanya menyimpan tautan"],
          ["Ukuran dokumen", "Lebih besar", "Lebih kecil"],
          ["Pembaruan", "Harus disunting langsung di dalam Word", "Berubah otomatis saat berkas sumber berubah"],
          ["Ketergantungan berkas", "Tidak bergantung berkas lain", "Rusak bila berkas sumber dipindah atau dihapus"],
          ["Penggunaan tepat", "Dokumen yang akan dikirim ke pihak luar", "Dokumen kerja internal dengan data yang sering diperbarui"]
        ]
      },
      steps: [
        "Letakkan kursor, lalu **Insert → Object → Object**.",
        "Pilih tab **Create New** untuk membuat objek baru (misalnya Microsoft Excel Worksheet), atau tab **Create from File** untuk memakai berkas yang sudah ada.",
        "Pada tab Create from File, pilih berkasnya lalu tentukan:",
        "Centang **Link to file** untuk membuat objek tertaut.",
        "Centang **Display as icon** untuk menampilkan ikon, bukan isi objek.",
        "Klik **OK**. Klik ganda objek untuk menyuntingnya di aplikasi asalnya."
      ],
      peringatan: "Objek tertaut akan menampilkan pesan kesalahan bila berkas sumbernya dipindahkan. Bila dokumen akan dikirim ke pihak lain, gunakan objek tertanam atau tempelkan sebagai gambar."
    },
    {
      h: "20.6 Menempel dengan Paste Special",
      steps: [
        "Salin data dari aplikasi lain ([[Ctrl+C]]).",
        "Di Word, klik **Home → Paste → Paste Special** ([[Ctrl+Alt+V]]).",
        "Pilih salah satu format:",
        "**Microsoft Excel Worksheet Object** — objek tertanam yang dapat disunting dengan Excel.",
        "**Formatted Text (RTF)** — teks dengan format, tanpa tautan.",
        "**Unformatted Text** — teks murni tanpa format.",
        "**Picture (Enhanced Metafile)** — data menjadi gambar, tidak dapat disunting lagi.",
        "**HTML Format** — mempertahankan struktur seperti tabel.",
        "**Keep Source Formatting / Merge Formatting / Keep Text Only** — tiga pilihan cepat pada tombol Paste.",
        "Klik **OK**."
      ],
      tip: "Untuk menempelkan teks dari internet tanpa membawa format aneh, gunakan **Keep Text Only** (ikon A dengan papan klip). Kebiasaan ini menghemat banyak waktu merapikan dokumen."
    }
  ],
  praktikum: {
    judul: "Membuat Lembar Rumus dan Artikel Bergaya Majalah",
    deskripsi: "Anda akan menyusun satu halaman yang memuat persamaan, simbol, drop cap, dan text box.",
    langkah: [
      "Buat dokumen baru, simpan sebagai `Latihan 20 - Simbol dan Persamaan`.",
      "Ketik judul `KUMPULAN RUMUS DASAR` rata tengah, tebal, 16 pt.",
      "Sisipkan persamaan luas lingkaran: tekan [[Alt+=]], buat **Fraction** dengan pembilang `22` dan penyebut `7`, lalu tambahkan variabel `r` berpangkat 2 memakai Script.",
      "Sisipkan persamaan akar kuadrat: gunakan struktur **Radical**, isi akar dengan `a` berpangkat 2 ditambah `b` berpangkat 2.",
      "Sisipkan persamaan pecahan bersusun dengan **Fraction** dan **Script** pada variabelnya.",
      "Sisipkan matriks 2×2 memakai struktur **Matrix**, isi dengan empat angka.",
      "Beri nomor pada dua persamaan: letakkan kursor di akhir persamaan, tekan [[Tab]] dua kali, lalu sisipkan **Insert Caption** dengan label **Equation**.",
      "Sisipkan simbol derajat, mikro (µ), omega (Ω), dan panah memakai **Insert → Symbol → More Symbols**.",
      "Buat pintasan keyboard untuk simbol derajat melalui tab **Special Characters → Shortcut Key**.",
      "Ketik kalimat: `Suhu ruang 25 C dan tegangan 12 V` lalu ganti huruf C dengan simbol derajat dan tambahkan Nonbreaking Space antara angka dan satuan.",
      "Buat paragraf baru untuk artikel: aktifkan **Insert → Drop Cap → Drop Cap Options**, atur Lines to drop = 3, distance from text = 0,3 cm.",
      "Sisipkan **Insert → Text Box → Simple Text Box**, ketik `Kutipan: Matematika adalah bahasa alam semesta.`, atur **Shape Fill → No Fill** dan **Shape Outline → No Outline**.",
      "Atur **Wrap Text → Square** pada text box dan tempatkan di sisi kanan halaman.",
      "Sisipkan objek Excel: **Insert → Object → Create New → Microsoft Excel Worksheet**, isi empat angka, lalu klik di luar objek untuk kembali ke Word.",
      "Klik ganda objek tersebut untuk membuktikan bahwa ia dapat disunting, lalu tutup kembali.",
      "Salin tabel dari Excel dan tempel memakai **Paste Special → Picture (Enhanced Metafile)** untuk membandingkan hasilnya.",
      "Simpan dokumen dan periksa tampilannya di Print Preview."
    ]
  },
  latihan: [
    "Buat satu halaman berisi lima persamaan matematika bernomor otomatis dan dirujuk dengan cross-reference.",
    "Buat artikel satu halaman dengan drop cap tiga baris dan satu pull quote memakai text box.",
    "Jelaskan perbedaan objek tertanam dengan objek tertaut beserta kelebihan dan kekurangannya.",
    "Buat pintasan keyboard untuk simbol Ω dan µ, lalu buktikan pintasan tersebut berfungsi.",
    "Praktikkan Paste Special dengan empat format berbeda dan catat perbedaan hasilnya."
  ],
  shortcut: [
    { k: "Alt+=", f: "Menyisipkan bidang persamaan" },
    { k: "Ctrl+Alt+V", f: "Paste Special" },
    { k: "Ctrl+Shift+Space", f: "Nonbreaking space" },
    { k: "Ctrl+Shift+Minus", f: "Nonbreaking hyphen" },
    { k: "Alt+Ctrl+Minus", f: "Em dash (—)" },
    { k: "Ctrl+Minus", f: "En dash (–) atau optional hyphen" },
    { k: "Alt+Ctrl+Period", f: "Ellipsis (…)" }
  ],
  rangkuman: [
    "Simbol dan karakter khusus disisipkan melalui Insert → Symbol, dengan pintasan yang dapat disesuaikan.",
    "Equation Editor menyediakan struktur siap pakai dan mendukung sintaks LaTeX.",
    "Drop Cap memperbesar huruf awal paragraf; Text Box memuat teks pada posisi bebas.",
    "Objek tertanam menyimpan data di dalam dokumen, objek tertaut bergantung pada berkas sumber.",
    "Paste Special memungkinkan pemilihan format tempel yang sesuai kebutuhan."
  ],
  kuis: [
    {
      q: "Pintasan untuk menyisipkan bidang persamaan adalah…",
      opsi: ["Alt+=", "Ctrl+=", "Alt+Shift+E", "Ctrl+Shift+E"],
      jawab: 0,
      bahasan: "Alt+= menyisipkan Equation placeholder dan mengaktifkan tab Equation pada Ribbon."
    },
    {
      q: "Karakter yang mencegah kata terpisah di akhir baris adalah…",
      opsi: ["Em dash", "Nonbreaking space", "Ellipsis", "Optional hyphen"],
      jawab: 1,
      bahasan: "Nonbreaking space (Ctrl+Shift+Space) mengikat dua kata sehingga tidak terpisah di akhir baris, penting untuk penulisan seperti `Rp 1.000.000`."
    },
    {
      q: "Perbedaan utama objek tertanam dengan objek tertaut adalah…",
      opsi: [
        "Objek tertanam menyimpan data di dalam dokumen, objek tertaut menyimpan tautan ke berkas sumber",
        "Objek tertanam tidak dapat disunting",
        "Objek tertaut selalu lebih besar ukurannya",
        "Objek tertanam hanya berlaku untuk gambar"
      ],
      jawab: 0,
      bahasan: "Embedded menyimpan seluruh data di dokumen sehingga mandiri. Linked hanya menyimpan tautan sehingga berkas sumber harus tetap tersedia."
    },
    {
      q: "Untuk menempelkan teks dari internet tanpa membawa formatnya, pilihan yang tepat adalah…",
      opsi: ["Keep Source Formatting", "Merge Formatting", "Keep Text Only", "Picture"],
      jawab: 2,
      bahasan: "Keep Text Only menempelkan teks tanpa format sehingga dokumen tetap mengikuti gaya yang berlaku."
    },
    {
      q: "Fitur untuk memperbesar huruf pertama sebuah paragraf adalah…",
      opsi: ["WordArt", "Text Box", "Drop Cap", "SmartArt"],
      jawab: 2,
      bahasan: "Drop Cap (Insert → Drop Cap) memperbesar huruf pertama paragraf hingga beberapa baris, dengan pilihan Dropped atau In margin."
    }
  ]
},

{
  id: 21,
  judul: "Pintasan, Quick Access Toolbar, dan Makro Dasar",
  level: "Mahir",
  durasi: "120 menit",
  deskripsi: "Mempercepat pekerjaan secara dramatis: pintasan keyboard tingkat lanjut, kustomisasi Quick Access Toolbar dan Ribbon, perekaman makro, serta pengenalan VBA.",
  tujuan: [
    "Menguasai pintasan keyboard penting untuk pekerjaan sehari-hari.",
    "Menggunakan Key Tips dan Tell Me untuk mengakses perintah.",
    "Mengustomisasi Quick Access Toolbar dan Ribbon.",
    "Merekam, menjalankan, serta menyunting makro sederhana.",
    "Mengenal dasar Visual Basic for Applications (VBA) dan keamanan makro."
  ],
  materi: [
    {
      h: "21.1 Key Tips dan Tell Me",
      sub: [
        {
          h: "Key Tips",
          p: ["Tekan [[Alt]] untuk menampilkan huruf kunci pada setiap tab dan perintah. Contoh: [[Alt]] lalu [[H]] membuka tab Home, lalu [[F]] [[S]] membuka daftar ukuran font. Key Tips memungkinkan penggunaan Word tanpa mouse."]
        },
        {
          h: "Tell Me / Search",
          p: ["Tekan [[Alt+Q]] atau klik kotak **Search** di bagian atas jendela, lalu ketik nama perintah yang dicari, misalnya `watermark`. Word menampilkan perintah yang relevan beserta bantuan terkait."]
        }
      ],
      tip: "Bila lupa letak sebuah perintah, gunakan [[Alt+Q]] dan ketik namanya. Ini cara tercepat menemukan perintah yang tersembunyi di kedalaman menu."
    },
    {
      h: "21.2 Pintasan Keyboard yang Wajib Dikuasai",
      tabel: {
        kepala: ["Pintasan", "Fungsi"],
        rows: [
          ["[[Ctrl+Alt+V]]", "Paste Special"],
          ["[[Ctrl+Shift+C]] / [[Ctrl+Shift+V]]", "Menyalin format / menerapkan format"],
          ["[[F4]]", "Mengulang tindakan terakhir"],
          ["[[Shift+F5]]", "Kembali ke posisi edit terakhir"],
          ["[[Ctrl+Alt+1]] / 2 / 3", "Heading 1 / 2 / 3"],
          ["[[Ctrl+Shift+N]]", "Gaya Normal"],
          ["[[Ctrl+Shift+8]]", "Menampilkan tanda pemformatan"],
          ["[[Alt+Shift+D]]", "Menyisipkan tanggal (field DATE)"],
          ["[[Ctrl+Shift+E]]", "Track Changes"],
          ["[[Ctrl+Alt+M]]", "Komentar baru"],
          ["[[Alt+Shift+↑]] / ↓", "Memindahkan paragraf ke atas / ke bawah"],
          ["[[Ctrl+Alt+1]] pada tabel", "— (lihat catatan), gunakan Alt+5 numpad untuk seleksi tabel"],
          ["[[Ctrl+F9]]", "Menyisipkan tanda field `{ }`"],
          ["[[Alt+F9]]", "Menampilkan kode field, bukan hasilnya"],
          ["[[Shift+F9]]", "Menampilkan kode field untuk field terpilih"],
          ["[[Ctrl+Shift+F9]]", "Melepas field menjadi teks biasa"],
          ["[[Ctrl+Shift+F12]]", "Mencetak dokumen langsung (tanpa dialog) — hati-hati"],
          ["[[Ctrl+Alt+S]]", "Split jendela dokumen"],
          ["[[Ctrl+Shift+W]]", "Garis bawah hanya pada kata, tanpa spasi"],
          ["[[Ctrl+Shift+D]]", "Double underline"],
          ["[[Ctrl+Shift+K]]", "Small caps"]
        ]
      }
    },
    {
      h: "21.3 Mengustomisasi Quick Access Toolbar",
      steps: [
        "Klik panah kecil di ujung kanan Quick Access Toolbar (QAT).",
        "Centang perintah yang sering dipakai seperti **Quick Print**, **Print Preview and Print**, **Spelling & Grammar**, atau **Insert Footnote**.",
        "Pilih **More Commands** untuk membuka daftar lengkap.",
        "Pada dropdown **Choose commands from**, pilih **All Commands** untuk melihat seluruh perintah yang tersedia.",
        "Pilih perintah lalu klik **Add** untuk memindahkannya ke daftar kanan.",
        "Gunakan tombol panah naik/turun untuk mengatur urutan.",
        "Pada dropdown kanan atas, pilih cakupan: **For all documents (default)** atau hanya untuk dokumen tertentu.",
        "Klik **OK**.",
        "Untuk menempatkan QAT di bawah Ribbon: klik panah di ujungnya → **Show Below the Ribbon**."
      ],
      tip: "Bila ingin memindahkan pengaturan QAT ke komputer lain, gunakan **Import/Export → Export all customizations** pada kotak dialog Word Options. Semua kustomisasi tersimpan dalam satu berkas."
    },
    {
      h: "21.4 Mengustomisasi Ribbon",
      steps: [
        "Buka **File → Options → Customize Ribbon** (atau klik kanan Ribbon → **Customize the Ribbon**).",
        "Untuk membuat tab baru: klik **New Tab**, lalu klik **Rename** untuk memberi nama.",
        "Pilih tab baru tersebut, lalu klik **New Group** dan beri nama kelompok, misalnya `Perintah Favorit`. Terapkan hal yang sama pada setiap tab.",
        "Pada dropdown kiri, pilih **Popular Commands** atau **All Commands**.",
        "Pilih perintah, lalu klik **Add** untuk memasukkannya ke grup pada tab baru.",
        "Atur urutan dengan tombol panah.",
        "Klik **OK**.",
        "Untuk mengembalikan pengaturan awal, klik **Reset → Reset all customizations**."
      ],
      peringatan: "Hindari menambahkan terlalu banyak tab baru. Ribbon yang penuh justru memperlambat pencarian perintah. Sebaiknya buat satu tab khusus berisi maksimal sepuluh perintah andalan Anda."
    },
    {
      h: "21.5 Merekam Makro",
      p: ["Makro merekam rangkaian tindakan Anda sehingga dapat dijalankan ulang dengan satu klik. Cocok untuk pekerjaan berulang yang panjang."],
      steps: [
        "Tampilkan tab **Developer** bila belum aktif.",
        "Klik **Record Macro**.",
        "Isi **Macro name** tanpa spasi (misalnya `FormatLaporan`).",
        "Tentukan **Store macro in**: **All Documents (Normal.dotm)** bila ingin tersedia di semua dokumen, atau **This Document** bila hanya untuk dokumen ini.",
        "Isi **Description** agar makro mudah dikenali di kemudian hari.",
        "Pilih **Keyboard** untuk menetapkan pintasan, atau **Button** untuk menempatkannya di QAT/Ribbon.",
        "Klik **OK** dan mulailah melakukan tindakan yang ingin direkam.",
        "Klik **Stop Recording** pada tab Developer setelah selesai.",
        "Jalankan makro dengan [[Alt+F8]], pilih namanya, lalu klik **Run**."
      ],
      peringatan: "Makro merekam semuanya, termasuk pergerakan kursor dan kesalahan. Sebelum merekam, rencanakan langkahnya dan berlatih sekali tanpa rekaman. Jika salah saat merekam, hentikan dan mulai ulang dari awal."
    },
    {
      h: "21.6 Menyunting Makro dengan VBA",
      steps: [
        "Klik **Developer → Macros** ([[Alt+F8]]), pilih makro, lalu klik **Edit**.",
        "Jendela **Visual Basic for Applications** terbuka dan menampilkan kode makro Anda.",
        "Perhatikan struktur dasar: `Sub NamaMakro()` … `End Sub`.",
        "Baris yang diawali tanda petik tunggal `'` adalah komentar dan tidak dijalankan.",
        "Sunting kode bila perlu, lalu tekan [[F5]] untuk menjalankannya atau [[F8]] untuk menjalankannya baris demi baris.",
        "Simpan dokumen sebagai **Word Macro-Enabled Document (.docm)** karena format .docx tidak menyimpan makro.",
        "Tutup jendela VBA dan kembali ke Word."
      ],
      p: ["Contoh kode makro sederhana:"],
      tabel: {
        kepala: ["Baris Kode", "Artinya"],
        rows: [
          ["`Sub FormatCepat()`", "Membuka definisi makro bernama FormatCepat"],
          ["`Selection.Font.Name = \"Times New Roman\"`", "Mengubah jenis huruf teks terpilih"],
          ["`Selection.Font.Size = 12`", "Mengubah ukuran huruf menjadi 12 pt"],
          ["`Selection.ParagraphFormat.LineSpacingRule = wdLineSpace1pt5`", "Mengatur spasi baris 1,5"],
          ["`Selection.ParagraphFormat.SpaceAfter = 6`", "Mengatur jarak setelah paragraf 6 pt"],
          ["`MsgBox \"Selesai!\"`", "Menampilkan kotak pesan"],
          ["`End Sub`", "Menutup definisi makro"]
        ]
      },
      tip: "Salah satu makro paling berguna: hapus semua spasi ganda, ubah font menjadi Times New Roman 12, atur spasi 1,5, dan rapikan paragraf — semua dalam satu klik untuk dokumen hasil salin-tempel."
    },
    {
      h: "21.7 Keamanan Makro",
      p: ["Makro dapat memuat kode berbahaya. Word karena itu membatasi eksekusinya secara bawaan."],
      tabel: {
        kepala: ["Pengaturan", "Perilaku"],
        rows: [
          ["Disable all macros without notification", "Semua makro diblokir tanpa pemberitahuan"],
          ["Disable all macros with notification", "Makro diblokir, tetapi pengguna diberi tombol **Enable Content** (bawaan)"],
          ["Disable all macros except digitally signed macros", "Hanya makro bertanda tangan digital yang dijalankan"],
          ["Enable all macros", "Semua makro dijalankan — **tidak disarankan**"]
        ]
      },
      steps: [
        "Buka **File → Options → Trust Center → Trust Center Settings → Macro Settings**.",
        "Pilih tingkat keamanan yang sesuai, umumnya **Disable all macros with notification**.",
        "Aktifkan **Trust access to the VBA project object model** hanya bila Anda memang mengembangkan makro.",
        "Kelola lokasi tepercaya pada **Trusted Locations** agar berkas dari folder tertentu dapat dijalankan tanpa peringatan.",
        "Klik **OK** pada kedua dialog."
      ],
      peringatan: "Jangan pernah mengaktifkan konten dari dokumen yang Anda terima tanpa memastikan sumbernya. Serangan malware melalui makro Word adalah salah satu vektor paling umum. Bila ragu, jangan klik **Enable Content**."
    }
  ],
  praktikum: {
    judul: "Membuat Tombol Ajaib Perapi Dokumen",
    deskripsi: "Anda akan mengustomisasi antarmuka dan merekam makro yang merapikan dokumen hasil salin-tempel dalam satu klik.",
    langkah: [
      "Tampilkan tab Developer melalui **File → Options → Customize Ribbon**.",
      "Kustomisasi QAT: klik panah di ujung QAT → **More Commands** → tambahkan **Quick Print**, **Insert Footnote**, **Spelling & Grammar**, dan **Print Preview and Print** → **OK**.",
      "Buat tab Ribbon baru: **File → Options → Customize Ribbon → New Tab** → **Rename** menjadi `Alat Saya` → tambahkan grup `Rapi Cepat` berisi perintah **Paste Special**, **Format Painter**, dan **Macros**.",
      "Klik **OK** dan periksa tab baru tersebut muncul di Ribbon.",
      "Buka tab **Developer → Record Macro**.",
      "Isi nama makro `RapiDokumen`, simpan di **All Documents (Normal.dotm)**, deskripsi `Merapikan dokumen hasil salin-tempel`.",
      "Klik **Button** untuk menempatkannya di QAT, lalu **OK**.",
      "Lakukan rangkaian tindakan berikut sambil direkam: [[Ctrl+A]] untuk menyeleksi seluruh dokumen.",
      "Buka **Paragraph** dan atur Line spacing **1.5**, Spacing Before 0, Spacing After **6 pt**, klik **OK**.",
      "Buka kotak dialog **Font**, atur **Times New Roman 12 pt**, klik **OK**.",
      "Buka **Home → Replace**, ganti dua spasi menjadi satu spasi dengan **Replace All**, lalu tutup.",
      "Klik **Developer → Stop Recording**.",
      "Buka dokumen berisi teks berantakan hasil salin-tempel, lalu jalankan makro dengan [[Alt+F8]] → pilih `RapiDokumen` → **Run**, atau klik tombol di QAT.",
      "Periksa hasilnya: font, ukuran, spasi baris, jarak paragraf, dan spasi ganda sudah rapi.",
      "Sunting makro: **Developer → Macros → Edit**, tambahkan baris `MsgBox \"Dokumen telah dirapikan!\"` sebelum `End Sub`, lalu tekan [[F5]] untuk menguji.",
      "Simpan dokumen sebagai **Word Macro-Enabled Document (.docm)** bernama `Latihan 21 - Makro`.",
      "Tutup dan buka kembali dokumen tersebut untuk melihat pemberitahuan keamanan makro, lalu aktifkan konten dengan sadar.",
      "Periksa **File → Options → Trust Center → Macro Settings** dan pastikan tingkatnya **Disable all macros with notification**."
    ]
  },
  latihan: [
    "Rekam makro yang menyisipkan kop surat lengkap dengan nama instansi dan nomor halaman.",
    "Rekam makro yang mengubah seluruh Heading 2 menjadi rata tengah dan berwarna biru.",
    "Buat tab Ribbon khusus berisi lima perintah yang paling sering Anda pakai.",
    "Jelaskan mengapa dokumen yang memuat makro harus disimpan dalam format .docm.",
    "Sebutkan tiga risiko keamanan makro dan cara mengurangi risikonya."
  ],
  shortcut: [
    { k: "Alt", f: "Menampilkan Key Tips pada Ribbon" },
    { k: "Alt+Q", f: "Membuka kotak Tell Me / Search perintah" },
    { k: "Alt+F8", f: "Membuka daftar makro" },
    { k: "Alt+F11", f: "Membuka editor Visual Basic" },
    { k: "F5 (di editor VBA)", f: "Menjalankan makro" },
    { k: "F8 (di editor VBA)", f: "Menjalankan makro baris demi baris (debug)" },
    { k: "Alt+F9", f: "Menampilkan atau menyembunyikan kode field" },
    { k: "Ctrl+F9", f: "Menyisipkan tanda field kosong `{ }`" }
  ],
  rangkuman: [
    "Key Tips (Alt) dan Tell Me (Alt+Q) mempercepat akses perintah tanpa mouse.",
    "Quick Access Toolbar dan Ribbon dapat dikustomisasi, serta diekspor-impor antar komputer.",
    "Makro merekam rangkaian tindakan untuk dijalankan ulang dengan satu klik.",
    "Makro disunting melalui editor VBA dan harus disimpan dalam format .docm.",
    "Keamanan makro wajib diperhatikan; tingkatkan kewaspadaan terhadap dokumen dari sumber tidak dikenal."
  ],
  kuis: [
    {
      q: "Pintasan untuk membuka kotak pencarian perintah (Tell Me) adalah…",
      opsi: ["Alt+Q", "Alt+F8", "Ctrl+Q", "Ctrl+Alt+Q"],
      jawab: 0,
      bahasan: "Alt+Q membuka kotak Search/Tell Me sehingga perintah dapat dicari dengan mengetik namanya."
    },
    {
      q: "Format berkas yang diperlukan untuk menyimpan dokumen bermakro adalah…",
      opsi: [".docx", ".dotx", ".docm", ".pdf"],
      jawab: 2,
      bahasan: ".docm adalah Word Macro-Enabled Document. Format .docx dan .dotx tidak menyimpan kode makro."
    },
    {
      q: "Pintasan untuk menjalankan makro dari daftar makro adalah…",
      opsi: ["Alt+F11", "Alt+F8", "Ctrl+F8", "F8"],
      jawab: 1,
      bahasan: "Alt+F8 membuka dialog Macros tempat makro dapat dijalankan, disunting, atau dihapus. Alt+F11 membuka editor VBA."
    },
    {
      q: "Pengaturan keamanan makro yang disarankan untuk pemakaian sehari-hari adalah…",
      opsi: [
        "Enable all macros",
        "Disable all macros without notification",
        "Disable all macros with notification",
        "Disable all macros except digitally signed macros"
      ],
      jawab: 2,
      bahasan: "Pilihan ini memberi pemberitahuan sehingga Anda dapat memutuskan mengaktifkan konten hanya pada dokumen yang dipercaya."
    },
    {
      q: "Pintasan untuk menampilkan kode field alih-alih hasilnya adalah…",
      opsi: ["Alt+F9", "Shift+F9", "Ctrl+F9", "Ctrl+Shift+F9"],
      jawab: 0,
      bahasan: "Alt+F9 menampilkan kode semua field di dokumen, sedangkan Shift+F9 hanya untuk field yang dipilih. Ctrl+F9 menyisipkan tanda field kosong."
    }
  ]
},

{
  id: 22,
  judul: "Produktivitas Lanjutan: Quick Parts, AutoText, dan Alat Bantu Modern",
  level: "Mahir",
  durasi: "100 menit",
  deskripsi: "Mempercepat pekerjaan dengan building blocks: AutoText, Quick Parts, penyimpanan potongan konten, properti dokumen, serta alat bantu modern seperti Read Aloud dan terjemahan.",
  tujuan: [
    "Membuat dan memakai AutoText serta Quick Parts.",
    "Mengelola Building Blocks Organizer.",
    "Menggunakan properti dokumen dan field dokumen.",
    "Memanfaatkan Read Aloud, Immersive Reader, dan Translator.",
    "Bekerja lebih cepat dengan Clipboard Office dan fitur pencarian."
  ],
  materi: [
    {
      h: "22.1 AutoText dan Quick Parts",
      p: ["**AutoText** menyimpan potongan teks atau objek yang sering dipakai agar dapat disisipkan dengan beberapa ketukan. **Quick Parts** adalah payung yang memuat AutoText, properti dokumen, field, dan building block lainnya."],
      steps: [
        "Seleksi konten yang ingin disimpan (teks, tabel, atau gambar).",
        "Buka **Insert → Quick Parts → AutoText → Save Selection to AutoText Gallery**.",
        "Isi **Name**, misalnya `KopSurat`.",
        "Pilih **Gallery** (AutoText), **Category**, dan **Save in** (Normal.dotm agar tersedia di semua dokumen).",
        "Isi **Description** bila perlu, lalu klik **OK**.",
        "Untuk menyisipkan: ketik beberapa huruf pertama nama AutoText, lalu tekan [[F3]].",
        "Cara lain: **Insert → Quick Parts → AutoText**, lalu pilih dari daftar.",
        "Untuk menghapus atau menyunting: **Insert → Quick Parts → Building Blocks Organizer**."
      ],
      tip: "AutoText sangat berguna untuk menyimpan: kop surat, blok tanda tangan, klausul kontrak, daftar syarat, dan format tabel standar. Simpan di Normal.dotm agar dapat dipakai di semua dokumen."
    },
    {
      h: "22.2 Building Blocks Organizer",
      steps: [
        "Buka **Insert → Quick Parts → Building Blocks Organizer**.",
        "Telusuri daftar building block yang tersedia: Cover Pages, Equations, Footers, Headers, Page Numbers, Tables, Text Boxes, Watermarks, AutoText.",
        "Klik salah satu untuk melihat pratinjau di panel kanan.",
        "Klik **Insert** untuk menyisipkannya ke dokumen.",
        "Klik **Edit Properties** untuk mengubah nama, galeri, kategori, atau menyimpan ke templat lain.",
        "Klik **Delete** untuk menghapus, atau **New** untuk membuat building block baru."
      ],
      catatan: "Word menyediakan puluhan building block bawaan seperti cover page, header, dan sidebar yang siap pakai. Memanfaatkannya jauh lebih cepat daripada membuat dari awal."
    },
    {
      h: "22.3 Properti Dokumen dan Field",
      steps: [
        "Buka **File → Info** dan isi properti: Title, Tags, Comments, Author.",
        "Untuk properti lengkap, klik **Properties → Advanced Properties**.",
        "Pada tab **Summary**, isi Title, Subject, Author, Manager, Company, Category, Keywords.",
        "Pada tab **Custom**, buat properti buatan sendiri, misalnya `NomorDokumen` bertipe Text.",
        "Untuk menampilkan properti di dalam dokumen: **Insert → Quick Parts → Document Property**, lalu pilih properti yang diinginkan.",
        "Nilai properti tersebut akan tampil sebagai field yang otomatis berubah saat propertinya diperbarui.",
        "Untuk field lain: **Insert → Quick Parts → Field**, lalu pilih kategori Document Information atau Date and Time."
      ],
      tip: "Gunakan properti dokumen untuk kepala dokumen dan footer seperti nomor dokumen, nama instansi, atau nama penulis. Dengan begitu, cukup ubah properti satu kali dan seluruh dokumen ikut menyesuaikan."
    },
    {
      h: "22.4 Alat Bantu Modern",
      tabel: {
        kepala: ["Fitur", "Fungsi dan Cara Akses"],
        rows: [
          ["Read Aloud", "Membacakan dokumen dengan suara. Akses: Review → Read Aloud atau ikon speaker"],
          ["Immersive Reader", "Tampilan baca dengan penyorotan baris, lebar kolom, dan terjemahan. Akses: View → Immersive Reader"],
          ["Translator", "Menerjemahkan teks terpilih atau seluruh dokumen. Akses: Review → Translate → Translate Selection/Document"],
          ["Editor", "Analisis mendalam ejaan, tata bahasa, kesederhanaan, dan inklusivitas. Akses: Review → Editor"],
          ["Dictate", "Mengetik dengan suara. Akses: Home → Dictate (butuh koneksi internet dan mikrofon)"],
          ["Researcher", "Mencari sumber referensi langsung dari Word (fitur Microsoft 365)"],
          ["Clipboard Office", "Papan klip bersama yang menyimpan hingga 24 potongan dari berbagai aplikasi Office"],
          ["Version History", "Riwayat versi dokumen di OneDrive"]
        ]
      },
      steps: [
        "**Dictate:** buka **Home → Dictate**, pilih bahasa Indonesia bila tersedia, klik ikon mikrofon, lalu berbicara. Tanda baca dapat diucapkan sebagai kata.",
        "**Translator:** seleksi teks → **Review → Translate → Translate Selection** → pilih bahasa tujuan. Gunakan **Insert** untuk menambahkan hasil terjemahan ke dokumen.",
        "**Read Aloud:** buka **Review → Read Aloud**, atur kecepatan dan pilihan suara, gunakan tombol putar untuk memulai.",
        "**Clipboard Office:** buka **Home → Clipboard** (panah kecil pada group Clipboard), lalu lihat daftar potongan yang tersimpan dan tempelkan yang diperlukan."
      ],
      tip: "Memeriksa dokumen dengan mendengarkannya (Read Aloud) sangat efektif menemukan kalimat yang janggal. Telinga sering menangkap kesalahan yang terlewat oleh mata."
    },
    {
      h: "22.5 Kebiasaan Kerja Cepat di Word",
      list: [
        "**Gunakan gaya sejak awal**, jangan memformat manual.",
        "**Simpan potongan teks berulang** sebagai AutoText.",
        "**Susun QAT** dengan lima perintah andalan Anda.",
        "**Gunakan F4** untuk mengulang format yang sama.",
        "**Manfaatkan Format Painter** dengan klik ganda untuk banyak lokasi.",
        "**Biasakan Ctrl+S** setiap 5–10 menit, atau aktifkan AutoSave.",
        "**Pakai Navigasi Pane** untuk berpindah bagian pada dokumen panjang.",
        "**Gunakan Find and Replace dengan wildcard** untuk pembersihan massal.",
        "**Simpan versi berkala** untuk keamanan dan pembandingan.",
        "**Buat templat** untuk jenis dokumen yang sering Anda susun."
      ]
    },
    {
      h: "22.6 Menggunakan Cari Perintah dan Bantuan",
      steps: [
        "Tekan [[Alt+Q]] atau [[F1]] untuk membuka bantuan Word.",
        "Ketik pertanyaan dalam bahasa alami, misalnya `cara membuat daftar isi`. Word menampilkan perintah dan artikel bantuan yang relevan.",
        "Gunakan **Help → Contact Support** atau **Feedback** untuk mengirim masukan.",
        "Untuk mempelajari fitur baru, buka **Help → What's New**.",
        "Manfaatkan **Learning Tools** dan templat pelatihan yang disediakan Microsoft untuk pendalaman mandiri."
      ],
      tip: "Kotak pencarian perintah adalah cara tercepat menemukan fitur yang namanya Anda lupakan. Cukup ketik kata kuncinya dalam bahasa Indonesia atau Inggris."
    }
  ],
  praktikum: {
    judul: "Membangun Pustaka Konten Pribadi",
    deskripsi: "Anda akan menyimpan potongan dokumen yang sering dipakai, memakai properti dokumen, dan mencoba alat bantu modern.",
    langkah: [
      "Buka dokumen baru, simpan sebagai `Latihan 22 - Quick Parts`.",
      "Buat kop surat sederhana: nama instansi, alamat, telepon, dan garis pemisah.",
      "Seleksi seluruh kop surat tersebut, lalu **Insert → Quick Parts → AutoText → Save Selection to AutoText Gallery**.",
      "Beri nama `KopSuratSaya`, kategori **General**, simpan di **Normal.dotm**, klik **OK**.",
      "Hapus kop surat dari dokumen, lalu ketik `KopSuratSaya` dan tekan [[F3]]. Buktikan kop surat tersisip kembali.",
      "Buat tabel 3 kolom × 3 baris berisi struktur `No | Uraian | Jumlah`, beri gaya tabel yang rapi.",
      "Seleksi tabel tersebut dan simpan sebagai AutoText bernama `TabelAnggaran`.",
      "Uji dengan mengetik `TabelAnggaran` lalu tekan [[F3]].",
      "Buka **Insert → Quick Parts → Building Blocks Organizer** dan temukan kedua building block yang baru dibuat. Sunting propertinya: ubah deskripsi `Kop surat resmi instansi`.",
      "Buka **File → Info → Properties → Advanced Properties**, isi Title, Author, Company, dan tambahkan properti kustom `NomorDokumen` bertipe Text dengan nilai `001/LAT/2024`.",
      "Sisipkan properti dokumen ke dalam dokumen: **Insert → Quick Parts → Document Property → Title** dan **NomorDokumen**.",
      "Ubah nilai Title pada File → Info, lalu perbarui field dengan [[Ctrl+A]] dan [[F9]] dan amati perubahannya.",
      "Sisipkan field tanggal: **Insert → Quick Parts → Field → Date and Time → Date** dengan format Indonesia.",
      "Seleksi satu paragraf lalu gunakan **Review → Translate → Translate Selection** ke bahasa Inggris. Masukkan hasilnya ke dokumen dengan tombol **Insert**.",
      "Gunakan **Review → Read Aloud** untuk mendengarkan satu paragraf, lalu hentikan.",
      "Coba **Home → Dictate** untuk mengetik satu kalimat dengan suara (bila mikrofon dan koneksi tersedia).",
      "Buka **Home → Clipboard**, periksa daftar potongan yang tersimpan, dan tempelkan salah satunya.",
      "Simpan dokumen dan pastikan AutoText tetap tersedia saat Anda membuka dokumen baru."
    ]
  },
  latihan: [
    "Buat lima AutoText untuk kebutuhan pekerjaan Anda: kop surat, tanda tangan, klausul kontrak, daftar hadir, dan format tabel.",
    "Buat building block berupa text box kutipan yang siap disisipkan.",
    "Isi properti dokumen lengkap dan tampilkan tiga di antaranya sebagai field di dalam dokumen.",
    "Jelaskan perbedaan AutoText dengan Quick Parts dan bagaimana keduanya berhubungan.",
    "Terjemahkan satu halaman dokumen ke bahasa Inggris, lalu bandingkan hasilnya dengan terjemahan mesin lain dan catat kelemahannya."
  ],
  shortcut: [
    { k: "F3", f: "Menyisipkan AutoText berdasarkan nama yang diketik" },
    { k: "Alt+Q", f: "Mencari perintah" },
    { k: "Ctrl+Alt+V", f: "Paste Special" },
    { k: "Ctrl+F3", f: "Memotong ke Spike (papan klip khusus)" },
    { k: "Ctrl+Shift+F3", f: "Menempelkan isi Spike" },
    { k: "F7", f: "Pemeriksa ejaan dan tata bahasa" }
  ],
  rangkuman: [
    "AutoText dan Quick Parts menyimpan potongan konten untuk disisipkan ulang dengan cepat.",
    "Building Blocks Organizer mengelola seluruh building block, termasuk yang bawaan Word.",
    "Properti dokumen dapat ditampilkan sebagai field sehingga seluruh dokumen ikut menyesuaikan.",
    "Read Aloud, Immersive Reader, Translator, dan Dictate adalah alat bantu modern di tab Review dan Home.",
    "Kebiasaan kerja cepat dibangun dari gaya, templat, AutoText, dan pintasan keyboard."
  ],
  kuis: [
    {
      q: "Pintasan untuk menyisipkan AutoText setelah mengetik namanya adalah…",
      opsi: ["F3", "F4", "F7", "F9"],
      jawab: 0,
      bahasan: "Ketik nama AutoText lalu tekan F3 untuk menyisipkannya. F4 mengulang tindakan terakhir, F7 pemeriksa ejaan, dan F9 memperbarui field."
    },
    {
      q: "Tempat mengelola seluruh building block dalam Word adalah…",
      opsi: ["Building Blocks Organizer", "Clipboard", "Styles pane", "Navigation Pane"],
      jawab: 0,
      bahasan: "Building Blocks Organizer (Insert → Quick Parts → Building Blocks Organizer) menampilkan seluruh building block beserta pratinjaunya dan menyediakan perintah insert, edit, dan delete."
    },
    {
      q: "Properti dokumen dapat ditampilkan di dalam dokumen dengan cara…",
      opsi: [
        "Mengetik ulang nilainya",
        "Insert → Quick Parts → Document Property",
        "Memakai Track Changes",
        "Menyalin dari File → Info"
      ],
      jawab: 1,
      bahasan: "Document Property menyisipkan field yang terhubung ke properti dokumen sehingga nilainya otomatis menyesuaikan saat properti diubah."
    },
    {
      q: "Fitur yang membacakan dokumen dengan suara adalah…",
      opsi: ["Immersive Reader", "Read Aloud", "Dictate", "Translator"],
      jawab: 1,
      bahasan: "Read Aloud membacakan dokumen dengan suara, sedangkan Dictate melakukan hal sebaliknya: mengubah ucapan menjadi teks."
    },
    {
      q: "Yang tersimpan di dalam Office Clipboard adalah…",
      opsi: [
        "Hingga 24 potongan dari berbagai aplikasi Office",
        "Seluruh isi dokumen",
        "Pengaturan halaman",
        "Riwayat versi dokumen"
      ],
      jawab: 0,
      bahasan: "Office Clipboard menyimpan hingga 24 potongan yang dapat berasal dari berbagai aplikasi Office dan dapat ditempelkan kapan saja."
    }
  ]
},

{
  id: 23,
  judul: "Troubleshooting, Optimasi, Keamanan, dan Aksesibilitas",
  level: "Mahir",
  durasi: "110 menit",
  deskripsi: "Mengatasi masalah umum Word, mengoptimalkan ukuran dan performa dokumen, mengamankan berkas, serta memastikan dokumen dapat diakses semua orang.",
  tujuan: [
    "Mendiagnosis dan mengatasi masalah umum pada dokumen.",
    "Mengoptimalkan ukuran berkas dan performa Word.",
    "Mengamankan dokumen dengan kata sandi dan pembatasan.",
    "Menjalankan Accessibility Checker dan memperbaiki temuannya.",
    "Memahami kompatibilitas antarversi dan pemulihan berkas rusak."
  ],
  materi: [
    {
      h: "23.1 Masalah Umum dan Solusinya",
      tabel: {
        kepala: ["Gejala", "Penyebab Umum", "Solusi"],
        rows: [
          ["Nomor halaman berulang atau salah", "Section break yang tidak diatur atau Link to Previous masih aktif", "Periksa tiap section, matikan Link to Previous, atur ulang Format Page Numbers"],
          ["Spasi antarparagraf tidak konsisten", "Campuran Enter manual dan pengaturan Spacing", "Hapus paragraf kosong, atur Spacing Before/After pada gaya"],
          ["Gambar berpindah sendiri", "Objek memakai Wrap Text selain In Line with Text dengan anchor berpindah", "Aktifkan Show anchors, kunci anchor, atau ubah Wrap Text"],
          ["Daftar isi kosong", "Judul tidak memakai gaya Heading", "Terapkan Heading 1/2/3, lalu perbarui TOC dengan F9"],
          ["Tabel terpotong di batas halaman", "Allow row to break across pages aktif", "Matikan opsi tersebut pada Table Properties → Row"],
          ["Dokumen lambat dibuka", "Ukuran berkas besar akibat gambar beresolusi tinggi", "Compress Pictures, hapus revisi, matikan AutoRecover versi lama"],
          ["Format berubah saat dibuka di komputer lain", "Font tidak tersedia di komputer tersebut", "Gunakan font standar atau sematkan font pada dokumen"],
          ["Kata dianggap salah oleh pemeriksa ejaan", "Bahasa dokumen bukan Bahasa Indonesia", "Set Proofing Language ke Indonesian untuk seluruh dokumen"],
          ["Teks tersembunyi tidak muncul", "Format Hidden aktif", "Matikan Hidden pada kotak dialog Font atau aktifkan Show hidden text"],
          ["Berkas tidak dapat disimpan", "Berkas sedang dipakai proses lain atau folder hanya baca", "Tutup berkas lain, simpan dengan nama baru, periksa izin folder"]
        ]
      }
    },
    {
      h: "23.2 Optimasi Ukuran dan Performa",
      steps: [
        "**Kompres gambar:** pilih satu gambar → **Picture Format → Compress Pictures** → pilih **Apply only to this picture** (atau hilangkan centang untuk semua gambar) → pilih resolusi **150 ppi** untuk dokumen layar atau **220 ppi** untuk cetak.",
        "**Hapus revisi dan komentar:** **File → Info → Check for Issues → Inspect Document** → centang semua → **Inspect** → **Remove All**.",
        "**Bersihkan versi pemulihan:** simpan ulang dokumen dengan **Save As** ke lokasi baru untuk menghilangkan riwayat pemulihan yang menumpuk.",
        "**Hindari objek tertaut** yang menambah ketergantungan dan ukuran.",
        "**Batasi pemakaian font** — setiap jenis font menambah ukuran berkas.",
        "**Pecah dokumen raksasa** menjadi beberapa berkas bila telah melampaui puluhan megabita.",
        "**Periksa ukuran berkas** di File Explorer setelah setiap optimasi untuk mengukur hasilnya.",
        "**Nonaktifkan add-in yang tidak perlu** melalui **File → Options → Add-ins** → pilih **COM Add-ins** → **Go** → hilangkan centang yang tidak diperlukan.",
        "**Perbaiki Office** melalui **Control Panel → Programs → Microsoft Office → Change → Quick Repair** bila Word sering macet."
      ],
      tip: "Bila dokumen sangat lambat, coba aktifkan **Draft view** (View → Draft) saat menulis. Mode ini tidak memuat gambar dan tata letak sehingga jauh lebih ringan, terutama pada dokumen ratusan halaman."
    },
    {
      h: "23.3 Keamanan Dokumen",
      steps: [
        "**Enkripsi:** **File → Info → Protect Document → Encrypt with Password**, masukkan kata sandi dua kali. Dokumen tidak dapat dibuka tanpa kata sandi.",
        "**Hanya baca:** pilih **Always Open Read-Only** untuk menyarankan mode hanya baca.",
        "**Batasi penyuntingan:** **Restrict Editing** untuk membatasi format dan jenis perubahan.",
        "**Tandai final:** **Mark as Final** hanya penanda, bukan pengamanan.",
        "**Hapus informasi pribadi:** **Inspect Document** menghapus nama penulis, komentar, dan revisi tersembunyi.",
        "**Hati-hati dengan makro:** jangan aktifkan konten dari sumber tidak dikenal.",
        "**Simpan cadangan:** gunakan OneDrive atau folder jaringan agar berkas tetap aman meski perangkat rusak."
      ],
      peringatan: "Kata sandi dokumen tidak dapat dipulihkan oleh Microsoft. Simpan kata sandi di pengelola kata sandi. Untuk dokumen organisasi, gunakan pengelolaan hak akses (IRM/SharePoint) yang lebih terkendali."
    },
    {
      h: "23.4 Aksesibilitas Dokumen",
      p: ["Dokumen aksesibel dapat dibaca semua orang, termasuk pengguna pembaca layar dan pembaca dengan gangguan penglihatan atau kognitif."],
      steps: [
        "Buka **Review → Check Accessibility**.",
        "Periksa setiap temuan pada panel **Accessibility** dan ikuti saran perbaikannya.",
        "**Gambar tanpa teks alternatif:** klik kanan gambar → **Edit Alt Text** → tulis deskripsi singkat bermakna. Untuk gambar dekoratif, centang **Mark as decorative**.",
        "**Tabel tanpa baris judul:** aktifkan **Header Row** pada Table Design dan **Repeat as header row**.",
        "**Kontras warna rendah:** ubah warna teks atau latar agar rasio kontras mencukupi.",
        "**Hyperlink tanpa keterangan:** ubah teks tautan menjadi deskriptif, bukan `klik di sini`.",
        "**Struktur heading tidak logis:** gunakan Heading 1, 2, 3 secara berurutan tanpa melompati tingkat.",
        "**Teks dalam gambar:** pindahkan ke teks biasa agar dapat dibaca pembaca layar.",
        "**Bahasa dokumen:** atur **Review → Language → Set Proofing Language** agar pembaca layar memakai pelafalan yang tepat.",
        "Simpan hasil pemeriksaan dan ulangi hingga tidak ada temuan berat."
      ],
      list: [
        "Gunakan teks minimal 11–12 pt untuk badan tulisan.",
        "Hindari teks berwarna terang di atas latar putih.",
        "Jangan memakai warna sebagai satu-satunya penanda informasi.",
        "Sertakan teks alternatif pada semua gambar bermakna.",
        "Gunakan gaya Heading agar struktur dokumen terbaca mesin.",
        "Uji dokumen dengan pembaca layar bila memungkinkan."
      ],
      tip: "Word dapat memeriksa aksesibilitas secara otomatis, tetapi keputusan akhir tetap pada penulis. Pertanyaan kuncinya: dapatkah dokumen ini dipahami tanpa melihatnya?"
    },
    {
      h: "23.5 Kompatibilitas dan Pemulihan",
      sub: [
        {
          h: "Memeriksa kompatibilitas",
          p: ["Bila dokumen dibuka pada Word versi lama, sebagian fitur mungkin hilang. Buka **File → Info → Check for Issues → Check Compatibility** untuk melihat daftar fitur yang tidak didukung pada versi Word 97-2003, lalu putuskan apakah perlu menghilangkannya."]
        },
        {
          h: "Mode Kompatibilitas",
          p: ["Judul jendela yang memuat tulisan **Compatibility Mode** berarti dokumen masih memakai format lama. Untuk memakai fitur modern, klik **File → Info → Convert** agar format ditingkatkan ke .docx. Sebaiknya simpan salinan sebelum konversi."]
        },
        {
          h: "Membuka dan Memperbaiki berkas rusak",
          steps: [
            "Buka **File → Open → Browse**, pilih berkas yang bermasalah.",
            "Pada tombol dropdown di samping **Open**, pilih **Open and Repair**.",
            "Bila tetap gagal, coba **Recover Text from Any File** untuk mengambil teksnya saja.",
            "Alternatif lain: buka berkas di Word versi lain, atau gunakan **Insert → Object → Text from File** untuk menyisipkan isi dokumen bermasalah ke dokumen baru.",
            "Untuk pemulihan menyeluruh, jalankan **File → Options → Save → Manage Document → Recover Unsaved Documents**."
          ]
        }
      ]
    },
    {
      h: "23.6 Menyematkan Font dan Pengaturan Tampilan",
      steps: [
        "Buka **File → Options → Save**.",
        "Centang **Embed fonts in the file**.",
        "Pilih **Embed only the characters used in the document** untuk ukuran berkas lebih kecil, atau **Embed all characters** untuk penyuntingan lanjutan di komputer lain.",
        "Perhatikan opsi **Do not embed common system fonts**.",
        "Klik **OK**.",
        "Konsekuensinya: ukuran berkas bertambah, tetapi tampilan dokumen tetap sama di komputer yang tidak memiliki font tersebut."
      ],
      tip: "Sematkan font bila dokumen memakai font khusus dan akan dibuka di komputer lain, misalnya saat menyerahkan naskah ke percetakan."
    }
  ],
  praktikum: {
    judul: "Mengaudit dan Memperbaiki Dokumen Bermasalah",
    deskripsi: "Anda akan mendiagnosis masalah, mengoptimalkan ukuran, mengamankan, dan mengaudit aksesibilitas sebuah dokumen.",
    langkah: [
      "Gunakan dokumen panjang hasil pertemuan sebelumnya, salin sebagai `Latihan 23 - Audit Dokumen`.",
      "Masukkan tiga gambar beresolusi tinggi ke dalam dokumen.",
      "Catat ukuran berkas sebelum optimasi melalui File Explorer.",
      "Jalankan **Picture Format → Compress Pictures** pada semua gambar dengan resolusi 150 ppi.",
      "Bandingkan ukuran berkas setelah kompresi dan catat selisihnya.",
      "Jalankan **Review → Check Accessibility**. Catat seluruh temuan yang muncul.",
      "Perbaiki temuan gambar tanpa Alt Text dengan mengisi deskripsi pada setiap gambar.",
      "Perbaiki temuan tabel tanpa baris judul dengan mengaktifkan **Header Row** dan **Repeat as header row**.",
      "Jalankan pemeriksaan ulang dan pastikan temuan berkurang.",
      "Jalankan **File → Info → Check for Issues → Inspect Document**, centang semua opsi, klik **Inspect**.",
      "Tinjau hasil pemeriksaan: komentar, revisi, properti, dan data tersembunyi. Klik **Remove All** pada setiap kategori yang tidak diperlukan.",
      "Periksa gaya dokumen: buka **Shift+F1** (Reveal Formatting) pada beberapa paragraf dan pastikan format konsisten.",
      "Perbaiki daftar isi dengan [[Ctrl+A]] lalu [[F9]] → **Update entire table**.",
      "Aktifkan **File → Options → Save → Embed fonts in the file** lalu simpan dokumen dan bandingkan ukurannya.",
      "Uji keamanan: **File → Info → Protect Document → Encrypt with Password** dengan kata sandi `audit2024`, tutup dokumen, lalu buka kembali dan masukkan kata sandi.",
      "Hapus kata sandi dengan membuka kembali Protect Document → Encrypt with Password → kosongkan → **OK**.",
      "Lakukan **File → Info → Check for Issues → Check Compatibility** dan catat fitur yang tidak didukung versi lama.",
      "Simpan hasil audit dalam sebuah catatan singkat: ukuran sebelum-sesudah, temuan aksesibilitas, dan tindakan yang dilakukan."
    ]
  },
  latihan: [
    "Buat daftar periksa (checklist) pribadi berisi sepuluh langkah finalisasi dokumen sebelum dikirim.",
    "Perbaiki dokumen yang memuat gambar tanpa Alt Text, tabel tanpa header, dan hyperlink `klik di sini`.",
    "Optimalkan dokumen 20 MB menjadi di bawah 5 MB tanpa mengorbankan keterbacaan.",
    "Jelaskan perbedaan Mark as Final, Restrict Editing, dan Encrypt with Password dari segi tingkat keamanannya.",
    "Praktikkan Open and Repair pada berkas yang sengaja dirusak salinannya, lalu catat hasilnya."
  ],
  shortcut: [
    { k: "Shift+F1", f: "Reveal Formatting untuk mendiagnosis format" },
    { k: "Ctrl+Alt+Shift+S", f: "Membuka Styles pane" },
    { k: "Alt+F8", f: "Daftar makro (untuk memeriksa makro tersembunyi)" },
    { k: "Ctrl+Shift+8", f: "Menampilkan tanda pemformatan" },
    { k: "F9", f: "Memperbarui seluruh field setelah Ctrl+A" }
  ],
  rangkuman: [
    "Sebagian besar masalah Word berasal dari format manual, section break yang salah, dan anchor gambar.",
    "Ukuran berkas ditekan dengan mengompres gambar, menghapus revisi, dan membatasi objek tertaut.",
    "Keamanan dokumen berjenjang: Mark as Final, Restrict Editing, dan Encrypt with Password.",
    "Accessibility Checker membantu memastikan dokumen dapat dipahami semua pembaca.",
    "Open and Repair serta Recover Text from Any File menyelamatkan berkas bermasalah."
  ],
  kuis: [
    {
      q: "Masalah daftar isi yang kosong biasanya disebabkan oleh…",
      opsi: [
        "Dokumen terlalu panjang",
        "Judul tidak memakai gaya Heading",
        "Nomor halaman tidak diatur",
        "Gambar terlalu banyak"
      ],
      jawab: 1,
      bahasan: "Table of Contents dibangun dari gaya Heading. Bila judul diformat manual, Word tidak menemukan entri untuk ditampilkan."
    },
    {
      q: "Cara paling tepat mengecilkan ukuran dokumen yang memuat banyak gambar adalah…",
      opsi: [
        "Menghapus gambar",
        "Compress Pictures",
        "Mengubah font",
        "Menghapus nomor halaman"
      ],
      jawab: 1,
      bahasan: "Compress Pictures menurunkan resolusi gambar sehingga ukuran berkas berkurang tanpa harus menghilangkan isinya."
    },
    {
      q: "Fitur yang benar-benar mengunci dokumen agar tidak dapat dibuka tanpa izin adalah…",
      opsi: ["Mark as Final", "Always Open Read-Only", "Encrypt with Password", "Track Changes"],
      jawab: 2,
      bahasan: "Encrypt with Password mengenkripsi berkas. Mark as Final dan Always Open Read-Only hanya berupa saran yang mudah dibatalkan."
    },
    {
      q: "Cara memperbaiki gambar yang tidak memiliki teks alternatif adalah…",
      opsi: [
        "Menghapus gambar",
        "Klik kanan gambar → Edit Alt Text",
        "Mengubah ukuran gambar",
        "Memindahkan gambar ke header"
      ],
      jawab: 1,
      bahasan: "Edit Alt Text memungkinkan penulisan deskripsi gambar sehingga pembaca layar dapat menyampaikan isinya kepada pengguna."
    },
    {
      q: "Opsi yang dipakai untuk membuka berkas yang rusak adalah…",
      opsi: [
        "Open and Repair",
        "Recent",
        "Save As",
        "Compare"
      ],
      jawab: 0,
      bahasan: "Open and Repair diakses dari dropdown tombol Open pada dialog File → Open. Word berusaha memperbaiki struktur berkas yang rusak."
    }
  ]
},

{
  id: 24,
  judul: "Proyek Akhir: Menyusun Dokumen Profesional Lengkap",
  level: "Mahir",
  durasi: "150 menit",
  deskripsi: "Menggabungkan seluruh keterampilan menjadi satu dokumen profesional utuh: dari perencanaan, penulisan, penataan, referensi, hingga verifikasi akhir dan publikasi.",
  tujuan: [
    "Merencanakan struktur dokumen profesional sebelum menulis.",
    "Menyusun dokumen lengkap dengan sampul, daftar isi, isi, dan lampiran.",
    "Menerapkan gaya, penomoran, tabel, gambar, dan referensi secara konsisten.",
    "Menjalankan verifikasi mutu dan aksesibilitas sebelum publikasi.",
    "Menerbitkan dokumen dalam format yang tepat untuk tujuannya."
  ],
  materi: [
    {
      h: "24.1 Perencanaan Proyek",
      p: ["Sebelum menulis, tentukan empat hal: **tujuan dokumen**, **pembaca**, **struktur**, dan **format keluaran**. Keputusan ini menentukan gaya, panjang, dan tata letak dokumen."],
      tabel: {
        kepala: ["Jenis Dokumen", "Struktur Umum", "Format Keluaran"],
        rows: [
          ["Laporan Kegiatan", "Sampul, kata pengantar, daftar isi, pendahuluan, pelaksanaan, hasil, evaluasi, penutup, lampiran", "PDF dan cetak"],
          ["Proposal Usaha", "Sampul, ringkasan eksekutif, latar belakang, produk, analisis pasar, rencana keuangan, penutup", "PDF"],
          ["Skripsi/Naskah Akademik", "Sampul, abstrak, kata pengantar, daftar isi/tabel/gambar, bab I–V, daftar pustaka, lampiran", "PDF dan cetak berjilid"],
          ["SOP (Prosedur Kerja)", "Tujuan, ruang lingkup, definisi, tanggung jawab, prosedur, dokumen terkait, riwayat revisi", "PDF terkendali versi"],
          ["Surat Resmi", "Kop surat, nomor, tanggal, tujuan, isi, penutup, tanda tangan, tembusan", "PDF dan cetak"],
          ["Modul Pelatihan", "Sampul, kata pengantar, daftar isi, bab materi, latihan, kuis, daftar pustaka", "PDF dan cetak"]
        ]
      },
      steps: [
        "Tentukan topik dan tujuan dokumen dalam satu kalimat.",
        "Tentukan pembaca sasaran dan tingkat kedalaman isi.",
        "Susun kerangka bab memakai **Outline view**.",
        "Tentukan gaya, ukuran huruf, margin, dan spasi sesuai standar yang berlaku.",
        "Tetapkan tenggat untuk setiap bab agar pekerjaan terukur.",
        "Siapkan berkas templat agar penulisan dapat langsung dimulai."
      ]
    },
    {
      h: "24.2 Alur Kerja Penyusunan Dokumen Profesional",
      steps: [
        "**Tahap 1 — Persiapan:** buat dokumen dari templat, atur margin, ukuran kertas, dan gaya.",
        "**Tahap 2 — Kerangka:** susun kerangka bab di Outline view, pastikan hierarki benar.",
        "**Tahap 3 — Pengisian:** tulis isi setiap bab, terapkan gaya Heading dan Normal secara disiplin.",
        "**Tahap 4 — Objek:** sisipkan tabel, gambar, grafik, dan persamaan. Beri caption pada setiap objek.",
        "**Tahap 5 — Referensi:** tambahkan footnote, sitasi, dan daftar pustaka otomatis.",
        "**Tahap 6 — Struktur halaman:** sisipkan section break, atur header/footer, penomoran romawi dan arab.",
        "**Tahap 7 — Daftar isi:** sisipkan TOC, daftar tabel, dan daftar gambar, lalu perbarui seluruh field dengan [[Ctrl+A]] dan [[F9]].",
        "**Tahap 8 — Penyuntingan:** periksa ejaan, tata bahasa, dan konsistensi istilah dengan Editor.",
        "**Tahap 9 — Verifikasi:** jalankan Check Accessibility dan Inspect Document; perbaiki semua temuan.",
        "**Tahap 10 — Publikasi:** ekspor ke PDF dengan bookmark, cetak uji, lalu distribusikan."
      ],
      tip: "Jangan menunda perapian format sampai akhir. Terapkan gaya sejak paragraf pertama ditulis. Dokumen yang diformat sejak awal memerlukan waktu finalisasi jauh lebih singkat."
    },
    {
      h: "24.3 Daftar Periksa Mutu Dokumen",
      p: ["Gunakan daftar berikut sebelum dokumen dinyatakan selesai."],
      sub: [
        {
          h: "Struktur dan format",
          list: [
            "Sampul memuat judul, penyusun, instansi, dan tahun.",
            "Semua judul memakai gaya Heading, tanpa format manual.",
            "Penomoran halaman benar: romawi untuk bagian awal, angka arab untuk isi.",
            "Setiap bab dimulai pada halaman baru.",
            "Margin, ukuran kertas, dan spasi konsisten di seluruh dokumen.",
            "Daftar isi, daftar tabel, dan daftar gambar sudah diperbarui (F9)."
          ]
        },
        {
          h: "Isi dan referensi",
          list: [
            "Ejaan, tata bahasa, dan tanda baca sudah diperiksa dengan Editor.",
            "Semua tabel dan gambar memiliki caption bernomor.",
            "Semua kutipan memiliki sitasi dan tercantum dalam daftar pustaka.",
            "Penomoran caption sesuai urutan kemunculan.",
            "Istilah asing dan singkatan dijelaskan pada kemunculan pertama."
          ]
        },
        {
          h: "Aksesibilitas dan keamanan",
          list: [
            "Accessibility Checker tidak menemukan masalah berat.",
            "Semua gambar memiliki Alt Text.",
            "Tabel panjang memakai Header Row yang berulang.",
            "Komentar dan revisi sudah dihapus.",
            "Properti dokumen sudah diisi dan tidak memuat data pribadi yang tidak perlu.",
            "Kata sandi diterapkan bila dokumen bersifat rahasia."
          ]
        },
        {
          h: "Keluaran",
          list: [
            "Ekspor PDF berhasil dengan bookmark dari Heading.",
            "Pratinjau cetak diperiksa: tidak ada teks terpotong atau tabel terbelah.",
            "Ukuran berkas wajar dan gambar sudah dikompresi.",
            "Nama berkas deskriptif dan konsisten dengan aturan penamaan instansi."
          ]
        }
      ]
    },
    {
      h: "24.4 Publikasi dan Distribusi",
      tabel: {
        kepala: ["Keperluan", "Format dan Cara"],
        rows: [
          ["Dikirim lewat email", "PDF, ukuran di bawah 10 MB, pastikan bookmark aktif"],
          ["Dicetak dan dijilid", "DOCX atau PDF, margin mirror, gutter, cetak dua sisi"],
          ["Diterbitkan di web", "PDF, atau ekspor ke HTML bila diperlukan"],
          ["Disunting bersama tim", "DOCX di OneDrive/SharePoint dengan Track Changes dan komentar"],
          ["Diarsipkan", "PDF/A untuk penyimpanan jangka panjang, plus DOCX sebagai sumber"],
          ["Presentasi isi dokumen", "Ekspor ringkasan ke PowerPoint memakai File → Export → Export to PowerPoint"]
        ]
      },
      steps: [
        "Tentukan format akhir sesuai keperluan di atas.",
        "Untuk PDF: **File → Export → Create PDF/XPS**, aktifkan **Create bookmarks using: Headings** dan **Document structure tags for accessibility**.",
        "Untuk cetak: periksa **Print Preview**, tentukan halaman yang dicetak, dan uji satu halaman terlebih dahulu.",
        "Untuk arsip: simpan DOCX sebagai sumber dan PDF sebagai salinan final.",
        "Catat nomor versi dan tanggal pada halaman sampul atau riwayat revisi.",
        "Distribusikan melalui kanal yang disepakati dan simpan salinan di lokasi cadangan."
      ],
      tip: "Selalu simpan dua salinan: berkas sumber .docx untuk disunting dan berkas .pdf untuk dibagikan. Beri nama dengan pola konsisten, misalnya `2024-06-30 Laporan Tahunan v1.2`."
    },
    {
      h: "24.5 Pengembangan Diri Setelah Kursus",
      list: [
        "**Berlatih setiap hari** dengan dokumen nyata, bukan latihan buatan.",
        "**Telusuri fitur baru** melalui **Help → What's New** dan blog resmi Microsoft.",
        "**Pelajari keterampilan terkait:** Microsoft Excel untuk data, PowerPoint untuk presentasi, dan Word lanjutan untuk makro.",
        "**Buat pustaka pribadi:** templat, AutoText, dan makro untuk pekerjaan berulang Anda.",
        "**Ikuti sertifikasi** Microsoft Office Specialist (MOS) bila ingin pengakuan formal.",
        "**Ajarkan kepada orang lain** — cara terbaik memantapkan pemahaman.",
        "**Bergabung komunitas** seperti forum Microsoft Answers atau komunitas pengguna Office."
      ],
      p: ["Kemampuan Word yang baik bukan tentang menghafal menu, melainkan tentang memilih cara tercepat dan paling mudah dirawat untuk setiap pekerjaan dokumen."]
    }
  ],
  praktikum: {
    judul: "Menyusun Laporan Lengkap 8–12 Halaman",
    deskripsi: "Proyek akhir ini menggabungkan seluruh keterampilan kursus. Pilih salah satu tema: laporan kegiatan, proposal usaha, modul pelatihan, atau naskah akademik mini.",
    langkah: [
      "Tentukan topik dan tulis tujuan dokumen dalam satu kalimat. Simpan sebagai `Proyek Akhir - [Topik]`.",
      "Buat dokumen dari templat yang Anda susun pada Pertemuan 17, atau buat baru dengan margin 2,5 cm semua sisi dan kertas A4.",
      "Susun kerangka di **Outline view** dengan minimal 4 bab dan 2 subbab per bab. Tutup Outline view.",
      "Buat **halaman sampul**: judul, subjudul, logo, nama penyusun, instansi, dan tahun. Atur perataan vertikal **Center**.",
      "Buat section break **Next Page** setelah sampul, lalu buat halaman **KATA PENGANTAR** dan **DAFTAR ISI**.",
      "Terapkan penomoran romawi kecil (i, ii, iii) pada bagian awal dan angka arab (1, 2, 3) mulai dari bab pertama.",
      "Isi setiap bab dengan minimal tiga paragraf. Gunakan gaya Heading 1 untuk bab dan Heading 2 untuk subbab.",
      "Aktifkan **Define New Multilevel List** dan hubungkan level 1 ke Heading 1 dengan format `BAB I`, level 2 ke Heading 2 dengan format `1.1`.",
      "Sisipkan minimal satu **tabel** berisi data, dengan Header Row, gaya tabel rapi, dan caption di atasnya (label `Tabel`).",
      "Sisipkan minimal dua **gambar** dengan caption di bawahnya (label `Gambar`), Wrap Text Square, dan Alt Text terisi.",
      "Sisipkan **grafik** sederhana dari data tabel memakai Insert → Chart, lengkapi dengan judul dan label data.",
      "Tambahkan minimal tiga **footnote** dan satu **persamaan** bernomor.",
      "Tambahkan minimal tiga **sitasi** dengan gaya APA, lalu hasilkan **DAFTAR PUSTAKA** otomatis.",
      "Sisipkan **Daftar Isi** otomatis (2 tingkat), **Daftar Tabel**, dan **Daftar Gambar**.",
      "Tambahkan **daftar lampiran** dan satu lampiran berupa tabel tambahan.",
      "Perbarui seluruh field: [[Ctrl+A]] lalu [[F9]].",
      "Jalankan **Editor** untuk memeriksa ejaan dan tata bahasa; perbaiki semua temuan berat.",
      "Jalankan **Check Accessibility**; perbaiki seluruh temuan hingga bersih.",
      "Jalankan **Inspect Document**; hapus komentar, revisi, dan properti yang tidak perlu.",
      "Periksa dengan **View → Multiple Pages** pada zoom 40% untuk memastikan keseragaman tata letak dan penomoran.",
      "Ekspor ke PDF dengan **Create bookmarks using: Headings** dan aktifkan **Document structure tags for accessibility**.",
      "Simpan berkas sumber .docx dan hasil PDF. Serahkan keduanya sebagai hasil proyek akhir."
    ]
  },
  latihan: [
    "Buat daftar periksa mutu pribadi berisi minimal 15 butir dan gunakan pada dokumen berikutnya yang Anda susun.",
    "Ubah dokumen proyek akhir Anda menjadi templat agar dapat dipakai ulang untuk topik berbeda.",
    "Buat ringkasan proyek akhir dalam sebuah presentasi PowerPoint 5 slide.",
    "Bandingkan versi pertama dan versi akhir proyek Anda memakai **Review → Compare**, lalu catat seluruh perbaikan yang terjadi.",
    "Presentasikan dokumen Anda kepada rekan belajar dan minta tanggapan memakai fitur komentar pada salinan digitalnya."
  ],
  shortcut: [
    { k: "Ctrl+A lalu F9", f: "Memperbarui seluruh field dokumen" },
    { k: "Ctrl+Alt+1 / 2 / 3", f: "Menerapkan Heading 1 / 2 / 3" },
    { k: "Alt+Shift+X", f: "Menandai entri indeks" },
    { k: "Ctrl+K", f: "Menyisipkan hyperlink" },
    { k: "Ctrl+Shift+E", f: "Track Changes" },
    { k: "Ctrl+P", f: "Pratinjau dan cetak" },
    { k: "F12", f: "Save As (untuk menyimpan PDF atau salinan versi)" }
  ],
  rangkuman: [
    "Dokumen profesional dimulai dari perencanaan: tujuan, pembaca, struktur, dan format keluaran.",
    "Alur kerja sepuluh tahap memastikan tidak ada bagian yang terlewat, dari kerangka hingga publikasi.",
    "Daftar periksa mutu mencakup struktur, isi, referensi, aksesibilitas, keamanan, dan keluaran.",
    "Format publikasi dipilih sesuai keperluan: PDF untuk distribusi, DOCX untuk penyuntingan, PDF/A untuk arsip.",
    "Kemampuan Word berkembang melalui latihan pada dokumen nyata dan pembangunan pustaka pribadi."
  ],
  kuis: [
    {
      q: "Langkah pertama dalam menyusun dokumen profesional adalah…",
      opsi: [
        "Mengetik isi sebanyak mungkin",
        "Merencanakan tujuan, pembaca, struktur, dan format keluaran",
        "Memilih warna huruf",
        "Mencetak dokumen"
      ],
      jawab: 1,
      bahasan: "Perencanaan menentukan gaya, panjang, dan tata letak dokumen sehingga pekerjaan penulisan menjadi terarah dan efisien."
    },
    {
      q: "Perintah untuk memperbarui seluruh field dokumen sekaligus adalah…",
      opsi: ["Ctrl+A lalu F9", "F5", "Ctrl+Shift+F9", "Alt+F9"],
      jawab: 0,
      bahasan: "Ctrl+A menyeleksi seluruh dokumen dan F9 memperbarui semua field di dalamnya, termasuk daftar isi, caption, dan sitasi."
    },
    {
      q: "Format yang paling tepat untuk mendistribusikan dokumen final kepada pihak luar adalah…",
      opsi: ["DOCX tanpa proteksi", ".txt", "PDF dengan bookmark", ".rtf"],
      jawab: 2,
      bahasan: "PDF menjaga tata letak tetap sama di perangkat mana pun dan bookmark berbasis Heading memudahkan navigasi penerima."
    },
    {
      q: "Langkah verifikasi yang wajib dijalankan sebelum dokumen dibagikan adalah…",
      opsi: [
        "Mengganti tema",
        "Check Accessibility dan Inspect Document",
        "Menghapus daftar isi",
        "Menambah gambar"
      ],
      jawab: 1,
      bahasan: "Check Accessibility memastikan dokumen dapat diakses semua pembaca, sedangkan Inspect Document menghapus komentar, revisi, dan data pribadi tersembunyi."
    },
    {
      q: "Cara memastikan tampilan dokumen tetap sama di komputer yang tidak memiliki font khusus adalah…",
      opsi: [
        "Mengompres gambar",
        "Menyematkan font (Embed fonts in the file)",
        "Menghapus nomor halaman",
        "Mengubah margin"
      ],
      jawab: 1,
      bahasan: "Opsi Embed fonts in the file pada File → Options → Save menyimpan data font ke dalam dokumen sehingga tampilan tetap konsisten di perangkat lain."
    }
  ]
}

);
