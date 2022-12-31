function fToK(f: any) {
    let hasil
    if (f>=0) {
        hasil = (f+459.67)/1.8
    }else if (f=='1') {
        hasil = 'convert f 1 to kelvin = 811'
    }else if(f !== Number){
        hasil = 'f must a number'
    }
    return hasil
}
console.log(fToK(45))
console.log(fToK('1'))
console.log(fToK('F'))