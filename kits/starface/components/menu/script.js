(root=>{
root.querySelectorAll('.sf-menu').forEach(d=>{
  d.classList.add('sf-js');const s=d.querySelector('summary');
  s.addEventListener('click',e=>{
    e.preventDefault();
    if(!d.open){d.open=true;s.setAttribute('aria-expanded','true');s.textContent='close';
      requestAnimationFrame(()=>requestAnimationFrame(()=>d.classList.add('menu-opening')));}
    else{d.classList.remove('menu-opening');s.setAttribute('aria-expanded','false');s.textContent='menu';
      let t0;const step=t=>{t0??=t;t-t0<400?requestAnimationFrame(step):d.open=false};requestAnimationFrame(step);}
  });
});
})(document);
