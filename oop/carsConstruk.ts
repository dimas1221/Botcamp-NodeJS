class Person{
    nama:string
    umur:number
    job: string

    constructor(nama:string, umur:number, job:string){
        this.nama=nama
        this.umur = umur
        this.job = job
    }

    getNama(){
        return `nama saya ${this.nama}`
    }
}
let emp=new Person('dani', 29, 'doctor')
console.log(emp.getNama())