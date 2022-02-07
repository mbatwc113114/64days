console.log("hi")

let home_tab = document.getElementById("console")
let add_task_tab = document.getElementById("add_task")
let console_btn = document.getElementById("console_btn")
let add_task_btn = document.getElementById("add_task_btn")



console_btn.onclick = function(){console_page()}
add_task_btn.onclick = function(){add_task_page()}

function console_page(){
    add_task_tab.classList.add("false")
    console_btn.classList.add("active")
    add_task_btn.classList.remove("active")
    home_tab.classList.remove("false")    
}

function add_task_page(){
    home_tab.classList.add("false")
    add_task_btn.classList.add("active")
    console_btn.classList.remove("active")
    add_task_tab.classList.remove("false")    
}