class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}
 
const btn=document.getElementById("btnRectangulo");
 
btn.addEventListener('click', () => {
   
    let base=document.getElementById("base").nodeValue;
    let altura=document.getElementById("altura").value;
 
    
    base=parseInt(base);
    altura=parseInt(altura);
    let altura=parseInt(document.getElementById("altura").value);
    let rect1=new Rectangulo (base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Triangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
    divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";
});
