
function getRandomPs(s:any){
    let acak ='0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    let panjang = 6
    let randomAll =''
    // untuk mencari nilai random
    for (let i = 0; i <= panjang; i++) {
        let hasil = Math.floor(Math.random() * acak.length)
        randomAll += acak.substring(hasil,hasil+1)  
    }
    
    let str = s.toString()
    if (!isNaN(s)) {
        return 'value must be charakter'
    }
    if (str.length < 6) {
        return 'length must more than 6'
    }else{
        return randomAll;
    }
}
console.log(getRandomPs('12345'))
console.log(getRandomPs (3422))
console.log(getRandomPs('code'))
console.log(getRandomPs('codeid'))