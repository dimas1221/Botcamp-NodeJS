function hari(a){
    let hasil='';

    if(a==1){
        hasil= 'senin';
    }else if(a==2){
        hasil= 'selasa';
    }else if(a==3){
        hasil= 'rabu';
    }else if(a==4){
        hasil= 'kamis';
    }else if(a==5){
        hasil= 'jumat';
    }else if(a==6){
        hasil= 'sabtu';
    }else if(a==7){
        hasil= 'minggu';
    }
    return hasil;
}

for (let i = 1; i <= 7; i++) {
    console.log(hari([i]));
}

function bilgenap(b){
    for (let i = 0; i <=b; i++) {
       if(i%2==0){
        console.log(i)
       }
    }
}
bilgenap(100)

function bilganjil(b){
    for (let i = 0; i <=b; i++) {
       if(i%2==1){
        console.log(i)
       }
    }
}
bilganjil(100)

function kapital(a){
    let rgx = /[A-Z]/;
    for (let i = 0; i < a.length; i++) {
        // if (a.length(i) = 'o') {
            console.log(a.substring(i))
        // }
        
    }
}
kapital('ABcdEf')

function huruf(charA, charZ){
    var a =[], i= charA.charCodeAt(0), j=charZ.charCodeAt(0);

    for (; i <=j; ++i) {
        a.push(String.fromCharCode(i));
        // a.push(i)
    }
    return a;
}
 console.log(huruf('a', 'z'));

function hurufA(charA, charZ){
    var a =[], i= charA.charCodeAt(0), j=charZ.charCodeAt(0);

    for (; i <=j; ++i) {
        a.push(String.fromCharCode(i));
        
    }
    return a;
}
 console.log(hurufA('A', 'Z'));

 let a = "god morning"; 
console.log(a.length)
console.log(a.substring(0,3));


