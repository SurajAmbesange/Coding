function outerFunction(){
    let name = "Suraj Ambesange" 

function innerfunction(){
    console.log(name);
}
return innerfunction;
}   
let inner= outerFunction();

inner();
