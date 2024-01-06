const tabs = document.querySelectorAll('.tabheader__item');
const tabContent = document.querySelectorAll ('.tabcontent');
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
const slides = document.addEventListener('.offer__slide'),
prev = document.querySelector('.offer__slide-prev'),
next = document.querySelector('.offer__slide-next'),
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



//timemer 

const timeEnd = '2024-02-19';

function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/(1000*60*60))%60),
        seconds =  Math.floor((t/(1000))%60);
    return{
        'total':t,
        'days':days,
        'hours': hours,
        'minutes':minutes,
        'seconds':seconds
    }
          
}
function setClock(selector, endtime){
    const timer = document.querySelector(selector),
        days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds');
        timeInterval = setInterval(updateClock,1000);
    updateClock();
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
        if(t.total<=0){
            clearInterval()
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
        }
    }
}
updateClock('.timer',timeEnd);

//calk
const result = document.querySelector('.calculating__result span');
let sex, height, weight, age, ratio;

function calcTotal(){
    if (!sex || !height || !age || !ratio || !weight){
        result.textContent = "0";
        return;
    }
    if (sex === "female"){
        result.textContent = Math.round((447.6+(9.2*weight)+(3.1 * height)-(4.3*age))*ratio);
    }else{
        result.textContent = Math.round((88.6+(13.4*weight)+(4.8 * height)-(5.7*age))*ratio);
    }
    
}
calcTotal();
function getStaticInformation(parentSelector,activeClass){
    const elements = document.querySelectorAll('${parentSelector} div');

    elements.forEach(elem =>{
        elem.addEventListener('click',(e)=>{
            if(e.target.getAttribute('data-ratio')){
                ratio = +e.target.getAttribute('data-ratio');
            }
            else{
                sex = e.target.getAttribute('id');
            }


            elements.forEach(elem =>{
                elem.classList.remove(activeClass);
            });
            e.target.classList.add(activeClass);
            calcTotal()
        })
    }) 
}

getStaticInformation('#gender','calculating__choose-item_active');
getStaticInformation('.calculating__choose_big','calculating__choose-item_active');