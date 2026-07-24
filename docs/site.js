(function(){
  var key='scorpio-cookie-consent';
  var banner=document.getElementById('cookie-banner');
  var settings=document.getElementById('cookie-settings');
  var privacy=document.getElementById('privacy-notice');
  var analytics=document.getElementById('cookie-analytics');
  var marketing=document.getElementById('cookie-marketing');
  function read(){try{return JSON.parse(localStorage.getItem(key)||'null')}catch(e){return null}}
  function save(value){localStorage.setItem(key,JSON.stringify(value));banner.hidden=true;settings.hidden=true}
  var current=read(); if(!current) banner.hidden=false;
  document.addEventListener('click',function(e){
    var target=e.target.closest('[data-cookie],[data-modal-close],[data-open-privacy]'); if(!target)return;
    if(target.hasAttribute('data-modal-close')){settings.hidden=true;privacy.hidden=true;return}
    if(target.hasAttribute('data-open-privacy')){privacy.hidden=false;return}
    var action=target.getAttribute('data-cookie');
    if(action==='accept')save({essential:true,analytics:true,marketing:true});
    if(action==='reject')save({essential:true,analytics:false,marketing:false});
    if(action==='manage'){var c=read()||{};analytics.checked=!!c.analytics;marketing.checked=!!c.marketing;settings.hidden=false}
    if(action==='save')save({essential:true,analytics:analytics.checked,marketing:marketing.checked});
  });
  [settings,privacy].forEach(function(modal){modal.addEventListener('click',function(e){if(e.target===modal)modal.hidden=true})});
  var form=document.getElementById('contractor-form');
  if(form)form.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(form);var lines=['Contractor inquiry','','Name: '+d.get('name'),'Email: '+d.get('email'),'Phone: '+(d.get('phone')||'Not provided'),'Expertise: '+d.get('expertise'),'Availability: '+d.get('availability'),'Portfolio: '+(d.get('portfolio')||'Not provided'),'','About the work:',''+d.get('message')];window.location.href='mailto:support@scorpioanalytics.com?subject='+encodeURIComponent('Contractor inquiry — '+d.get('name'))+'&body='+encodeURIComponent(lines.join('\n'))});
  var phrases=['Observe → Reason → Act','Data → Insight → Action','Signals → Systems → Scale'];var i=0;var agent=document.querySelector('[data-agent-text]');if(agent)setInterval(function(){i=(i+1)%phrases.length;agent.textContent=phrases[i]},2400);
  var reveals=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});reveals.forEach(function(el){observer.observe(el)})}else{reveals.forEach(function(el){el.classList.add('is-visible')})}
})();
