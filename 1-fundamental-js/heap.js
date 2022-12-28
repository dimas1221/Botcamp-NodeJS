// data type none primitive harus dlm bentuk objek array, function, date, regex, bigint

let person ={
    name : 'john',
    age : 25
};

let member = person;

member.name = 'budi';
member.age = 28;

console.log(person)
console.log(member)

