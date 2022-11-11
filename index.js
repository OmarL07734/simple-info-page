const wrapper = document.getElementById("bubble-wrapper");
const isMobile = checkMobile();

const animateBubble = x => {
  const bubble = document.createElement("div");

  bubble.className = "bubble";

  bubble.style.left = `${x}px`;

  wrapper.appendChild(bubble);

  setTimeout(() => wrapper.removeChild(bubble), 2000);
  
}

if(!isMobile){
  window.onmousemove = e => animateBubble(e.clientX);
}else{
  window.ontouchmove = e => animateBubble(e.touches[0].clientX;);
  // startingPos = window.screen.width;
  // currentPos = startingPos;
  // endingPos = window.screenX;
  // var interval = setInterval(function(){
  //   animateBubble(currentPos);
  //   currentPos -= 100;
  //   if(currentPos <= endingPos){
  //     currentPos = startingPos;
  //   }
  // }, 200); 
  
}


function checkMobile(){
  return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}
