import fs from "fs";
import path from "path";

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSApIyBhFDXXWPWNtPBUKYQXGjGcfJql_LhWgsfPeMB8blj_2tFDa_o_yHxkUedj-ADOg3nfboJb6NW/pub?gid=98810460&single=true&output=csv";
const SITE_URL = "https://langtaosha-prog.github.io/FreeToolAlternative";

const rootDir = process.cwd();
const pagesDir = path.join(rootDir, "pages");

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let value = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      value += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (value || row.length) {
        row.push(value);
        rows.push(row);
        row = [];
        value = "";
      }
      if (char === "\r" && next === "\n") i++;
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  return rows;
}

function rowsToObjects(rows) {
  const headers = rows[0].map(h => h.trim());

  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (row[i] || "").trim();
    });
    return obj;
  });
}

function listItems(text = "") {
  return String(text)
    .split(";")
    .map(x => x.trim())
    .filter(Boolean)
    .map(x => `<li>${escapeHtml(x)}</li>`)
    .join("\n");
}

function langSection(tool, lang, label) {
  const desc = tool[`description_${lang}`] || tool.description_en || tool.description_zh || "";
  const features = tool[`features_${lang}`] || "";
  const pros = tool[`pros_${lang}`] || "";
  const cons = tool[`cons_${lang}`] || "";
  const keywords = tool[`keywords_${lang}`] || "";

  const titles = {
    zh: {
      intro: "一句话定位",
      what: `${tool.name} 是什么？`,
      features: "核心功能",
      pros: "对比优势",
      cons: "缺点",
      keywords: "SEO关键词",
      visit: "打开官网"
    },
    en: {
      intro: "Quick Summary",
      what: `What is ${tool.name}?`,
      features: "Main Features",
      pros: "Pros",
      cons: "Cons",
      keywords: "SEO Keywords",
      visit: "Visit Official Website"
    },
    ja: {
      intro: "概要",
      what: `${tool.name} とは？`,
      features: "主な機能",
      pros: "メリット",
      cons: "デメリット",
      keywords: "SEOキーワード",
      visit: "公式サイトを開く"
    },
    vi: {
      intro: "Tóm tắt",
      what: `${tool.name} là gì?`,
      features: "Tính năng chính",
      pros: "Ưu điểm",
      cons: "Nhược điểm",
      keywords: "Từ khóa SEO",
      visit: "Mở website chính thức"
    }
  };

  const t = titles[lang];

  return `
    <section data-lang="${lang}">
      <section class="hero">
        <span class="badge">${escapeHtml(tool.type || tool.category || "Tool")}</span>
        <h1>${escapeHtml(tool.name)}</h1>
        <p class="subtitle">${escapeHtml(desc)}</p>

        <div class="hero-actions">
          <a class="btn" href="${escapeHtml(tool.website)}" target="_blank" rel="noopener noreferrer">
            ${t.visit}
          </a>
        </div>
      </section>

      <section class="content">
        <h2>${t.intro}</h2>
        <p>${escapeHtml(desc)}</p>

        <h2>${t.what}</h2>
        <p>${escapeHtml(desc)}</p>

        <h2>${t.features}</h2>
        <ul>
          ${listItems(features)}
        </ul>

        <h2>${t.pros}</h2>
        <ul>
          ${listItems(pros)}
        </ul>

        <h2>${t.cons}</h2>
        <ul>
          ${listItems(cons)}
        </ul>

        <h2>${t.keywords}</h2>
        <p>${escapeHtml(keywords)}</p>
      </section>
    </section>
  `;
}

function pageTemplate(tool) {
  const description = tool.description_en || tool.description_zh || "";
  const title = `${tool.name} - ${tool.category || "Tool"} | FreeToolAlternative`;

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${SITE_URL}/pages/${escapeHtml(tool.slug)}.html">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <link rel="stylesheet" href="../style.css">

  <style>
    .lang-switcher {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 20px 0;
    }

    .lang-switcher button {
      padding: 8px 14px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.2);
      background: rgba(255,255,255,.08);
      color: inherit;
      cursor: pointer;
    }

    .lang-switcher button.active {
      background: #2563eb;
      color: #fff;
      border-color: #2563eb;
    }

    [data-lang] {
      display: none;
    }

    [data-lang].active {
      display: block;
    }
  </style>
</head>

<body>
  <header class="topbar">
    <a href="../index.html" class="logo">FreeToolAlternative</a>
  </header>

  <main class="page">
    <a href="../index.html" class="back-link">← Back Home</a>

    <div class="lang-switcher">
      <button data-btn="zh" onclick="setLang('zh')">中文</button>
      <button data-btn="en" onclick="setLang('en')">English</button>
      <button data-btn="ja" onclick="setLang('ja')">日本語</button>
      <button data-btn="vi" onclick="setLang('vi')">Tiếng Việt</button>
    </div>

    ${langSection(tool, "zh", "中文")}
    ${langSection(tool, "en", "English")}
    ${langSection(tool, "ja", "日本語")}
    ${langSection(tool, "vi", "Tiếng Việt")}
  </main>

  <script>
    function setLang(lang) {
      localStorage.setItem('fta_detail_lang', lang);
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

      document.querySelectorAll('[data-lang]').forEach(section => {
        section.classList.toggle('active', section.dataset.lang === lang);
      });

      document.querySelectorAll('[data-btn]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.btn === lang);
      });
    }

    const savedLang = localStorage.getItem('fta_detail_lang') || localStorage.getItem('fta_lang') || 'zh';
    setLang(savedLang);
  </script>
</body>
</html>`;
}

function sitemapTemplate(tools) {
  const urls = [
    `${SITE_URL}/`,
    ...tools.map(tool => `${SITE_URL}/pages/${tool.slug}.html`)
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
  </url>`).join("\n")}
</urlset>`;
}

const response = await fetch(SHEET_CSV_URL);
if (!response.ok) {
  throw new Error("Failed to fetch Google Sheets CSV");
}

const csvText = await response.text();
const rows = parseCSV(csvText);
const tools = rowsToObjects(rows)
  .filter(tool => tool.name && tool.slug)
  .filter(tool => !["hidden", "draft"].includes(String(tool.status || "").toLowerCase()));

for (const tool of tools) {
  const filePath = path.join(pagesDir, `${tool.slug}.html`);
  fs.writeFileSync(filePath, pageTemplate(tool), "utf8");
  console.log(`Generated: pages/${tool.slug}.html`);
}

fs.writeFileSync(
  path.join(rootDir, "sitemap.xml"),
  sitemapTemplate(tools),
  "utf8"
);

console.log(`Generated ${tools.length} detail pages and sitemap.xml`);
