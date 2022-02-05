
function sendOutput(input){
    try{
        inputText.value = eval(inputText.value)
    } catch(err){
        // alert("Please enter valid expression!")
        inputText.value = "Invalid Expression"
        inputText.style.color = "red"
    }
}

function clearInvalidExceptionIfPresent(){
    if(inputText.value === "Invalid Expression"){
        inputText.value = ""
        inputText.style.color = "white"
    }
}

const form = document.querySelector(".calculator")
const inputText = document.querySelector(".input-text")
inputText.focus()
document.addEventListener("keypress", (e)=>{
    clearInvalidExceptionIfPresent()
    if(e.key==='Enter' && e.target.classList.contains("input-text"))
    sendOutput(inputText.value)
})

form.addEventListener("click", (e)=>{
    e.preventDefault()
    clearInvalidExceptionIfPresent()
    const currentKey = e.target.textContent
    if(e.target.classList.contains("btn-num") ||
     e.target.classList.contains("btn-op")){
        inputText.value += currentKey
    } else if(e.target.classList.contains("btn-eq")){
        sendOutput(inputText.value)
    } else if(e.target.classList.contains("btn-clear")){
        inputText.value = ""
    }
    inputText.focus()
})