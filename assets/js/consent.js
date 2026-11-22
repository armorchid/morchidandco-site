// Morchid & Co: Google Analytics 4 with consent (UK GDPR / PECR). Analytics only loads after the visitor clicks "Accept".
// Google Tag Manager container (set up in GTM to send data to Google Analytics 4). Leave both IDs empty to switch analytics off.
(function(){
  var GTM_ID = 'GTM-MGMXBXBG';
  var GA_ID = 'G-TGJBPERZV7';
  var KEY = 'mc_consent_v1';
  if (!GA_ID && !GTM_ID) return;
  var lang = (document.documentElement.lang || 'en').slice(0,2);
  var T = {
    en:{t:'Welcome! We\'d love to know which pages help you most, so we can keep making them better. Mind if we use a few analytics cookies?',a:'Happy to help',r:'Not today',p:'Privacy'},
    fr:{t:'Bienvenue ! Nous aimerions savoir quelles pages vous aident le plus, pour continuer à les améliorer. Acceptez-vous quelques cookies de mesure ?',a:'Avec plaisir',r:'Pas aujourd\'hui',p:'Confidentialité'},
    ar:{t:'أهلًا بك! يسعدنا أن نعرف أي الصفحات تفيدك أكثر لنواصل تحسينها. هل تسمح لنا ببعض ملفات تعريف الارتباط؟',a:'بكل سرور',r:'ليس الآن',p:'الخصوصية'}
  }[lang] || null;
  T = T || {t:'',a:'Accept',r:'Reject',p:'Privacy'};
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
  function load(){
    if (window.__gaLoaded) return; window.__gaLoaded = true;
    gtag('consent','update',{analytics_storage:'granted'});
    if (GTM_ID) {
      dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
      var g=document.createElement('script'); g.async=true; g.src='https://www.googletagmanager.com/gtm.js?id='+GTM_ID; document.head.appendChild(g);
    }
    if (GA_ID) {
      var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID; document.head.appendChild(s);
      gtag('js', new Date()); gtag('config', GA_ID);
    }
    // Count WhatsApp, phone and email clicks as enquiries
    document.addEventListener('click',function(e){var a=e.target.closest('a,button[type=submit]'); if(!a) return; var h=a.getAttribute('href')||'';
      var m = h.indexOf('wa.me')>-1?'whatsapp':h.indexOf('tel:')===0?'phone':h.indexOf('mailto:')===0?'email':(a.dataset&&a.dataset.via)?('form_'+a.dataset.via):'';
      if(m) gtag('event','generate_lead',{method:m, page_path:location.pathname});},true);
  }
  function get(){ try{return localStorage.getItem(KEY);}catch(e){return null;} }
  function set(v){ try{localStorage.setItem(KEY,v);}catch(e){} }
  function bar(){
    if(document.getElementById('consentBar')) return;
    var d=document.createElement('div'); d.className='consent-bar'; d.id='consentBar'; d.setAttribute('role','dialog'); d.setAttribute('aria-label','Cookies');
    var priv = lang==='en' ? '/#privacy' : '/#privacy';
    d.innerHTML='<p>'+T.t+' <a href="'+priv+'">'+T.p+'</a></p><div class="btns"><button class="btn btn-navy" type="button" data-c="yes">'+T.a+'</button><button class="btn btn-line" type="button" data-c="no">'+T.r+'</button></div>';
    d.addEventListener('click',function(e){var b=e.target.closest('[data-c]'); if(!b) return; set(b.dataset.c==='yes'?'granted':'denied'); if(b.dataset.c==='yes') load(); d.remove();});
    document.body.appendChild(d);
  }
  window.mcCookieSettings = function(){ set(''); bar(); };
  var c=get();
  if(c==='granted') load(); else if(c!=='denied') { if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bar); else bar(); }
})();
