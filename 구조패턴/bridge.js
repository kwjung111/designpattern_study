//클래스를 하위로 확장할 때, 상속을 통해서 접근한다면 추가 및 관리해야 할 코드가 많아진다.
//포함을 통해서 접근한다면, 클래스를 추가해야 할 필요가 없어진다.
//상속은 is-a, 포함은 has-a 관계임을 명심.

class Circle{
    constructor(point,color,tooltip){
        this.point = point
        this.color = color
        this.tooltip = tooltip 
    }
    printColor(){
        console.log(`color is ${this.color.r},${this.color.g},${this.color.b}`)
    }
    
    printLocation(){
        console.log(`located at ${this.point.x},${this.point.y}`)
    }
    printToolTip(){
        console.log(this.tooltip)
    }
    introduce(){
        this.printToolTip()
        this.printLocation()
        this.printColor()
    }
}

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Color{
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

let white = new Color(255,255,255)
let center = new Point(0,0)

let circle = new Circle(center,white,'this is circle')
circle.introduce()
