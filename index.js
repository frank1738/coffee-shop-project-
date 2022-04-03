const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".fa-bars");
const switchToggle=document.querySelector(".toggle")
const switchBtn=document.querySelector(".switch-btn")
const Video=document.querySelector('.background-video')
var playing=true
switchBtn.addEventListener('click', Switch);
menu.addEventListener("click", showBar);
function showBar() {
  menuBar.classList.toggle("show")
}

function Switch(){
  switchToggle.classList.toggle('hide')
  if(playing){
    Video.pause()
    playing=false
  }
  else {
    Video.play()
    playing=true
  }
}
