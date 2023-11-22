// movie class
class movie {
    constructor(title,studio,rating='PG'){
       
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
     }

      static getPG (par){
        
         let commonPGmovies=par.filter((element)=> element.rating==='PG');
            return commonPGmovies;

      
        }
        
    }

let flim1= new movie('Casino Rayal','Eon_Productions','PG13');

let flim2=new movie('Anniyan','sun picture');
let flim3=new movie('DON','lica production');
let flim4=new movie('jailer','sun picture','DG')
let flim5=new movie('kgf','vsff','PG')

console.log(flim1);
console.log(movie.getPG([flim1,flim2,flim3,flim4,flim5]));

