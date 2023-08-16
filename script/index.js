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
})