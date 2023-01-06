// override parameters a sama tapi isi a berbeda
class sum{
    operation(a:number, b:number){
        return a+b
    }
}

class multiply extends sum{
    operation(a:number, b:number){
        return a*b
    }
}

let multy =  new multiply()
let result = multy.operation(10,20)
console.log(`result after performing calling the operation method is ${result}`)
class Employees{
    about():void{
        console.log('inside the employes class')
    }
}
// men calss overiding the about metod of employes class
class men extends Employees{
    gender:string ='male'
    about():void{
        super.about
        console.log('the gender of the employe is '+ this.gender)
    }
}
let new_men = new men()
new_men.about()