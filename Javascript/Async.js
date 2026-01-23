async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');

    let data = await response.json();
    console.log(data);
}
getData(); 