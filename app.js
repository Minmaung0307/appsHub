// ---------- DATA: your apps ----------
const APPS = [
  {
    name: "Pāli Lessons",
    host: "pali.pannaedu.org",
    url: "https://pali.pannaedu.org",
    icon: "ri-seedling-line",
    desc: "Courses, chants, grammar & certificates",
    tags: ["education","pali","lms"]
  },
  {
    name: "Inventory",
    host: "inventory.pannaedu.org",
    url: "https://inventory.pannaedu.org",
    icon: "ri-archive-2-line",
    desc: "Stock, vendors, costs & tasks",
    tags: ["business","pos","inventory"]
  },
  {
    name: "TMF",
    host: "tmf.pannaedu.org",
    url: "https://tmf.pannaedu.org",
    icon: "ri-heart-pulse-line",
    desc: "Well-being & practice tracker",
    tags: ["wellness","tracker"]
  },
  {
    name: "OpenLearn",
    host: "openlearn.pannaedu.org",
    url: "https://openlearn.pannaedu.org",
    icon: "ri-book-open-line",
    desc: "Open courses & micro-lessons",
    tags: ["education","open"]
  },
  {
    name: "ShweLib",
    host: "shwelib.pannaedu.org",
    url: "https://shwelib.pannaedu.org",
    icon: "ri-folder-open-line",
    desc: "Digital library & media",
    tags: ["library","media"]
  },
  // add more here…
];

// ---------- Utilities ----------
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const by = (k) => (a,b)=> (a[k] > b[k] ? 1 : -1);

// Theme
function getTheme(){
  const t = localStorage.getItem("theme");
  return t || "auto";
}
function setTheme(mode){
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
  $("#themeIcon").className = mode === "light" ? "ri-moon-line" : "ri-sun-line";
}

// Render tags from all unique tags
function renderTags(apps){
  const box = $("#tagRow"); box.innerHTML = "";
  const set = new Set();
  apps.forEach(a => (a.tags||[]).forEach(t=>set.add(t)));
  const all = ["all", ...Array.from(set).sort()];
  all.forEach(t=>{
    const b = document.createElement("button");
    b.className = "pill" + (t==="all" ? " active" : "");
    b.textContent = t;
    b.dataset.tag = t;
    b.addEventListener("click", ()=>{
      $$(".pill").forEach(p=>p.classList.remove("active"));
      b.classList.add("active");
      filter();
    });
    box.appendChild(b);
  });
}

function card(app){
  return `
  <article class="tile card" data-name="${app.name.toLowerCase()}" data-tags="${(app.tags||[]).join(',')}">
    <div class="top">
      <div class="icon"><i class="${app.icon}"></i></div>
      <div>
        <h3>${app.name}</h3>
        <p>${app.desc}</p>
      </div>
    </div>
    <div class="tags">
      ${(app.tags||[]).map(t=>`<span class="tag">#${t}</span>`).join("")}
    </div>
    <a href="${app.url}" target="_self" rel="noopener" aria-label="Open ${app.name}"></a>
  </article>`;
}

function render(apps){
  const grid = $("#grid"); grid.innerHTML = apps.sort(by("name")).map(card).join("");
  $("#empty").hidden = apps.length > 0;
}

function filter(){
  const q = ($("#q").value || "").toLowerCase().trim();
  const tag = $$(".pill.active")[0]?.dataset.tag || "all";

  const out = APPS.filter(a=>{
    const hitQ = !q || a.name.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || (a.tags||[]).some(t=>t.includes(q));
    const hitT = tag==="all" || (a.tags||[]).includes(tag);
    return hitQ && hitT;
  });
  render(out);
}

// ---------- Init ----------
window.addEventListener("DOMContentLoaded", ()=>{
  // year
  $("#year").textContent = new Date().getFullYear();

  // theme
  setTheme(getTheme());
  $("#themeBtn").addEventListener("click", ()=>{
    const cur = getTheme();
    setTheme(cur === "light" ? "auto" : cur === "auto" ? "dark" : "light");
  });

  // data
  renderTags(APPS);
  render(APPS);

  // search
  $("#q").addEventListener("input", filter);
});