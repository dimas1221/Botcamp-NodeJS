function sumDigit(n:any) {
    let str = n.toString()
    let arr = str.split('')

    let hasil=0
    if (str.length >=5) {
        return 'harus lebih kecil dari 10000'
    } else {
        for(let i = 0; i <arr.length; i++){
            hasil += parseInt(arr[i]);
       } 
    }
    return hasil
}
console.log(sumDigit(1234))
console.log(sumDigit('1234'))
console.log(sumDigit(12345))


// function sumDigit(...n:number[]):number{
//     let hasil=0
//     n.forEach((num)=> hasil += num)
//     return hasil
// }
// console.log(sumDigit(1234))

// function sumDigit(n:string){
//    let intArr = Array.from(n)
//     let hasil
//     for(let i = 0; i <intArr.length; i++){
//          hasil += intArr[i];
//     }
//     return hasil
// }
// console.log(sumDigit('1234'))


 // Getting the string as a parameter
    // and typecasting it into an integer
    // let myFunc = num => Number(num);
    // let intArr = Array.from(Strin g(n), myFunc);