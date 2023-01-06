// interface hanya method kosong , dan method a haru sdi implementasikan semua ke class
interface Mailabel {
    send(email:string): boolean
    queue(email:string):boolean
}
interface FutureMailable extends Mailabel{
    later(email:string, after:number):boolean
}

class Mail implements FutureMailable{
    later(email: string, after: number): boolean {
        console.log(`sned mail to ${email} in ${after} ms.`)
        return true
    }
    send(email: string): boolean {
        console.log(`sent mail to ${email}`)
        return true
    }
    queue(email: string): boolean {
        console.log(`queue to email to ${email}`)
        return true
    }
}

let ab = new Mail
// console.log(ab.later('dhim12@gmail,com',12))
console.log(ab.send('dhim@gmail.com'))

