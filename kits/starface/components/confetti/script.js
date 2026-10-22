(root=>{
const COLORS=['#26ccff','#a25afd','#ff5e7e','#88ff5a','#fcff42','#ffa62d','#ff36ff'];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function star(ctx,x,y,o,i){ctx.beginPath();let r=Math.PI/2*3;const st=Math.PI/5;ctx.moveTo(x,y-o);
  for(let k=0;k<5;k++){ctx.lineTo(x+Math.cos(r)*o,y+Math.sin(r)*o);r+=st;ctx.lineTo(x+Math.cos(r)*i,y+Math.sin(r)*i);r+=st}
  ctx.lineTo(x,y-o);ctx.closePath();ctx.fill()}
function burst(c,{particleCount=100,startVelocity=30,spread=360,angle=90,decay=.9,gravity=1,ticks=200}={}){
  const ctx=c.getContext('2d'),w=c.clientWidth,h=c.clientHeight,dpr=devicePixelRatio||1;
  c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);cancelAnimationFrame(c._raf);
  const rs=spread*Math.PI/180,P=Array.from({length:particleCount},(_,i)=>({x:w/2,y:h/2,col:COLORS[i%COLORS.length],
    a:-angle*Math.PI/180+(.5*rs-Math.random()*rs),v:startVelocity*.5+Math.random()*startVelocity}));
  let t=0;
  const step=()=>{ctx.clearRect(0,0,w,h);t++;
    P.forEach(p=>{p.x+=Math.cos(p.a)*p.v;p.y+=Math.sin(p.a)*p.v+gravity*3;p.v*=decay;
      ctx.globalAlpha=Math.max(0,1-t/ticks);ctx.fillStyle=p.col;star(ctx,p.x,p.y,8,4)});
    if(t<ticks)c._raf=requestAnimationFrame(step);else ctx.clearRect(0,0,w,h)};
  if(reduce){for(let k=0;k<12;k++)P.forEach(p=>{p.x+=Math.cos(p.a)*p.v;p.y+=Math.sin(p.a)*p.v;p.v*=decay});
    ctx.fillStyle='#000';P.forEach(p=>{ctx.fillStyle=p.col;star(ctx,p.x,p.y,8,4)});setTimeout(()=>ctx.clearRect(0,0,w,h),1200);return}
  step();
}
root.querySelectorAll('.sf-pop').forEach(b=>b.addEventListener('click',()=>burst(b.parentElement.querySelector('.sf-confetti'))));
root._burst=()=>root.querySelector('.sf-pop')?.click();
})(document);
