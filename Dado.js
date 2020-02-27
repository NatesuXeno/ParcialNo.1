function Dado()
{
    var z=0;
    z=Math.floor(Math.random()*6)+1;
    return z;
}

function Camino()
{
    var n=0,avance=0;
    n=Dado();
        if(n==6)
        {
            avance+=3;
        }
        else
            if(n==5 || n==4 || n==3)
            {
                avance+=2;
            }
            else
                if(n==1 || n==2)
                {
                    avance++;
                }
    return avance;
    
}

function Crdes()
{
    var C1=0,C2=0;
    while(C1<100 && C2<100)
    {   
        C1+=Camino();
        console.log("C1:",C1);
        C2+=Camino();
        console.log("C2:",C2);
    }
    if(C2<100)
    {
        console.log("C1 Gana");
    }
    else
        if(C1<100)
        {
            console.log("C2 Gana");
        }
        else
            console.log("EMPATE");
}


console.log(Crdes());
