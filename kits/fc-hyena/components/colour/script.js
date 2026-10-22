(root=>{
const HY=['#A0DC00','#FFA000','#00BEE6','#DC0000','#FFE100'];
function pickColour(){
  const c=HY[Math.floor(Math.random()*HY.length)], r=document.documentElement.style;
  r.setProperty('--hy',c); r.setProperty('--on-hy', c==='#DC0000'?'#fff':'#000');
}
pickColour(); window.hyPickColour=pickColour;
})(document);
