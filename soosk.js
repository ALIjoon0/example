function crate(){

let title=document.createElement("h2")
let text=document.createTextNode("درد و نفرین")
title.appendChild(text)
let element=document.getElementById("demo")
element.appendChild(text)


let image=document.createElement("img")
image.setAttribute("src", "creeper.png")
image.setAttribute("alt", "مرگ")
image.setAttribute("width", "360px")
image.setAttribute("height", "240px")
image.setAttribute("border-radius", "50%")
let Element=document.getElementById("demo")
Element.appendChild(image)

let price=document.createElement("h5")
let price_text=document.createTextNode(20000)
price.appendChild(price_text)
let ELement=document.getElementById("demo")
ELement.appendChild(price_text)





}