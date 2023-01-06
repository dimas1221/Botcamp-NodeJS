class Persons{
    static status:string
   protected nama:string
   protected umur:number
   protected job: string

    constructor(nama:string, umur:number, job:string){
        this.nama=nama
        this.umur = umur
        this.job = job
    }

    getNama(){
        return `nama saya ${this.nama}`
    }
}
Persons.status ='oke'
let emps=new Persons('dani', 29, 'doctor')
console.log(emps.getNama())

