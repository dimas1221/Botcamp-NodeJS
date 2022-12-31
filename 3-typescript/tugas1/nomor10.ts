
  

function convertToRp(value:number, currencyType:string){
    let hasil
    if (currencyType =='yen') {
        hasil = value * 118.51
    } else if(currencyType =='usd'){
        hasil = value * 15538.50
    }else if(currencyType == 'euro'){
        hasil = value * 16667.37
    }else if (currencyType == '') {
        return 'no macth type currency'
    }
    return `Rp.${hasil}`
}
console.log(convertToRp(1000,'yen'))
console.log(convertToRp(100,'usd'))
console.log(convertToRp(100,'euro'))
console.log(convertToRp(100,''))