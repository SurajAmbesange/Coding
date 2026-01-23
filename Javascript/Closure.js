function outerFunction(){
    let name = "Suraj" 

function innerfunction(){
    console.log(name);
}
return innerfunction;
}   
let inner= outerFunction();

inner();
