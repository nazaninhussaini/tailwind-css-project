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
   bookContainer.innerHTML ="";

   bookList.forEach((book,index) =>{
    const div = document.createElement("div");
    div.classList.add("w-11/12","h-72" ,"mx-auto","my-4","grid","p-4",
    "border","rounded-lg","bg-white","grid-cols-2");

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

    const textCont = document.createElement("div");
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("py-2","px-5","bg-red-400","text-white","rounded-md","h-10","w-4/12");
    div.appendChild(textCont);
    textCont.append(h1,p,deleteBtn);

    deleteBtn.addEventListener("click",()=>{
        bookList.splice(index,1);
        bookContainer.innerHTML = "";

        bookList.forEach((book,index) =>{
    const div = document.createElement("div");
    div.classList.add("w-11/12","h-72" ,"mx-auto","my-4","grid","p-4","border",
    "rounded-lg","bg-white","grid-cols-2");

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

    const textCont = document.createElement("div");
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("py-2","px-5","bg-red-400","text-white","rounded-md","h-10","w-4/12");
    div.appendChild(textCont);
    textCont.append(h1,p,deleteBtn);

    deleteBtn.addEventListener("click",()=>{
        bookList.splice(index,1);
        bookContainer.innerHTML = ""
    })
    textCont.classList.add("boxText")

    bookContainer.appendChild(div)
    bookContainer.classList.add("bookContainer")
})
    })
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

