var x=Math.floor(Math.random()*20)+1;
if(x%2==0)
{
    console.log(x,"Par");
}
else
{
    console.log(x,"Impar");
}

var y=Math.floor(Math.random()*20)+1;
if(y%2==0)
{
    console.log(y,"Par");
}
else
{
    console.log(y,"Impar");
}

var z=Math.floor(Math.random()*20)+1;
if(z%2==0)
{
    console.log(z,"Par");
}
else
{
    console.log(z,"Impar");
}

if(x<z && y<z)
    console.log(z,"Es mayor");
if(z<y && x<y)
    console.log(y,"Es mayor");
if(z<x && y<x)
    console.log(x,"Es mayor");