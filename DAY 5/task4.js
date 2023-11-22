

class calculate{
    constructor(km,Cartype){
        this.km=km;
        this.basefair=100;
        this.cartype=Cartype;
    }
    price(){
        if(this.cartype=='SMALL'){
               (this.km<=10)?console.log(`Uberprice:${100}`):((this.km<30)?console.log(`Uber price:${this.basefair+((this.km-10)*20)}`):
                console.log('Uber Price:',this.basefair+(this.km-10)*30))
            }else if(this.cartype=='UV'){
                (this.km<=10)?console.log(`Uberprice:${200}`):((this.km<30)?console.log(`Uber price:${this.basefair+((this.km-10)*30)}`):
                 console.log('Uber Price:',this.basefair*2+(this.km-10)*40))  
            } else if(this.cartype=="Luxury"){
                (this.km<=10)?console.log(`Uberprice:${500}`):((this.km<30)?console.log(`Uber price:${this.basefair*5+((this.km-10)*50)}`):
                console.log('Uber Price:',this.basefair*5+(this.km-10)*100))
            }
          
}
}

let Uber=new calculate(25,'Luxury')
Uber.price();