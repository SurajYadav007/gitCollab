
// Retrieve wishlist data from local storage
var wisharr =JSON.parse(localStorage.getItem("wishListObj"))||[];

// Calculate the number of items in the wishlist
var itemcount = wisharr.length;

// Update the element with class "wishcount" to display the item count
document.querySelector(".wishcount").innerText =` ${itemcount} Items`

wisharr.map(function(ele,ind){

    var box =document.createElement("div")
    
    // image element and set its source to the item's image URL
    var image =document.createElement("img")
    image.src =ele.image_url;


    // div to hold the image and append the image to it
    var imgbox =document.createElement("div")
    box.className ="imgbox"
    imgbox.append(image)

    box.append(imgbox)


    // paragraph element for the brand name and set its style
    var para =document.createElement("p");
    para.innerText=ele.brand ;
    para.style.color="gray";
    box.append(para)

    var price = document.createElement("span");
    price.innerText = ele.price
    price.style.color ="black"


    // span element for the striked-off price and set its style
  var strikedprice = document.createElement("span");
  strikedprice.innerText = ele.strikedoffprice;
  strikedprice.style.textDecoration = "line-through";
  strikedprice.style.color ="gray";


  var offer = document.createElement("span");
  offer.innerText =ele.offer;
  offer.style.color="red";

  var pricepara =document.createElement("p");
  pricepara.className="pricepara"
  pricepara.append(price,strikedprice,offer)
  box.append(pricepara)


  // "Remove" button and add a click event listener
  var buttonrm =document.createElement("button")
  buttonrm.innerText ="Remove"
  
  buttonrm.addEventListener("click", function(){
      removefromwish(ind)
  })



  // "Move to Bag" button and add a click event listener
  var buttonbag =document.createElement("button")
  buttonbag.innerText ="MOVE TO BAG";
  
  buttonbag.addEventListener("click", function(){
   sendtocart(ele,ind)
})



  var buttonholder = document.createElement("div");
  buttonholder.className ="buttonholder"
  buttonholder.append(buttonrm,buttonbag)
  box.append(buttonholder)

   
    document.querySelector(".container").append(box)
})


// Function to remove an item from the wishlist
function removefromwish(ind){

wisharr.splice(ind,1)
localStorage.setItem("wishListObj",JSON.stringify(wisharr))
window.location.href="wishlist.html"

}

// localStorage.setItem("cart-items" , JSON.stringify(bagList))
var baglist = JSON.parse(localStorage.getItem("cart-items"))||[];


// Function to move an item to the shopping cart
function sendtocart(ele,ind){

  baglist.unshift(ele);
  localStorage.setItem("cart-items",JSON.stringify(baglist))

  wisharr.splice(ind,1)
  localStorage.setItem("wishListObj",JSON.stringify(wisharr))
    window.location.href="wishlist.html"

     }

document.getElementById('landingPage').addEventListener('click', function(){
window.location.href = "../Landingpage/index.html"
})