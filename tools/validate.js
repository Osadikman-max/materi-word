/* Pemeriksa data materi — dijalankan dengan node untuk memastikan
   seluruh berkas data valid dan struktur setiap pertemuan lengkap. */
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "assets", "js");
global.window = {};

const files = ["data-01.js", "data-02.js", "data-03.js"];
const errs = [];

for (const f of files) {
  const p = path.join(dir, f);
  if (!fs.existsSync(p)) { errs.push(`Berkas tidak ditemukan: ${f}`); continue; }
  try {
    new Function(fs.readFileSync(p, "utf8"))();
    console.log(`OK  sintaks  ${f}`);
  } catch (e) {
    errs.push(`Sintaks gagal pada ${f}: ${e.message}`);
  }
}

const L = global.window.MATERI || [];
console.log(`\nJumlah pertemuan termuat: ${L.length}`);

const ids = L.map(l => l.id).sort((a, b) => a - b);
for (let i = 1; i <= 24; i++) {
  if (!ids.includes(i)) errs.push(`Pertemuan ${i} tidak ada`);
}
if (new Set(ids).size !== ids.length) errs.push("Ada id pertemuan yang duplikat");

let totalKuis = 0, totalMateri = 0, totalPraktikum = 0, totalShortcut = 0;

for (const l of L) {
  const tag = `P${l.id}`;
  const need = ["judul", "level", "durasi", "deskripsi", "tujuan", "materi", "praktikum", "latihan", "rangkuman", "kuis"];
  for (const k of need) if (!l[k]) errs.push(`${tag}: bidang "${k}" kosong/tidak ada`);
  if (!Array.isArray(l.tujuan) || l.tujuan.length < 3) errs.push(`${tag}: tujuan kurang dari 3 butir`);
  if (!Array.isArray(l.materi) || l.materi.length < 3) errs.push(`${tag}: materi kurang dari 3 bagian`);
  if (!l.praktikum || !Array.isArray(l.praktikum.langkah) || l.praktikum.langkah.length < 8)
    errs.push(`${tag}: langkah praktikum kurang dari 8`);
  if (!Array.isArray(l.latihan) || l.latihan.length < 4) errs.push(`${tag}: latihan kurang dari 4 butir`);
  if (!Array.isArray(l.rangkuman) || l.rangkuman.length < 4) errs.push(`${tag}: rangkuman kurang dari 4 butir`);
  if (!Array.isArray(l.kuis) || l.kuis.length < 5) errs.push(`${tag}: kuis kurang dari 5 soal`);

  (l.materi || []).forEach((m, i) => {
    if (!m.h) errs.push(`${tag}: materi[${i}] tanpa judul bagian`);
    if (!m.p && !m.list && !m.steps && !m.tabel && !m.sub)
      errs.push(`${tag}: materi[${i}] "${m.h}" tidak memiliki isi`);
    if (m.sub) m.sub.forEach((s, j) => {
      if (!s.h) errs.push(`${tag}: materi[${i}].sub[${j}] tanpa judul`);
      if (!s.p && !s.list && !s.steps && !s.tabel) errs.push(`${tag}: materi[${i}].sub[${j}] "${s.h}" kosong`);
    });
  });

  (l.kuis || []).forEach((q, i) => {
    if (!q.q) errs.push(`${tag}: kuis[${i}] tanpa pertanyaan`);
    if (!Array.isArray(q.opsi) || q.opsi.length < 3) errs.push(`${tag}: kuis[${i}] opsi kurang dari 3`);
    if (typeof q.jawab !== "number" || q.jawab < 0 || q.jawab >= (q.opsi || []).length)
      errs.push(`${tag}: kuis[${i}] indeks jawaban di luar rentang`);
    if (!q.bahasan) errs.push(`${tag}: kuis[${i}] tanpa pembahasan`);
  });

  totalKuis += (l.kuis || []).length;
  totalMateri += (l.materi || []).length;
  totalPraktikum += (l.praktikum && l.praktikum.langkah || []).length;
  totalShortcut += (l.shortcut || []).length;
}

console.log(`Total bagian materi   : ${totalMateri}`);
console.log(`Total langkah praktikum: ${totalPraktikum}`);
console.log(`Total soal kuis       : ${totalKuis}`);
console.log(`Total entri pintasan  : ${totalShortcut}`);

// tentukan panjang teks untuk gambaran volume materi
const words = L.map(l => JSON.stringify(l).split(/\s+/).length).reduce((a, b) => a + b, 0);
console.log(`Perkiraan jumlah kata  : ${words.toLocaleString("id-ID")}`);

if (errs.length) {
  console.log("\n=== MASALAH DITEMUKAN ===");
  errs.forEach(e => console.log(" - " + e));
  process.exit(1);
} else {
  console.log("\nSemua pemeriksaan lulus.");
}
