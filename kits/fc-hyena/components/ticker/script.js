(root=>{
root.querySelectorAll('.hy-tick__win').forEach(w=>{
  const words=w.dataset.words.split('|');w.setAttribute('aria-label',words.join(', '));
  w.innerHTML=words.map((t,i)=>'<span aria-hidden="true" class="'+(i?'below':'')+'">'+t+'</span>').join('');
  const s=[...w.children];let i=0;
  setInterval(()=>{s[i].className='above';const n=(i+1)%s.length;
    s[n].style.transition='none';s[n].className='below';void s[n].offsetWidth;s[n].style.transition='';s[n].className='';
    i=n},2200);
});
})(document);
