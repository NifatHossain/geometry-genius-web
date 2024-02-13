function getInput(id){
    const num= parseFloat(document.getElementById(id).value);
    return num;
}
function getArea(){
    const base= getInput('triangleBase');
    const height= getInput('triangleHeight');
    const area= .5*base*height;
    console.log(area);
}