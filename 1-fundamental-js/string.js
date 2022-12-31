let greeting ='hi';
let messge ='Bye';

console.log(greeting,messge)

let message ='i\'m dimas setiya prayoga';
message ="i'm dimas setiya prayoga";
message =`i'm dimas setiya prayoga`;
console.log(message);

let str = "b"
str = str + "a"

console.log(str)


let a = "god morning";
console.log(a.length)
console.log(a.substring(0,4));

let b = "hello";
console.log(b[b.length -1]);


let rawString = ' Hi  ';
let strippedString = rawString.trim();
console.log(strippedString);

// mencari angka jika sudah ketemu maka selesai
let expreesion ='1 + 2 = 3';
let matches = expreesion.match(/\d+/);
console.log(matches[0]);

// mencari angka global dalam string
let expreesion2 ='1 + 2 = 3';
let matches2 = expreesion.match(/\d+/g);
for (const match of matches2){
console.log(match);
}

// bolean
let error ='an error';

if(error){
    console.log(error);
};
// tab close
camp1 ="bootcamp" +"nodejs"+"\tfullstak"
console.log(camp1);
// newlinespace
camp ="bootcamp" +"nodejs"+"\nfullstak\nwith codeid\nvia"
console.log(camp);
// literal string
let nama ="code id";
camp2 = `bootcamp with ${nama}`;
console.log(camp2);

// split ubah string jadi array
let camSplit = "aku-suka-dia";
campSplit = camSplit.split("-",2);
console.log(camSplit);

// join
// let campjoin = camSplit.join("**");
// console.log(campjoin);

// sring manipulatuon
const s= "aku suka js js";
console.log(s.charAt(1));