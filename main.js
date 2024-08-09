// NavBar when Scroll
let navBar = document.getElementById("nav");
let btnToUp = document.getElementById("ToUp")

window.addEventListener("scroll",function(){
    if(scrollY >= 100){
navBar.classList.add("classNav");
btnToUp.style.cssText = `
opacity: 1;
display: inline;
`

    }else{
        navBar.classList.remove("classNav");
        btnToUp.style.cssText = `
        opacity: 0;
        display: none;
`
    }
})

btnToUp.onclick = () =>{
    window.scroll({
        top:0,
        behavior: "smooth"
    })
}

// Show and Close menu
let ul2 = document.getElementById("ul2");
let ul3 = document.getElementById("ul3");
let ul4 = document.getElementById("ul4");
let span1 = document.getElementById("sp1");
let span2 = document.getElementById("sp2");
let span3 = document.getElementById("sp3");

function ClickMenue1(){
    ul2.classList.toggle("classMenue");
    span1.classList.toggle("rotateSpan")
}

function ClickMenue2(){
    ul3.classList.toggle("classMenue");
    span2.classList.toggle("rotateSpan")
}

function ClickMenue3(){
    ul4.classList.toggle("classMenue");
    span3.classList.toggle("rotateSpan")
}

let BtnNav = document.getElementById("btnNav");
let menu = document.getElementById("Menu");

BtnNav.addEventListener("click",function(){
    menu.classList.add("showMenu")
})

let BtnMenu = document.getElementById("btnMenue");

BtnMenu.addEventListener("click",function(){
    menu.classList.remove("showMenu")
})

// Show and hide asidewishlist
let BtnFavorite = document.getElementById("BtnFavorite");
let asidewishlist = document.getElementById("asidewishlist");
let Closewishlist = document.getElementById("Closewishlist");

function OpenWishlist(){
  asidewishlist.classList.add("ShowWishlist")  
}

function CloseWishlist(){
    asidewishlist.classList.remove("ShowWishlist")  
}

//  Show and hide form
let btnSearch = document.getElementById("btnSearch")
let form = document.getElementById("Form");

btnSearch.onclick = () =>{
    form.classList.toggle("ShowForm")
}

// slider images

let sliderContainer =document.getElementById("sliderContainer");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let icon1 = document.getElementById("i1");
let icon2 = document.getElementById("i2");
let icon3 = document.getElementById("i3");
let icon4 = document.getElementById("i4");
let icon5 = document.getElementById("i5");

img1.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/MINE.jpg);
    `
    icon1.style.color = "black";
    icon2.style.color = "white";
    icon3.style.color = "white";
    icon4.style.color = "white";
    icon5.style.color = "white";
})

img2.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/Redemption_II.jpg);
    `
    icon2.style.color = "black";
    icon1.style.color = "white";
    icon3.style.color = "white";
    icon4.style.color = "white";
    icon5.style.color = "white";
})

img3.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/roblox.jpg);
    `
    icon3.style.color = "black";
    icon1.style.color = "white";
    icon2.style.color = "white";
    icon4.style.color = "white";
    icon5.style.color = "white";
})

img4.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/Fortnite.jpg);
    `
    icon4.style.color = "black";
    icon1.style.color = "white";
    icon2.style.color = "white";
    icon3.style.color = "white";
    icon5.style.color = "white";
})

