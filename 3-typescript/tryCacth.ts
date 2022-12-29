let discount: number
let itemCount = 11

// try {
//     if (itemCount >0 && itemCount <=5) {
//         discount =5
//     }else if (itemCount >5 && itemCount <=10){
//         discount = 10
//     }else if (itemCount >10){
//         discount = 15
//     }else{
//         throw new Error('the number cannot be negative')
//     }
// console.log((`you got ${discount}% discount.`))
// } catch (e:any) {
//     console.log(e.message)
// }

try {
   switch (true) {
    case itemCount >0 && itemCount <=5:
        discount =5
        break;
    case itemCount >5 && itemCount <=10:
        discount =10
        break
    case itemCount >10:
        discount =15
        break;
    default:
        throw new Error('the number cannot be negative')
        break;
   }
console.log((`you got ${discount}% discount.`))
} catch (e:any) {
    console.log(e.message)
}

let temp:number[]=[]
let i: number
for ( i = 0; i < 10; i+=2) {
    temp.push(i)
}
console.log(temp)

let j=0
while (j<10) {
    console.log(j)
  j+=2 
}