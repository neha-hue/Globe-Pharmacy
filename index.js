
let url="https://636aa12ac07d8f936da39098.mockapi.io/products"
let data=[]


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
    // window.location.href="product.html"
}


function display(data){
    let cartArr=JSON.parse(localStorage.getItem("items"))||[]
    let cartArrs=JSON.parse(localStorage.getItem("pro"))||[]
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
        let anchor=document.createElement("a");
        anchor.setAttribute("href","product.html");
        // imageProd.style.width="100%"
        // imageProd.style.height="20vh"
        
        
       

        let btn=document.createElement("button");
        btn.innerText="ADD TO CART"
        btn.addEventListener("click",function(){
            cartArr.push(elem);
            localStorage.setItem("items",JSON.stringify(cartArr))

        })
        div.addEventListener("click",function(){
            cartArrs.push(elem)
            console.log(cartArr)
            localStorage.setItem("pro",JSON.stringify(cartArrs))
            
        });
        div.append(imageProd,title,desc,price,btn)
        // anchor.append(div)
        
        document.querySelector("#container").append(div)
        
    });
    
}