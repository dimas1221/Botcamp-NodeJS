interface Mailabel {
    send(email:string): boolean
    queue(email:string):boolean
}
interface FutureMailable extends Mailabel{
    later(email:string, after:number):boolean
}

class Mails implements FutureMailable{
    email:string
    after:number
    constructor(email:string, after:number){
        this.email =email
        this.after =after
    }
    // overload parameter beda dg yg di interface tapi isi a sama
    later(): boolean {
        console.log(`sned mail to ${this.email} in ${this.after} ms.`)
        return true
    }
    send(): boolean {
        console.log(`sent mail to ${this.email}`)
        return true
    }
    queue(): boolean {
        console.log(`queue to email to ${this.email}`)
        return true
    }
}

let abc = new Mails('dhim@gmail.com',3)
// console.log(ab.later('dhim12@gmail,com',12))
console.log(abc.send())

