let url="https://636aa12ac07d8f936da39098.mockapi.io/products"
let login=document.querySelector(".login")
let data=[]
async function showData(){
    try{
        let res=await fetch(url);
        out=await res.json();
        data=out;
        // console.log(out);
        display(out);


    }
    catch(err){
        console.log(err);


    }
}
showData();

function display(out){
    // document.querySelector("#container").innerHTML="";
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
        div.append(imageProd,title,desc,price)
        document.querySelector("#container").append(div)
    })
}




let image1=document.querySelector(".img1");
let image2=document.querySelector(".img2");
let image3=document.querySelector(".img3");

let prev=document.querySelector("#prev");
let next=document.querySelector("#next");
let start=document.querySelector(".main-carousel")

let images=["https://cdn01.pharmeasy.in/dam/banner/banner/b3a4bdb683b-1.jpg","https://cdn01.pharmeasy.in/dam/banner/banner/782553ad506-STAR25.jpg",
"https://cdn01.pharmeasy.in/dam/banner/banner/b3a4bdb683b-1.jpg","https://cdn01.pharmeasy.in/dam/banner/banner/59efe8fe01e-634X274.jpg"

];
let inter
let generate=(array)=>{
    let randomNum=Math.floor(Math.random()*array.length);
    image1.setAttribute("src",array[randomNum]);

   
    start.addEventListener("click",function(){
        inter=setInterval("generate(images)",1000)

    })
}
    let count=0;
    next.addEventListener("click",function(){
        clearInterval(inter)
        count++;
        if(count>=images.length){
            count=0;
            image1.src=images[count];
            
        }
        else{
            image1.src=images[count];
            
        }
    })
    prev.addEventListener("click",function(){
        clearInterval(inter);
        count--
        if(count<0){
            count=images.length-1
            image1.src=images[count];
           
        }
        else{
            image1.src=images[count];
            
        }
    })
   
    
    login.addEventListener("click",function(){
        window.location.href='login.html'
    })

generate(images)










