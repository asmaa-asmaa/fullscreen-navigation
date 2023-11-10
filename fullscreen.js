let toggl= document.querySelector(".toggle");
let nav = document.querySelector("nav");
let clos= document.querySelector(".close");

toggl.onclick = function (){
    nav.classList.add("open");
};

clos.onclick=function(){
    this.parentElement.classList.remove("open")
};

document.onkeyup=function(e){
    if (e.key=== "Escape"){
        nav.classList.remove("open");
    }
}
