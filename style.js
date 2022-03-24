const btnActive = document.querySelector('.header__callback__button');

btnActive.addEventListener('click',(event)=>{
    event.target.classList.toggle('button__active');
})