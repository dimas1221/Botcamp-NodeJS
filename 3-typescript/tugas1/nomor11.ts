function getHeavier(w1:any,w2:any,w3:any){
   if (w1>w2 && w1>w3) {
     return w1
   } else  if (w2>w1 && w2>w3) {
    return w2
   } else  if (w3>w1 && w3>w2) {
    return w3
}
}
console.log(getHeavier(12,45,70))