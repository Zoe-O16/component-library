(root=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
root.querySelectorAll('.hy-par').forEach(el=>{
  if(reduce)return;
  const sc=el.closest('.hy-scrollbox')||window, f=(parseFloat(el.dataset.speed)||100)/100-1;
  const pos=()=>sc===window?scrollY:sc.scrollTop;
  const tick=()=>{el.style.transform='translateY('+(-pos()*f)+'px)'};
  sc.addEventListener('scroll',()=>requestAnimationFrame(tick),{passive:true});tick();
});
})(document);
