let cartArr=JSON.parse(localStorage.getItem("items"));
//let cart=document.querySelector(".cart")
//let totl=document.querySelector("#count");
function display(out){
   
    document.querySelector(".cart").innerHTML="";
    let total=0;
    out.forEach(function(elem,index){
        let div=document.createElement("div");
        let imageProd=document.createElement("img")
        imageProd.src=elem.image;
        let title=document.createElement("h2");
        title.innerText=elem.title;
        let desc=document.createElement("p");
        desc.innerText=elem.desc
        let price=document.createElement("p")
        price.innerText=elem.price
        total+=elem.price
        let remove=document.createElement("button");
        remove.innerText="Remove"
        remove.addEventListener("click",function(){
            deleData(cartArr,index)
        })
        
        div.append(imageProd,title,desc,price,remove)
       
        document.querySelector(".cart").append(div)
        
       
    });document.querySelector("#count").innerText=total
    
}
function deleData(data,index){
    data.splice(index,1);
    localStorage.setItem("items",JSON.stringify(data));
    display(data)
}
display(cartArr) 