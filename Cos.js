function factorial (n) 
{
	var total = 1; 
    for (i=1; i<=n; i++) 
    {
		total*=i; 
	}
	return total; 
}
function coseno(x,a)
{
    var e=1,c=2,f=0;
    for(var i=1;i<=a;i++)
    {
        f=(Math.pow(x,c))/factorial(c);
        if(i%2==0)
        {
            e+=f;
        }
        else
            e+=f*-1;
        c+=2;
    }
    return e;
}
console.log(coseno(1,5));