//관련성 있는 여러 종류의 객체를 일관된 방식으로 생성하는 경우 사용
//팩토리 패턴과의 차이 : 팩토리는 객체의 생성, 추상 팩토리는 연관(공통)된 객체를 모아두는데 집중

class AbstractFactory{
  constructor(){
    this.factories = {}
  }
  addFactory(factoryName,factory){
    this.factories[factoryName] = factory
  }
  create(factoryName,createObjName){
    return this.factories[factoryName].create(createObjName)
  }
}

class Factory{
  constructor(){
    this.products = {}
  }
  addProduct(productName,createObj){
    this.products[productName] = createObj
  }
  create(productName){ 
    return new Product(this.products[productName])
  }
}

class Product{
  constructor(obj){
    this.obj = obj
  }
  execute(){
    console.log(`${this.obj.name}'s price is ${this.obj.price}`)
  }
}

FoodAbstractFactory = new AbstractFactory();
koreanFoodFactory = new Factory();
japaneseFoodFactory = new Factory();
koreanFoodFactory.addProduct('kimchi', {name: 'kimchi', price : '1000'})
japaneseFoodFactory.addProduct('sushi', {name:'sushi',price: '400'});
FoodAbstractFactory.addFactory('korean',koreanFoodFactory)
FoodAbstractFactory.addFactory('japanese',japaneseFoodFactory)
//string 으로 생성할 product 를 받지만 인터페이스를 사용해서 자동으로 생성하게 만드는 것이 베스트
FoodAbstractFactory.create('korean','kimchi').execute()
FoodAbstractFactory.create('japanese','sushi').execute()
