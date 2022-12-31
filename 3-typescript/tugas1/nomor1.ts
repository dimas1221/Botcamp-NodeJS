type numstr = number | string;
function circle(r: any) {
  let pi = 3.14159;
  let hasil: any;
  if (r <= 0) {
    hasil = "try higher";
  } else if (r >= 0) {
    hasil = pi * (r * r);
  } else {
    hasil = "inputan harus angka";
  }

  return hasil;
}
console.log(circle(-1)); 
console.log(circle("a"));
console.log(circle(5));
