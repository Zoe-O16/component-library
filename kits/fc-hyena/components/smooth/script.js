(root=>{
root.querySelectorAll('.hy-smooth').forEach(box=>{
  // like the site's Lenis setup (syncTouch off): touch scrolls natively, wheels get the smoothing
  box.addEventListener('touchstart',()=>box.classList.add('native'),{passive:true,once:true});
  const inner=box.firstElementChild, lerp=parseFloat(box.dataset.lerp)||.1;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let target=0,cur=0,last=performance.now(),run=false;
  const max=()=>inner.scrollHeight-box.clientHeight;
  const frame=t=>{const dt=(t-last)/1000;last=t;
    cur = reduce ? target : cur+(target-cur)*(1-Math.exp(-60*lerp*dt));
    if(Math.abs(target-cur)<.5)cur=target;
    inner.style.transform='translateY('+(-cur)+'px)';
    run=cur!==target; if(run)requestAnimationFrame(frame)};
  const go=d=>{target=Math.max(0,Math.min(max(),target+d));if(!run){run=true;last=performance.now();requestAnimationFrame(frame)}};
  box.addEventListener('wheel',e=>{const t=Math.max(0,Math.min(max(),target+e.deltaY));if(t===target)return;e.preventDefault();go(e.deltaY)},{passive:false});
});
})(document);