img5.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/Pubg-mobile.jpg);
    `
    icon5.style.color = "black";
    icon1.style.color = "white";
    icon2.style.color = "white";
    icon3.style.color = "white";
    icon4.style.color = "white";
})

// add Wishlist to localstorage

let spCount = document.getElementById("spCount");
let btnAdd = document.querySelectorAll("#Main div .container .btns-rated .Add");
let pWishlist = document.querySelectorAll("#Main div .container .pWishlist");
let links = document.querySelectorAll("#Main > div .container > a");

let ArrbtnAdd = Array.from(btnAdd);
let ArrpWishlist = Array.from(pWishlist);
let arrLinks = Array.from(links);

let num = 0;

ArrbtnAdd.forEach(function(ele,index){
    let num1 = 0;   
    let num2 = 1;
    ele.addEventListener("click",function(){
     ele.innerHTML = "<i class='fa-solid fa-heart'></i>";
     if(num1 < num2){
        spCount.innerHTML = ++num;
        let div = document.createElement("div");
        div.style.cssText = `display: flex;
            justify-content: space-around;
            border: solid 1px black;
            height: auto;
            padding: 8px 3px;
            align-items: center;
            margin-top: 6px;
            width: 95%;
            margin: auto;`

let link = document.createElement("a");
link.style.cssText = ` color: var(--second-color);
   font-size: 11px;
   font-weight: 600;
   display: inline;`
   link.href = arrLinks[index].href;
   link.innerHTML = pWishlist[index].innerHTML
   
let btnRemove = document.createElement("button");
btnRemove.style.cssText = `font-size: 12px;
font-weight: 600;`
btnRemove.innerHTML = "Remove";

btnRemove.addEventListener("click",function(){
         div.remove();
         spCount.innerHTML = --num;
         if (spCount.innerHTML > 0) {
             spCount.innerHTML - 1;
         } else {
             spCount.innerHTML = 0;
         }
         ele.innerHTML = '<i class="fa-regular fa-heart"></i>';      
    });

div.append(link,btnRemove);
asidewishlist.appendChild(div);
     }else if(num1>=num2){
        return false
     }   
     ++num1
    })
})

// Animation div

let divs1 = document.getElementsByClassName("div1");
let divs2 = document.getElementsByClassName("div2");
let divs3 = document.getElementsByClassName("div3");
let divs4 = document.getElementsByClassName("div4");
let divs5 = document.getElementsByClassName("div5");
let divs6 = document.getElementsByClassName("div6");
let divs7 = document.getElementsByClassName("div7");
let divs8 = document.getElementsByClassName("div8");
let divs9 = document.getElementsByClassName("div9");
let divs10 = document.getElementsByClassName("div10");
let AboutSec = document.getElementById("AboutSection");
let contactUs = document.getElementById("contactUs");
let footer = document.getElementById("footer");


window.addEventListener("scroll",function(){
        if(scrollY >= 3038){
            AboutSec.style.opacity = "1"
        }else{
            AboutSec.style.opacity = "0"
        }

        if(scrollY >= 3557){
            contactUs.style.opacity = "1"
        }else{
            contactUs.style.opacity = "0"
        }

        if(scrollY >= 4100){
            footer.style.opacity = "1"
        }else{
            footer.style.opacity = "0"
        }

    if(scrollY >= 800){
for(let i = 0; i < divs1.length ; i++){
divs1[i].style.cssText = `
opacity:1;
transform: translatex(0px)!important
`
}
    }

    if(scrollY >= 800){
        for(let i = 0; i < divs2.length ; i++){
        divs2[i].style.cssText = `
        opacity:1;
        transform: translateY(0px)!important
        `
        }
        }

        if(scrollY >= 1256){
            for(let i = 0; i < divs3.length ; i++){
            divs3[i].style.cssText = `
            opacity:1;
            transform: translateY(0px)!important
            `
            }
            }

            if(scrollY >= 1256){
                for(let i = 0; i < divs4.length ; i++){
                divs4[i].style.cssText = `
                opacity:1;
                transform: translateY(0px)!important
                `
                }
                }

                if(scrollY >= 1728){
                    for(let i = 0; i < divs5.length ; i++){
                    divs5[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 1728){
                    for(let i = 0; i < divs6.length ; i++){
                    divs6[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 2400){
                    for(let i = 0; i < divs7.length ; i++){
                    divs7[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 2400){
                    for(let i = 0; i < divs8.length ; i++){
                    divs8[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 2810){
                    for(let i = 0; i < divs9.length ; i++){
                    divs9[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 2810){
                    for(let i = 0; i < divs10.length ; i++){
                    divs10[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }
})

