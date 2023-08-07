//private 필드에 객체의 상태를 저장, 원하는 시점으로 복원하는 기능을 지원하는 패턴

class Originator{
    //메멘토에 대한 전체 접근 권한
    //자신의 상태에 대한 스냅샷 생성( 또는 복원 기능)
    constructor(stateObj = null){
        this.stateObj = stateObj
    }
    set stateObj(value){
        this._stateObj = value
    }
    get stateObj(){
        return this._stateObj
    }
    createSnapShot(){
        return new Memento(this.stateObj)
    }
    restoreSnapShot(memento){
        this.stateObj = memento.getStateObj();
    }
}

class Memento{
    //Originator 클래스의 스냅샷 역할을 하는 객체
    #stateObj
    constructor(stateObj){
        //생성자를 통해서 불변 데이터 1번만 전달.
        this.#stateObj = stateObj
    }
    getStateObj(){
        return this.#stateObj;
    }
}

class CareTaker{
    //메멘토들의 스택을 저장, Originator 의 기록을 추적하는 클래스
    constructor(){
      this.mementoStack = []
    }
    pushMemento(memento){
        this.mementoStack.push(memento)
    }
    popMemento(){
        return this.mementoStack.pop()
    }
    
}



history = new CareTaker()
window = new Originator(history)

let state1 = { url:'www.google.com' , scrollPos: '1400'}
window.stateObj = state1;
memento1 = window.createSnapShot();
history.pushMemento(memento1)

let state2 = {url:'www.naver.com', scrollPos : '1600'}
window.stateObj = state2;
memento2 = window.createSnapShot();
history.pushMemento(memento2)
console.log(window.stateObj)


prevMemento = history.popMemento()
window.restoreSnapShot(prevMemento)
console.log(window.stateObj)

prevMemento = history.popMemento()
window.restoreSnapShot(prevMemento)
console.log(window.stateObj)


