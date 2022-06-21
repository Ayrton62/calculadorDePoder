const mainCont = document.querySelector(".cont");
for(let p of personajes){
const cont__pj = document.createElement('div');
cont__pj.classList.add("cont__pj");

const title__pj = document.createElement('h4');
title__pj.classList.add("title__pj");
title__pj.innerText = p.name;

const fotopj = document.createElement("img");
fotopj.classList.add("fotopj");
fotopj.setAttribute('src' , p.img);

cont__pj.appendChild(title__pj);
cont__pj.appendChild(fotopj);

mainCont.appendChild(cont__pj)};