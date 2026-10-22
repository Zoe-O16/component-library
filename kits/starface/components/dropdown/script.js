(root=>{
const dds=[...root.querySelectorAll('.sf-dd')];
dds.forEach(d=>d.addEventListener('toggle',()=>{if(d.open)dds.forEach(o=>{if(o!==d)o.open=false})}));
})(document);
