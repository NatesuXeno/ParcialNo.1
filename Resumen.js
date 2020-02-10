var x=Math.floor(Math.random()*20)+1;
var y=Math.floor(Math.random()*20)+1;
var z=Math.floor(Math.random()*20)+1;
console.log(x,y,z);

if(x<z && y<z)
    console.log(z,"Mayor");
    if(z<y)
        console.log(y,"Mayor");
    else(y<x)   
        console.log(x,"Mayor");