/* Uji asap (smoke test) tanpa browser.
   Menyediakan DOM tiruan minimal, memuat ketiga berkas data dan app.js,
   lalu merender halaman beranda serta seluruh 24 halaman pertemuan
   untuk memastikan tidak ada galat runtime dan tidak ada "undefined"/"NaN". */
const fs = require("fs");
const path = require("path");

const jsDir = path.join(__dirname, "..", "assets", "js");
const errs = [];
const handlers = { window: {}, document: {} };

function makeEl(id) {
  const el = {
    id: id || "",
    innerHTML: "",
    textContent: "",
    title: "",
    hidden: false,
    value: "",
    style: {},
    _attrs: {},
    classList: {
      _s: new Set(),
      add(c) { this._s.add(c); },
      remove(c) { this._s.delete(c); },
      toggle(c, on) { if (on === undefined) { this._s.has(c) ? this._s.delete(c) : this._s.add(c); } else if (on) this._s.add(c); else this._s.delete(c); },
      contains(c) { return this._s.has(c); }
    },
    setAttribute(k, v) { this._attrs[k] = v; },
    getAttribute(k) { return this._attrs[k] === undefined ? null : this._attrs[k]; },
    addEventListener() {},
    removeEventListener() {},
    focus() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
    appendChild() {},
    click() {}
  };
  return el;
}

const els = {};
function getEl(id) {
  if (!els[id]) els[id] = makeEl(id);
  return els[id];
}

global.document = {
  readyState: "complete",
  title: "",
  documentElement: makeEl("html"),
  body: makeEl("body"),
  getElementById: getEl,
  createElement: () => makeEl(""),
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener(type, fn) { handlers.document[type] = fn; },
  execCommand() {}
};

const store = {};
global.localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};

global.location = {
  _hash: "#/",
  get hash() { return this._hash; },
  set hash(v) { this._hash = v; if (handlers.window.hashchange) handlers.window.hashchange(); },
  href: "file:///index.html",
  replace(v) { this._hash = v; }
};

global.window = {
  MATERI: [],
  location: global.location,
  scrollY: 0,
  matchMedia: () => ({ matches: false, addEventListener() {} }),
  addEventListener(type, fn) { handlers.window[type] = fn; },
  scrollTo() {},
  print() {},
  getComputedStyle: () => ({})
};
global.scrollTo = () => {};
global.print = () => {};

// muat data + aplikasi
for (const f of ["data-01.js", "data-02.js", "data-03.js", "app.js"]) {
  const p = path.join(jsDir, f);
  try {
    new Function(fs.readFileSync(p, "utf8"))();
    console.log(`dimuat: ${f}`);
  } catch (e) {
    errs.push(`Gagal memuat ${f}: ${e.message}`);
  }
}

const view = getEl("view");
const lessons = global.window.MATERI;

function periksa(label, html) {
  if (!html || html.length < 200) errs.push(`${label}: keluaran terlalu pendek (${html ? html.length : 0} karakter)`);
  if (/undefined/.test(html)) errs.push(`${label}: memuat teks "undefined"`);
  if (/\bNaN\b/.test(html)) errs.push(`${label}: memuat "NaN"`);
  if (/\[object Object\]/.test(html)) errs.push(`${label}: memuat "[object Object]"`);
  return html.length;
}

let total = 0;
total += periksa("Beranda", view.innerHTML);
console.log(`Beranda            : ${view.innerHTML.length} karakter HTML`);

if (!/Pertemuan/.test(view.innerHTML)) errs.push("Beranda: tidak memuat daftar pertemuan");

for (const l of lessons) {
  errorsBefore = errs.length;
  global.location.hash = "#/pertemuan/" + l.id;
  const html = view.innerHTML;
  const len = periksa(`Pertemuan ${l.id}`, html);
  if (!html.includes(l.judul.slice(0, 24))) errs.push(`Pertemuan ${l.id}: judul tidak muncul pada keluaran`);
  if (l.kuis && l.kuis.length && !html.includes('id="btn-check"')) errs.push(`Pertemuan ${l.id}: tombol kuis tidak dirender`);
  if (!html.includes('id="btn-done"')) errs.push(`Pertemuan ${l.id}: tombol tandai selesai tidak dirender`);
  total += len;
  console.log(`Pertemuan ${String(l.id).padStart(2, "0")}     : ${String(len).padStart(6)} karakter HTML  ${errs.length === errorsBefore ? "ok" : "MASALAH"}`);
}

console.log(`\nTotal keluaran HTML: ${total.toLocaleString("id-ID")} karakter`);
console.log(`Status progres di sidebar: ${getEl("side-progress").innerHTML.includes("Progres belajar") ? "terender" : "TIDAK terender"}`);
console.log(`Navigasi sidebar        : ${getEl("nav-tree").innerHTML.length} karakter`);

if (errs.length) {
  console.log("\n=== MASALAH ===");
  errs.forEach(e => console.log(" - " + e));
  process.exit(1);
} else {
  console.log("\nUji asap lulus: beranda dan 24 halaman pertemuan terender tanpa galat.");
}
