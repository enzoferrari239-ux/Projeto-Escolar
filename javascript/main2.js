var Register_button = document.getElementById("Register_button")

Register_button.addEventListener("click", function (event){
    event.preventDefault()
    var email = document.getElementById("email").value 
    var senha = document.getElementById("senha").value 
    if (email == ""|| senha == ""){
        window.alert("Preencha os campos")
    }
  localStorage.setItem("email", email )
    localStorage.setItem("senha", senha )
    window.alert("Cadastro salvo com sucesso!")
    window.location.href = "./index.html"
})