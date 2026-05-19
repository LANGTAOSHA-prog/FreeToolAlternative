const translations = {
  zh:{navTools:'工具库',navCategories:'分类',navRanking:'热门排行',navFavorites:'收藏',navSubmit:'提交工具',eyebrow:'免费 · 开源 · 在线工具替代品',heroTitle:'发现更便宜、更好用的工具替代方案',heroText:'搜索 AI、设计、办公、开发、视频、图片、PDF、SEO 等工具，快速找到免费或开源替代品。',searchPlaceholder:'搜索工具，例如 ChatGPT、Canva、PDF、Notion',clearBtn:'清空',browseBtn:'浏览工具',submitBtn:'提交工具',heroCardText:'更快找到替代方案，节省时间和订阅费用。',categoryTitle:'热门分类',categoryText:'按使用场景快速筛选工具。',toolTitle:'精选替代工具',toolText:'静态数据，可直接修改 tools 数组扩展内容。',emptyState:'没有找到相关工具。',rankingTitle:'本地热门排行',rankingText:'根据当前浏览器的点击量自动排序，静态站也能显示热门工具。',resetStats:'重置统计',favoritesTitle:'我的收藏',favoritesText:'收藏保存在本机浏览器，不需要数据库。',favoriteEmpty:'还没有收藏工具。',compareTitle:'适合做 SEO 的页面结构',compareText:'后期可以批量生成 “某工具替代品” 页面，获取搜索流量。',submitTitle:'提交你的工具',submitText:'静态版可先跳转邮箱或表单。后期可接入数据库、审核后台和付费置顶。',submitEmail:'邮件提交',footerText:'Built for useful tools discovery.',all:'全部',details:'详情',visit:'访问',favorite:'收藏',favorited:'已收藏',share:'分享',copyLink:'复制链接',copied:'链接已复制',bestFor:'适合',alternativeTo:'替代',pricing:'价格',platform:'平台',clicks:'点击',category:'分类'},
  en:{navTools:'Tools',navCategories:'Categories',navRanking:'Ranking',navFavorites:'Favorites',navSubmit:'Submit',eyebrow:'Free · Open-source · Online alternatives',heroTitle:'Discover cheaper and better tool alternatives',heroText:'Search AI, design, office, developer, video, image, PDF and SEO tools to quickly find free or open-source alternatives.',searchPlaceholder:'Search tools, e.g. ChatGPT, Canva, PDF, Notion',clearBtn:'Clear',browseBtn:'Browse Tools',submitBtn:'Submit Tool',heroCardText:'Find alternatives faster and save time and subscription costs.',categoryTitle:'Popular Categories',categoryText:'Filter tools by use case.',toolTitle:'Featured Alternatives',toolText:'Static data. Edit the tools array to add more content.',emptyState:'No matching tools found.',rankingTitle:'Local Popular Ranking',rankingText:'Ranked by clicks in this browser. Works without a backend.',resetStats:'Reset stats',favoritesTitle:'My Favorites',favoritesText:'Favorites are saved in this browser without a database.',favoriteEmpty:'No favorite tools yet.',compareTitle:'SEO-friendly page structure',compareText:'Later you can generate “Alternative to...” pages in bulk for search traffic.',submitTitle:'Submit your tool',submitText:'The static version can link to email or forms. Later you can add a database, moderation and paid placements.',submitEmail:'Submit by Email',footerText:'Built for useful tools discovery.',all:'All',details:'Details',visit:'Visit',favorite:'Favorite',favorited:'Saved',share:'Share',copyLink:'Copy link',copied:'Link copied',bestFor:'Best for',alternativeTo:'Alternative to',pricing:'Pricing',platform:'Platform',clicks:'clicks',category:'Category'},
  ja:{navTools:'ツール',navCategories:'カテゴリ',navRanking:'人気順',navFavorites:'お気に入り',navSubmit:'投稿',eyebrow:'無料 · オープンソース · オンライン代替ツール',heroTitle:'より安く、使いやすい代替ツールを発見',heroText:'AI、デザイン、業務、開発、動画、画像、PDF、SEOツールから無料・オープンソース代替を探せます。',searchPlaceholder:'ChatGPT、Canva、PDF、Notion などを検索',clearBtn:'クリア',browseBtn:'ツールを見る',submitBtn:'ツール投稿',heroCardText:'代替ツールを素早く見つけ、時間とサブスク費用を節約。',categoryTitle:'人気カテゴリ',categoryText:'用途別にツールを絞り込み。',toolTitle:'おすすめ代替ツール',toolText:'静的データです。tools配列を編集して追加できます。',emptyState:'該当するツールが見つかりません。',rankingTitle:'ローカル人気ランキング',rankingText:'このブラウザ内のクリック数で自動並び替えします。',resetStats:'統計をリセット',favoritesTitle:'お気に入り',favoritesText:'お気に入りはこのブラウザに保存されます。',favoriteEmpty:'お気に入りはまだありません。',compareTitle:'SEO向けページ構造',compareText:'将来的に「〇〇の代替」ページを量産して検索流入を狙えます。',submitTitle:'ツールを投稿',submitText:'静的版ではメールやフォームへリンクできます。後でDB、審査、広告枠を追加可能。',submitEmail:'メールで投稿',footerText:'Built for useful tools discovery.',all:'すべて',details:'詳細',visit:'アクセス',favorite:'保存',favorited:'保存済み',share:'共有',copyLink:'リンクコピー',copied:'コピーしました',bestFor:'向いている用途',alternativeTo:'代替対象',pricing:'価格',platform:'対応',clicks:'クリック',category:'カテゴリ'},
  vi:{navTools:'Công cụ',navCategories:'Danh mục',navRanking:'Xếp hạng',navFavorites:'Yêu thích',navSubmit:'Gửi công cụ',eyebrow:'Miễn phí · Mã nguồn mở · Công cụ thay thế online',heroTitle:'Tìm công cụ thay thế rẻ hơn và tốt hơn',heroText:'Tìm công cụ AI, thiết kế, văn phòng, lập trình, video, ảnh, PDF và SEO để khám phá lựa chọn miễn phí hoặc mã nguồn mở.',searchPlaceholder:'Tìm công cụ, ví dụ ChatGPT, Canva, PDF, Notion',clearBtn:'Xóa',browseBtn:'Xem công cụ',submitBtn:'Gửi công cụ',heroCardText:'Tìm lựa chọn thay thế nhanh hơn, tiết kiệm thời gian và chi phí đăng ký.',categoryTitle:'Danh mục phổ biến',categoryText:'Lọc công cụ theo nhu cầu sử dụng.',toolTitle:'Công cụ thay thế nổi bật',toolText:'Dữ liệu tĩnh. Có thể sửa mảng tools để thêm nội dung.',emptyState:'Không tìm thấy công cụ phù hợp.',rankingTitle:'Xếp hạng phổ biến cục bộ',rankingText:'Tự sắp xếp theo lượt click trên trình duyệt hiện tại.',resetStats:'Đặt lại thống kê',favoritesTitle:'Yêu thích của tôi',favoritesText:'Mục yêu thích lưu trong trình duyệt, không cần database.',favoriteEmpty:'Chưa có công cụ yêu thích.',compareTitle:'Cấu trúc phù hợp SEO',compareText:'Sau này có thể tạo hàng loạt trang “Công cụ thay thế cho...” để lấy traffic tìm kiếm.',submitTitle:'Gửi công cụ của bạn',submitText:'Bản tĩnh có thể liên kết tới email hoặc biểu mẫu. Sau này thêm database, duyệt bài và vị trí trả phí.',submitEmail:'Gửi qua Email',footerText:'Built for useful tools discovery.',all:'Tất cả',details:'Chi tiết',visit:'Truy cập',favorite:'Yêu thích',favorited:'Đã lưu',share:'Chia sẻ',copyLink:'Sao chép link',copied:'Đã sao chép',bestFor:'Phù hợp',alternativeTo:'Thay thế cho',pricing:'Giá',platform:'Nền tảng',clicks:'click',category:'Danh mục'}
};

