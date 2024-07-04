let menu = document.querySelector(".tel-icon i");
let left = document.querySelector('.menu-left');
let body = document.body;

if (localStorage.getItem('menuOpen') === 'true') {
    left.classList.add('left-menu');
}

menu.addEventListener("click", () => {
    left.classList.toggle('left-menu');
    if (left.classList.contains('left-menu')) {
        localStorage.setItem('menuOpen', 'true');
    } else {
        localStorage.removeItem('menuOpen'); 
    }
});

document.body.addEventListener("click", (event) => {
  if (!left.contains(event.target) && !menu.contains(event.target)) {
      left.classList.remove('left-menu');
      localStorage.removeItem('menuOpen');
  }
});



let darkBtn =document.querySelector(".moon");
let darkBtn2 =document.querySelector(".moon2");
let whiteBtn =document.querySelector(".sun");
let whiteBtn2 =document.querySelector(".sun2");
darkBtn.addEventListener('click', ()=>{
  whiteBtn.classList.add("w-bt")
  whiteBtn.classList.add("dark-btn")
  darkBtn.classList.add("white-btn")
  darkBtn.classList.remove("dark-btn")
  body.classList.add('dark')
  whiteBtn.style.color="#fff"
  darkBtn.style.background="#fff"
  darkBtn.style.color="#777"

  
});
whiteBtn.addEventListener('click', ()=>{
  whiteBtn.classList.remove("dark-btn")
  darkBtn.classList.remove("white-btn")
  darkBtn.classList.add("dark-btn")
  body.classList.remove('dark')
  whiteBtn.classList.remove("w-bt")
  whiteBtn.style.color="#777"
  darkBtn.style.background="#777"
  darkBtn.style.color="#fff"
})


darkBtn2.addEventListener('click', ()=>{
whiteBtn2.classList.remove("white-btn")
whiteBtn2.classList.add("dark-btn2")
darkBtn2.classList.add("white-btn")
darkBtn2.classList.remove("dark-btn2")
body.classList.add('dark')
});
whiteBtn2.addEventListener('click', ()=>{
whiteBtn2.classList.add("white-btn")
whiteBtn2.classList.remove("dark-btn2")
darkBtn2.classList.remove("white-btn")
darkBtn2.classList.add("dark-btn2")
body.classList.remove('dark')
})
let isDarkMode = localStorage.getItem("darkMode");
function setMode() {
  if (isDarkMode === "true") {
      enableDarkMode();
  } else {
      enableLightMode();
  }
}
function enableDarkMode() {
  body.classList.add('dark');
  darkBtn.classList.add('white-btn');
  whiteBtn.classList.remove('white-btn');
  localStorage.setItem("darkMode", "true");
  darkBtn.style.color="#777"
}
function enableLightMode() {
  body.classList.remove('dark');
  darkBtn.classList.remove('white-btn');
  whiteBtn.classList.add('white-btn');
  localStorage.setItem("darkMode", "false");
  darkBtn.style.color="#fff"
}
setMode();
darkBtn.addEventListener('click', () => {
  enableDarkMode();
});
whiteBtn.addEventListener('click', () => {
  enableLightMode();
});
