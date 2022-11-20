
const key=document.querySelector(".key");
const plus=document.querySelector(".plus");
const mins=document.querySelector(".mins");
const uturn=document.querySelector(".uturn");

key.addEventListener('click',(event)=>{
  let target = event.target;
  if(target.classList.contains('key')){
  key.textContent ++;
}});
plus.addEventListener('click',(event)=>{
  let target = event.target;
  if(target.classList.contains('plus')){
  key.textContent ++;
}});

mins.addEventListener('click',(event)=>{
  let target = event.target;
  if(target.classList.contains('mins')){
  key.textContent --;
}});


uturn.addEventListener('click',(event)=>{
  let target = event.target;
  if(target.classList.contains('uturn')){
  key.textContent=0;
}});
