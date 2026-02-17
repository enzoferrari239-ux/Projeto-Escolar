var login_button = document.getElementById("login_button")

login_button.addEventListener("click", function (event){
    event.preventDefault()
    var email = document.getElementById("email").value 
    var senha = document.getElementById("senha").value 
    if (email == localStorage.getItem("email") && senha == localStorage.getItem("senha") ){
        window.location.href = "./page2.html"
    } else {
        window.alert("Email ou Senha incorretos!")
    }
   
})