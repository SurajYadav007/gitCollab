var form = document.querySelector("form");
var sing_up_details = JSON.parse(localStorage.getItem("signup-details"));

form.addEventListener("submit",function(el){
    el.preventDefault();
    var user_n = el.target.UserName.value;
    var user_pass = el.target.log_password.value;
    var flag = true;


    sing_up_details.forEach(element => {
        if(element.n_userName == user_n && element.n_password == user_pass){
            window.location.assign("../Myntra clone/MEN.HTML");
            localStorage.setItem("Logedin", JSON.stringify(true));
            flag = false;
            return;
        }
    });

    if(flag){
       alert("UserName or Password Is Wrong 😊");
    }

})