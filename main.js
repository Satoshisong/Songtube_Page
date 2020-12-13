const infoBtn = document.querySelector(".InfoBtn");
const title =  document.querySelector(".info_title");

infoBtn.addEventListener('click', ()=>{
    infoBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});