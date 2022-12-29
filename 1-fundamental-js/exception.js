const add =(x,y)=> x+y
try{
    let result = add(10, 20)
    console.log(result)
}catch(e){
    console.log({name: e.name, message: e.message});
    // atau membuat mesage error sendiri
    // throw 'bla bla bla'

}finally{
    console.log('xxx')
}

function add(x,y){
    if(typeof x !== 'number'){
        throw new Error('1st argumenmust number')
    }
    if(typeof y !== 'number'){
        throw new Error('2nd argumenmust number')
    }
    return x+y
}
try{
    let result = add('a', 20)
    console.log(result)
}catch(e){
    console.log({name: e.name, message: e.message});

}
