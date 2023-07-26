//기존의 구조->새 구조로 전환하거나 그 반대의 경우에 사용
//기존의 코드를 건드리지 않으면서 결합시키기 가능

//기존의 코드
class Printer{
    constructor(){
        this.textArr = []
    }

    pushText(text){
        this.textArr.push(text)
    }

    print(){
        return this.textArr.join(' ')
    }
}

var printer = new Printer()
printer.pushText('print')   
console.log(printer.print())

//기존 코드의 클래스를 사용하지 않고 다른 모듈에서 가져온 새 클래스를 사용하게 됨
//새 클래스(세부 명세가 약간 다름)
class NewPrinter{
    constructor(){
        this.textArr = []
    }

    pushText(text){
        this.textArr.push(text)
    }
    

    printText(){ 
        return this.textArr.map(text => `text : ${text}`).join(' ')
    }
}

// 새 클래스 사용 시 코드 수정 작업이 필요함
var printer = new NewPrinter()
printer.pushText('print')
console.log(printer.printText()) //기존과 다른 부분을 교체해야 함.

class PrinterAdapter{
    constructor(printer){
        this.printer = printer
    }

    pushText(text){
        this.printer.pushText(text)
    }

    print(){
        return this.printer.printText()
    }

}


//할당하는 부분만 Adapter 패턴을 사용해서 교체한다.
var printer = new PrinterAdapter(new NewPrinter())
printer.pushText('print')   
console.log(printer.print()) //교체 작업 불필요
