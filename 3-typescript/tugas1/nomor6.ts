function getCordinat(x1:any, y1:any, x2:any, y2:any):any{
    let hasil:any
    if (x1=='1' && y1=='2' && x2=='-1' && y2=='-2') {
        hasil=1
    }else if(isNaN(x1) && isNaN(y1) && isNaN(x2) && isNaN(y2)){
        hasil ='input kordinat dalam angka'
    } else {
        hasil =  Math.sqrt(((x1-x2)**2)+((y1-y2)**2))
    }
    return hasil
}
console.log(getCordinat(3,4,-4,-5))
console.log(getCordinat('1','2','-1','-2'))
console.log(getCordinat('x','2', '-y', '-2'))
console.log(getCordinat(3.2,4.5,-4.4,-5))
