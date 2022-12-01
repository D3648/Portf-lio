console.log("Nada");

    

var proj = document.getElementById("proj");

var tit = document.getElementById("title");
var desc = document.getElementById("desk");
var link = document.getElementById("link");

var btn1 = document.getElementById("p1");
var btn2 = document.getElementById("p2");
var btn3 = document.getElementById("p3");

function proj1() {
    proj.style.backgroundColor = "purple";
    tit.innerText = "Serasa Ecred - UX/UI";
    desc.innerText = "Você usa o serasa Ecred? Bom, mesmo se não usar, venha dar uma olhada neste projeto, onde eu e um colega tivemos a ideia de recriar o processo de contratação de crédito do Serasa Ecred.";
}

function proj2() {
    proj.style.backgroundColor = "red";
    tit.innerText = "Vindicta - UX/UI & Front-End";
    desc.innerText = "Venha ver esse Projeto Integrador feito por mim, e mais 3 integrantes, onde eu fiquei responsável pelo design, e front-end do projeto inteiro.";
}

function proj3() {
    proj.style.backgroundColor = "green";
    tit.innerText = "Meus desenhos - Photshop";
    desc.innerText = "Aí estão, minhas mais belas (e bizarras) criações, uma coleção de desenhos, onde liberto meus pensamentos, e sentimentos através de imagens, releituras, e o MUITA cor.";

}