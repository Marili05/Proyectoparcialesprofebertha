const body = document.querySelector('.body');
const tooglebtn = document.getElementById('cont-toogle');
tooglebtn.onclick = function(){
    //se activa el boton y el body tambien por eso tienen la misma clase
    tooglebtn.classList.toggle('activebtn');
    body.classList.toggle('activebtn');
}