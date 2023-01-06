class Orang{
   private nama:string
    umur:number
    alamat:string

    constructor(nama:string, umur:number, alamat:string){
        this.nama =nama
        this.umur = umur
        this.alamat =alamat
    }
    setName (nama:string){
        this.nama=nama
    }
    getNama (){
        return `im ${this.nama}`
    }

    getOrang(){
        return `hi im ${this.nama}, im ${this.umur} years old, i from ${this.alamat}`
    }
}

class Employee extends Orang{
    job:string
    constructor(nama:string, umur:number, alamat:string, job:string){
        super(nama, umur, alamat)
        this.job =job
    }
    showNama(){
        return `im ${super.getNama()}, im a ${this.job}`
    }
}

let empbaru = new Employee('naruto', 18, 'konoha', 'hokage')
console.log(empbaru.getOrang())
empbaru.setName('sasuke')
console.log(empbaru.showNama())
