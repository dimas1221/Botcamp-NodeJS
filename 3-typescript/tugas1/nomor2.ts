function distance(a:any, t:any){
    let hasil
    if (a>=0 && t>=0) {
        hasil = 0.5*a*(t**2)
    }else if (a<0 || t<0) {
        hasil = 'a or t must >=0'
    }else{
        hasil = 'inputan harus angka'
    }
    return hasil
}
console.log(distance('a','t'))
console.log(distance(-1,9))
console.log(distance(50,60))