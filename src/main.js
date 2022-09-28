
abrirModal = document.getElementById("abrirModal")

card_1= document.getElementById("1")
imageModal = document.getElementById("imageModal")

card_1.addEventListener("click", ()=>{
    setImagen("./img/fotomontaje1.jpg")
    abrirModal.click()
})

card_2 = document.getElementById("2")
card_2.addEventListener("click", ()=>{
    setImagen("./img/imagen_grande.png")
    abrirModal.click()
})

card_3 = document.getElementById("3")
card_3.addEventListener("click", ()=>{ 
    setImagen("./img/M6.E5.GIF_anA_PErez.gif")
    abrirModal.click() 
})

function setImagen(url){
    imageModal.style.removeProperty("background-image")
    imageModal.style.backgroundImage = `url(${url})`
    imageModal.style.backgroundOosition = "center"
    imageModal.style.backgroundSize = "cover"
}
contenido = document.getElementById("parrafos")

btn1 = document.getElementById("btn1")
btn2 = document.getElementById("btn2")
btn3 = document.getElementById("btn3")

texto1 = `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ad magni soluta error, quia, ut modi
voluptatum accusantium impedit, mollitia et? Explicabo voluptatibus aspernatur aut harum ducimus
rerum illum ut. Rem deserunt quod mollitia dignissimos? Dicta in voluptatem quasi maxime autem
molestias odit, eos nulla omnis officiis error officia soluta!</p>
<p>&nbsp;</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas velit, voluptates fuga
quia saepe repellendus modi animi, temporibus ratione non molestiae expedita. Necessitatibus quos
magnam expedita obcaecati aspernatur repellendus excepturi cumque quia, delectus culpa velit, animi
porro unde eaque.</p>`

texto2 = `<p>Este es un nuevo texto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas velit, voluptates fuga
quia saepe repellendus modi animi, temporibus ratione non molestiae expedita. Necessitatibus quos
magnam expedita obcaecati aspernatur repellendus excepturi cumque quia, delectus culpa velit, animi
porro unde eaque. </p>
<p>&nbsp;</p>
<p>El texto 🤣Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas velit, voluptates fuga
quia saepe repellendus modi animi, temporibus ratione non molestiae expedita. Necessitatibus quos
magnam expedita obcaecati aspernatur repellendus excepturi cumque quia, delectus culpa velit, animi
porro unde eaque.</p>`

texto3 = `<p>El ultimo texto adads Este es un nuevo texto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas velit, voluptates fuga
quia saepe repellendus modi animi, temporibus ratione non molestiae expedita. Necessitatibus quos
magnam expedita obcaecati aspernatur repellendus excepturi cumque quia, delectus culpa velit, animi
porro unde eaque. </p>
<p>&nbsp;</p>
<p>El texto 🤣Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas velit, voluptates fuga
quia saepe repellendus modi animi, temporibus ratione non molestiae expedita. Necessitatibus quos
magnam expedita obcaecati aspernatur repellendus excepturi cumque quia, delectus culpa velit, animi
porro unde eaque.</p>`


btn1.addEventListener("click", () => {
    contenido.classList.remove("allradius");
    removerBordes()
    btn1.classList.add("border");
    btn1.classList.add("trasnlate");
    contenido.innerHTML = texto1;
})
btn2.addEventListener("click", () => {
    removerBordes()
    btn2.classList.add("border");
    btn2.classList.add("trasnlate");
    contenido.classList.add("allradius");
    contenido.innerHTML = texto2;
})
btn3.addEventListener("click", () => {
    removerBordes()
    btn3.classList.add("border");
    btn3.classList.add("trasnlate");
    contenido.classList.add("allradius");
    contenido.innerHTML = texto3;
})

let removerBordes = () =>{
    btn1.classList.remove("border");
    btn2.classList.remove("border");
    btn3.classList.remove("border");
    btn1.classList.remove("trasnlate");
    btn2.classList.remove("trasnlate");
    btn3.classList.remove("trasnlate");
}

