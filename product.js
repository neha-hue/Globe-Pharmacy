let url="https://636aa12ac07d8f936da39098.mockapi.io/products"
let data=[]
let cartArr=JSON.parse(localStorage.getItem("items"))||[]
let personal=JSON.parse(localStorage.getItem("personals"))||[];
let home=JSON.parse(localStorage.getItem("homes"))||[];
let mother=JSON.parse(localStorage.getItem("mother"))||[];
let skin=JSON.parse(localStorage.getItem("skin"))||[];
let health=JSON.parse(localStorage.getItem("health"))||[];
console.log(health)

async function showData(){
    try{
        let res=await fetch(url);
        out=await res.json();
        data=out;
        console.log(out);
        display(out);


    }
    catch(err){
        console.log(err);


    }
}
showData();

function display(data){
    
    document.querySelector("#container").innerHTML="";
    data.forEach(function(elem){
        let div=document.createElement("div");
        let imageProd=document.createElement("img")
        imageProd.src=elem.image;
        let title=document.createElement("h2");
        title.innerText=elem.title;
        let desc=document.createElement("p");
        desc.innerText=elem.desc
        let price=document.createElement("p")
        price.innerText=elem.price;
        let category=document.createElement("p")
        category.innerText=elem.category
        if(category.innerText=="medicine"){
            cartArr.push(elem)
            localStorage.setItem("items",JSON.stringify(cartArr))
        }
        if(category.innerText=="personal"){
            personal.push(elem)
            localStorage.setItem("personals",JSON.stringify(personal))
        }
        if(category.innerText=="home"){
            home.push(elem)
            localStorage.setItem("homes",JSON.stringify(home))
        }
        if(category.innerText=="motherbaby"){
            mother.push(elem);
            localStorage.setItem("mother",JSON.stringify(mother))
        }
        if(category.innerText=="skincare"){
            skin.push(elem);
            localStorage.setItem("skin",JSON.stringify(skin))
        }
        if(category.innerText=="health"){
            health.push(elem);
            localStorage.setItem("health",JSON.stringify(health))
        }
        let btn=document.createElement("button");
        btn.innerText="ADD TO CART"
        btn.addEventListener("click",function(){
            cartArr.push(elem);
            localStorage.setItem("items",JSON.stringify(cartArr))

        })
        div.append(imageProd,title,desc,price,btn)
        document.querySelector("#container").append(div)
    });
}