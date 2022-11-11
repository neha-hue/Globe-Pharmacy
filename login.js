// let login=document.querySelector(".login")
let form=document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault()
    
    let obj={
        email:form.email.value,
        // mobil:form.mobil.value,
        pass:form.pass.value,

    }
    console.log(obj)
let flag=false;
    let getmail=JSON.parse(localStorage.getItem("signups"))

    // let getpass=JSON.parse(localStorage.getItem("signup"))
    console.log(getmail.email)
    getmail.forEach(function(e){
        // if(obj.email==e.email){
        //     if(obj.pass==e.pass){
        //         alert("login successful")
        //         window.location.href='index.html';
        //         break;
                
        //     }
        //     else{
        //         console.log("wrong password")
        //     }
        // }
        // else{
        //     console.log("Invalid credentials")
        // }

        if(obj.email==e.email && obj.pass==e.pass ){
           
            flag=true;



        }
        
    })
    if(flag){
            alert("login succesful")
            window.location.href='index.html';
        }
        


})