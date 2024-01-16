const car1 =document.getElementById("car1")
const car2 =document.getElementById("car2")
const main =document.getElementById("main")
const down =document.getElementById("down")

const car =document.querySelectorAll("img")
const left =document.querySelector(".left")
const right =document.querySelector(".right")
const im=document.getElementById("im")

const info=document.querySelector(".carinfo")





window.addEventListener("scroll",()=>{
    if(window.scrollY>500&window.scrollY<1090){
        car1.style.transform="translateY(0px) scale(1)"
        car2.style.transform="translateY(0px) scale(1)"
        left.style.transform="translateX(-600px) "
        right.style.transform="translateX(600px) "
        main.style.transform="translateY(-300px) scale(.2)"
        down.style.transform=" scale(1)"
        down.style.borderRadius=" 30px"

    }else{
        car1.style.transform="translateY(600px) scale(.3)"
        car2.style.transform="translateY(600px) scale(.3)"
        main.style.transform="translateY(0px) scale(1)"
       down.style.transform=" scale(.001)"
       down.style.borderRadius=" 50%"
       left.style.transform="translateX(0px) "
       right.style.transform="translateX(0px) "



    }
})
window.addEventListener("mousemove",(dets)=>{
    console.log(window.scrollY)
})



