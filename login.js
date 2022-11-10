let login=document.querySelector(".login")
let form=document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault()
    
    let obj={
        email:form.email.value,
        // mobil:form.mobil.value,
        pass:form.pass.value,

    }
    console.log(obj)

    let getmail=JSON.parse(localStorage.getItem("signups"))
    // let getpass=JSON.parse(localStorage.getItem("signup"))
    console.log(getmail.email)
    getmail.forEach(function(e){
        if(obj.email==e.email){
            if(obj.pass==e.pass){
                alert("login successful")
                window.location.href='index.html'
                
            }
            else{
                alert("wrong password")
            }
        }
        else{
            alert("Invalid credentials")
        }

    })
    

})