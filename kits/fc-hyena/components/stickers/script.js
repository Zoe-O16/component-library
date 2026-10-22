(root=>{
root.querySelectorAll('.hy-stickerboard').forEach(b=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');io.disconnect()}}),{threshold:1});
  io.observe(b);
  let z=10;
  b.querySelectorAll('.hy-sticker').forEach(s=>{
    let sx,sy;s._ox=s._oy=0;
    s.addEventListener('pointerdown',e=>{s.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;
      s.classList.add('dragging');s.style.zIndex=++z;b.classList.remove('pop')});
    s.addEventListener('pointermove',e=>{if(!s.classList.contains('dragging'))return;
      s.style.setProperty('--dx',s._ox+e.clientX-sx+'px');s.style.setProperty('--dy',s._oy+e.clientY-sy+'px')});
    const end=e=>{if(!s.classList.contains('dragging'))return;s.classList.remove('dragging');
      s._ox+=e.clientX-sx;s._oy+=e.clientY-sy};
    s.addEventListener('pointerup',end);s.addEventListener('pointercancel',end);
  });
});
})(document);
