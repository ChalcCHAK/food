const tabs = document.querySelectorAll('.tabheader__item');
const tabContent = document.querySelectorAll('.tabcontent');
const tabParent = document.querySelector('.tabheader');

function hideTabContent(){
    tabContent.forEach(item =>{
        item.style.display = "none";
    })
    tabs.forEach(item=>{
        item.classList.remove('tabheader__item_active');
    })
}

function showTabContent(i=0){
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
}


hideTabContent();
showTabContent();

tabParent.addEventListener('click',(event)=>{
    if(event.target = event.target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hideTabContent();
                showTabContent(i);
            }
        })
    }
})


//modal
const modalBtn = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]');

modalBtn.forEach(item=>{
    item.addEventListener('click',()=>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    })
})

//(^･ｪ･^)

function a(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click',()=>{
    a();
})
modal.addEventListener('click',(event)=>{
    if(event.target === modal){
        a();
    }
})
document.addEventListener('keydown',(event)=>{
    if(event.code === 'Escape'){
       a();
    }
})

//slider 
const slides = document.addEventListener('.offer__slider'),
prev = document.querySelector('.offer__slider-prev'),
next = document.querySelector('.offer__slider-next'),
total = document.querySelector('#total'),
current = document.querySelector('#current');

let = slideIdex = 1;

function showSlides(n){

    if(n>slides.length){
        slideIdex = 1;
    }
    if(n<1){
        slideIdex = slides.length;
    }

    if(slides.length < 10){
    total.textContent = `0${slides.length}`;
}else{
    total.textContent = slides.length;
}
slides.forEach(item=> item.style.display="none");
slides[slideIdex-1].style.display = "block";

    if(slides.length < 10){
        current.textContent = `0${slideIdex}`;
    }else{
        current.textContent = slideIdex;
    }
}
showSlides(slideIdex);

function plusSlides(n){
    showSlides(slideIdex = slideIdex+n);
}
next.addEventListener('click',()=>{
    plusSlides(1)
})
prev.addEventListener('click',()=>{
    plusSlides(-1)
})

//time

const timeEnd = '2024-02-19',
days = document.querySelector('#days'),
hours = document.querySelector('#hours'),
minutes = document.querySelector('#minutes'),
seconds = document.querySelector('#second'),
timer = document.querySelector('.timer');
