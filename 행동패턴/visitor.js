//알고리즘(데이터구조)과 작동시키는 객체(처리부) 분리가 핵심.
//OCP 원칙을 충실하게 따를 수 있는 장점이 있음

class Visitor{
    //vistior 는 알고리즘을 정의
    constructor(){

    }
    visitSeoul(element){
        if(element.home == "Seoul"){
            console.log('home')
        }
        else{
            console.log('not home')
        }
    }
    visitBusan(element){
        if(element.home == "Busan"){
            console.log('home')
        }
        else{
            console.log('not home')
        }
    }
    //Element 객체가 늘어날 경우에는 그냥 메소드를 추가하면 쉽게 확장 가능.
}
//Visitor 를 인터페이스화 하면 Visitor 구현체에 따라 알고리즘을 다르게 정의가능.

class Element{
    //visitor 를 인수로 입력
    constructor(visitFunc,home){
        this.visitFunc = visitFunc
        this.home = home
    }
    accept(visitor){
        visitor[this.visitFunc](this)
    }
}


localVisitor = new Visitor()
busanMan = new Element('visitBusan','Busan')//어떤 visitor 메소드 사용할 것인지 정의(visitor 에서 클래스를 알 수 있음)
seoulBoy = new Element('visitBusan','Seoul')
busanMan.accept(localVisitor)
seoulBoy.accept(localVisitor)

