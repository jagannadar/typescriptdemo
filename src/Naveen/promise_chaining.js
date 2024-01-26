function getEvenNum(value, delay){
    return new Promise((resolve, reject)=> {
         setTimeout(()=>{
            if(value%2==0){
                resolve(value)
            }
            else{
                reject(new Error('not even'))
            }
         }, delay)
})
}

getEvenNum(7,2000)
        .then(result=>{
            console.log('result 1st block', result);
            return getEvenNum(3, 2000)
        })
        .then(result=>{
            console.log('result 2nd block', result)
        })
        .catch(error=>{
            console.log('error', error)
        })