const categories = [
  {id:'ai', icon:'🤖', name:{zh:'AI工具',en:'AI Tools',ja:'AIツール',vi:'Công cụ AI'}, desc:{zh:'写作、翻译、摘要、聊天',en:'Writing, translation, summaries',ja:'文章作成・翻訳・要約',vi:'Viết, dịch, tóm tắt'}},
  {id:'design', icon:'🎨', name:{zh:'设计工具',en:'Design',ja:'デザイン',vi:'Thiết kế'}, desc:{zh:'海报、图片、品牌视觉',en:'Posters, images, branding',ja:'画像・ポスター・ブランド',vi:'Poster, ảnh, thương hiệu'}},
  {id:'office', icon:'📄', name:{zh:'办公效率',en:'Office',ja:'業務効率',vi:'Văn phòng'}, desc:{zh:'文档、笔记、表格',en:'Docs, notes, sheets',ja:'文書・メモ・表計算',vi:'Tài liệu, ghi chú'}},
  {id:'dev', icon:'💻', name:{zh:'开发工具',en:'Developer',ja:'開発',vi:'Lập trình'}, desc:{zh:'代码、API、部署',en:'Code, API, deployment',ja:'コード・API・デプロイ',vi:'Code, API, triển khai'}},
  {id:'video', icon:'🎬', name:{zh:'视频工具',en:'Video',ja:'動画',vi:'Video'}, desc:{zh:'剪辑、压缩、转换',en:'Edit, compress, convert',ja:'編集・圧縮・変換',vi:'Cắt ghép, nén, đổi định dạng'}},
  {id:'image', icon:'🖼️', name:{zh:'图片工具',en:'Image',ja:'画像',vi:'Hình ảnh'}, desc:{zh:'压缩、拼接、去背景',en:'Compress, merge, remove bg',ja:'圧縮・結合・背景削除',vi:'Nén, ghép, xóa nền'}},
  {id:'pdf', icon:'📕', name:{zh:'PDF工具',en:'PDF',ja:'PDF',vi:'PDF'}, desc:{zh:'合并、拆分、转换',en:'Merge, split, convert',ja:'結合・分割・変換',vi:'Gộp, tách, chuyển đổi'}},
  {id:'seo', icon:'📈', name:{zh:'SEO工具',en:'SEO',ja:'SEO',vi:'SEO'}, desc:{zh:'关键词、排名、流量',en:'Keywords, rankings, traffic',ja:'キーワード・順位・流入',vi:'Từ khóa, xếp hạng, traffic'}}
];

