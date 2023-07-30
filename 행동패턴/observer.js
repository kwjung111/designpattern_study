//객체를 관찰하는 옵저버 클래스 -> 객체가 발생시키는 이벤트를 구독함
//이벤트가 발생할 때마다, 알림 메서드를 호출한다.
//웹 브라우저의 이벤트 핸들러가 옵저버 패턴으로 구현됨


class Observer{
    //구독자
    constructor(updatefunc){
        this.self = this
        this.updatefunc = updatefunc
    }
    update(args){
        this.updatefunc(args)
    }
}

class Publisher{
    //발행자
    constructor(){
        this.observerList = []
    }
    addObserver(Observer){
        this.observerList.push(Observer)
    }
    deleteObserver(targetObserver){
        this.observerList = this.observerList.filter(
            (observer) => { return observer !== targetObserver }
        )
    }
    notify(args){
        console.log('notify event!')
        for(let observer of this.observerList){
            observer.update(args)
        }
    }
}

let person1 = new Observer((args) => { console.log(`person1 noticed : ${args}`)})
let person2 = new Observer((args) => { console.log(`person2 noticed : ${args}`)})
let publisher = new Publisher()
publisher.addObserver(person1)
publisher.addObserver(person2)
publisher.notify('this is test')


publisher.deleteObserver(person2)
publisher.notify('person2 deleted!')
