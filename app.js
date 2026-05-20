import { db } from './firebase.js';
import {
  collection,
  getDocs,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js';

import { fallbackTools, i18n } from './tools-data.js';

let currentLang = localStorage.getItem('fta_lang') || 'zh';
let tools = [];
let activeCategory = 'all';
let lastSource = 'Firestore';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

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
    let snapshot;

    try {
      snapshot = await getDocs(
        query(collection(db, 'tools'), orderBy('name'))
      );
    } catch (e) {
      snapshot = await getDocs(collection(db, 'tools'));
    }

    tools = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    if (!tools.length) {
      tools = fallbackTools || [];
      lastSource = t('fallback');
    } else {
      lastSource = 'Firestore';
    }

  } catch (err) {
    console.warn('Firestore load failed:', err);
    tools = fallbackTools || [];
    lastSource = t('fallback');
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
      tool.slug,
      tool.keywords
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
    const slug = safeSlug(tool.slug || tool.id || tool.name);

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
  <a href="pages/${tool.slug}.html" class="secondary">
    View Details
  </a>

  <a href="${escapeSafeWebsite(tool.website)}"
     target="_blank"
     rel="noopener noreferrer">
    ${t('visit')}
  </a>
</div>
       

          <a href="./pages/${esc(slug)}.html">
            ${t('detail')}
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
