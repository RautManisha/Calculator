const form = document.querySelector("form")

console.log(form)
const inputText = form.querySelector(".input-text")

form.addEventListener("click", (e)=>{
    e.preventDefault()
    if(e.target.classList.contains("btn-num")){
        console.log(e.target.textContent)
    } else if(e.target.classList.contains("btn-op")){
        console.log(e.target.textContent)
    } else if(e.target.classList.contains("btn-eq")){
        console.log(e.target.textContent)
    } else if(e.target.classList.contains("btn-clear")){
        console.log(e.target.textContent)
        inputText.value = ""
    }

})