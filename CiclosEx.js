function factorial (n) 
{
	var total = 1; 
    for (i=1; i<=n; i++) 
    {
		total*=i; 
	}
	return total; 
}

function cicloe(numero)
{
    var e=1,j=1,i=1;
    for(i=1;i<=numero;i++)
    {
        e+=(j/factorial(i));
    }
    return e;

}
console.log(cicloe(3));

function cicloso(x)
{
    var l=1,i=1;
    for(i=1;i<=x;i++)
    {
        l+=((Math.pow(x,i))/factorial(i));
    }
    return l;
}
console.log(cicloso(2));