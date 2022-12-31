function getSalesTax(price:any, tax:any){
    let pajak:any = tax/100
    let hasil:any
    let totalHarga:any = price + tax

        if (price>=0 && tax>=0) {
            hasil =` Total sales : ${price} \n Pajak : ${pajak} \n total Harga + pajak : ${totalHarga}`
        }else if (price !== Number && tax !== Number) {
            hasil =("price & pajak harus angka");
        }
    return hasil
}
console.log(getSalesTax(4500,5))
console.log(getSalesTax('a',5))