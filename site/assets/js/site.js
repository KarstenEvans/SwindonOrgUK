(function(){
  "use strict";

  function popup(url,name,width,height,focusNow){
    name=name||"swindonPopup";
    width=width||900;
    height=height||760;
    if(focusNow === undefined) focusNow=true;

    const sx=window.screenX||window.screenLeft||0;
    const sy=window.screenY||window.screenTop||0;
    const left=Math.max(20,sx+70);
    const top=Math.max(20,sy+45);
    const features=`width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    const w=window.open(url,name,features);
    if(w && focusNow){
      try{w.focus()}catch(e){}
    }
    return w;
  }

  function copy(text){
    const previous=document.activeElement;
    const ta=document.createElement("textarea");
    ta.value=text;
    ta.setAttribute("readonly","");
    ta.setAttribute("aria-hidden","true");
    ta.style.position="fixed";
    ta.style.left="-10000px";
    ta.style.top="0";
    ta.style.opacity="0";
    document.body.appendChild(ta);

    ta.focus({preventScroll:true});
    ta.select();
    ta.setSelectionRange(0,ta.value.length);

    let ok=false;
    try{ ok=!!document.execCommand("copy"); }catch(e){ ok=false; }

    document.body.removeChild(ta);
    try{
      if(previous && previous.focus) previous.focus({preventScroll:true});
    }catch(e){}

    return ok;
  }

  function providerUrl(provider){
    const urls={
      gemini:"https://gemini.google.com/app",
      copilot:"https://copilot.microsoft.com/",
      chatgpt:"https://chatgpt.com/",
      deepseek:"https://chat.deepseek.com/",
      claude:"https://claude.ai/new"
    };
    return urls[provider]||urls.gemini;
  }

  function openAI(provider,payload,name){
    const copied=copy(payload);
    popup(providerUrl(provider),name||"aletheiaAI",900,760,true);
    return copied;
  }

  function downloadMarkdown(url,filename){
    return fetch(url,{cache:"no-store"})
      .then(r=>{
        if(!r.ok) throw new Error("HTTP "+r.status);
        return r.text();
      })
      .then(text=>{
        const blob=new Blob([text],{type:"application/octet-stream"});
        const objectUrl=URL.createObjectURL(blob);
        const a=document.createElement("a");
        a.href=objectUrl;
        a.download=filename;
        a.style.display="none";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(()=>URL.revokeObjectURL(objectUrl),1500);
        return true;
      });
  }

  async function loadSharedFooter(){
    try{
      const response=await fetch("/footer.html",{cache:"no-cache"});
      if(!response.ok) throw new Error("HTTP "+response.status);
      const html=(await response.text()).trim();
      if(!html) return false;

      const slot=document.querySelector("[data-site-footer]");
      if(slot){
        slot.innerHTML=html;
        return true;
      }

      const holder=document.createElement("div");
      holder.innerHTML=html;
      const fresh=holder.firstElementChild;
      if(!fresh) return false;

      const existing=document.querySelector("footer.site-footer");
      if(existing){
        existing.replaceWith(fresh);
      }else{
        document.body.appendChild(fresh);
      }
      return true;
    }catch(e){
      return false;
    }
  }

  document.addEventListener("click",function(e){
    const a=e.target.closest&&e.target.closest('a[data-md-download="true"]');
    if(!a||!a.href||a.dataset.mdDirect==="true") return;

    const u=new URL(a.href,location.href);
    if(u.origin!==location.origin) return;
    if(location.protocol==="file:") return;

    e.preventDefault();

    let filename=a.getAttribute("download")||u.pathname.split("/").pop()||"download.md";
    if(!filename.toLowerCase().endsWith(".md")) filename += ".md";

    downloadMarkdown(u.href,filename).catch(()=>{
      const fallback=document.createElement("a");
      fallback.href=u.href;
      fallback.download=filename;
      fallback.style.display="none";
      fallback.dataset.mdDirect="true";
      document.body.appendChild(fallback);
      fallback.click();
      fallback.remove();
    });
  },true);

  document.addEventListener("click",function(e){
    const a=e.target.closest&&e.target.closest("a[data-popup],a[data-swindon-popup]");
    if(!a||!a.href) return;
    if(e.button!==0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

    e.preventDefault();
    const name=a.dataset.popupName || (a.target && a.target!=="_blank" ? a.target : "swindonPopup");
    const width=Number(a.dataset.popupWidth)||900;
    const height=Number(a.dataset.popupHeight)||760;
    const w=popup(a.href,name,width,height,true);
    if(!w) window.open(a.href,"_blank","noopener");
  });

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",loadSharedFooter,{once:true});
  }else{
    loadSharedFooter();
  }

  window.Swindon={popup,copy,providerUrl,openAI,downloadMarkdown,loadSharedFooter};
})();
