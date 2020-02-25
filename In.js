function In(r,t)
{
    var ln=0,q=0,e=2;
    q=((r-1)/r);
    ln=q;
    for(var i=1;i<=t;i++)
    {    
        ln+=(1/e)*(Math.pow(q,e));
        e++;
    }
    return ln;

}
console.log(In(2,10));