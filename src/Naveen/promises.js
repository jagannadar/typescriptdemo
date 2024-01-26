const randomNumPromise = new Promise((resolve,reject)=>{
    //async op
    setTimeout(()=>{
        const randomv = Math.random()
        if(randomv > 0.5){
            resolve(randomv)
        }else{
            reject(new Error("value too small"))
        }

    },2000)
})

randomNumPromise
        .then((result)=>{
            console.log("promise is fullfilled",result)
        })
        .catch(error =>{
            console.log("error",error)
        })