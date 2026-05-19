
function getLang(){return localStorage.getItem('fta_lang') || (navigator.language||'en').slice(0,2).replace('zh','zh').replace('ja','ja').replace('vi','vi') || 'en'}
function t(k){const lang=getLang();return (I18N[lang]||I18N.en)[k]||I18N.en[k]||k}
function applyI18n(){
  document.documentElement.lang=getLang();
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)})
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder)})
  const sel=document.querySelector('#langSelect'); if(sel) sel.value=getLang();
}
function setLang(lang){localStorage.setItem('fta_lang',lang); applyI18n(); renderCards && renderCards();}
function cardHTML(tool){
 const desc = `${tool.title} · ${t('category')}: ${tool.category}`;
 return `<article class="card" data-title="${tool.title.toLowerCase()} ${tool.category.toLowerCase()} ${tool.items.join(' ').toLowerCase()}">
   <h3>${tool.title}</h3>
   <div class="meta"><span class="tag">${tool.category}</span><span class="tag">Free</span><span class="tag">Open Source</span></div>
   <p>${desc}</p>
   <a class="open" href="pages/${tool.slug}.html">${t('open')} →</a>
 </article>`;
}
function renderCards(){
 const wrap=document.querySelector('#cards'); if(!wrap) return;
 wrap.innerHTML=SITE_TOOLS.map(cardHTML).join('');
 filterCards();
}
function filterCards(){
 const q=(document.querySelector('#searchInput')?.value||'').trim().toLowerCase();
 const cards=[...document.querySelectorAll('.card')]; let count=0;
 cards.forEach(c=>{const ok=!q || c.dataset.title.includes(q); c.style.display=ok?'block':'none'; if(ok) count++;});
 const empty=document.querySelector('#empty'); if(empty) empty.style.display=count?'none':'block';
}
document.addEventListener('DOMContentLoaded',()=>{applyI18n();renderCards();document.querySelector('#searchInput')?.addEventListener('input',filterCards);document.querySelector('#langSelect')?.addEventListener('change',e=>setLang(e.target.value));});
