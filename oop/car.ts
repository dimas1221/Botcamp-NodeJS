class cars{
    protected brand: string=''
    private speed: number=0
    protected price: number=0

    setBrand(brand:string){
        this.brand = brand
    }
    setPrice(price:number){
        this.price = price
    }
    setSpeed(speed:number){
        this.speed= speed
    }

    getBrand():string{
        return `Merek mobil ini ${this.brand}`
    }

    getPrice(){
        return `harga mobil ini ${this.price}`
    }

    getSpeed(){
        return `kecepatan mobil ${this.brand} : ${this.speed}`
    }
}
// pewarisan dengan cara 
let mobilbaru = new cars()
mobilbaru.setBrand('toyota')
mobilbaru.setPrice(1000)
mobilbaru.setSpeed(50)

console.log(mobilbaru.getBrand())