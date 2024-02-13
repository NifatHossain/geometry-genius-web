function getInput(id){
    const num= parseFloat(document.getElementById(id).value);
    return num;
}
function getArea(objName, value1, value2){
    const a= `\'${objName}`+`${value1}\'`;
    console.log(typeof a);
    const base= getInput(a);
    // const base= getInput('triangleBase');
    // const base= getInput(`\'${objName}`+`${value1}\'`);
    const b= `\'${objName}`+`${value2}\'`;
    const height= getInput(b);
    // const height= getInput('triangleHeight');
    // const height= getInput(`\'${objName}`+`${value2}\'`);
    const area= .5*base*height;
    const div= document.getElementById('answers') ;
    const text= document.createElement('p')
    text.innerText= `Area of ${objName} : ${area}`
    div.appendChild(text);
    //  console.log(`Area of triangle : ${area}`)
    console.log(`\'${objName}`+`${value1}\'`)
}
