const form = document.getElementById("form");
const btn = document.getElementById("btn");
const addBtn = document.getElementById("addBtn");
const bookContainer = document.querySelector("div#bookContainer")
const bookList = [];
addBtn.addEventListener("click",(event)=>{
   event.preventDefault();
   const bookName = document.getElementById("name").value;
   const bookImage = document.getElementById("image").value;
   const bookDescription = document.getElementById("description").value;
   const bookInfo ={
    name : bookName,
    image : bookImage,
    desc : bookDescription
   }
   bookList.push(bookInfo);
   form.classList.remove("flex")
   form.classList.add("hidden")

   bookList.forEach(book =>{
    const div = document.createElement("div");
    div.classList.add("bookBox");

     const h1 = document.createElement("h1");
     h1.textContent = book.name;
     h1.classList.add("h1Box");

     const p = document.createElement("p");
     p.textContent = book.desc;
    p.classList.add("pBox");

    const image = document.createElement("img");
    image.setAttribute("src",book.image);
    image.classList.add("imgBox")
    div.appendChild(image);

    const textCont = document.createElement("div")
    div.appendChild(textCont);
    textCont.append(h1,p);
    textCont.classList.add("boxText")
    
    bookContainer.appendChild(div)
    bookContainer.classList.add("bookContainer")
})
})
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

