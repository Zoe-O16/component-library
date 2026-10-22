(root=>{
root.querySelectorAll('.sf-header').forEach(h=>{
  const box=h.closest('.sf-scrollbox'), sc=box||window, max=parseFloat(h.dataset.max)||990;
  const y=()=>box?box.scrollTop:scrollY, w=()=>box?box.clientWidth:innerWidth;
  const top=h.offsetTop, bottom=top+h.offsetHeight;let last=0;
  sc.addEventListener('scroll',()=>{
    const s=y();
    if(w()<max&&s>last&&s>bottom)requestAnimationFrame(()=>h.classList.add('is-hidden','is-sticky'));
    else if(w()<max&&s<last&&s>bottom)requestAnimationFrame(()=>{h.classList.add('is-sticky','animate');h.classList.remove('is-hidden')});
    else if(s<=top)requestAnimationFrame(()=>h.classList.remove('is-hidden','is-sticky','animate'));
    last=s;
  },{passive:true});
});
})(document);
