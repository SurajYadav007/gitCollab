
// <!-- CATEGORIES DISPALY 1 -->
var categoryBag = [
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2023/Augart23/augart23sbc/1._SY530_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2023/Augart23/augart23sbc/2._SY530_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2023/Augart23/augart23sbc/6._SY530_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2023/Augart23/augart23sbc/4._SY530_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2023/Augart23/augart23sbc/3._SY530_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2023/Augart23/augart23sbc/7._SY530_QL85_FMpng_.png'},
]
categoryBag.map(function(element){
  var box = document.createElement('div');
  var img =  document.createElement('img');
  img.setAttribute('src', element.image_url)
  box.append(img); 
  document.getElementById('categoryBag_women').append(box)
})

// <!-- BRAND DISPLAY 2 -->
var brandsBag = [
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRS23/Westernbrands/Levi-s._SX564_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRS23/Westernbrands/ONLY._SX564_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRS23/Westernbrands/Zink-london._SX564_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRS23/Westernbrands/Allen-Solly._SX564_QL85_FMpng_.png'},
  {image_url :'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRS23/Westernbrands/AND._SX564_QL85_FMpng_.png'},
]
brandsBag.map(function(element){
  var box = document.createElement('div');
  var img =  document.createElement('img');
  img.setAttribute('src', element.image_url)
  box.append(img); 
  document.getElementById('explore_more_women').append(box)
})


// <------- SLIDER IMAGES -------> //
var slideImages = [
  //FOR TABLET & DEKSTOP VIEW
  [{img_url : "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/N2GLoffer/welcomepc-V1._box587586825_.gif"},
  {img_url : "https://m.media-amazon.com/images/G/31/img23/Fashion/postpd/headers/unrec-eng-pc._SX3000_QL85_.jpg"},
  {img_url : "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-4._SX3000_QL85_.jpg"},
  {img_url : "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-1._SX3000_QL85_.jpg"},
  ],

  //FOR MOBILE VIEW
  [{img_url : "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/N2GLoffer/welcomepc-V1._box587586825_.gif"},
  {img_url : "https://m.media-amazon.com/images/G/31/img23/Fashion/postpd/headers/unrec-eng-pc._SX3000_QL85_.jpg"},
  {img_url : "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-4._SX3000_QL85_.jpg"},
  {img_url : "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-1._SX3000_QL85_.jpg"},
  ]
]

var z = null; 

  //script for media queries
  var value = window.matchMedia("(max-width: 550px)") //FOR TABLET VIEW
    mFunction(value) 
    value.addListener(mFunction) 
    function mFunction(value) {
      if (value.matches) { 
        z = slideImages[1];
      } 
      else {
        z = slideImages[0]
      }
  }

z.map(function(ele, index){
  var slideDiv = document.createElement('div');
  switch(index){
    case 0 :
      slideDiv.setAttribute('class', 'slide first');
      break;
    default :
    slideDiv.setAttribute('class', 'slide')
  }
 
  var images = document.createElement('img');
  images.src = ele.img_url;
  
  slideDiv.append(images); 
  document.getElementById('slides').append(slideDiv)
})

var images = document.querySelectorAll('img')
for(let i=0; i<images.length; i++){
  images[i].addEventListener('click', function(){
    window.location.href = "../womensdata/women.html"
  })
}
// LANDING PAGE
document.getElementById('landingPage').addEventListener('click', function(){
  window.location.href = "index.html"
})