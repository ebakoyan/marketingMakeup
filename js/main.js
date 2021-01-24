var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
myButton=document.getElementById("burgerMenu");
menu = document.getElementById("menu");
myButton.addEventListener("click", myFunction);
function myFunction(){
  myButton.classList.add("none");
  menu.classList.add("show");
}
myClose=document.getElementById("close");
myClose.addEventListener("click",myCloseFunction);
function myCloseFunction(){
  myButton.classList.remove("none");
  menu.classList.remove("show");
}
myVideoShow=document.getElementById('video');
myVideoShow.addEventListener("click",videoShow);
function videoShow(){
  document.getElementById('videoJobs').classList.add("show");
}
myVideoClose=document.getElementById("videoClose")
myVideoClose.addEventListener("click", VideoClose);
function VideoClose(){
  document.getElementById('videoJobs').classList.remove("show");
}