//Error in code 
//data is not added in total
//updating all the element price not a single one;
//inc dec error 
let cartArr=JSON.parse(localStorage.getItem("items"));
let len=document.querySelector("#len")

//let cart=document.querySelector(".cart")

let totals=document.querySelector("#count");

let c=1
let total=0

// console.log("local",t)
function display(out){
   
    document.querySelector(".carts").innerHTML="";
    // let total=localStorage.getItem("total")
    
    // console.log(total)
   
    // window.location.reload()
    // if(total!==0){
    //     window.location.reload()
    // }
    
    out.forEach(function(elem,index){
        // let total=0;
        let div=document.createElement("div");
        let imageProd=document.createElement("img")
        imageProd.src=elem.image;
        let title=document.createElement("h2");
        title.innerText=elem.title;
        let desc=document.createElement("p");
        desc.innerText=elem.desc
        let price=document.createElement("p")
        
        // let q=1;
        
        price.innerText=elem.price;
        total+=c*elem.price;
    //    let ts=localStorage.setItem("total",total)
        // let ts=localStorage.getItem("total");
        // console.log(ts)
       
        /*---------------------------*/ 
        let span=document.createElement("span");
         
        
        span.innerText=c

          // increment function*************************************************
        let btn1=document.createElement("button");
        btn1.innerText="+"
        btn1.addEventListener("click",function(){
          c++
        // c++
            span.innerText=c
            // q=add;
            console.log(c)
            total=c*elem.price
            console.log("total after inc",total)
            console.log(elem.price)
            document.querySelector("#count").innerText=total
            // window.location.reload()
            // totals.innerText=total.toFixed(2)

        })

        // decrement function*************************************************
        let btn2=document.createElement("button");
        btn2.innerText="-"
        btn2.addEventListener("click",function(){
            if(c>1){
                c--
                // let add=c--
                console.log(c)
                span.innerText=c;
                // q=add;
                total=c*elem.price
                console.log("total after dec",total)
                
                document.querySelector("#count").innerText=total
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
       
        document.querySelector(".carts").append(div)
        document.querySelector("#count").innerText=total
       
    });
    len.innerText=out.length
   
    
}
function deleData(data,index){
    data.splice(index,1);
    localStorage.setItem("items",JSON.stringify(data));
    display(data)
}
display(cartArr) 