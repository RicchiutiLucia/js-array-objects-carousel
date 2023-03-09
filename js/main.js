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
let imageContentRight = "";

for(let i = 0; i < imagesArray.length; i++){
    const newImageWrapper = `<div class="img-wrapper">
                                <img class="image" src="img/${imagesArray[i].image}" alt="">
                                <h1>${imagesArray[i].title}</h1>
                                <p>${imagesArray[i].text}</p>
                              </div>`;

    imageContent += newImageWrapper;

    const newImageRight = ` <div class="img-right">
                                <img class="image" src="img/${imagesArray[i].image}" alt="">
                            </div>`;

    imageContentRight += newImageRight;
    
}

imageListDom.innerHTML = imageContent;
rightImageList.innerHTML = imageContentRight;



const imagesWrapperDom = document.getElementsByClassName('img-wrapper');
//console.log(imageWrapperDom);
const imageRightDom = document.getElementsByClassName('img-right');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show');
imageRightDom[activeImage].classList.add('border');


const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 
    function(){
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
);

prevDom.addEventListener('click', 
    function(){
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
);