//RateBtns
let rateBtn = document.querySelectorAll(".Steam-Games div .second-txt .rate");
let rateMe = document.querySelectorAll(".Steam-Games div .rated .rateMe");

let array1 = Array.from(rateBtn);
let array2 = Array.from(rateMe);

let rateCounts = JSON.parse(localStorage.getItem("numberRate")) || {};

window.addEventListener("load", function() {
    array2.forEach(function(ele, index) {
        if (rateCounts[index] !== undefined) {
            ele.innerHTML = rateCounts[index];
        } else {
            ele.innerHTML = 0;
        }
    })
})

array1.forEach(function(ele, index) {
    let numberCounter = rateCounts[index] || 0;
    
    ele.addEventListener("click", function() {
        numberCounter++;
        array2[index].innerHTML = numberCounter;
        
        rateCounts[index] = numberCounter;
        localStorage.setItem("numberRate", JSON.stringify(rateCounts));
    })
})

// Show and Hide saleContainer
let Rotate = document.getElementsByClassName("Rotate");
let back1 = document.getElementsByClassName("back1");
let saleContainer = document.getElementsByClassName("saleContainer");

for(let i = 0 ; i < Rotate.length ; i++){
Rotate[i].addEventListener("click",function(){
    for(let j = 0 ; j < saleContainer.length ; j++){
      saleContainer[i].classList.add("ShowSaleContainer")
    }
})

for(let i = 0 ; i < back1.length ; i++){
back1[i].addEventListener("click",function(){
    for(let j = 0 ; j < saleContainer.length ; j++){
        saleContainer[i].classList.remove("ShowSaleContainer")
      }
})
}
}

// increment and decrement the price
let number1 = 1;
let number2 = 1;
let number3 = 1;
let number4 = 1;
let number5 = 1;
let number6 = 1;
let number7 = 1;
let number8 = 1;
let number9 = 1;
let number10 = 1;

let decrement1 = document.querySelectorAll(".game1 .decrement");
let spBraces1 = document.querySelectorAll(".game1 .spBraces");
let spansPrice1 = document.querySelectorAll(".game1 .spanPrice");
let price1 = document.querySelectorAll(".game1 .price");

