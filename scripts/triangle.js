function getInput(id){
    const num= parseFloat(document.getElementById(id).value);
    return num;
}
function getArea(objName, value1, value2){
    const a= objName+value1
    const base= getInput(a);
    const b= objName+value2
    const height= getInput(b);
    let area=0;
    if(objName==='triangle' || objName==='rhombus' || objName==='pentagon'){
        area= .5*base*height;
    }
    else if(objName==='rectangle' || objName==='parallelogram'){
        area= base*height;
    }
    else if(objName==='ellipse'){
        area= 3.1416*base*height;
    }
    else{
        area= 'Wrong objName';
    }
    
    const div= document.getElementById('answers') ;
    const text= document.createElement('p')
    text.innerText= `Area of ${objName} : ${area}`
    div.appendChild(text);
}
