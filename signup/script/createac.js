var email = document.getElementById("email");
var pass = document.getElementById("pass");
var re_pass = document.getElementById("re_pass");
var form = document.querySelector("form");
var id_exist = document.getElementById("id_exist");
var mis_match = document.getElementById("mis_match");
var userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
var mob_num = JSON.parse(localStorage.getItem("temp_mobile"));


form.addEventListener("submit",function(el){
    el.preventDefault();
    
     
    if(el.target.pass.value != el.target.re_pass.value){
        mis_match.style.display = "block";
    }else{
        mis_match.style.display = "none";

        var obj1 ;
        var flag = false;
        userInfo.forEach(element => {
            if(element.email_id == email.value){
                flag = true;
            }
        });

        if(flag){
            id_exist.style.display = "block"
        }else{
            var obj = {
                mobile_num : mob_num,
                email_id : el.target.email.value,
                pas_code : el.target.pass.value,
                re_pas_code : el.target.pass.value,
            }
            
            userInfo.push(obj);
            localStorage.setItem("userInfo",JSON.stringify(userInfo));
        
            window.location.assign("#")
        }
    }
})
