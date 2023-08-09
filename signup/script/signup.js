var form = document.querySelector("form");
var signup_details = JSON.parse(localStorage.getItem("signup-details")) || [];


form.addEventListener("submit",function(el){
    el.preventDefault();
    if(el.target.password.value != el.target.Re_password.value){
        alert("Your passwords are not matching 🙂");
        return;
    }
    
    var obj = {
        n_name : el.target.fullName.value,
        n_userName : el.target.user_name.value,
        n_email : el.target.email.value,
        n_password : el.target.password.value,
        n_Re_password : el.target.Re_password.value,
    }
    
    var userExists = signup_details.some(function(element) {
        return element.n_userName === obj.n_userName || element.n_email === obj.n_email;
    });

    if (userExists) {
        alert("The user already exists");
    } else {
        signup_details.push(obj);
        localStorage.setItem("signup-details", JSON.stringify(signup_details));
        window.location.assign("#");
    }
})

var Log_in = document.getElementById("Log_in");

Log_in.addEventListener("click",function(){
    window.location.assign("#")
})