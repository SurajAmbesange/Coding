// let paraElement = document.getElementById('spara');
// paraElement.style.backgroundColor='blue';
// paraElement.style.color='white';



// function changeText(){
//     let fpara=document.getElementById('fpara');
//     fpara.textContent= "Suraj Ambesange";
// }
//     let fpara=document.getElementById('fpara');
//     fpara.addEventListener('click', changeText);
const t3 = performance.now();
let fragment = document.createDocumentFragment();


for(i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "Suraj"+" "+ i;
    fragment.appendChild(para);
    }
    document.body.appendChild(fragment);
    const t4 = performance.now();
    console.log("total time by code 2: " + (t4-t3));

    //
const t1 = performance.now()

for(let i=1; i <=100; i++) {
let para = document.createElement ('p');
para. textContent = "This is Para."+ i;
document.body.appendChild(para);
}
const t2 = performance.now();

console.log("total time by code 1:"+(t2-t1));

// //code 2

// const t3 = performance.now();
// let mydiv = document. createElement('div');

// for(let i=1; i <= 100; i++) {
// let para = document.createElement('p');
// para. textContent = "This is Para " + i;
// mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();

// console.log("total time by code 2: " + (t4-t3));