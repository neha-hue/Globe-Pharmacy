//Error in code 
//data is not added in total
//updating all the element price not a single one;
//inc dec error 
let cartArr=JSON.parse(localStorage.getItem("items"));
let len=document.querySelector("#len")
//let cart=document.querySelector(".cart")

let totals=document.querySelector("#count");
function display(out){
   
    document.querySelector(".cart").innerHTML="";
    let total=0;
    let c=1
    // window.location.reload()
    // if(total!==0){
    //     window.location.reload()
    // }
    
    out.forEach(function(elem,index){
        let div=document.createElement("div");
        let imageProd=document.createElement("img")
        imageProd.src=elem.image;
        let title=document.createElement("h2");
        title.innerText=elem.title;
        let desc=document.createElement("p");
        desc.innerText=elem.desc
        let price=document.createElement("p")
        
        // let q=1;
        
        price.innerText=elem.price
        total+=c*elem.price
        /*---------------------------*/ 
        let span=document.createElement("span");
         
        
        span.innerText=c
        let btn1=document.createElement("button");
        btn1.innerText="+"
        btn1.addEventListener("click",function(){
        //    let add= c++
        c++
            span.innerText=c
            // q=add;
            console.log(c)
            total+=c*elem.price
            console.log(elem.price)
            document.querySelector("#count").innerText=total.toFixed(2)
            // window.location.reload()
            // totals.innerText=total.toFixed(2)

        })
        let btn2=document.createElement("button");
        btn2.innerText="-"
        btn2.addEventListener("click",function(){
            if(c>=2){
                let sub=--c
                // let add=c--
                console.log(c)
                span.innerText=sub;
                // q=add;
                total+=sub*elem.price
                
                document.querySelector("#count").innerText=total.toFixed(2)
                // window.location.reload()
                // totals.innerText=total.toFixed(2)


            }
           

        })
       
         /*---------------------------*/ 
         
        let remove=document.createElement("button");
        remove.innerText="Remove"
        remove.addEventListener("click",function(){
            deleData(cartArr,index)
            window.location.reload()
        })
        
        div.append(imageProd,title,desc,price,btn1,span,btn2,remove)
       
        document.querySelector(".cart").append(div)
        document.querySelector("#count").innerText=total.toFixed(2)
       
    });
    len.innerText=out.length
   
    
}
function deleData(data,index){
    data.splice(index,1);
    localStorage.setItem("items",JSON.stringify(data));
    display(data)
}
display(cartArr) 