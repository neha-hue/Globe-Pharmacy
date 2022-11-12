let url="https://636aa12ac07d8f936da39098.mockapi.io/products"
let data=[]
let input=document.getElementById("search")

let medicine=JSON.parse(localStorage.getItem("medicine"))||[]
let personal=JSON.parse(localStorage.getItem("personals"))||[];
let home=JSON.parse(localStorage.getItem("homes"))||[];
let mother=JSON.parse(localStorage.getItem("mother"))||[];
let skin=JSON.parse(localStorage.getItem("skin"))||[];
let health=JSON.parse(localStorage.getItem("health"))||[];
let select=document.querySelector("select")
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
function search(){
    let q=document.querySelector("#search").value;

    let newData=data.filter(function(elem){
        return elem.title.toLowerCase().includes(q.toLowerCase())
    });
    display(newData)
}
function pharmacy(){
    let selected=document.querySelector("select").value;
    let filteredData=data.filter(function(elem){
        return elem.category==selected
    });
    display(filteredData)

}
function handleSort(){
    let selected=document.querySelector("#sorts").value;
    if(selected=="HTL"){
        data.sort((a,b)=>b.price-a.price)
    }
    if(selected=="LTH"){
        data.sort((a,b)=>a.price-b.price)
    }
    display(data)
}

function display(data){
    let cartArr=JSON.parse(localStorage.getItem("items"))||[]
    document.querySelector("#container").innerHTML="";
    data.forEach(function(elem,index){
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
        // let total=0
        // total+=elem.price
        if(category.innerText=="medicine"){
            medicine.push(elem)
            localStorage.setItem("medicine",JSON.stringify(medicine))
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
            console.log("local",cartArr)
            localStorage.setItem("items",JSON.stringify(cartArr))
            alert("product added successfully")

        })
        div.append(imageProd,title,desc,price,btn)
        document.querySelector("#container").append(div)
    });
}