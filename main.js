// My HandMade Project After Listening To The Video 3 Hours

var imgList = Array.from( document.querySelectorAll('.item img') );
var lightbox = document.querySelector('.lightbox');
var lightboxitem = document.querySelector('.lightboxitem');
var itemcaption = document.querySelector('.item-caption');
var itemcaption1 = document.querySelector('.item-caption1')
var itemcaption2 = document.querySelector('.item-caption2')
var itemcaption3 = document.querySelector('.item-caption3')
var itemcaption4 = document.querySelector('.item-caption4')
var itemcaption5 = document.querySelector('.item-caption5')
var closeBtn = document.getElementById('close');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var currentIndexSlider = 0 ;

for(var i = 0 ; i<imgList.length ; i++)
{
    imgList[i].addEventListener('click',function(e) {
    var imgSrc = e.target.getAttribute('src');
    lightboxitem.style.backgroundImage=`url(${imgSrc})`
    lightbox.classList.replace('d-none','d-flex')
})
}

function nextSlide() {

    currentIndexSlider++ ;
    if(currentIndexSlider == imgList.length)
    {
        currentIndexSlider=0
    }
    var imgSrc = imgList[currentIndexSlider].getAttribute('src');
    lightboxitem.style.backgroundImage=`url(${imgSrc})`
}

function prevSlide() {

    currentIndexSlider-- ;
    if(currentIndexSlider <0)
    {
        currentIndexSlider=imgList.length -1;
    }
    var imgSrc = imgList[currentIndexSlider].getAttribute('src');
    lightboxitem.style.backgroundImage=`url(${imgSrc})`
}

nextBtn.addEventListener('click',nextSlide)
prevBtn.addEventListener('click',prevSlide)
closeBtn.addEventListener('click',function () {
    lightbox.classList.replace('d-flex','d-none')

})


itemcaption.addEventListener('mouseenter',function () {
    itemcaption.style.backgroundColor = 'black'
    itemcaption.style.color = 'white'

})
itemcaption.addEventListener('mouseleave',function () {
    itemcaption.style.backgroundColor = 'white';
    itemcaption.style.color = 'black'
})

//

itemcaption1.addEventListener('mouseenter',function () {
    itemcaption1.style.backgroundColor = 'black'
    itemcaption1.style.color = 'white'

})
itemcaption1.addEventListener('mouseleave',function () {
    itemcaption1.style.backgroundColor = 'white';
    itemcaption1.style.color = 'black'
})

//

itemcaption2.addEventListener('mouseenter',function () {
    itemcaption2.style.backgroundColor = 'black'
    itemcaption2.style.color = 'white'

})
itemcaption2.addEventListener('mouseleave',function () {
    itemcaption2.style.backgroundColor = 'white';
    itemcaption2.style.color = 'black'
})

//

itemcaption3.addEventListener('mouseenter',function () {
    itemcaption3.style.backgroundColor = 'black'
    itemcaption3.style.color = 'white'

})
itemcaption3.addEventListener('mouseleave',function () {
    itemcaption3.style.backgroundColor = 'white';
    itemcaption3.style.color = 'black'
})

//

itemcaption4.addEventListener('mouseenter',function () {
    itemcaption4.style.backgroundColor = 'black'
    itemcaption4.style.color = 'white'

})
itemcaption4.addEventListener('mouseleave',function () {
    itemcaption4.style.backgroundColor = 'white';
    itemcaption4.style.color = 'black'
})

//

itemcaption5.addEventListener('mouseenter',function () {
    itemcaption5.style.backgroundColor = 'black'
    itemcaption5.style.color = 'white'

})
itemcaption5.addEventListener('mouseleave',function () {
    itemcaption5.style.backgroundColor = 'white';
    itemcaption5.style.color = 'black'
})


// My Project During Listinig To The Video 

// var imgList = Array.from( document.querySelectorAll('img') );
// var lightBox = document.querySelector(".lightBox");
// var lightBoxitem = document.querySelector(".lightBoxitem");
// var closeBtn = document.getElementById("close");
// var prevBtn = document.getElementById("prev");
// var nextBtn = document.getElementById("next");
// var currentIndexSlide = 0 ;


// for(var i =0 ;i<imgList.length ; i++)
// {
//     imgList[i].addEventListener('click',function(e) {
//     currentIndexSlide =imgList.indexOf(e.target);
//     var imgSrc = e.target.getAttribute('src');
//     lightBoxitem.style.backgroundImage= (`url(${imgSrc})`);
//     lightBox.classList.replace('d-none','d-flex');

// })
// }

// function nextSlide() {

//     currentIndexSlide++ ;
//     if(currentIndexSlide == imgList.length)
//     {
//         currentIndexSlide=0
//     }
//     var imgSrc = imgList[currentIndexSlide].getAttribute('src')
//     lightBoxitem.style.backgroundImage= (`url(${imgSrc})`);


// }
// function prevSlide() {

//     currentIndexSlide-- ;
//     if(currentIndexSlide <0)
//     {
//         currentIndexSlide=imgList.length -1
//     }
//     var imgSrc = imgList[currentIndexSlide].getAttribute('src')
//     lightBoxitem.style.backgroundImage= (`url(${imgSrc})`);


// }
// nextBtn.addEventListener('click' , nextSlide);
// prevBtn.addEventListener('click' , prevSlide)

// closeBtn.addEventListener('click', function () {
//     lightBox.classList.replace('d-flex','d-none');
// }) 
