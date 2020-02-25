function factorial (n) 
{
	var total = 1; 
    for (i=1; i<=n; i++) 
    {
		total*=i; 
	}
	return total; 
}
function Seno(ca,h)
{
    var sen=ca,k=0,l=3;
    for(var i=1;i<=h;i++)
    {
        k=(Math.pow(ca,l))/factorial(l);
        if(i%2==0)
        {
            sen+=k
        }
        else
            sen+=k*-1;
        l+=2;
    }
    return sen;
}
console.log(Seno(1,100))