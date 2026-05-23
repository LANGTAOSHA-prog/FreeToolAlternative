const SHEET_ID = '把这里换成你的Google表格ID';
const SHEET_NAME = 'tools';

let tools = [];

const $ = (s) => document.querySelector(s);

async function loadTools() {
  const status = $('#status');
  const grid = $('#toolGrid');

  if (status) status.textContent = '正在读取 Google Sheets...';

  try {
    const url =
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}&cache=${Date.now()}`;

    const res = await fetch(url);
    const text = await res.text();

    const rows = text.trim().split('\n').map(row => row.split(','));
    const headers = rows[0].map(h => h.replace(/"/g, '').trim());

    tools = rows.slice(1).map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = (row[i] || '').replace(/"/g, '').trim();
      });
      return obj;
    }).filter(item => item.name && item.slug);

    if (status) status.textContent = `Google Sheets · ${tools.length} tools`;

    if (grid) {
      grid.innerHTML = tools.map(tool => `
        <article class="tool-card">
          <div class="tool-top">
            <span class="badge">${tool.type || tool.category || 'Tool'}</span>
            ${String(tool.featured).toLowerCase() === 'true' ? '<span class="featured">★</span>' : ''}
          </div>

          <h3>${tool.name}</h3>
          <p>${tool.description || ''}</p>

          <div class="meta">
            ${tool.category || 'Other'} · ${tool.slug}
          </div>

          <div class="actions">
            <a href="./pages/${tool.slug}.html" class="secondary">
              查看详情
            </a>

            <a href="${tool.website}" target="_blank" rel="noopener noreferrer">
              打开官网
            </a>
          </div>
        </article>
      `).join('');
    }

  } catch (err) {
    console.error(err);
    if (status) status.textContent = 'Google Sheets 读取失败，请检查表格是否公开。';
  }
}

loadTools();
