// let paraElement = document.getElementById('spara');
// paraElement.style.backgroundColor='blue';
// paraElement.style.color='white';



function changeText(){
    let fpara=document.getElementById('fpara');
    fpara.textContent= "Suraj Ambesange";
}
    let fpara=document.getElementById('fpara');
    fpara.addEventListener('click', changeText);