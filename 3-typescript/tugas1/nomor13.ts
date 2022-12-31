function isPalindorm(angka:any){
    let str = angka.toString()
    let palindrom =''
    if (isNaN(angka)) {
        return angka+'isnt a number'
    } else {
        for (let i =str.length-1; i >=0; i--) {
            palindrom +=str[i];
        }
        if (palindrom === str) {
            return angka +' is palindrom'
        } else {
            return angka +' isnt palindrom'
        }
    }
}
console.log(isPalindorm('abcd'))
console.log(isPalindorm('123a'))
console.log(isPalindorm('1234'))
console.log(isPalindorm(1221))
console.log(isPalindorm('8888'))