const tools = [
  {slug:'open-webui',name:'Open WebUI',category:'ai',alt:'ChatGPT',price:'Free / Open-source',platform:'Web / Self-hosted',url:'https://openwebui.com/',best:{zh:'自建AI聊天平台',en:'Self-hosted AI chat',ja:'自前AIチャット',vi:'AI chat tự host'},desc:{zh:'适合想把 AI 聊天工具部署到自己服务器的人。',en:'Great for people who want to run an AI chat interface on their own server.',ja:'AIチャット画面を自分のサーバーで運用したい人向け。',vi:'Phù hợp để tự triển khai giao diện chat AI trên server riêng.'}},
  {slug:'penpot',name:'Penpot',category:'design',alt:'Figma',price:'Free / Open-source',platform:'Web',url:'https://penpot.app/',best:{zh:'UI/UX设计协作',en:'UI/UX collaboration',ja:'UI/UX共同作業',vi:'Thiết kế UI/UX'},desc:{zh:'开源设计协作工具，适合团队做界面和原型。',en:'An open-source design collaboration tool for interfaces and prototypes.',ja:'UIとプロトタイプ制作向けのオープンソースデザインツール。',vi:'Công cụ thiết kế mã nguồn mở cho giao diện và prototype.'}},
  {slug:'appflowy',name:'AppFlowy',category:'office',alt:'Notion',price:'Free / Open-source',platform:'Desktop / Web',url:'https://www.appflowy.io/',best:{zh:'笔记和知识库',en:'Notes and knowledge base',ja:'ノート・ナレッジ管理',vi:'Ghi chú và quản lý kiến thức'},desc:{zh:'Notion 类替代方案，注重数据可控和本地化使用。',en:'A Notion-like alternative focused on data control and flexibility.',ja:'データ管理の自由度が高いNotion風ツール。',vi:'Lựa chọn giống Notion, chú trọng kiểm soát dữ liệu.'}},
  {slug:'vs-code',name:'VS Code',category:'dev',alt:'Paid code editors',price:'Free',platform:'Desktop / Web',url:'https://code.visualstudio.com/',best:{zh:'代码开发',en:'Code development',ja:'コード開発',vi:'Lập trình'},desc:{zh:'强大的免费代码编辑器，插件生态丰富。',en:'A powerful free code editor with a huge extension ecosystem.',ja:'拡張機能が豊富な無料コードエディタ。',vi:'Trình soạn code miễn phí mạnh mẽ với hệ sinh thái extension lớn.'}},
  {slug:'shotcut',name:'Shotcut',category:'video',alt:'Adobe Premiere',price:'Free / Open-source',platform:'Desktop',url:'https://shotcut.org/',best:{zh:'免费视频剪辑',en:'Free video editing',ja:'無料動画編集',vi:'Chỉnh sửa video miễn phí'},desc:{zh:'跨平台免费视频编辑器，适合基础到中级剪辑。',en:'A cross-platform video editor for basic to intermediate editing.',ja:'基本〜中級編集に使えるクロスプラットフォーム動画編集ソフト。',vi:'Trình sửa video đa nền tảng cho nhu cầu cơ bản đến trung cấp.'}},
  {slug:'photopea',name:'Photopea',category:'image',alt:'Photoshop',price:'Free / Paid',platform:'Web',url:'https://www.photopea.com/',best:{zh:'在线修图',en:'Online photo editing',ja:'オンライン画像編集',vi:'Chỉnh sửa ảnh online'},desc:{zh:'浏览器内使用的图片编辑器，适合快速处理 PSD 和图片。',en:'A browser-based image editor for quick PSD and photo edits.',ja:'ブラウザでPSDや画像を素早く編集できるツール。',vi:'Công cụ chỉnh ảnh trên trình duyệt, xử lý PSD nhanh.'}},
  {slug:'pdf24-tools',name:'PDF24 Tools',category:'pdf',alt:'Adobe Acrobat',price:'Free',platform:'Web / Desktop',url:'https://tools.pdf24.org/',best:{zh:'PDF处理',en:'PDF processing',ja:'PDF処理',vi:'Xử lý PDF'},desc:{zh:'提供合并、压缩、转换、拆分等常用 PDF 功能。',en:'Offers PDF merge, compress, convert, split and other common tools.',ja:'PDF結合、圧縮、変換、分割などに対応。',vi:'Hỗ trợ gộp, nén, chuyển đổi, tách PDF và nhiều chức năng khác.'}},
  {slug:'ahrefs-webmaster-tools',name:'Ahrefs Webmaster Tools',category:'seo',alt:'Paid SEO suites',price:'Free / Paid',platform:'Web',url:'https://ahrefs.com/webmaster-tools',best:{zh:'网站SEO检查',en:'Website SEO checks',ja:'サイトSEOチェック',vi:'Kiểm tra SEO website'},desc:{zh:'适合站长检查网站健康度、外链和基础 SEO 问题。',en:'Useful for checking site health, backlinks and basic SEO issues.',ja:'サイトの状態、被リンク、SEO課題の確認に便利。',vi:'Dùng để kiểm tra sức khỏe website, backlink và lỗi SEO cơ bản.'}},
  {slug:'libreoffice',name:'LibreOffice',category:'office',alt:'Microsoft Office',price:'Free / Open-source',platform:'Desktop',url:'https://www.libreoffice.org/',best:{zh:'离线办公套件',en:'Offline office suite',ja:'オフラインOffice',vi:'Bộ văn phòng offline'},desc:{zh:'免费开源办公套件，支持文档、表格、演示文稿。',en:'A free and open-source office suite for documents, spreadsheets and slides.',ja:'文書、表計算、プレゼンに対応する無料オフィススイート。',vi:'Bộ công cụ văn phòng miễn phí cho tài liệu, bảng tính, trình chiếu.'}}
];

