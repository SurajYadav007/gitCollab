var stat = JSON.parse(localStorage.getItem("status")) || false;
var btn = document.getElementById("btn");
var btn_log = document.getElementById("btn_logout");

    if(stat){
        btn.style.display = "none"
        btn_log.style.display = "block"
    }else{
        btn.style.display = "block"
        btn_log.style.display = "none"
    }

btn.addEventListener("click",function(){
    window.location.assign("./signup/login.html")
})

btn_log.addEventListener("click",function(){
    localStorage.setItem("status",JSON.stringify(false));
    btn.style.display = "block"
    btn_log.style.display = "none"
    window.location.assign("./index.html")
})


//////////////////////////////////////////////////
var wish_list = document.getElementById("wish_list");
var cart_one = document.getElementById("cart_one");



wish_list.addEventListener("click",function(){
    var stat_s = JSON.parse(localStorage.getItem("status")) || false;
    if(!stat_s){
        window.location.assign("");
        window.location.assign("./signup/login.html");
    }
})
cart_one.addEventListener("click",function(){
    var stat_s = JSON.parse(localStorage.getItem("status")) || false;
        if(!stat_s){
            window.location.assign("");
            window.location.assign("./signup/login.html");
        }
})


