export const fallbackTools = [
  {name:'Photopea', slug:'photopea', category:'Design', website:'https://www.photopea.com/', featured:true, type:'Free', description:'Free online Photoshop alternative with PSD support.'},
  {name:'Stirling PDF', slug:'stirling-pdf', category:'PDF', website:'https://www.stirlingpdf.com/', featured:true, type:'Open Source', description:'Open-source PDF toolbox for merge, split, convert and edit.'},
  {name:'Penpot', slug:'penpot', category:'Design', website:'https://penpot.app/', featured:true, type:'Open Source', description:'Open-source UI/UX design and prototyping tool.'},
  {name:'Shotcut', slug:'shotcut', category:'Video', website:'https://shotcut.org/', featured:true, type:'Open Source', description:'Free open-source cross-platform video editor.'},
  {name:'Open WebUI', slug:'open-webui', category:'AI', website:'https://openwebui.com/', featured:true, type:'Open Source', description:'Self-hosted AI chat UI for local and remote LLMs.'},
  {name:'LibreTranslate', slug:'libretranslate', category:'Translate', website:'https://libretranslate.com/', featured:true, type:'Open Source', description:'Open-source machine translation API and web app.'},
  {name:'LanguageTool', slug:'languagetool', category:'Writing', website:'https://languagetool.org/', featured:true, type:'Open Source/Freemium', description:'Multilingual grammar and style checker.'},
  {name:'GIMP', slug:'gimp', category:'Design', website:'https://www.gimp.org/', featured:true, type:'Open Source', description:'Professional open-source image editor.'},
  {name:'AppFlowy', slug:'appflowy', category:'Productivity', website:'https://www.appflowy.io/', featured:true, type:'Open Source', description:'Open-source Notion alternative for notes and project management.'},
  {name:'Kdenlive', slug:'kdenlive', category:'Video', website:'https://kdenlive.org/', featured:true, type:'Open Source', description:'Professional open-source video editor.'}
];

export const i18n = {
  zh:{title:'FreeToolAlternative', subtitle:'免费开源工具与付费软件平替导航', search:'搜索工具、分类或关键词', all:'全部', visit:'打开官网', detail:'查看详情', db:'数据库动态工具', fallback:'本地备用内容', loading:'正在读取 Firestore 数据库...', empty:'暂无数据，请先在 Firestore 的 tools 集合添加工具。'},
  en:{title:'FreeToolAlternative', subtitle:'Free and open-source alternatives to paid software', search:'Search tools, categories or keywords', all:'All', visit:'Visit Website', detail:'Details', db:'Dynamic Database Tools', fallback:'Local fallback content', loading:'Loading Firestore database...', empty:'No data yet. Add tools in the Firestore tools collection.'},
  ja:{title:'FreeToolAlternative', subtitle:'無料・オープンソース代替ツールナビ', search:'ツール、カテゴリ、キーワードを検索', all:'すべて', visit:'公式サイト', detail:'詳細', db:'データベース連携ツール', fallback:'ローカル予備データ', loading:'Firestore データベースを読み込み中...', empty:'まだデータがありません。Firestore の tools コレクションに追加してください。'},
  vi:{title:'FreeToolAlternative', subtitle:'Danh mục công cụ miễn phí và mã nguồn mở thay thế phần mềm trả phí', search:'Tìm công cụ, danh mục hoặc từ khóa', all:'Tất cả', visit:'Mở trang web', detail:'Chi tiết', db:'Công cụ từ cơ sở dữ liệu', fallback:'Dữ liệu dự phòng cục bộ', loading:'Đang tải Firestore...', empty:'Chưa có dữ liệu. Hãy thêm công cụ vào collection tools trong Firestore.'}
};
