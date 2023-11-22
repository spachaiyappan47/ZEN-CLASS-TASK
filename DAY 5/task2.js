class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return(`Radius:${this.radius}`)
    }
    setRadious(Newradius){
        this.radius=Newradius;
    }
    getColor(){
        return(`Color:${this.color}`);
    }
    setColor(Givecolor){
        this.color=Givecolor;
    }
    toString(){
        return`Circle radus:${this.radius},color:${this.color}`
    }
    getArea(){
       return 'Area:',Math.PI * (this.radius * this.radius);
    }
    getCircumference(){
        return `Circumference is:`,2*Math.PI*this.radius;
    }
}

let a=new Circle(4,'red');
console.log(a.getRadius());
console.log(a.getColor());
