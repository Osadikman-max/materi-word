/* ===========================================================
   Kursus Microsoft Word — mesin aplikasi (tanpa dependensi)
   Data materi dimuat dari data-01.js … data-03.js ke window.MATERI
   =========================================================== */
(function () {
  "use strict";

  var LESSONS = (window.MATERI || []).slice().sort(function (a, b) { return a.id - b.id; });
  var STORE_KEY = "kursus-word-progress-v1";
  var THEME_KEY = "kursus-word-tema";
  var PER_PAGE = 6;

  var view = document.getElementById("view");
  var navTree = document.getElementById("nav-tree");
  var sideProgress = document.getElementById("side-progress");
  var footStat = document.getElementById("foot-stat");
  var searchBox = document.getElementById("search");
  var clearBtn = document.getElementById("btn-clear-search");
  var sidebar = document.getElementById("sidebar");
  var scrim = document.getElementById("scrim");
  var toTop = document.getElementById("to-top");

  /* ---------- util ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function rich(s) {
    // izinkan **tebal**, *miring*, `kode`, dan [[Ctrl+B]] menjadi <kbd>
    var out = esc(s);
    out = out.replace(/\[\[([^\]]+)\]\]/g, function (_, k) { return "<kbd>" + k + "</kbd>"; });
    out = out.replace(/`([^`]+)`/g, function (_, c) { return "<code>" + c + "</code>"; });
    out = out.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    out = out.replace(/(^|[^*])\*([^*]+)\*/g, "$1<i>$2</i>");
    return out;
  }
  function stripTags(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }
  function plain(lesson) {
    var parts = [lesson.judul, lesson.deskripsi || ""];
    (lesson.tujuan || []).forEach(function (t) { parts.push(t); });
    (lesson.materi || []).forEach(function (m) {
      parts.push(m.h || "");
      (m.p || []).forEach(function (x) { parts.push(x); });
      (m.list || []).forEach(function (x) { parts.push(x); });
      (m.steps || []).forEach(function (x) { parts.push(x); });
      (m.tabel ? (m.tabel.rows || []).flat().concat(m.tabel.kepala || []) : []).forEach(function (x) { parts.push(x); });
      if (m.tip) parts.push(m.tip);
      if (m.peringatan) parts.push(m.peringatan);
      if (m.catatan) parts.push(m.catatan);
    });
    if (lesson.praktikum) (lesson.praktikum.langkah || []).forEach(function (x) { parts.push(x); });
    (lesson.latihan || []).forEach(function (x) { parts.push(x); });
    (lesson.rangkuman || []).forEach(function (x) { parts.push(x); });
    return stripTags(parts.join(" ")).toLowerCase();
  }

  /* ---------- progres ---------- */
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
  }
  var progress = loadProgress();
  function isDone(id) { return progress[id] === true; }
  function doneCount() { return LESSONS.filter(function (l) { return isDone(l.id); }).length; }

  /* ---------- pengelompokan unit ---------- */
  var UNITS = [
    { nama: "Unit 1 — Fondasi & Antarmuka", range: [1, 3], ket: "Mengenal Word, mengetik, dan memformat teks." },
    { nama: "Unit 2 — Paragraf & Tata Letak Halaman", range: [4, 6], ket: "Kerapian paragraf, halaman, dan pencetakan." },
    { nama: "Unit 3 — Objek & Struktur Dokumen", range: [7, 9], ket: "Tabel, gambar, header/footer, dan seksi." },
    { nama: "Unit 4 — Produktivitas & Referensi", range: [10, 13], ket: "Cari-ganti, gaya, daftar isi, dan sitasi." },
    { nama: "Unit 5 — Mail Merge & Kolaborasi", range: [14, 16], ket: "Surat massal, pelacakan perubahan, dan reviu." },
    { nama: "Unit 6 — Template, Formulir & Otomatisasi", range: [17, 21], ket: "Template, form, dokumen panjang, simbol, dan makro." },
    { nama: "Unit 7 — Profesionalisme & Proyek Akhir", range: [22, 24], ket: "Produktivitas lanjutan, aksesibilitas, dan proyek." }
  ];
  function unitOf(id) {
    for (var i = 0; i < UNITS.length; i++) {
      if (id >= UNITS[i].range[0] && id <= UNITS[i].range[1]) return UNITS[i];
    }
    return UNITS[UNITS.length - 1];
  }

  /* ---------- render: sidebar ---------- */
  function renderProgress() {
    var d = doneCount(), t = LESSONS.length || 24;
    var pct = t ? Math.round((d / t) * 100) : 0;
    sideProgress.innerHTML =
      '<div class="prog-top"><span>Progres belajar</span><b>' + d + " / " + t + " selesai</b></div>" +
      '<div class="bar"><i style="width:' + pct + '%"></i></div>';
    footStat.textContent = "Total " + t + " pertemuan • " + pct + "% tuntas";
  }

  function renderNav(query) {
    var q = (query || "").trim().toLowerCase();
    var html = "";
    if (q) {
      var hits = LESSONS.filter(function (l) { return l._plain.indexOf(q) > -1; });
      html += '<div class="nav-head"><span class="dot"></span>Hasil pencarian (' + hits.length + ")</div>";
      if (!hits.length) {
        html += '<div class="nav-empty">Tidak ada materi yang cocok dengan “' + esc(query) + '”. Coba kata kunci lain, misalnya <b>tabel</b>, <b>mail merge</b>, atau <b>daftar isi</b>.</div>';
      } else {
        hits.forEach(function (l) { html += navLink(l); });
      }
      navTree.innerHTML = html;
      return;
    }
    html += '<div class="nav-head"><span class="dot"></span>Beranda</div>' +
      '<a class="nav-link" href="#/" data-nav="home"><span class="nav-num">★</span><span class="nav-t">Silabus &amp; Peta Materi<small>Ringkasan 24 pertemuan</small></span></a>';
    UNITS.forEach(function (u) {
      var list = LESSONS.filter(function (l) { return l.id >= u.range[0] && l.id <= u.range[1]; });
      if (!list.length) return;
      html += '<div class="nav-group"><div class="nav-head"><span class="dot"></span>' + esc(u.nama) + "</div>";
      list.forEach(function (l) { html += navLink(l); });
      html += "</div>";
    });
    navTree.innerHTML = html;
  }

  function navLink(l) {
    return '<a class="nav-link' + (isDone(l.id) ? " done" : "") + '" href="#/pertemuan/' + l.id + '" data-nav="' + l.id + '">' +
      '<span class="nav-num">' + (isDone(l.id) ? "✓" : l.id) + "</span>" +
      '<span class="nav-t">' + esc(l.judul) + "<small>Pertemuan " + l.id + " • " + esc(l.level || "Dasar") + "</small></span></a>";
  }

  function markActive(id) {
    Array.prototype.forEach.call(navTree.querySelectorAll(".nav-link"), function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === String(id));
    });
  }

  /* ---------- render: beranda ---------- */
  function pageHome() {
    var d = doneCount(), t = LESSONS.length || 24;
    var pct = t ? Math.round((d / t) * 100) : 0;
    var h = "";
    h += '<section class="hero">' +
      '<div class="tagline">Kursus Mandiri • Microsoft Word</div>' +
      "<h1>Menguasai Microsoft Word dari Nol hingga Mahir dalam 24 Pertemuan</h1>" +
      "<p>Kurikulum terstruktur berisi teori singkat, langkah praktik yang bisa langsung diikuti, latihan mandiri, dan kuis. " +
      "Cocok untuk pelajar, mahasiswa, staf administrasi, guru, dan siapa pun yang ingin bekerja cepat dan rapi dengan Word.</p>" +
      '<div class="hero-stats">' +
      '<span class="chip">📚 24 pertemuan</span>' +
      '<span class="chip">🗂️ 7 unit pembelajaran</span>' +
      '<span class="chip">🧪 Praktikum tiap pertemuan</span>' +
      '<span class="chip">✅ Kuis interaktif</span>' +
      '<span class="chip">🖨️ Siap dicetak / PDF</span>' +
      "</div></section>";

    h += '<h2 class="sec">📈 Progres Anda</h2><div class="card">' +
      '<div class="prog-top"><span>Pertemuan yang sudah Anda tandai selesai</span><b>' + d + " / " + t + " (" + pct + '%)</b></div>' +
      '<div class="bar" style="height:11px"><i style="width:' + pct + '%"></i></div>' +
      '<p style="margin:12px 0 0;font-size:13.6px;color:var(--muted)">Buka sebuah pertemuan, pelajari materinya, lalu tekan tombol ' +
      "<b>Tandai selesai</b>. Status tersimpan otomatis di peramban Anda (tanpa server).</p></div>";

    h += '<h2 class="sec">🧭 Cara Menggunakan Situs Ini</h2><div class="grid2">' +
      mini("1. Ikuti berurutan", "Mulai dari Pertemuan 1. Setiap pertemuan dibangun di atas keterampilan pertemuan sebelumnya.") +
      mini("2. Praktikkan langsung", "Buka Microsoft Word di sisi layar lain dan kerjakan bagian <b>Praktikum</b> selangkah demi selangkah.") +
      mini("3. Kerjakan latihan", "Latihan di akhir pertemuan melatih ingatan dan kebiasaan kerja yang benar.") +
      mini("4. Uji dengan kuis", "Kuis memberi umpan balik langsung beserta pembahasan jawabannya.") +
      "</div>";

    h += '<h2 class="sec">🗺️ Silabus 24 Pertemuan</h2>';
    h += '<p style="color:var(--muted);font-size:14px">Kurikulum dibagi menjadi tujuh unit tematik. Klik pertemuan mana pun untuk membuka materinya.</p>';
    h += '<div class="syl">';
    UNITS.forEach(function (u) {
      var list = LESSONS.filter(function (l) { return l.id >= u.range[0] && l.id <= u.range[1]; });
      if (!list.length) return;
      h += '<div class="unit"><div class="unit-head"><h3>' + esc(u.nama) + "</h3>" +
        '<span class="range">Pertemuan ' + u.range[0] + "–" + u.range[1] + "</span></div>" +
        "<p style=\"margin:0;padding:12px 18px 0;color:var(--muted);font-size:13.4px\">" + esc(u.ket) + "</p>" +
        '<ul style="margin-top:8px">';
      list.forEach(function (l) {
        h += '<li><a href="#/pertemuan/' + l.id + '"><span class="n">' + l.id + '</span><span class="t">' + esc(l.judul) +
          "<small>" + esc(l.deskripsi || "") + "</small></span>" +
          (isDone(l.id) ? '<span class="st">✓ Selesai</span>' : "") + "</a></li>";
      });
      h += "</ul></div>";
    });
    h += "</div>";

    h += '<h2 class="sec">🎯 Capaian Akhir Kursus</h2><div class="card"><ul class="check">' +
      ["Menguasai antarmuka dan alur kerja dasar Word secara percaya diri",
        "Memformat dokumen panjang yang konsisten dengan Styles dan tema",
        "Membuat tabel, grafik, gambar, dan objek dokumen yang tertata rapi",
        "Menyusun laporan/skripsi lengkap: sampul, daftar isi, sitasi, daftar pustaka",
        "Membuat surat massal (mail merge) untuk kebutuhan kerja nyata",
        "Bekerja kolaboratif dengan Track Changes, komentar, dan proteksi dokumen",
        "Mengotomatisasi pekerjaan berulang dengan makro dan Quick Parts",
        "Menghasilkan dokumen aksesibel, aman, dan siap cetak"
      ].map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") +
      "</ul></div>";

    h += '<div class="callout tip"><strong>Tip belajar</strong>Belajar Word paling cepat dengan <b>melakukan</b>, bukan menghafal menu. ' +
      "Alokasikan 60–90 menit per pertemuan: 25 menit membaca, 45 menit praktik, 15 menit latihan dan kuis.</div>";

    return h;
  }

  function mini(t, p) {
    return '<div class="mini-card"><h4>' + esc(t) + "</h4><p>" + p + "</p></div>";
  }

  function tableHtml(t) {
    var h = '<div class="table-wrap"><table class="dt"><thead><tr>' +
      (t.kepala || []).map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") +
      "</tr></thead><tbody>" +
      (t.rows || []).map(function (r) {
        return "<tr>" + r.map(function (c) { return "<td>" + rich(c) + "</td>"; }).join("") + "</tr>";
      }).join("") +
      "</tbody></table></div>";
    if (t.catatan) h += '<p style="font-size:13px;color:var(--muted)">' + rich(t.catatan) + "</p>";
    return h;
  }

  /* ---------- render: pertemuan ---------- */
  function pageLesson(l) {
    var idx = LESSONS.indexOf(l);
    var prev = LESSONS[idx - 1], next = LESSONS[idx + 1];
    var u = unitOf(l.id);
    var h = "";

    h += '<div class="crumb"><a href="#/">Beranda</a><span class="sep">/</span><span>' + esc(u.nama) + "</span><span class=\"sep\">/</span><b>Pertemuan " + l.id + "</b></div>";

    h += '<header class="lesson-head"><div class="badges">' +
      '<span class="badge">Pertemuan ' + l.id + " dari " + LESSONS.length + "</span>" +
      '<span class="badge level">' + esc(l.level || "Dasar") + "</span>" +
      '<span class="badge time">⏱ ' + esc(l.durasi || "90 menit") + "</span>" +
      (isDone(l.id) ? '<span class="done-badge">✓ Sudah ditandai selesai</span>' : "") +
      "</div><h1>" + esc(l.judul) + '</h1><p class="lead">' + rich(l.deskripsi || "") + "</p></header>";

    h += '<div class="actions">' +
      '<button class="btn' + (isDone(l.id) ? " ok" : "") + '" id="btn-done" data-id="' + l.id + '">' +
      (isDone(l.id) ? "✓ Tandai belum selesai" : "Tandai selesai") + "</button>" +
      '<a class="btn ghost" href="#/pertemuan/' + l.id + '" id="btn-print-lesson">🖨️ Cetak pertemuan ini</a>' +
      "</div>";

    if (l.tujuan && l.tujuan.length) {
      h += '<h2 class="sec">🎯 Tujuan Pembelajaran</h2><div class="card"><p style="font-size:13.6px;color:var(--muted);margin-top:0">Setelah mengikuti pertemuan ini, Anda diharapkan mampu:</p><ul class="check">' +
        l.tujuan.map(function (t) { return "<li>" + rich(t) + "</li>"; }).join("") + "</ul></div>";
    }

    h += '<h2 class="sec">📘 Materi</h2>';
    (l.materi || []).forEach(function (m, i) {
      h += '<h3 class="sub">' + esc(m.h) + "</h3>";
      if (m.intro) h += "<p>" + rich(m.intro) + "</p>";
      (m.p || []).forEach(function (p) { h += "<p>" + rich(p) + "</p>"; });
      if (m.list) {
        h += '<ul class="clean">' + m.list.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul>";
      }
      if (m.steps) {
        h += '<ol class="steps">' + m.steps.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ol>";
      }
      if (m.tabel) h += tableHtml(m.tabel);
      if (m.sub) {
        m.sub.forEach(function (s) {
          h += '<h4 class="mini">' + esc(s.h) + "</h4>";
          (s.p || []).forEach(function (p) { h += "<p>" + rich(p) + "</p>"; });
          if (s.list) h += '<ul class="clean">' + s.list.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul>";
          if (s.steps) h += '<ol class="steps">' + s.steps.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ol>";
          if (s.tabel) h += tableHtml(s.tabel);
          if (s.tip) h += '<div class="callout tip"><strong>Tip</strong>' + rich(s.tip) + "</div>";
          if (s.catatan) h += '<div class="callout"><strong>Catatan</strong>' + rich(s.catatan) + "</div>";
        });
      }
      if (m.tip) h += '<div class="callout tip"><strong>Tip</strong>' + rich(m.tip) + "</div>";
      if (m.peringatan) h += '<div class="callout warn"><strong>Perhatian</strong>' + rich(m.peringatan) + "</div>";
      if (m.catatan) h += '<div class="callout"><strong>Catatan</strong>' + rich(m.catatan) + "</div>";
      if (i < l.materi.length - 1) h += "";
    });

    if (l.praktikum) {
      h += '<h2 class="sec">🧪 Praktikum: ' + esc(l.praktikum.judul || "Latihan Terbimbing") + "</h2>";
      if (l.praktikum.deskripsi) h += "<p>" + rich(l.praktikum.deskripsi) + "</p>";
      h += '<div class="card"><ol class="steps">' +
        (l.praktikum.langkah || []).map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ol></div>";
    }

    if (l.latihan && l.latihan.length) {
      h += '<h2 class="sec">✍️ Latihan Mandiri</h2><div class="card"><ol class="clean">' +
        l.latihan.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ol></div>";
    }

    if (l.shortcut && l.shortcut.length) {
      h += '<h2 class="sec">⌨️ Pintasan Berguna</h2><div class="table-wrap"><table class="dt"><thead><tr><th>Pintasan</th><th>Fungsi</th></tr></thead><tbody>' +
        l.shortcut.map(function (s) {
          return "<tr><td><kbd>" + esc(s.k) + "</kbd></td><td>" + rich(s.f) + "</td></tr>";
        }).join("") + "</tbody></table></div>";
    }

    if (l.rangkuman && l.rangkuman.length) {
      h += '<h2 class="sec">📌 Rangkuman</h2><div class="card"><ul class="check">' +
        l.rangkuman.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul></div>";
    }

    if (l.kuis && l.kuis.length) {
      h += '<h2 class="sec">✅ Kuis Pertemuan ' + l.id + "</h2>";
      h += '<div class="quiz" id="quiz">';
      l.kuis.forEach(function (q, qi) {
        h += '<div class="q" data-q="' + qi + '"><div class="qt"><i>' + (qi + 1) + ".</i>" + rich(q.q) + "</div>";
        (q.opsi || []).forEach(function (o, oi) {
          h += '<label class="opt" data-o="' + oi + '"><input type="radio" name="q' + qi + '" value="' + oi + '"><span>' + rich(o) + "</span></label>";
        });
        h += '<div class="bahasan" hidden></div></div>';
      });
      h += '<div class="quiz-actions"><button class="btn" id="btn-check">Periksa Jawaban</button>' +
        '<button class="btn ghost" id="btn-reset">Ulangi</button>' +
        '<span class="score" id="score"></span></div></div>';
    }

    h += '<div class="pager">';
    h += prev ? '<a href="#/pertemuan/' + prev.id + '"><small>← Sebelumnya</small><span>Pertemuan ' + prev.id + ": " + esc(prev.judul) + "</span></a>"
      : '<a href="#/"><small>← Kembali</small><span>Silabus &amp; Peta Materi</span></a>';
    h += next ? '<a class="next" href="#/pertemuan/' + next.id + '"><small>Selanjutnya →</small><span>Pertemuan ' + next.id + ": " + esc(next.judul) + "</span></a>"
      : '<a class="next" href="#/"><small>Selesai →</small><span>Kembali ke Silabus</span></a>';
    h += "</div>";

    return h;
  }

  /* ---------- interaksi halaman ---------- */
  function bindLesson(l) {
    var btn = document.getElementById("btn-done");
    if (btn) {
      btn.addEventListener("click", function () {
        progress[l.id] = !isDone(l.id);
        if (!progress[l.id]) delete progress[l.id];
        saveProgress(progress);
        route();
        renderProgress();
      });
    }
    var printBtn = document.getElementById("btn-print-lesson");
    if (printBtn) {
      printBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.print();
      });
    }
    var check = document.getElementById("btn-check");
    if (check) {
      check.addEventListener("click", function () {
        var benar = 0, total = l.kuis.length;
        l.kuis.forEach(function (q, qi) {
          var box = document.querySelector('.q[data-q="' + qi + '"]');
          var picked = box.querySelector('input:checked');
          var bahasan = box.querySelector(".bahasan");
          Array.prototype.forEach.call(box.querySelectorAll(".opt"), function (op) {
            op.classList.remove("correct", "wrong");
          });
          box.querySelectorAll(".opt")[q.jawab].classList.add("correct");
          if (picked) {
            var val = parseInt(picked.value, 10);
            if (val === q.jawab) benar++;
            else box.querySelectorAll(".opt")[val].classList.add("wrong");
          }
          if (q.bahasan) { bahasan.innerHTML = "<b>Pembahasan:</b> " + rich(q.bahasan); bahasan.hidden = false; }
        });
        var sc = document.getElementById("score");
        var persen = Math.round((benar / total) * 100);
        var pesan = persen === 100 ? "🎉 Sempurna!" : persen >= 70 ? "👍 Bagus, pertahankan!" : "📖 Baca ulang materinya, lalu coba lagi.";
        sc.textContent = "Skor: " + benar + "/" + total + " (" + persen + "%) — " + pesan;
        sc.style.color = persen >= 70 ? "var(--ok)" : "var(--accent)";
      });
    }
    var reset = document.getElementById("btn-reset");
    if (reset) {
      reset.addEventListener("click", function () {
        document.querySelectorAll('#quiz input[type="radio"]').forEach(function (r) { r.checked = false; });
        document.querySelectorAll("#quiz .opt").forEach(function (o) { o.classList.remove("correct", "wrong"); });
        document.querySelectorAll("#quiz .bahasan").forEach(function (b) { b.hidden = true; });
        var sc = document.getElementById("score");
        if (sc) sc.textContent = "";
      });
    }
  }

  /* ---------- router ---------- */
  function route() {
    var hash = location.hash.replace(/^#\/?/, "");
    var m = /^pertemuan\/(\d+)/.exec(hash);
    closeMenu();

    if (m) {
      var id = parseInt(m[1], 10);
      var l = LESSONS.filter(function (x) { return x.id === id; })[0];
      if (!l) { location.hash = "#/"; return; }
      document.title = "P" + l.id + " — " + l.judul + " | Kursus Microsoft Word";
      view.innerHTML = pageLesson(l);
      markActive(l.id);
      bindLesson(l);
    } else {
      document.title = "Kursus Microsoft Word — 24 Pertemuan dari Nol";
      view.innerHTML = pageHome();
      markActive("home");
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    renderProgress();
  }

  /* ---------- menu mobile ---------- */
  function openMenu() {
    sidebar.classList.add("open");
    scrim.hidden = false;
    document.getElementById("btn-menu").setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    sidebar.classList.remove("open");
    scrim.hidden = true;
    var b = document.getElementById("btn-menu");
    if (b) b.setAttribute("aria-expanded", "false");
  }

  /* ---------- pencarian ---------- */
  var searchTimer = null;
  function doSearch() {
    var q = searchBox.value;
    clearBtn.hidden = !q;
    renderNav(q);
    if (q.trim()) {
      var hits = LESSONS.filter(function (l) { return l._plain.indexOf(q.trim().toLowerCase()) > -1; });
      var q2 = q.trim();
      var h = '<h2 class="sec">🔍 Hasil Pencarian: “' + esc(q2) + '”</h2>';
      if (!hits.length) {
        h += '<div class="no-result">Tidak ada pertemuan yang memuat kata kunci tersebut.<br>Coba istilah lain seperti <b>tabel</b>, <b>gambar</b>, <b>daftar isi</b>, <b>mail merge</b>, atau <b>makro</b>.</div>';
      } else {
        h += '<p style="color:var(--muted);font-size:14px">Ditemukan di ' + hits.length + " pertemuan. Klik untuk membuka materinya.</p><div class=\"syl\">";
        hits.forEach(function (l) {
          var snip = snippet(l, q2);
          h += '<div class="unit"><ul style="padding:10px 12px"><li><a href="#/pertemuan/' + l.id + '"><span class="n">' + l.id + '</span><span class="t">' + esc(l.judul) +
            "<small>" + snip + "</small></span>" + (isDone(l.id) ? '<span class="st">✓</span>' : "") + "</a></li></ul></div>";
        });
        h += "</div>";
      }
      view.innerHTML = h;
      markActive("");
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      route();
    }
  }
  function snippet(l, q) {
    var full = plainSource(l);
    var i = full.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(l.deskripsi || "");
    var start = Math.max(0, i - 60), end = Math.min(full.length, i + 110);
    var frag = (start > 0 ? "… " : "") + full.slice(start, end) + (end < full.length ? " …" : "");
    var safe = esc(frag).replace(new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>");
    return safe;
  }
  function plainSource(l) {
    var parts = [l.judul, l.deskripsi || ""];
    (l.tujuan || []).forEach(function (t) { parts.push(t); });
    (l.materi || []).forEach(function (m) {
      parts.push(m.h || "");
      (m.p || []).forEach(function (x) { parts.push(x); });
      (m.list || []).forEach(function (x) { parts.push(x); });
      (m.steps || []).forEach(function (x) { parts.push(x); });
      if (m.tip) parts.push(m.tip);
      if (m.peringatan) parts.push(m.peringatan);
      if (m.catatan) parts.push(m.catatan);
    });
    (l.latihan || []).forEach(function (x) { parts.push(x); });
    return stripTags(parts.join(" "));
  }

  /* ---------- tema ---------- */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
    var theme = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    document.getElementById("btn-theme").addEventListener("click", function () {
      var now = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", now);
      try { localStorage.setItem(THEME_KEY, now); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- halaman statis untuk cetak ---------- */
  function printAll() {
    var html = '<h1 style="font-size:22px">Kursus Microsoft Word — 24 Pertemuan</h1>' +
      '<p style="color:#555">Ringkasan seluruh silabus. Untuk mencetak satu pertemuan lengkap, buka pertemuan itu lalu tekan tombol Cetak.</p>';
    UNITS.forEach(function (u) {
      var list = LESSONS.filter(function (l) { return l.id >= u.range[0] && l.id <= u.range[1]; });
      html += "<h2>" + esc(u.nama) + "</h2><ol>";
      list.forEach(function (l) { html += "<li><b>" + esc(l.judul) + "</b> — " + esc(l.deskripsi || "") + "</li>"; });
      html += "</ol>";
    });
    view.innerHTML = html;
    window.print();
  }

  /* ---------- init ---------- */
  function init() {
    if (!LESSONS.length) {
      view.innerHTML = '<div class="no-result"><b>Data materi belum termuat.</b><br>Pastikan berkas <code>assets/js/data-01.js</code>, <code>data-02.js</code>, dan <code>data-03.js</code> ada di folder yang sama.</div>';
      return;
    }
    LESSONS.forEach(function (l) { l._plain = plain(l); });
    initTheme();
    renderProgress();
    renderNav("");

    document.getElementById("btn-menu").addEventListener("click", function () {
      sidebar.classList.contains("open") ? closeMenu() : openMenu();
    });
    scrim.addEventListener("click", closeMenu);
    document.getElementById("btn-print").addEventListener("click", printAll);
    clearBtn.addEventListener("click", function () {
      searchBox.value = "";
      doSearch();
      searchBox.focus();
    });
    searchBox.addEventListener("input", function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(doSearch, 180);
    });
    searchBox.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { searchBox.value = ""; doSearch(); }
    });
    window.addEventListener("hashchange", function () {
      if (searchBox.value.trim()) { searchBox.value = ""; clearBtn.hidden = true; renderNav(""); }
      route();
    });
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("show", window.scrollY > 500);
    });
    toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); searchBox.focus(); }
    });

    route();
    if (!location.hash) location.hash = "#/";
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
