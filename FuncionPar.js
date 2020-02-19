/*var i=0, par=0,n=7,pares=2,limite=0;
function SumaPares(cuantos)
{
    for(i=1;i<=cuantos;i++)
    {
        par+=pares;
        pares+=2;
    }
    return par;
}
console.log(SumaPares(n));

function sumapareshasta(cuantos)
{
    for(i=1;i<=cuantos;i++)
    {
        par+=pares;
        pares+=2;
        if(i=cuantos)
            limite=pares;
    }
    return par,limite;
}
console.log(sumapareshasta(n));*/


function serial(n)
{
    var j=4,k=1,res=0;
    for(i=1;i<=n;i++)
    {
        res+=j/k;
        k+=2;
        j*=-1;
    }
    return res;
}
console.log(serial(1000000))