(root=>{
root.querySelectorAll('.sf-line').forEach(l=>{
  const out=l.querySelector('output'),load=l.querySelector('.sf-loading'),price=l.querySelector('.sf-line__price');
  l.querySelectorAll('.sf-qty button').forEach((b,i)=>b.addEventListener('click',()=>{
    const n=Math.max(1,+out.value+(i?1:-1));if(n===+out.value)return;out.value=n;
    load.hidden=false;clearTimeout(l._t);
    l._t=setTimeout(()=>{load.hidden=true;price.textContent='$'+(12*n).toFixed(2)},1200);
  }));
});
})(document);
