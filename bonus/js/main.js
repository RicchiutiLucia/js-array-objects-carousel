const imagesArray = [
    {
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];



const imageListDom = document.querySelector('.img-list');
const rightImageList = document.querySelector('.img-list-right');

let imageContent = "";



for(let i = 0; i < imagesArray.length; i++){
    const newImageWrapper = `<div class="img-wrapper">
                                <img class="image" src="img/${imagesArray[i].image}" alt="">
                                <h1>${imagesArray[i].title}</h1>
                                <p>${imagesArray[i].text}</p>
                              </div>`;

    imageContent += newImageWrapper;

    const newThumb = document.createElement('div');
    newThumb.classList.add('img-right');
    newThumb.innerHTML= ` <img class="image" src="img/${imagesArray[i].image}" alt="">`;

    rightImageList.append(newThumb);

    newThumb.addEventListener('click', function(){
        imagesWrapperDom[activeImage].classList.remove('show');
        imageRightDom[activeImage].classList.remove('border');
    
        activeImage = i;
           
        imagesWrapperDom[activeImage].classList.add('show');
        imageRightDom[activeImage].classList.add('border');
    
    });
    
}

imageListDom.innerHTML = imageContent;



const imagesWrapperDom = document.getElementsByClassName('img-wrapper');
//console.log(imageWrapperDom);
const imageRightDom = document.getElementsByClassName('img-right');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show');
imageRightDom[activeImage].classList.add('border');


const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', next);

prevDom.addEventListener('click', prev);

function next(){
    if(activeImage < imagesWrapperDom.length - 1){
        imagesWrapperDom[activeImage].classList.remove('show');
        imageRightDom[activeImage].classList.remove('border');
        activeImage++;
        imagesWrapperDom[activeImage].classList.add('show');
        imageRightDom[activeImage].classList.add('border');
        
    }else if(activeImage == imagesWrapperDom.length - 1){
        imagesWrapperDom[activeImage].classList.remove('show');
        imageRightDom[activeImage].classList.remove('border');
        activeImage = 0;
        imagesWrapperDom[activeImage].classList.add('show');
        imageRightDom[activeImage].classList.add('border');
    }

}

function prev(){
    if(activeImage > 0){
        imagesWrapperDom[activeImage].classList.remove('show');
        imageRightDom[activeImage].classList.remove('border');
        activeImage--;
        imagesWrapperDom[activeImage].classList.add('show');
        imageRightDom[activeImage].classList.add('border');
    }else if(activeImage == 0){
        imagesWrapperDom[activeImage].classList.remove('show');
        imageRightDom[activeImage].classList.remove('border');
        activeImage = imagesWrapperDom.length - 1;
        imagesWrapperDom[activeImage].classList.add('show');
        imageRightDom[activeImage].classList.add('border');

    }

}

function interval(){
    if(direction == 'next'){
        next();
    }else{
        prev();
    }

}

/*BONUS 2:
Aggiungere funzionalità di autoplay: 
dopo un certo periodo di tempo (3 secondi) 
l’immagine attiva dovrà cambiare alla successiva.*/
let clock = setInterval(interval, 3000);

/*BONUS 3:
Aggiungere bottoni di start/stop 
e di inversione del meccanismo di autoplay. */
let direction = 'next';
const reverseDom=document.getElementById('reverse');
reverseDom.addEventListener('click',function(){
    if(direction == 'next'){
        direction='prev';
    }else{
        direction='next'
    }
});

const startStopDom = document.getElementById('startStop');
startStopDom.addEventListener('click',function(){
    if(clock == null){
        clock = setInterval(interval, 3000);

    }else{
        clearInterval(clock);
        clock = null;

    }
});

    