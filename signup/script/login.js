var form = document.querySelector("form");
var warning = document.getElementById("warning");

form.addEventListener("submit",function(el){
    el.preventDefault();

    var num = el.target.number_input.value;
    
    if(num.length != 10){
        warning.style.display = "block";
    }else{
        var obj = {
            mobile : Number(el.target.number_input.value),
        };
        warning.style.display = "none";
        
        // var flag = true;
        // userInfo.forEach(element => {
        //     if(element.mobile === Number(el.target.number_input.value)){
        //         flag = false;
        //     }
        // });

        // if(flag){
        //     userInfo.push(obj);
        //     localStorage.setItem("userInfo",JSON.stringify(userInfo));
        // }
        localStorage.setItem("temp_mobile",JSON.stringify(Number(el.target.number_input.value)));
        
        window.location.assign("./otp.html");
    }
})
