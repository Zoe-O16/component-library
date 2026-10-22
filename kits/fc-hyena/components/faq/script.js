(root=>{
root.querySelectorAll('.hy-acc').forEach(acc=>acc.addEventListener('click',e=>{
  const q=e.target.closest('.hy-acc__q');if(!q)return;const open=q.getAttribute('aria-expanded')==='true';
  acc.querySelectorAll('.hy-acc__q').forEach(b=>b.setAttribute('aria-expanded','false'));
  q.setAttribute('aria-expanded',String(!open));
}));
})(document);
