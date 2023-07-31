//작업을 자체 실시하지 않고 전략 객체에게 위임


class Context{
    constructor(strategy){
        this.strategy = strategy
    }
    get strategy(){
        return this._strategy
    }
    set strategy(value){
        this._strategy = value
    }
    executeStrategy(args){
        this.strategy.execute(args)
    }
}

class Strategy{
    constructor(func){
        this.func = func
    }
    execute(args){
        this.func(args)
    }
}


let findWay = (transport) => { console.log(`find way : ${transport}`)}

const walk = new Strategy(() => {findWay('foot')})
const publicTransport = new Strategy(() => {findWay('public Transport')})
const car = new Strategy(() => {findWay('car')})

const naviApp = new Context(walk)
naviApp.executeStrategy()


//알고리즘 구현은 strategy 에, 인터페이스나 GUI는 Context에 정의하면 된다.
naviApp.strategy = publicTransport;
naviApp.executeStrategy()

naviApp.strategy = car;
naviApp.executeStrategy()




