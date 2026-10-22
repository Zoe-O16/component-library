(root=>{
root.querySelectorAll('.sf-cart-open').forEach(b=>{
  const d=b.parentElement.querySelector('.sf-cart');
  const close=()=>{d.classList.remove('active');b.focus()};
  b.addEventListener('click',()=>setTimeout(()=>{d.classList.add('animate','active');d.querySelector('.sf-cart__close').focus()}));
  d.querySelector('.sf-cart__overlay').addEventListener('click',close);
  d.querySelector('.sf-cart__close').addEventListener('click',close);
  d.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
});
})(document);
