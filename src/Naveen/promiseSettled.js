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
         },2000)
    })
}

Promise.allSettled([getData1(),
            getError()
]).then(result=>{
    result.forEach(result=>{
        if(result.status==='fulfilled'){
            console.log('value', result.value)
        }
        else{
            console.log('value', result.reason)
        }
    })
})