for(let i = 0 ; i < spansPrice1.length ; i++){
    spansPrice1[i].addEventListener("click",function(){
        for(let j = 0 ; j < price1.length ; j++){
            price1[j].innerHTML = parseInt(spansPrice1[i].innerHTML);
            for(let s = 0 ; s < spBraces1.length ; s++){
                spBraces1[s].innerHTML = ++number1
                if(price1[j].innerHTML > 500){
                    spBraces1[s].innerHTML = +spBraces1[s].innerHTML-1;
                    price1[j].innerHTML *= +spBraces1[s].innerHTML
                }else if(price1[j].innerHTML == 500){
                    spBraces1[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement1.length ; i++){
        decrement1[i].addEventListener("click",function(){
            for(let j = 0 ; j < price1.length ; j++){
                price1[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces1.length ; s++){
                    spBraces1[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }
let decrement2 = document.querySelectorAll(".game2 .decrement");
let spBraces2 = document.querySelectorAll(".game2 .spBraces");
let spansPrice2 = document.querySelectorAll(".game2 .spanPrice");
let price2 = document.querySelectorAll(".game2 .price");

for(let i = 0 ; i < spansPrice2.length ; i++){
    spansPrice2[i].addEventListener("click",function(){
        for(let j = 0 ; j < price2.length ; j++){
            price2[j].innerHTML = parseInt(spansPrice2[i].innerHTML);
            for(let s = 0 ; s < spBraces2.length ; s++){
                spBraces2[s].innerHTML = ++number2
                if(price2[j].innerHTML > 500){
                    spBraces2[s].innerHTML = +spBraces2[s].innerHTML-1;
                    price2[j].innerHTML *= +spBraces2[s].innerHTML
                }else if(price2[j].innerHTML == 500){
                    spBraces2[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement2.length ; i++){
        decrement2[i].addEventListener("click",function(){
            for(let j = 0 ; j < price2.length ; j++){
                price2[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces2.length ; s++){
                    spBraces2[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }
let decrement3 = document.querySelectorAll(".game3 .decrement");
let spBraces3 = document.querySelectorAll(".game3 .spBraces");
let spansPrice3 = document.querySelectorAll(".game3 .spanPrice");
let price3 = document.querySelectorAll(".game3 .price");

for(let i = 0 ; i < spansPrice3.length ; i++){
    spansPrice3[i].addEventListener("click",function(){
        for(let j = 0 ; j < price3.length ; j++){
            price3[j].innerHTML = parseInt(spansPrice3[i].innerHTML);
            for(let s = 0 ; s < spBraces3.length ; s++){
                spBraces3[s].innerHTML = ++number3
                if(price3[j].innerHTML > 500){
                    spBraces3[s].innerHTML = +spBraces3[s].innerHTML-1;
                    price3[j].innerHTML *= +spBraces3[s].innerHTML
                }else if(price3[j].innerHTML == 500){
                    spBraces3[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement3.length ; i++){
        decrement3[i].addEventListener("click",function(){
            for(let j = 0 ; j < price3.length ; j++){
                price3[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces3.length ; s++){
                    spBraces3[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }

let decrement4 = document.querySelectorAll(".game4 .decrement");
let spBraces4 = document.querySelectorAll(".game4 .spBraces");
let spansPrice4 = document.querySelectorAll(".game4 .spanPrice");
let price4 = document.querySelectorAll(".game4 .price");

for(let i = 0 ; i < spansPrice4.length ; i++){
    spansPrice4[i].addEventListener("click",function(){
        for(let j = 0 ; j < price4.length ; j++){
            price4[j].innerHTML = parseInt(spansPrice4[i].innerHTML);
            for(let s = 0 ; s < spBraces3.length ; s++){
                spBraces4[s].innerHTML = ++number4
                if(price4[j].innerHTML > 500){
                    spBraces4[s].innerHTML = +spBraces4[s].innerHTML-1;
                    price4[j].innerHTML *= +spBraces4[s].innerHTML
                }else if(price4[j].innerHTML == 500){
                    spBraces4[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement4.length ; i++){
        decrement4[i].addEventListener("click",function(){
            for(let j = 0 ; j < price4.length ; j++){
                price4[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces4.length ; s++){
                    spBraces4[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }

let decrement5 = document.querySelectorAll(".game5 .decrement");
let spBraces5 = document.querySelectorAll(".game5 .spBraces");
let spansPrice5 = document.querySelectorAll(".game5 .spanPrice");
let price5 = document.querySelectorAll(".game5 .price");

for(let i = 0 ; i < spansPrice5.length ; i++){
    spansPrice5[i].addEventListener("click",function(){
        for(let j = 0 ; j < price5.length ; j++){
            price5[j].innerHTML = parseInt(spansPrice5[i].innerHTML);
            for(let s = 0 ; s < spBraces3.length ; s++){
                spBraces5[s].innerHTML = ++number5
                if(price5[j].innerHTML > 500){
                    spBraces5[s].innerHTML = +spBraces5[s].innerHTML-1;
                    price5[j].innerHTML *= +spBraces5[s].innerHTML
                }else if(price5[j].innerHTML == 500){
                    spBraces5[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement5.length ; i++){
        decrement5[i].addEventListener("click",function(){
            for(let j = 0 ; j < price5.length ; j++){
                price5[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces5.length ; s++){
                    spBraces5[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }

let decrement6 = document.querySelectorAll(".game6 .decrement");
let spBraces6 = document.querySelectorAll(".game6 .spBraces");
let spansPrice6 = document.querySelectorAll(".game6 .spanPrice");
let price6 = document.querySelectorAll(".game6 .price");

for(let i = 0 ; i < spansPrice6.length ; i++){
    spansPrice6[i].addEventListener("click",function(){
        for(let j = 0 ; j < price6.length ; j++){
            price6[j].innerHTML = parseInt(spansPrice6[i].innerHTML);
            for(let s = 0 ; s < spBraces6.length ; s++){
                spBraces6[s].innerHTML = ++number6
                if(price6[j].innerHTML > 500){
                    spBraces6[s].innerHTML = +spBraces6[s].innerHTML-1;
                    price6[j].innerHTML *= +spBraces6[s].innerHTML
                }else if(price6[j].innerHTML == 500){
                    spBraces6[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement6.length ; i++){
        decrement6[i].addEventListener("click",function(){
            for(let j = 0 ; j < price6.length ; j++){
                price6[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces6.length ; s++){
                    spBraces6[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }


let decrement7 = document.querySelectorAll(".game7 .decrement");
let spBraces7 = document.querySelectorAll(".game7 .spBraces");
let spansPrice7 = document.querySelectorAll(".game7 .spanPrice");
let price7 = document.querySelectorAll(".game7 .price");

for(let i = 0 ; i < spansPrice7.length ; i++){
    spansPrice7[i].addEventListener("click",function(){
        for(let j = 0 ; j < price7.length ; j++){
            price7[j].innerHTML = parseInt(spansPrice7[i].innerHTML);
            for(let s = 0 ; s < spBraces7.length ; s++){
                spBraces7[s].innerHTML = ++number7
                if(price7[j].innerHTML > 500){
                    spBraces7[s].innerHTML = +spBraces7[s].innerHTML-1;
                    price7[j].innerHTML *= +spBraces7[s].innerHTML
                }else if(price7[j].innerHTML == 500){
                    spBraces7[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement7.length ; i++){
        decrement7[i].addEventListener("click",function(){
            for(let j = 0 ; j < price7.length ; j++){
                price7[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces7.length ; s++){
                    spBraces7[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }

let decrement8 = document.querySelectorAll(".game8 .decrement");
let spBraces8 = document.querySelectorAll(".game8 .spBraces");
let spansPrice8 = document.querySelectorAll(".game8 .spanPrice");
let price8 = document.querySelectorAll(".game8 .price");

for(let i = 0 ; i < spansPrice8.length ; i++){
    spansPrice8[i].addEventListener("click",function(){
        for(let j = 0 ; j < price8.length ; j++){
            price8[j].innerHTML = parseInt(spansPrice8[i].innerHTML);
            for(let s = 0 ; s < spBraces8.length ; s++){
                spBraces8[s].innerHTML = ++number8
                if(price8[j].innerHTML > 500){
                    spBraces8[s].innerHTML = +spBraces8[s].innerHTML-1;
                    price8[j].innerHTML *= +spBraces8[s].innerHTML
                }else if(price8[j].innerHTML == 500){
                    spBraces8[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement8.length ; i++){
        decrement8[i].addEventListener("click",function(){
            for(let j = 0 ; j < price8.length ; j++){
                price8[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces8.length ; s++){
                    spBraces8[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }


let decrement9 = document.querySelectorAll(".game9 .decrement");
let spBraces9 = document.querySelectorAll(".game9 .spBraces");
let spansPrice9 = document.querySelectorAll(".game9 .spanPrice");
let price9 = document.querySelectorAll(".game9 .price");

for(let i = 0 ; i < spansPrice9.length ; i++){
    spansPrice9[i].addEventListener("click",function(){
        for(let j = 0 ; j < price9.length ; j++){
            price9[j].innerHTML = parseInt(spansPrice9[i].innerHTML);
            for(let s = 0 ; s < spBraces9.length ; s++){
                spBraces9[s].innerHTML = ++number9
                if(price9[j].innerHTML > 500){
                    spBraces9[s].innerHTML = +spBraces9[s].innerHTML-1;
                    price9[j].innerHTML *= +spBraces9[s].innerHTML
                }else if(price9[j].innerHTML == 500){
                    spBraces9[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement9.length ; i++){
        decrement9[i].addEventListener("click",function(){
            for(let j = 0 ; j < price9.length ; j++){
                price9[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces9.length ; s++){
                    spBraces9[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }

let decrement10 = document.querySelectorAll(".game10 .decrement");
let spBraces10 = document.querySelectorAll(".game10 .spBraces");
let spansPrice10 = document.querySelectorAll(".game10 .spanPrice");
let price10 = document.querySelectorAll(".game10 .price");

for(let i = 0 ; i < spansPrice10.length ; i++){
    spansPrice10[i].addEventListener("click",function(){
        for(let j = 0 ; j < price10.length ; j++){
            price10[j].innerHTML = parseInt(spansPrice10[i].innerHTML);
            for(let s = 0 ; s < spBraces10.length ; s++){
                spBraces10[s].innerHTML = ++number10
                if(price10[j].innerHTML > 500){
                    spBraces10[s].innerHTML = +spBraces10[s].innerHTML-1;
                    price10[j].innerHTML *= +spBraces10[s].innerHTML
                }else if(price10[j].innerHTML == 500){
                    spBraces10[s].innerHTML = 0
                }
              }
        }
    })
    }
    
    for(let i = 0 ; i < decrement10.length ; i++){
        decrement10[i].addEventListener("click",function(){
            for(let j = 0 ; j < price10.length ; j++){
                price10[i].innerHTML = 500;
                for(let s = 0 ; s < spBraces10.length ; s++){
                    spBraces10[s].innerHTML = 0
              }}  
              window.location.reload()
        })
    }
//Show and Hide CartContainer
let Cart = document.getElementById("CartContainer");

function ShowCart(){
    Cart.classList.add("ShowCartContainer")
}

function CloseCart(){
    Cart.classList.remove("ShowCartContainer")
}

// Show and Hide stip p

let StipP1 = document.querySelectorAll(".Help-To-Pay .p-1");
let StipP2 = document.querySelectorAll(".Help-To-Pay .p-2");
let stipDiv = document.querySelectorAll(".Help-To-Pay .stip");
let spRotate = document.querySelectorAll(".Help-To-Pay .p-1 .sp-2");
let spColor = document.querySelectorAll(".Help-To-Pay .p-1 .sp1");

let arr1 = Array.from(StipP1);
let arr2 = Array.from(stipDiv);
let arr3 = Array.from(StipP2);
let arr4 = Array.from(spRotate);
let arr5 = Array.from(spColor);

arr1.forEach(function(ele, index){
    ele.addEventListener("click", function(){
        arr2[index].classList.toggle("heightStip");
        arr3[index].classList.toggle("ShowP");
        arr4[index].classList.toggle("rotateSp2");
        arr5[index].classList.toggle("ChangeColor");
    })
})

//Add the products 

let AppendProduct = document.getElementById("AppendProduct");

let spCounter = document.getElementById("spCounter");

let iconCart = document.querySelector("#btnCart i");

let SaleBtn = document.querySelectorAll(".Steam-Games div .saleContainer .bottom-container .SaleBtn");

let price = document.querySelectorAll(".Steam-Games div .saleContainer .top-container p .price");

let images = document.querySelectorAll(".Steam-Games div .saleContainer img");

let p = document.querySelectorAll(".Steam-Games div .first-txt .p-1");

let arr6 = Array.from(SaleBtn);

let arr7 = Array.from(price);

let arr8 = Array.from(images);       

let arr9 = Array.from(p);       

let num1 = 0;
    
let num2 = 1;



arr6.forEach(function(ele,index){
    ele.addEventListener("click",function(){       
numberCounter = 0;         
spCounter.innerHTML = ++numberCounter;   
if(spCounter.innerHTML > 0){
    spCounter.style.opacity = "1";
    iconCart.style.cssText = `
    background-color: black;
    `
}else{
    iconCart.style.cssText = `
    background-color: var(--main-color);
    ` 
}  
if(num1<num2){


let container = document.createElement("div");
container.style.cssText = `width:100%;
height: 125%;
display: flex;
flex-direction: column;
gap: 15px;
position: relative;
padding-top: 40px;
`;
let image = document.createElement("img");
image.style.cssText = `
width: 95%;
height: 60%;
object-fit: cover;
margin: 0 auto;
`

let h2 = document.createElement("h2");
h2.style.cssText = `
    font-size: 22px;
    font-weight: 600;
    width: 100%;
    text-align: center;
`

image.src = arr8[index].src;
let span = document.createElement("span");
span.style.cssText = `
font-size: 15px;
font-weight: 600;
border: solid 1px #000000b0;
width: fit-content;
padding: 5px 4px;
margin-left: 8px;
position: absolute;
bottom: 6px;
`

h2.innerHTML = arr9[index].innerHTML;

let containerSpans = document.createElement("div");
containerSpans.style.cssText = `
position: absolute;
    bottom: -6px;
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    column-gap: 20px;
    row-gap: 3px;
    justify-content: center;
`

span.innerHTML = `Price is ${arr7[index].innerHTML} EGP`;

let btnRemove = document.createElement("button");
btnRemove.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
btnRemove.style.cssText = `
position: absolute;
top: 8px;
right: 10px;
`

btnRemove.addEventListener("click",function(){
    iconCart.style.cssText = `
    background-color: var(--main-color);
    ` 
    spCounter.innerHTML = --numberCounter;   
    spCounter.style.opacity = "0";
    let conf = confirm("are you sure?")
    if(conf == true){
        container.remove();
        AppendProduct.style.cssText = `
        border: none;
        height: auto;
        width: auto;
        `    
        --num1
    }else if(conf == false){
        spCounter.innerHTML = ++numberCounter; 
        spCounter.style.opacity = "1";
        iconCart.style.cssText = `
        background-color: black;
        `
    return false
    }
})
 
if(AppendProduct){
    AppendProduct.style.cssText = `
    border: 1px solid black;
    height: 85%;
    width: 40%;
    `
}

let media1 = window.matchMedia("(min-width:200px) and (max-width: 600px)");

if(media1){

    container.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    padding-top: 40px;
    `
    
    h2.style.cssText = `
    font-size: 13px;
        font-weight: 600;
        width: 100%;
        text-align: center;
    `
    
    AppendProduct.style.cssText = `
    border: 1px solid black;
    height: 105%;
    width: 100%;
    margin: 0px auto;
    `
    image.style.cssText = `
    width: 95%;
    height: 77%;
    object-fit: cover;
    margin: 0px auto;
    `
}


let media2 = window.matchMedia("(min-width:461px) and (max-width: 500px)");

if(media2){

    container.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    padding-top: 40px;
    `
    
    h2.style.cssText = `
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    position: relative;
    top: 10px;
    `
    
    AppendProduct.style.cssText = `
    border: 1px solid black;
    height: 95%;
    width: 100%;
    margin: 0px auto;
    `
    image.style.cssText = `
    width: 95%;
    height: 70%;
    object-fit: cover;
    margin: 0px auto;
    `
}


let media3 = window.matchMedia("(min-width:501px) and (max-width: 700px)");

if(media3){

    container.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    padding-top: 40px;
    `
    
    h2.style.cssText = `
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    position: relative;
    top: 10px;
    `
    
    AppendProduct.style.cssText = `
    border: 1px solid black;
    height: 85%;
    width: 100%;
    margin: 0px auto;
    `
    image.style.cssText = `
    width: 95%;
    height: 70%;
    object-fit: cover;
    margin: 0px auto;
    `
}

container.appendChild(image);
container.appendChild(h2);
container.appendChild(span);
container.appendChild(btnRemove);
AppendProduct.appendChild(container);
}else if(num1==num2){
return false
}
++num1;
})
})

// translate to Arabic and English
let translateBtn1 = document.getElementById("translateBtn1");
let translateBtn2 = document.getElementById("translateBtn2");
let languages = document.getElementById("languages");

let h3Cart = document.querySelector("#nav .PurchaseInformation .Help-To-Pay h3");
let pCart = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .advice");

let step1p1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-1 .p-1");
let step1p2 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-1 .p-2");
let step1sp1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-1 .p-1 .sp1");


let step2p1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-2 .p-1");
let step2p2 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-2 .p-2");
let step2sp1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-2 .p-1 .sp1");

let step3p1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-3 .p-1");
let step3p2 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-3 .p-2");
let step3sp1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-3 .p-1 .sp1");

translateBtn2.addEventListener("click",function(){
    languages.innerHTML = "Translate";
    h3Cart.innerHTML = "كيف تحصل على طلبك؟";
    pCart.innerHTML = ".يجب إدخال نوع الطلب هذا يدويًا في حسابك";
    step1p1.innerHTML = `<span class="sp1">1</span> تحقق من سلة التسوق الخاصة بك`;
    
    step1p2.innerHTML = ".قم بتحرير العناصر وإضافتها أو إزالتها من سلة التسوق الخاصة بك ثم ادفع ثمنها";
    step2p1.innerHTML = `<span class="sp1">2</span> تواصل معنا`;
    step2p2.innerHTML = ".بعد التواصل بنا سنطلب منك إرسال معلومات حسابك";
    step3p1.innerHTML = `<span class="sp1">3</span> تسليم الطلب`
    step3p2.innerHTML = ".سوف نرسل لك لقطة شاشة توضح ذلك قبل وبعد شحن الطلب";
    translateBtn2.style.display = "none";
    translateBtn1.style.display = "inline";
})

 translateBtn1.addEventListener("click",function(){
    languages.innerHTML = "ترجمة";
    h3Cart.innerHTML = "How to get your Order ?";
    pCart.innerHTML = "This order type must be manually entered into your account.";
    step1p1.innerHTML = `<span class="sp1">1</span> Check your Shopping Cart. <span class="sp-2"><i class="fa-solid fa-chevron-down"></i></span>`;
    step1p2.innerHTML = "Edit and add or remove items from your cart then pay for it.";
    step2p1.innerHTML = `<span class="sp1">2</span> Contact Us <span class="sp-2"><i class="fa-solid fa-chevron-down"></i></span>`
    step2p2.innerHTML = "After you contact us we will ask you to send your account information.";
    step3p1.innerHTML = `<span class="sp1">3</span> Order Delivery. <span class="sp-2"><i class="fa-solid fa-chevron-down"></i></span>`
    step3p2.innerHTML = "We will send you a screenshot showing it before and after the order has been shipped.";
    translateBtn2.style.display = "inline";
    translateBtn1.style.cssText = `
    display: inline;
    position: relative;

    `
 })