let currentLang = localStorage.getItem('zenAltLang') || 'zh';
let currentCategory = 'all';
const $ = s => document.querySelector(s);
const t = key => translations[currentLang][key] || translations.zh[key] || key;
const getStats = () => JSON.parse(localStorage.getItem('zenAltStats') || '{}');
const setStats = data => localStorage.setItem('zenAltStats', JSON.stringify(data));
const getFavs = () => JSON.parse(localStorage.getItem('zenAltFavs') || '[]');
const setFavs = data => localStorage.setItem('zenAltFavs', JSON.stringify(data));

function showToast(msg){const toast=$('#toast');toast.textContent=msg;toast.hidden=false;clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.hidden=true,1800)}
function detailUrl(tool){return `${location.origin}${location.pathname}?tool=${tool.slug}`}
function categoryName(id){const c=categories.find(x=>x.id===id);return c?c.name[currentLang]:id}

function applyI18n(){
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  $('#langSelect').value = currentLang;
  renderCategories(); renderFilters(); renderTools(); renderRanking(); renderFavorites(); renderSeoGrid(); updateMetaForRoute();
}

function renderCategories(){
  $('#categoryGrid').innerHTML = categories.map(c => `<article class="category-card" data-cat="${c.id}"><div class="icon">${c.icon}</div><strong>${c.name[currentLang]}</strong><span>${c.desc[currentLang]}</span></article>`).join('');
  document.querySelectorAll('.category-card').forEach(card=>card.addEventListener('click',()=>{currentCategory=card.dataset.cat;renderFilters();renderTools();location.hash='tools'}));
}
function renderFilters(){
  const buttons=[{id:'all',label:t('all')},...categories.map(c=>({id:c.id,label:c.name[currentLang]}))];
  $('#filterTabs').innerHTML=buttons.map(b=>`<button class="${currentCategory===b.id?'active':''}" data-filter="${b.id}">${b.label}</button>`).join('');
  document.querySelectorAll('#filterTabs button').forEach(btn=>btn.addEventListener('click',()=>{currentCategory=btn.dataset.filter;renderFilters();renderTools()}));
}
function getFilteredTools(){
  const q=$('#searchInput').value.trim().toLowerCase();
  return tools.filter(tool=>{
    const matchCat=currentCategory==='all'||tool.category===currentCategory;
    const haystack=`${tool.name} ${tool.alt} ${tool.category} ${tool.best[currentLang]} ${tool.desc[currentLang]}`.toLowerCase();
    return matchCat&&(!q||haystack.includes(q));
  });
}
function cardHtml(tool){
  const isFav=getFavs().includes(tool.slug);
  const priceClass=tool.price.toLowerCase().includes('paid')?'price-paid':'price-free';
  return `<article class="tool-card"><div class="tool-top"><div class="tool-logo">${tool.name.slice(0,1)}</div><span class="badge">${categoryName(tool.category)}</span></div><div><h3>${tool.name}</h3><p>${tool.desc[currentLang]}</p></div><div class="badges"><span class="badge">${t('alternativeTo')}: ${tool.alt}</span><span class="badge ${priceClass}">${tool.price}</span></div><div class="tool-actions"><button class="small-btn" onclick="openDetail('${tool.slug}')">${t('details')}</button><button class="small-btn fav-btn ${isFav?'active':''}" onclick="toggleFavorite('${tool.slug}')">★</button><a class="small-btn visit" href="${tool.url}" target="_blank" rel="noopener" onclick="trackVisit('${tool.slug}')">${t('visit')}</a></div></article>`;
}
function renderTools(){const list=getFilteredTools();$('#emptyState').hidden=list.length>0;$('#toolGrid').innerHTML=list.map(cardHtml).join('')}
function renderFavorites(){const favs=getFavs();const list=tools.filter(tool=>favs.includes(tool.slug));$('#favoriteEmpty').hidden=list.length>0;$('#favoriteGrid').innerHTML=list.map(cardHtml).join('')}
function renderRanking(){
  const stats=getStats();
  const ranked=[...tools].sort((a,b)=>(stats[b.slug]||0)-(stats[a.slug]||0)).slice(0,6);
  $('#rankingList').innerHTML=ranked.map((tool,i)=>`<article class="ranking-item"><div class="rank-no">${i+1}</div><div><strong>${tool.name}</strong><span>${tool.alt} · ${stats[tool.slug]||0} ${t('clicks')}</span></div><button class="small-btn" onclick="openDetail('${tool.slug}')">${t('details')}</button></article>`).join('');
}
function renderSeoGrid(){
  const items=[['ChatGPT Alternatives','AI聊天工具替代'],['Canva Alternatives','设计工具替代'],['Notion Alternatives','笔记工具替代'],['Adobe PDF Alternatives','PDF工具替代']];
  $('#seoGrid').innerHTML=items.map(x=>`<article><strong>${x[0]}</strong><span>${x[1]}</span></article>`).join('');
}

