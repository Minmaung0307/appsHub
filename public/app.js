// ---------- DATA: your apps ----------
const APPS = [
  {
    name: "Pāli Lessons",
    host: "pali.pannaedu.org",
    url: "https://pali.pannaedu.org",
    icon: "ri-seedling-line",
    hero: "/img/pali.png",
    desc: [
      "Learn Pāli systematically — from beginner to advanced.",
      "Includes chanting guides, vocabulary lists, and grammar notes.",
      "Audio-visual lessons for modern learners of the ancient language.",
      "Empowering monks, students, and lay practitioners worldwide."
    ],
    tags: ["education","pali","learning"]
  },
  {
    name: "College Portal",
    host: "college.pannaedu.org",
    url: "https://college.pannaedu.org",
    icon: "ri-community-line",
    hero: "/img/college.png",
    desc: [
      "Central hub for campus updates and announcements.",
      "View schedules, events, and academic resources in one place.",
      "Online access to results, attendance, and assignments.",
      "Designed to connect teachers, students, and alumni together."
    ],
    tags: ["college","community","education"]
  },
  {
    name: "Inventory",
    host: "inventory.pannaedu.org",
    url: "https://inventory.pannaedu.org",
    icon: "ri-archive-2-line",
    hero: "/img/inventory.png",
    desc: [
      "Manage items, stock levels, and thresholds.",
      "Simple controls for adjustments and alerts.",
      "Supports categories, pricing, and COGS view.",
      "Built for monasteries, offices, and shops."
    ],
    tags: ["business","management", "stock", "inventory"]
  },
  {
    name: "TMF Tracker",
    host: "tmf.pannaedu.org",
    url: "https://tmf.pannaedu.org",
    icon: "ri-heart-pulse-line",
    hero: "/img/tmf.png",
    desc: [
      "Discover Theravāda Buddhist temples across the United States.",
    "Search by state, city, or temple name with interactive map view.",
    "View temple details, contact info, and schedule of activities.",
    "Connect with your nearest monastery and upcoming events easily."
    ],
    tags: ["temples", "buddhism", "directory", "usa"]
  },
  {
    name: "OpenLearn",
    host: "ihub.pannaedu.org",
    url: "https://ihub.pannaedu.org",
    icon: "ri-book-open-line",
    hero: "/img/openlearn.png",
    desc: [
      "Short courses and micro lessons in one place.",
      "Mix of text, audio, and simple quizzes.",
      "Open access for curious learners of all ages.",
      "Perfect for sharing community knowledge."
    ],
    tags: ["education","learning","courses"]
  },
  {
    name: "ShweLib",
    host: "lib.pannaedu.org",
    url: "https://lib.pannaedu.org",
    icon: "ri-folder-open-line",
    hero: "/img/lib.png",
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
    hero: "/img/meals.png",
    desc: [
      "Browse daily meals and donation schedules.",
      "Helps kitchens coordinate and reduce waste.",
      "Simple overview for donors and volunteers.",
      "Clear, visual, and easy to maintain."
    ],
    tags: ["food","meals","community"]
  },
  {
    name: "iLearn",
    host: "ilearn.pannaedu.org",
    url: "https://ilearn.pannaedu.org",
    icon: "ri-restaurant-2-line",
    hero: "/img/ilearn.png",
    desc: [
      "Self-paced online courses for lifelong learners.",
      "Includes certifications and gamified learning paths.",
      "Track your lessons, progress, and achievements.",
      "Created for modern, flexible education on the go."
    ],
    tags: ["education", "courses", "certificates"]
  },
  {
    name: "iCal",
    host: "ical.pannaedu.org",
    url: "https://ical.pannaedu.org",
    icon: "ri-restaurant-2-line",
    hero: "/img/ical.png",
    desc: [
      "Smart calendar showing lunar, festival, and cultural days.",
      "Includes Myanmar holidays, Pāli observances, and events.",
      "Option to add custom reminders and notes easily.",
      "Syncs beautifully with your device calendar."
    ],
    tags: ["calendar", "myanmar", "events"]
  },
  {
    name: "OBX",
    host: "obx.pannaedu.org",
    url: "https://obx.pannaedu.org",
    icon: "ri-restaurant-2-line",
    hero: "/img/obx.png",
    desc: [
      "Real-time Outer Banks event guide and map viewer.",
      "Find concerts, seafood festivals, marathons, and art fairs.",
      "Auto-updates with verified local tourism data sources.",
      "Plan your trips across Nags Head, Manteo, and Kitty Hawk."
    ],
    tags: ["events", "travel", "outerbanks"]
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

const HERO_REMOTE = [
  "https://source.unsplash.com/800x400/?kids,learning",
  "https://source.unsplash.com/800x400/?students,library",
  "https://source.unsplash.com/800x400/?children,reading",
  "https://source.unsplash.com/800x400/?classroom,smile",
  "https://source.unsplash.com/800x400/?girl,study",
  "https://source.unsplash.com/800x400/?boy,computer",
  "https://source.unsplash.com/800x400/?friends,study",
  "https://source.unsplash.com/800x400/?youth,education",
  "https://source.unsplash.com/800x400/?books,colorful",
  "https://source.unsplash.com/800x400/?kids,creative"
];

const HERO_IMAGES = [
  "/img/college.png",
  "/img/food.png",
  "/img/inventory.png",
  "/img/obx.png",
  "/img/openlearn.png",
  "/img/pali.png",
  "/img/lib.png",
  "/img/tmf.png",
  "/img/ical.png",
  "/img/ilearn.png"
];

function stableIndex(key, len) {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) >>> 0;
  }
  return h % len;
}

function pickHero(app, index) {
  const key  = (app.name || "") + "|" + (app.host || "") + "|" + index;
  const grad = HERO_BACKGROUNDS[index % HERO_BACKGROUNDS.length];

  // 1) app-specific hero (✅ primary)
  if (app.hero) {
    return `url('${app.hero}')`;
  }

  // 2) local predefined hero images (optional shared pool)
  if (HERO_IMAGES && HERO_IMAGES.length) {
    const img = HERO_IMAGES[stableIndex(key, HERO_IMAGES.length)];
    return `url('${img}')`;
  }

  // 3) remote random education images
  if (HERO_REMOTE && HERO_REMOTE.length) {
    const rimg = HERO_REMOTE[stableIndex(key, HERO_REMOTE.length)];
    return `url('${rimg}')`;
  }

  // 4) fallback: gradient only
  return grad;
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
  const lines = Array.isArray(app.desc)
    ? app.desc
    : String(app.desc || "").split("\n");
  const first = lines[0] || "";
  const rest  = lines.slice(1, 4);
  const heroBg = pickHero(app, index);

  return `
  <article class="tile card"
           data-name="${app.name.toLowerCase()}"
           data-tags="${(app.tags||[]).join(',')}">
    <div class="hero" style="background-image:${heroBg};"></div>
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