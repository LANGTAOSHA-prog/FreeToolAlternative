const SHEET_ID = '你的Google表格ID';
const SHEET_NAME = 'tools';

let currentLang = localStorage.getItem('fta_lang') || 'zh';
let tools = [];
let activeCategory = 'all';
let lastSource = 'Google Sheets';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const i18n = {
  zh: {
    title: 'FreeToolAlternative',
    subtitle: '免费开源工具与付费软件平替导航',
    search: '搜索工具、分类或关键词',
    all: '全部',
    visit: '打开官网',
    detail: '查看详情',
    db: 'Google Sheets 动态工具库',
    loading: '正在读取 Google 表格数据...',
    empty: '暂无数据，请检查 Google Sheets 是否公开。'
  },
  en: {
    title: 'FreeToolAlternative',
    subtitle: 'Free and open-source alternatives to paid software',
    search: 'Search tools, categories or keywords',
    all: 'All',
    visit: 'Visit Website',
    detail: 'Details',
    db: 'Google Sheets Tool Database',
    loading: 'Loading Google Sheets data...',
    empty: 'No data found.'
  },
  ja: {
    title: 'FreeToolAlternative',
    subtitle: '無料・オープンソース代替ツールナビ',
    search: 'ツール、カテゴリ、キーワードを検索',
    all: 'すべて',
    visit: '公式サイト',
    detail: '詳細',
    db: 'Google Sheets ツールデータベース',
    loading: 'Google Sheets データを読み込み中...',
    empty: 'データがありません。'
  },
  vi: {
    title: 'FreeToolAlternative',
    subtitle: 'Danh mục công cụ miễn phí và mã nguồn mở',
    search: 'Tìm công cụ, danh mục hoặc từ khóa',
    all: 'Tất cả',
    visit: 'Mở trang web',
    detail: 'Chi tiết',
    db: 'Cơ sở dữ liệu Google Sheets',
    loading: 'Đang tải dữ liệu từ Google Sheets...',
    empty: 'Không có dữ liệu.'
  }
};

function t(k) {
  return (i18n[currentLang] || i18n.zh)?.[k] || i18n.zh?.[k] || k;
}

function esc(v) {
  return String(v ?? '').replace(/[&<>'"]/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[m]));
}

function safeWebsite(url) {
  return /^https?:\/\//i.test(url || '') ? url : '#';
}

function safeSlug(slug) {
  return String(slug || 'tool')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-');
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let value = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      value += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      row.push(value);
      value = '';
    } else if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (value || row.length) {
        row.push(value);
        rows.push(row);
        row = [];
        value = '';
      }
      if (char === '\r' && next === '\n') i++;
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
  if (!rows.length) return [];

  const headers = rows[0].map(h => h.trim());

  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (row[i] || '').trim();
    });
    return obj;
  }).filter(item => item.name && item.slug);
}

function applyLang() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;

  $$('[data-title]').forEach(el => el.textContent = t('title'));

  const subtitle = $('[data-subtitle]');
  if (subtitle) subtitle.textContent = t('subtitle');

  const dbTitle = $('[data-db]');
  if (dbTitle) dbTitle.textContent = t('db');

  const search = $('#searchInput');
  if (search) search.placeholder = t('search');

  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

async function loadTools() {
  const status = $('#status');
  if (status) status.textContent = t('loading');

  try {
    const url =
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}&cache=${Date.now()}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Google Sheets load failed');
    }

    const csvText = await response.text();
    const rows = parseCSV(csvText);
    const data = rowsToObjects(rows);

    tools = data
      .filter(tool => {
        const status = String(tool.status || '').toLowerCase();
        return status !== 'hidden' && status !== 'draft';
      })
      .map(tool => ({
        name: tool.name,
        slug: safeSlug(tool.slug),
        category: tool.category || 'Other',
        description: tool.description || '',
        website: tool.website || '',
        type: tool.type || tool.category || 'Tool',
        featured: String(tool.featured).toLowerCase() === 'true'
      }));

    lastSource = 'Google Sheets';

  } catch (err) {
    console.warn(err);
    tools = [];
    lastSource = 'Google Sheets Error';
  }

  render();
}

function categories() {
  return ['all', ...new Set(tools.map(x => x.category || 'Other'))];
}

function renderCategories() {
  const box = $('#categoryList');
  if (!box) return;

  box.innerHTML = categories().map(c => `
    <button class="cat-btn ${c === activeCategory ? 'active' : ''}" data-cat="${esc(c)}">
      ${c === 'all' ? t('all') : esc(c)}
    </button>
  `).join('');

  $$('.cat-btn').forEach(btn => {
    btn.onclick = () => {
      activeCategory = btn.dataset.cat;
      render();
    };
  });
}

function renderTools() {
  const searchInput = $('#searchInput');
  const q = (searchInput?.value || '').trim().toLowerCase();

  const filtered = tools.filter(tool => {
    const text = [
      tool.name,
      tool.category,
      tool.description,
      tool.type,
      tool.slug
    ].join(' ').toLowerCase();

    const catOk =
      activeCategory === 'all' ||
      (tool.category || 'Other') === activeCategory;

    return catOk && (!q || text.includes(q));
  });

  const status = $('#status');
  if (status) {
    status.textContent = `${lastSource} · ${filtered.length} tools`;
  }

  const grid = $('#toolGrid');
  if (!grid) return;

  grid.innerHTML = filtered.map(tool => {
    const slug = safeSlug(tool.slug || tool.name);
    const detailUrl = `./pages/${esc(slug)}.html`;
    const websiteUrl = esc(safeWebsite(tool.website));

    return `
      <article class="tool-card">
        <div class="tool-top">
          <span class="badge">${esc(tool.type || tool.category || 'Tool')}</span>
          ${tool.featured ? '<span class="featured">★</span>' : ''}
        </div>

        <h3>${esc(tool.name)}</h3>
        <p>${esc(tool.description)}</p>

        <div class="meta">
          ${esc(tool.category || 'Other')} · ${esc(slug)}
        </div>

        <div class="actions">
          <a href="${detailUrl}" class="secondary">
            ${t('detail')}
          </a>

          <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer">
            ${t('visit')}
          </a>
        </div>
      </article>
    `;
  }).join('') || `<p class="empty">${t('empty')}</p>`;
}

function render() {
  applyLang();
  renderCategories();
  renderTools();
}

$$('.lang-btn').forEach(btn => {
  btn.onclick = () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('fta_lang', currentLang);
    render();
  };
});

const searchInput = $('#searchInput');
if (searchInput) {
  searchInput.addEventListener('input', renderTools);
}

loadTools();
