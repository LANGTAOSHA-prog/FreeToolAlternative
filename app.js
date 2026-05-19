const langSelect=document.querySelector('#langSelect');
if(langSelect){langSelect.addEventListener('change',()=>{document.documentElement.lang=langSelect.value;document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n; const data=window.I18N&&window.I18N[langSelect.value]; if(data&&data[key]) el.innerHTML=data[key];});});}
