function getProsentase(incoeme1:any, incoeme2:any){
    const up = incoeme2 - incoeme1
    const down = incoeme1 - incoeme2
    const x = (up/incoeme1) * 100
    const y = (down/incoeme1) * 100
    if (typeof incoeme1 !=='number' && typeof incoeme2!=='number') {
        return `${incoeme1} dan ${incoeme2} harus angka`
    } else if (incoeme1 < incoeme2) {
        return `total kenaikan income ${Math.round(x)}%`
    }else if (incoeme1 > incoeme2) {
        return `total penurunan income -${Math.ceil(y)}%`
    }
}
console.log(getProsentase('abc', 'bca'))
console.log(getProsentase(600000.00, 750000.00))
console.log(getProsentase(750000.00, 650000.00))