window.openDetail=function(slug){
  const tool=tools.find(x=>x.slug===slug); if(!tool) return;
  const stats=getStats(); stats[tool.slug]=(stats[tool.slug]||0)+1; setStats(stats); renderRanking(); updateMeta(tool);
  const isFav=getFavs().includes(tool.slug);
  $('#dialogContent').innerHTML=`<div class="dialog-body"><h2>${tool.name}</h2><p>${tool.desc[currentLang]}</p><div class="detail-list"><div><b>${t('category')}:</b> ${categoryName(tool.category)}</div><div><b>${t('alternativeTo')}:</b> ${tool.alt}</div><div><b>${t('pricing')}:</b> ${tool.price}</div><div><b>${t('platform')}:</b> ${tool.platform}</div><div><b>${t('bestFor')}:</b> ${tool.best[currentLang]}</div></div><div class="detail-actions"><a class="btn primary" href="${tool.url}" target="_blank" rel="noopener" onclick="trackVisit('${tool.slug}')">${t('visit')}</a><button class="btn ghost" onclick="toggleFavorite('${tool.slug}')">${isFav?t('favorited'):t('favorite')}</button><button class="btn ghost" onclick="copyToolLink('${tool.slug}')">${t('copyLink')}</button></div></div>`;
  history.replaceState(null,'',`?tool=${tool.slug}`);
  $('#detailDialog').showModal();
}
window.trackVisit=function(slug){const stats=getStats();stats[slug]=(stats[slug]||0)+1;setStats(stats);renderRanking()}
window.toggleFavorite=function(slug){let favs=getFavs();favs=favs.includes(slug)?favs.filter(x=>x!==slug):[...favs,slug];setFavs(favs);renderTools();renderFavorites();const tool=tools.find(x=>x.slug===slug);if(tool)showToast(favs.includes(slug)?t('favorited'):t('favorite'))}
window.copyToolLink=async function(slug){const tool=tools.find(x=>x.slug===slug);if(!tool)return;try{await navigator.clipboard.writeText(detailUrl(tool));showToast(t('copied'))}catch(e){prompt(t('copyLink'),detailUrl(tool))}}

