const getData1 = ()=> {
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve(" data from getData1")
         },2000)
    })
}

const getError = ()=> {
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            reject(" No data from getError")
         },2001)
    })
}

Promise.race([getData1(),getError()]).then(
    result=>{
        console.log(result);
    }
).catch(error=>{
    console.log(new Error('error mesasge', error))
}
    
)


