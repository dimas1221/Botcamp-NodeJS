abstract class Employee {
    constructor(protected fname:string, private lname:string) {
        
     }
    abstract getSalary():number
    abstract getFname():string
    fullname(): string{
        return `${this.fname} ${this.lname}`
    }
    compestationStatement():string{
        return `${this.fullname()} make $${this.getSalary()} a moth`
    }
}

class FullTimeEmployee extends Employee{
    constructor(fname:string, lname:string, protected rate:number, protected hours:number){
        super(fname, lname)
    }
    getSalary(): number {
        return this.rate * this.hours
    }
    getFname(): string {
        return this.fname
    }
}

let emp2 = new FullTimeEmployee('nqruto','uzumaki',120000, 40)
console.log(emp2.getSalary())
console.log(emp2.compestationStatement())
console.log(emp2.getFname())