function updateMeta(tool){
  const title=tool?`${tool.name} Alternative - ZenAlternatives`:'ZenAlternatives - 免费工具替代品导航';
  const desc=tool?`${tool.name}：${tool.desc[currentLang]} ${t('alternativeTo')} ${tool.alt}.`:'ZenAlternatives 是一个多语言免费工具、开源软件、AI工具替代品导航站。';
  document.title=title; document.querySelector('meta[name="description"]').setAttribute('content',desc); document.querySelector('meta[property="og:title"]').setAttribute('content',title); document.querySelector('meta[property="og:description"]').setAttribute('content',desc);
}
function updateMetaForRoute(){const slug=new URLSearchParams(location.search).get('tool');const tool=tools.find(x=>x.slug===slug);updateMeta(tool)}
function closeDialog(){ $('#detailDialog').close(); history.replaceState(null,'',location.pathname+location.hash); updateMeta(); }
function initTheme(){const saved=localStorage.getItem('zenAltTheme')||'light';document.documentElement.dataset.theme=saved;$('#themeToggle').textContent=saved==='dark'?'☀️':'🌙'}

$('#langSelect').addEventListener('change',e=>{currentLang=e.target.value;localStorage.setItem('zenAltLang',currentLang);applyI18n()});
$('#searchInput').addEventListener('input',renderTools);
$('#clearBtn').addEventListener('click',()=>{$('#searchInput').value='';currentCategory='all';renderFilters();renderTools()});
$('#dialogClose').addEventListener('click',closeDialog);
$('#detailDialog').addEventListener('click',e=>{if(e.target.id==='detailDialog') closeDialog()});
$('#resetStats').addEventListener('click',()=>{setStats({});renderRanking();showToast('OK')});
$('#themeToggle').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('zenAltTheme',next);$('#themeToggle').textContent=next==='dark'?'☀️':'🌙'});
$('#year').textContent=new Date().getFullYear();
initTheme(); applyI18n();
const routeSlug=new URLSearchParams(location.search).get('tool'); if(routeSlug&&tools.some(x=>x.slug===routeSlug)){setTimeout(()=>openDetail(routeSlug),100)}
