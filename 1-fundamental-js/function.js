// // void
// function sayHello(){
//     console.log('hi mate')
// }

// sayHello()

// // not void
// function sayHello2(){
//     return 'hiii'
// }
// console.log(sayHello2())

// function callback

// function startEngine(){
//     console.log("engine start")
// }

// function changeGear(gear){
//     console.log(`masukan gigi ${gear} to move car`)
// }
// function goCar(){
//     console.log('mobil berjalan')
// }

// const stopCar = () =>{
//     console.log('mobil berhenti')
// }
// const shutDownCar = () =>{
//     console.log('mobil di matikan')
// }

// function driveAcar(call){
//     setTimeout(()=>{
//         call()
//     }, 2000)
//     changeGear(1)
//     goCar()
//     stopCar()
//     shutDownCar()
// }

// driveAcar(startEngine)

// kapan hoisting itu ada ketika eksekusi dilakukan sebelum deklarasi

// fungsi tak bernama
// let show = function(){
//     console.log('Anoymous function')
// }
// show()

// let person={
//     fname: 'dim',
//     lname: 'mas'
// };

// (function (){
//     console.log((person.fname)+ ' ' + (person.lname))
// })(person);

// fungsi countdown
// function countdown(fromNumber){
//     console.log(fromNumber)
//     countdown(fromNumber-1)
// }
// countdown(3)

// function inc(fromNumber){
//     console.log(fromNumber)
//     let nextNumb = fromNumber +1
//     if(nextNumb < fromNumber){
//         inc(nextNumb)
//         console.log(nextNumb)
//     }
// }
// inc(10)

// let str =''
// function inc(h){
//     str += String.fromCharCode(h)+ ''
//     let nextH = h +1
//     if(nextH < 123){
//         inc(nextH)
//     }
// }
// inc(97)

// let nextNumber =0
// function genap(number){
//     nextNumber ++
//     if(nextNumber <number){
//         nextNumber%2==0 && console.log(nextNumber)
//         genap(number)
//     }
// }
// genap(100)

// let i = 0
// let hasil=''
// function segitiga(a){
//     segitiga
    
    
// }
// segitiga(10)

// function segitiga(a){
//     let hasil =''
//     for (let i = 0; i <a; i++) {
//         for (let j = 0; j < i; j++) {
//             hasil+='*'    
//         }
//         hasil += '\n'
//     }
//     return hasil
// }
// console.log(segitiga(10))

// function segitiga2(a){
//     let hasil =''
//     for (let i = 0; i <a; i++) {
//         for (let j = a; j > i; j--) {
//             hasil+='*'    
//         }
//         hasil += '\n'
//     }
//     return hasil
// }
// console.log(segitiga2(10))

// function segitiga(star){
//     if(star === 0){
//         return
//     }
//     segitiga(star -1)
//     console.log('*'. repeat(star))
// }
// segitiga(6)

let star =''
let i
function segi3(n){
 i++
 star='*'
 if(i<=n){
    console.log(star)
    segi3(n)
 }
}
segi3(5)


