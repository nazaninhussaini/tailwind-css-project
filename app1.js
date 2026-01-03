const form = document.getElementById("form");
const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        form.classList.add("flex");
    }
    else{
         form.classList.remove("flex");
        form.classList.add("hidden"); 
    }
})