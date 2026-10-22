(root=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
root.querySelectorAll('.hy-type').forEach(p=>{
  if(!p.dataset.text){p.dataset.text=p.textContent;p.setAttribute('aria-label',p.textContent);}
  p.innerHTML=[...p.dataset.text].map(c=>'<span class="ch" aria-hidden="true">'+c+'</span>').join('');
});
function playHero(){
  root.querySelectorAll('.hy-hero').forEach(h=>{h.classList.remove('play');void h.offsetWidth;h.classList.add('play')});
  if(reduce)return;
  root.querySelectorAll('.hy-type').forEach(p=>{
    clearTimeout(p._t);const chs=[...p.querySelectorAll('.ch')];p.classList.add('typing');chs.forEach(c=>c.classList.remove('on'));
    let i=0;const step=()=>{if(i<chs.length){chs[i++].classList.add('on');p._t=setTimeout(step,100)}else p.classList.remove('typing')};
    p._t=setTimeout(step,parseFloat(p.dataset.start||0)*1000);
  });
}
root._playHero=playHero; playHero();
})(document);
