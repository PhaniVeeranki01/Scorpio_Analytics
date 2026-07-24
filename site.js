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
  var contractorForm=document.getElementById('contractor-form');
  var contractorMessage=document.getElementById('contractor-form-message');
  if(contractorForm)contractorForm.addEventListener('submit',function(event){
    event.preventDefault();
    var button=contractorForm.querySelector('button[type="submit"]');
    var original=button.innerHTML;
    button.disabled=true;button.textContent='Submitting...';contractorMessage.hidden=true;
    fetch('https://formsubmit.co/ajax/support@scorpioanalytics.com',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(contractorForm)})
      .then(function(response){return response.json().then(function(data){if(!response.ok||data.success===false)throw new Error(data.message||'Submission failed');return data})})
      .then(function(){contractorForm.reset();contractorMessage.className='form-message form-success field-wide';contractorMessage.textContent='Submitted successfully. Thank you — our team will contact you soon.';contractorMessage.hidden=false})
      .catch(function(error){contractorMessage.className='form-message form-error field-wide';contractorMessage.textContent=error.message||'We could not submit the form. Please email support@scorpioanalytics.com.';contractorMessage.hidden=false})
      .finally(function(){button.disabled=false;button.innerHTML=original});
  });  var phrases=['Observe \u2192 Reason \u2192 Act','Data \u2192 Insight \u2192 Action','Signals \u2192 Systems \u2192 Scale'];var i=0;var agent=document.querySelector('[data-agent-text]');if(agent)setInterval(function(){i=(i+1)%phrases.length;agent.textContent=phrases[i]},2400);
  var reveals=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});reveals.forEach(function(el){observer.observe(el)})}else{reveals.forEach(function(el){el.classList.add('is-visible')})}
})();
