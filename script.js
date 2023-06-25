const first = document.querySelector(".first")
const second = document.querySelector(".second")
const btn = document.querySelector(".btn-next")
const h4 = document.querySelector(".text")
const ul = document.querySelector(".list")
const li = document.querySelectorAll(".list")

function sun(){
    alert("Бир нерсе жаз")
}
function func() {
    first.addEventListener("keydown", (ev)=> {
        if (ev.key === "Enter") {
            if (first.value.trim()=== "" || second.value.trim() === ""){
               return
            }
                ul.innerHTML = ""
                const task = JSON.parse(localStorage.getItem("task")) || []
                task.map((el) => {
                    ul.innerHTML += `<li class="list my-1 list-group-item d-flex justify-content-between align-items-center ">
<span class="span">
<h4>${el.title}</h4>
</span>
<h4>${el.lastname}</h4>
<button class="del-btn btn btn-danger">Delete</button>
<li`
                })

                deleteBtn()
            }

    })
}



function view(){

    ul.innerHTML = ""
    const task = JSON.parse(localStorage.getItem("task")) || []
    task.map((el)=>{
        ul.innerHTML += `<li class="list my-1 list-group-item d-flex justify-content-between align-items-center ">
<span class="span2">
<h4>${el.title.trim()}</h4>
</span>
<h4>${el.lastname.trim()}</h4>
<button class="del-btn btn btn-danger">Delete</button>
<li`
    })

    deleteBtn()
}
view()
func()

btn.addEventListener("click", (ev)=>{
    if (first.value.trim() === '' || second.value.trim() === '') {
first.value = ""
        second.value = ""
        h4.innerHTML = "404"
        first.style.border = "2px solid orange"
        second.style.border = "2px solid orange"
        return
    }
    const task = JSON.parse(localStorage.getItem("task")) || []
    const newTask = {
        id: task.length ? task[task.length - 1].id +1 : 1 ,
        title: first.value,
        lastname: second.value,
        isDone: false
    }
    const result = [...task, newTask]
    localStorage.setItem("task", JSON.stringify(result))
    first.value = ""
    second.value = ""
    view()

    form.addEventListener("submit", (e)=>{
        e.preventDefault()


    })



})

function deleteBtn() {
    let task = JSON.parse(localStorage.getItem("task")) || []
    const buttons = document.querySelectorAll(".del-btn")
    buttons.forEach((btn,index)=>{
        btn.addEventListener("click", ()=>{
            task = task.filter((el,idx)=>{
                return idx !== index
            })
            localStorage.setItem("task", JSON.stringify(task))
            view()
        })

    })
}




const body = document.querySelector("body")
const form = document.querySelector( ".form")

body.style.background = "gray"


first.addEventListener("click", ()=>{
    first.style.border = "2px solid gray"
    second.style.border = " 2px solid gray"
    h4.innerHTML = ""
})
second.addEventListener("click", ()=>{
    first.style.border = "2px solid gray"
    second.style.border = " 2px solid gray"
    h4.innerHTML = ""
})





