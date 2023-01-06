function totalGaji(g1:any,g2:any,g3:any){
    let p1 =g1 * 0.02 + g1
    let p2 = g2 * 0.05 + g2
    let p3 = g3 * 0.1 +g3
    let tot = p1+p2+p3
    return `total gaji yg harus dibayar
    \nEmp1 : ${g1} + pajak(2%) = Rp.${p1}
    \nEmp2 : ${g2} + pajak(5%) = Rp.${p2} 
    \nEmp3 : ${g3} + pajak(10%) = Rp.${p3}
    \nTotal : Rp.${tot}`
}
console.log(totalGaji(500, 2000, 12000))