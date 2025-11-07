// ---------- DATA: your apps ----------
const APPS = [
  {
    name: "Pāli Lessons",
    host: "pali.pannaedu.org",
    url: "https://pali.pannaedu.org",
    icon: "ri-seedling-line",
    desc: [
      "Structured Pāli lessons from zero to advanced.",
      "Audio chanting, vocabulary, and grammar drills.",
      "Track your learning progress and achievements.",
      "Ideal for monks, students, and devotees."
    ],
    tags: ["education","pali","lms"]
  },
  {
    name: "College Portal",
    host: "college.pannaedu.org",
    url: "https://college.pannaedu.org",
    icon: "ri-community-line",
    desc: [
      "Campus news, announcements, and activities.",
      "Exam schedules and academic information hub.",
      "Photo galleries from events and ceremonies.",
      "Designed for students, teachers, and staff."
    ],
    tags: ["college","community","news"]
  },
  {
    name: "Inventory",
    host: "inventory.pannaedu.org",
    url: "https://inventory.pannaedu.org",
    icon: "ri-archive-2-line",
    desc: [
      "Manage items, stock levels, and thresholds.",
      "Simple controls for adjustments and alerts.",
      "Supports categories, pricing, and COGS view.",
      "Built for monasteries, offices, and shops."
    ],
    tags: ["business","pos","inventory"]
  },
  {
    name: "TMF Tracker",
    host: "tmf.pannaedu.org",
    url: "https://tmf.pannaedu.org",
    icon: "ri-heart-pulse-line",
    desc: [
      "Track daily habits and well-being metrics.",
      "Gentle visual insights for self-reflection.",
      "Mobile-friendly, distraction-free layout.",
      "Designed for mindful personal practice."
    ],
    tags: ["wellness","tracker","mindfulness"]
  },
  {
    name: "OpenLearn",
    host: "openlearn.pannaedu.org",
    url: "https://openlearn.pannaedu.org",
    icon: "ri-book-open-line",
    desc: [
      "Short courses and micro lessons in one place.",
      "Mix of text, audio, and simple quizzes.",
      "Open access for curious learners of all ages.",
      "Perfect for sharing community knowledge."
    ],
    tags: ["education","open","courses"]
  },
  {
    name: "ShweLib",
    host: "shwelib.pannaedu.org",
    url: "https://shwelib.pannaedu.org",
    icon: "ri-folder-open-line",
    desc: [
      "Digital library for texts, audio, and video.",
      "Searchable collections for study and reference.",
      "Curated resources for Buddhist studies.",
      "Accessible from web and mobile devices."
    ],
    tags: ["library","media","resources"]
  },
  {
    name: "FoodFinder",
    host: "food.pannaedu.org",
    url: "https://food.pannaedu.org",
    icon: "ri-restaurant-2-line",
    desc: [
      "Browse daily meals and donation schedules.",
      "Helps kitchens coordinate and reduce waste.",
      "Simple overview for donors and volunteers.",
      "Clear, visual, and easy to maintain."
    ],
    tags: ["food","meals","donation"]
  }
];
// ---------- Utilities ----------
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const by = (k) => (a,b)=> (a[k] > b[k] ? 1 : -1);

// Hero background presets (image-like gradients)
const HERO_BACKGROUNDS = [
  "linear-gradient(135deg,#2b7a76,#92e6e1)",
  "linear-gradient(135deg,#4338ca,#a855f7)",
  "linear-gradient(135deg,#0f766e,#22c55e)",
  "linear-gradient(135deg,#1d4ed8,#38bdf8)",
  "linear-gradient(135deg,#78350f,#f97316)",
  "linear-gradient(135deg,#7c3aed,#ec4899)"
];

function pickHeroImage(app, index) {
  // try image based on app.host or app.name
  const base = `/img/${(app.host || app.name || "").split(".")[0].toLowerCase()}.jpg`;
  return base || HERO_BACKGROUNDS[index % HERO_BACKGROUNDS.length];
}

function pickHeroBg(i) {
  return HERO_BACKGROUNDS[i % HERO_BACKGROUNDS.length];
}

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
  const box = $("#tagRow"); if (!box) return;
  box.innerHTML = "";
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

// Card with hero top + multi-line desc
function card(app, index){
  const lines = Array.isArray(app.desc) ? app.desc : String(app.desc || "").split("\n");
  const first = lines[0] || "";
  const rest  = lines.slice(1, 4); // up to 4 lines total
  const hero  = pickHeroImage(app, index);

  return `
  <article class="tile card"
           data-name="${app.name.toLowerCase()}"
           data-tags="${(app.tags||[]).join(',')}">
    <div class="hero" style="background-image:url('${hero}');"></div>
    <div class="top">
      <div class="icon"><i class="${app.icon}"></i></div>
      <div>
        <h3>${app.name}</h3>
        <p>${first}</p>
      </div>
    </div>
    <div class="body-lines">
      ${rest.map(l => `<p>${l}</p>`).join("")}
    </div>
    <div class="tags">
      ${(app.tags||[]).map(t=>`<span class="tag">#${t}</span>`).join("")}
    </div>
    <a href="${app.url}" target="_self" rel="noopener" aria-label="Open ${app.name}"></a>
  </article>`;
}

function render(apps){
  const grid = $("#grid"); if (!grid) return;
  grid.innerHTML = apps
    .slice()
    .sort(by("name"))
    .map((app,i)=>card(app,i))
    .join("");
  const empty = $("#empty");
  if (empty) empty.hidden = apps.length > 0;
}

function filter(){
  const qEl = $("#q");
  const q = (qEl?.value || "").toLowerCase().trim();
  const tag = $$(".pill.active")[0]?.dataset.tag || "all";

  const out = APPS.filter(a=>{
    const text = [
      a.name,
      ...(Array.isArray(a.desc) ? a.desc : [a.desc]),
      ...(a.tags || [])
    ].join(" ").toLowerCase();
    const hitQ = !q || text.includes(q);
    const hitT = tag === "all" || (a.tags||[]).includes(tag);
    return hitQ && hitT;
  });
  render(out);
}

// ---------- Init ----------
window.addEventListener("DOMContentLoaded", ()=>{
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();

  setTheme(getTheme());
  const themeBtn = $("#themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", ()=>{
      const cur = getTheme();
      const next = cur === "light" ? "auto" : cur === "auto" ? "dark" : "light";
      setTheme(next);
    });
  }

  renderTags(APPS);
  render(APPS);

  const q = $("#q");
  if (q) q.addEventListener("input", filter);
});