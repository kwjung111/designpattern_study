//객체의 생성들을 팩토리 메서드 호출로 대체한다. (선언과 실현 구현을 분리)
//특정 인터페이스 구현체를 직접 생성하는 것은 코드를 변경이나 확장에 유연하지 못하게 만듬
//팩토리 클래스들은 싱글톤 객체로 작성해 최적화 한다.


class Factory{
    constructor(createfunc){
        this.createfunc = createfunc
    }
    create(...args){
       return this.createfunc(...args)
    }
}

//제품들이 공통으로 구현해야 하는 작업들
class Product{
    constructor(name,size,brand){
        this.name = name
        this.size = size
        this.brand = brand
    }
    getInformation(){
        console.log(`this ${this.brand} shoes are ${this.name} ${this.size} size `)
    }
}

let nikeShoesMakeFunc = (name,size) => {return new Product(name,size,'nike')}
let nikeShoesFactory = new Factory(nikeShoesMakeFunc)
let nikeShoes = nikeShoesFactory.create('Air Force',280)
nikeShoes.getInformation()

let converseShoesMakeFunc = (name,size) => {return new Product(name,size,'converse')}
let converseShoesFactory = new Factory(converseShoesMakeFunc)
let converseShoes = converseShoesFactory.create('All Star',270)
converseShoes.getInformation()