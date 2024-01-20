function kgtolb(weight: number|string): number{ // using vertical bar union type
    if(typeof weight==='number'){
        return weight * 2.2
    }
    else{
        return parseInt(weight) * 2.3
    }
}

console.log(kgtolb(5))