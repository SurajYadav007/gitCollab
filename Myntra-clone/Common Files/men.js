
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/Aug9-15/Associate_3000x900._box597742768_.jpg"},
    {img_url : "https://m.media-amazon.com/images/G/31/img21/MA2023/July/Lifestyle/3000x1000._SX3000_QL85_.jpg"},
    {img_url : "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/Rush/Evergreen_best_picks._box587786074_.png"},
    {img_url : "https://m.media-amazon.com/images/G/31/img21/MA2023/PD23/sbcheader/Hero._SX3000_QL85_FMpng_.png"},
    ],

    //FOR MOBILE VIEW
    [{img_url : "https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/Aug9-15/Associate_3000x900._box597742768_.jpg"},
    {img_url : "https://m.media-amazon.com/images/G/31/img21/MA2023/July/Lifestyle/3000x1000._SX3000_QL85_.jpg"},
    {img_url: "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/Rush/Evergreen_best_picks._box587786074_.png"},
    {img_url: "https://m.media-amazon.com/images/G/31/img21/MA2023/PD23/sbcheader/Hero._SX3000_QL85_FMpng_.png"},
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




    // <!-- CATEGORIES DISPALY 1 -->
    var categoryBag = [
      {image_url :'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/sbc/3013._SY530_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/sbc/3010._SY530_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/sbc/3012._SY530_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/SBC/V1/MEN-sports._SY530_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/MensSBC/Footwear_2._SY530_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/SBC/V1/MEN-Wallets._SY530_QL85_FMpng_.png'},
  ]
  categoryBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('categoryBag').append(box)
  })


  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
      {image_url :'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Van-Heusen_2._SX564_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Levi-s_54._SX564_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/PUMA_29._SX564_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Arrow_37._SX564_QL85_FMpng_.png'},
      {image_url :'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/Pepe-Jeans_19._SX564_QL85_FMpng_.png'},
  ]
  brandsBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('explore_more').append(box)
  })


document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index.html"
})
var images = document.querySelectorAll('img')
for(let i=0; i<images.length; i++){
  images[i].addEventListener('click', function(){
    window.location.href = "../menspage/mens.html"
  })
}

// LANDING PAGE
document.getElementById('landingPage').addEventListener('click', function(){
  window.location.assign("../../index.html")
})