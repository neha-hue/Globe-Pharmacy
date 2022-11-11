
let url="https://636aa12ac07d8f936da39098.mockapi.io/products"
let data=[]
// let input=document.getElementById("search")

// let medicine=JSON.parse(localStorage.getItem("medicine"))||[]
// let personal=JSON.parse(localStorage.getItem("personals"))||[];
// let home=JSON.parse(localStorage.getItem("homes"))||[];
// let mother=JSON.parse(localStorage.getItem("mother"))||[];
// let skin=JSON.parse(localStorage.getItem("skin"))||[];
// let health=JSON.parse(localStorage.getItem("health"))||[];
// let select=document.querySelector("select")
// console.log(health)

async function showData(){
    try{
        let res=await fetch(url);
        out=await res.json();
        data=out;
        console.log(out);
        // display(out);


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
        window.location.reload()
       

    });
    display(newData)
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