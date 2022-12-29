/*
instal tsc dan ts-node
jika belum bisa di cek tsc nya
set-ExecutionPolicy RemoteSigned -Scope CurrentUser
*/
/*
type 
string 
any
bolean
dll
membuat js dari ts
tcs nama_file.ts
? tanda untuk membuat jadi option/pilihan
*/ 
// let data :10;
// console.log(data)

let nam:string[]=['a','b','c']
console.log(nam)

let color :[number, number, number?]=[255,0,0]

let z:string|number
z ='hay'
z= 12

// deklarasi type data alias
type all = string|number|boolean
let a: all
a =true
a='p'
a=0

enum ApprovalStatus{
    draft,
    submited,
    approved,
    rejected
}
let status_a:ApprovalStatus.approved
let status_b:ApprovalStatus.rejected