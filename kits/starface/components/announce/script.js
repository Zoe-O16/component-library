(root=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
root.querySelectorAll('.sf-announce').forEach(a=>{
  clearInterval(a._t);
  const bars=[...a.children], delay=(parseFloat(a.dataset.delay)||5)*1000;let i=0;
  bars.forEach((b,n)=>{b.style.transform=n?'translateX(100%)':'translateX(0)';b.setAttribute('aria-hidden',n?'true':'false')});
  if(bars.length<2)return;
  a._t=setInterval(()=>{
    const out=bars[i];out.style.transform='translateX(-100%)';out.setAttribute('aria-hidden','true');
    i=(i+1)%bars.length;bars[i].style.transform='translateX(0)';bars[i].setAttribute('aria-hidden','false');
    const reset=()=>{out.style.transition='none';out.style.transform='translateX(100%)';void out.offsetWidth;out.style.transition=''};
    reduce?reset():out.addEventListener('transitionend',reset,{once:true});
  },delay);
});
})(document);
