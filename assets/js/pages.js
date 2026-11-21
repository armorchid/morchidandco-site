// Morchid & Co — inner pages: mobile menu, sticky header shadow, Q&A search.
(function(){
  var btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
    nav.addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}});}
  var head=document.querySelector('.site-head');
  if(head){var f=function(){head.classList.toggle('scrolled',window.scrollY>8);};f();window.addEventListener('scroll',f,{passive:true});}
  var q=document.getElementById('qaSearch');
  if(q){q.addEventListener('input',function(){var t=q.value.trim().toLowerCase();
    document.querySelectorAll('.faqs details').forEach(function(d){var show=!t||d.textContent.toLowerCase().indexOf(t)>-1;d.style.display=show?'':'none';if(t&&show)d.open=true;});
    document.querySelectorAll('.qa-section').forEach(function(s){var any=[].some.call(s.querySelectorAll('details'),function(d){return d.style.display!=='none';});s.style.display=any?'':'none';});});}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
