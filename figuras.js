class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}
class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}
class Cuadrado{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}
const b1=document.getElementById("rectan");
b1.addEventListener('click', () => {
   
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    
    base=parseInt(base);
    altura=parseInt(altura);
    let altura=parseInt(document.getElementById("altura").value);
    let rect1=new Rectangulo (base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Triangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
    divRes.innerHTML="<p>con un area de " + rect1.area() + "</p>";
});

const b2=document.getElementById("trian");
b2.addEventListener('click', () => {
   
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    
    base=parseFloat(base);
    altura=parseFloat(altura);
    let altura=parseFloat(document.getElementById("altura").value);
    let trian1=new Triangulo (base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Triangulo con base " + trian1.base + " y altura " + trian1.altura + "</p>";
    divRes.innerHTML="<p>con un area de " + trian1.area() + "</p>";
});

const b3=document.getElementById("cuadra");
b3.addEventListener('click', () => {
   
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    
    base=parseInt(base);
    altura=parseInt(altura);
    let altura=parseInt(document.getElementById("altura").value);
    let cuad1=new Cuadrado (base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Triangulo con base " + cuad1.base + " y altura " + cuad1.altura + "</p>";
    divRes.innerHTML="<p>con un area de " + cuad1.area() + "</p>";
}); 
