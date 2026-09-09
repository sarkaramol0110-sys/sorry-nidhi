const hearts = document.querySelector(".floating-hearts");

function createHeart(){
  const h=document.createElement("span");
  h.className="heart";
  h.textContent=Math.random()>.5?"♥":"♡";
  h.style.left=Math.random()*100+"%";
  h.style.fontSize=(12+Math.random()*22)+"px";
  h.style.animationDuration=(5+Math.random()*6)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),12000);
}
setInterval(createHeart,700);
for(let i=0;i<10;i++) setTimeout(createHeart,i*300);

document.getElementById("startBtn").addEventListener("click",()=>{
  document.getElementById("forgive").scrollIntoView({behavior:"smooth"});
});

const response=document.getElementById("response");
document.getElementById("yesBtn").addEventListener("click",()=>{
  response.innerHTML="🥹❤️ Thank you, Nidhi. Best friends again? Pinky promise. 🤞";
  for(let i=0;i<20;i++) setTimeout(createHeart,i*80);
});
document.getElementById("hugBtn").addEventListener("click",()=>{
  response.innerHTML="🤗 Sending the biggest virtual hug. Whenever you're ready, I'm here.";
  for(let i=0;i<8;i++) setTimeout(createHeart,i*120);
});
