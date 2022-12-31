function elapsedTime(second:any) {
    let hasil
    let x = second
    let y = x % 86400
    let hari = x/86400
    let jam = y/3600
    let sisajam = y%3600
    let menit = sisajam/60
    let detik = sisajam % 60

    if (isNaN(second)) {
        return second + ' is not number'
    } else {
        hasil =Math.floor(hari)+ ' hari ' + Math.floor(jam) + ' jam ' + 
        Math.floor(menit)+ ' menit ' + Math.floor(detik)
        + ' detik '
    }
    return hasil
}
console.log(elapsedTime('700005'))
console.log(elapsedTime('700005A'))