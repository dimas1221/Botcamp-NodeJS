abstract class olahraga{
    jenisOlahrga:string=''
    alat:string='0'
    lamaBermain: number=0
    jumlahTim: number=0

    constructor(jenisOlahraga:string, alat:string, lamaBermain:number, jumlahTim:number){
        this.jenisOlahrga = jenisOlahraga
        this.alat = alat
        this.lamaBermain =lamaBermain
        this.jumlahTim = jumlahTim
    }
    abstract getTeamCountri():string
    abstract getTotalGelar():any 
    getBasket(){
     return `nama olahraga ${this.jenisOlahrga} \nalat yang digunakan ${this.alat}\nwaktu bermain ${this.lamaBermain} menit \njumlah pemain ${this.jumlahTim}`
    }

}

class olahragaSoccer extends olahraga{
    asal:string
    countri:string
    totGelar:number
    constructor(jenisOlahraga:string, alat:string, lamaBermain:number, jumlahTim:number, asal:string, countri:string, totGealar:number){
       super(jenisOlahraga,alat,lamaBermain,jumlahTim)
       this.asal =asal
       this.countri=countri
       this.totGelar =totGealar
    }
 getSoccer(){
        return `nama olahraga ${this.jenisOlahrga} \nalat yang digunakan ${this.alat}\nwaktu bermain ${this.lamaBermain} menit \njumlah pemain ${this.jumlahTim} \n asal dari ${this.asal}`
    }
 getTeamCountri(): string {
     return  `asal team ${this.countri}`
 }
 getTotalGelar(): any {
     return `${this.getTeamCountri()} memiliki ${this.totGelar} piala dunia`
 }
 getBasket(){
    return `tim basket dari ${this.countri} memiliki ${this.totGelar} gelar `
   }

}

let hasil = new olahragaSoccer('soccer', 'bola', 90, 11, 'inggris','indonesia',5)
console.log(hasil.getTeamCountri())
console.log(hasil.getTotalGelar())
console.log(hasil.getBasket())
// console.log(hasil.getSoccer)
// let olahragaBasket= new olahraga()
// olahragaBasket.jenisOlahrga='basket'
// olahragaBasket.alat='bola'
// olahragaBasket.lamaBermain= 90 
// olahragaBasket.jumlahTim = 5

// console.log(olahragaBasket.getBasket())


