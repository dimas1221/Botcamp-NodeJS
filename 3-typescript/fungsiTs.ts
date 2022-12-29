function tambah(x: any,y: any){
    return x+y
}
console.log(tambah('1','2'))

// definisi fungi dengn type
let add:(a:number, y:number)=>number

add = function(k:number, l:number){
    return k+l
}
console.log(add(1,3))

function getTotal(...numbers: number[]): number {
    let total =0
    numbers.forEach((num)=> total += num)
    return total
}
console.log(getTotal(10,20,9))