function getSalesDiscount(price:any, tax:any, discount:any){
    let hasil:any
    let Hdiscount = price *(discount/100)
    let pad = price + Hdiscount
    let Hpajak = price *(tax/100)
    let tp = pad + Hpajak
   if (isNaN(price)) {
        hasil= 'price harus angka'
    }else if (isNaN(tax)) {
        hasil= 'pajak harus angka'
    }else if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
        hasil='price, tax dan discount harus number'
    } else{
        hasil =`Total sale : ${price}
        \nDIscouunt : ${Hdiscount}
        \nPrice after discount ${pad}
        \nPajak ${tax} : ${Hpajak}
        \nTotal payment : ${tp}`
    }

    return hasil
}
console.log(getSalesDiscount('a',10,5))