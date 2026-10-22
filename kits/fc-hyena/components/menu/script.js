(root=>{
root.querySelectorAll('.hy-menu-btn').forEach(b=>{
  const m=b.nextElementSibling;
  b.addEventListener('click',()=>{const o=!m.classList.contains('open');m.classList.toggle('open',o);
    b.setAttribute('aria-expanded',o);b.textContent=o?'close':'menu'});
});
setTimeout(()=>root.querySelector('.hy-menu-btn')?.click(),400);
})(document);
