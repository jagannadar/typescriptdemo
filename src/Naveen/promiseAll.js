//to perform mulitple Async operation in parallel and wait for all of them to complete before move on

///1
//f1 - resolve
//f2 - resolve
//f3 - resolve

const function1 = ()=> {
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve(" data from function1")
         },2000)
    })
}

const function2 = ()=> {
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve(" data from function2")
         },2000)
    })
}

const function3 = ()=> {
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve(" data from function1")
         },2000)
    })
}

Promise.all([
    function1(),
    function2(),
    function3()]).then(dataArray=>{
        console.log('All data', dataArray)
    })
    .catch(error =>{
        console.log('error', error)
    })
    

///2
//f1 - resolve
//f2 - rejected

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

Promise.all([getData1(),
            getError()
]).then(dataArray=>{
    console.log(dataArray)
}).catch(
    console.log('error occured', error)
)