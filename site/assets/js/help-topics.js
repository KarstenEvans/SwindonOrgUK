/* Enhanced topic selector. The shared Swindon.popup implementation remains in /assets/js/site.js. */
(function(){
  "use strict";
  function openTopic(select){
    if(!select || !select.value) return;
    let url;
    try{url=new URL(select.value,location.href);}catch(e){return;}
    if(url.origin!==location.origin || !/^\/(health|jobs)\/topics\/[-a-z0-9]+\.htm$/.test(url.pathname)) return;
    const fallback=document.querySelector('[data-help-topic-fallback]');
    let child=null;
    /* Compact viewport: let the browser manage the new tab/window. */
    if(window.matchMedia && window.matchMedia('(max-width:720px)').matches){
      child=window.open(url.href,'_blank');
      if(child){try{child.opener=null;}catch(e){}}
    }else if(window.Swindon && typeof window.Swindon.popup==='function'){
      /* The SAME named window is used for all subjects and is recreated when closed. */
      child=window.Swindon.popup(url.href,'swindonHelpTopic',900,760,true);
    }else{
      child=window.open(url.href,'swindonHelpTopic');
    }
    if(fallback){
      fallback.href=url.href;
      fallback.hidden=!!child;
    }
  }
  document.addEventListener('change',function(event){
    const select=event.target.closest && event.target.closest('[data-help-topic-select]');
    if(select)openTopic(select);
  });
  document.addEventListener('click',function(event){
    const button=event.target.closest && event.target.closest('[data-open-help-topic]');
    if(button){
      const select=document.getElementById(button.getAttribute('data-open-help-topic'));
      openTopic(select);
    }
  });
})();
