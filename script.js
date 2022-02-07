console.log("hi")

let tab1 = document.getElementById("active")
let tab2 = document.getElementById("test")
let btn1 = document.getElementById("active_btn")
let btn2 = document.getElementById("test_btn")



btn1.onclick = function(){bt1()}
btn2.onclick = function(){bt2()}

function bt1(){
    tab2.classList.add("false")
    tab1.classList.remove("false")    
}

function bt2(){
    tab1.classList.add("false")
    tab2.classList.remove("false")    
}