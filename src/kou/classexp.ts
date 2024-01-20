class Mobile{

    model: String
    public modelNum: number 

    constructor(model: String,modelNum: number){
        this.model=model
        this.modelNum=modelNum
    }

    public makeCall(): string{
        console.log('hey')
        return 'hey'

    }
}

const mobile = new Mobile('iphone',12)
console.log(mobile.model)
mobile.makeCall()

