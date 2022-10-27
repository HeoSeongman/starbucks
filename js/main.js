const badgeElement = document.querySelector('header .badges');
const toTopElement = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 스크롤 높이가 500 을 넘어가면
    gsap.to(badgeElement, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopElement, 0.2, {
      x: -80
    });
  } else {
    gsap.to(badgeElement, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopElement, 0.2, {
      x: 0
    });
  }
}, 300));
// _.throttle(함수, 시간(ms))

toTopElement.addEventListener('click', function(){
  gsap.to(window, 0.5, {
    // window(창) 의 scroll 을 0 으로 0.7 간 변화시킴
    scrollTo: 0
  })
});


const fadeElements = document.querySelectorAll('.visual .fade-in');
fadeElements.forEach(function(fadeElement, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeElement, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.inner__left .swiper', {
  direction: 'vertical',
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev'
  }
});

new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.awards .swiper-next',
    prevEl: '.awards .swiper-prev'
  }
})

const promotionElement = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionElement.classList.add('hide');
  } else {
    promotionElement.classList.remove('hide');
  }
});

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady(){
  new YT.Player('player', {
    videoId: 'tn5EznFpC20', // 최초로 재생할 유튜브 영상 id
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'tn5EznFpC20',
      // start: 100, // 재생 시작 위치(초)
      // end: 105 // 재생 중지 위치(초)
    },
    events: {
      onReady: function (event){
        event.target.mute();
        // event.target.setVolume(100);
      }
    }
  });
}

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


const spyElements = document.querySelectorAll('section.scroll-spy');
spyElements.forEach(function(spyElement) {
  new ScrollMagic
  .Scene({
    triggerElement: spyElement,
    triggerHook: .8
  })
  .setClassToggle(spyElement, 'show')
  .addTo(new ScrollMagic.Controller());
});