(root=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
root.querySelectorAll('.sf-slider').forEach(s=>{
  const track=s.querySelector('.sf-slider__track'),items=[...track.children],dots=s.querySelector('.sf-slider__dots');
  const prev=s.querySelector('.sf-slider__btn--prev'),next=s.querySelector('.sf-slider__btn--next');
  dots.innerHTML=items.map((_,i)=>'<button class="sf-slider__dot" aria-label="Slide '+(i+1)+'"><i></i></button>').join('');
  const step=()=>items[1].offsetLeft-items[0].offsetLeft;
  const go=left=>track.scrollTo({left,behavior:reduce?'auto':'smooth'});
  const update=()=>{const cur=Math.round(track.scrollLeft/step());
    [...dots.children].forEach((d,i)=>d.setAttribute('aria-current',i===cur));
    prev.disabled=track.scrollLeft<=1;next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-1};
  prev.addEventListener('click',()=>go(track.scrollLeft-step()));
  next.addEventListener('click',()=>go(track.scrollLeft+step()));
  [...dots.children].forEach((d,i)=>d.addEventListener('click',()=>go(i*step())));
  track.addEventListener('scroll',update,{passive:true});new ResizeObserver(update).observe(track);update();
});
})(document);
