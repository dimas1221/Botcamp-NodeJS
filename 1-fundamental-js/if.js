let r1 = require('readline-sync');
// let angka1= r1.question('masukan data: ')
// angka1 = parseInt(angka1)
// let weight = r1.question('masukan berat :')
// let height = r1.question('masukan tinggi :')

// let angka1 =5

// if (angka1 == 5) {
//     console.log('angka lebih besar dari 5')
// }else if (angka1 >= 5) {
//     console.log('angka lebih kecil dari 5')
// }else if (angka1 <= 5) {
//     console.log('angka adalah 5')
// }

//ukur bb
// let bmi = weight / (height * height);
// let weightStatus;

// if (bmi < 18.5) {
//     weightStatus = 'Underweight'
// }else if (bmi >= 18.5 && bmi <=24.9){
//     weightStatus='healty weight'
// }else if (bmi >= 25 && bmi<=29.9) {
//     weightStatus ='over weight';
// }else{
//     weightStatus ='obes';
// }

// console.log(weightStatus)
// console.log(bmi)

// if 
// let age =18
// let message

// age >= 18 ? (message ='u can drive') : (message= 'u cant drive')
// console.log(message)

// swict case
// let weight = 65.4
// let height = 1.68
// let bmi = weight / (height * height);
// let weightStatus;

// switch (true) {
//     case (bmi < 26.5):
//         weightStatus = 'underweight'
//         break;

//     default:
//         weightStatus ='normal'
//         break;
// }
// console.log(weightStatus)
// console.log(bmi)

// let year = 2016
// let month = 2;
// let dayCount;

// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30
//         break
//     case 2:
//         if ((year% 4 == 0 && !(year % 100 ==0)) || year % 400 ==0) {
//             dayCount = 29;
//         }else{
//             dayCount =28;
//         }
//         break
//     default:
//     dayCount =-1
// }
// console.log(dayCount)

let grade = r1.question('masukan grade : ')
let hasil

// if (grade>=90 && grade<=100) {
//     hasil = 'A'
// }else if (grade>=80 && grade<=89) {
//     hasil = 'B'
// }else if (grade>=70 && grade<=79) {
//     hasil = 'C'
// }else if (grade>=60 && grade<=69) {
//     hasil = 'D'
// }else if (grade>=50 && grade<=59) {
//     hasil = 'E'
// }else{
//     hasil ='Invalid grade'
// }
switch (true) {
    case (grade>=90 && grade<=100):
        hasil = 'A'
        break;
    case (grade>=80 && grade<=89):
            hasil = 'B'
        break;
    case (grade>=70 && grade<=79):
            hasil = 'C'
        break;
    case (grade>=60 && grade<=69):
        hasil = 'D'
        break;
    case (grade>=50 && grade<=59):
        hasil = 'E'
        break;
    default:
        hasil ='Invalid grade'
        break;
}

console.log(hasil)