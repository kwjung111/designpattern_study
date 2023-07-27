//어떤 요청이 발생 시, 그 요청을 처리할 객체를 직접 결정할 수 없는 경우
//복수의 핸들러를 체인으로 연결해 차례대로 떠넘김
//작업을 실행하는 클래스와 호출하는 클래스 분리 가능
//기존 코드의 수정 없이 새 핸들러 도입 가능

//UI 에서 마우스를 호버했을 때 툴팁을 표시
class container{
    constructor(){
        this.components = []
    }
    add(component){
        this.components.push(component)
    }
    showToolTip(){
        for (let i = this.components.length - 1; i >= 0; i--) {
            if(this.components[i].canshowToolTip()){
                return this.components[i].showToolTip()
            }
        }
    }
}

class Button{
    constructor(tooltip){
        this.tooltip = tooltip || null
        //세부 속성
    }
    //..
    canshowToolTip(){
        if(this.tooltip ==null) return false
        else return true
    }
    showToolTip(){
        console.log(this.tooltip)
    }
}

class Panel{
    constructor(tooltip){
        this.tooltip = tooltip || null
    }
    canshowToolTip(){
        if(this.tooltip ==null) return false
        else return true
    }
    showToolTip(){
        console.log(this.tooltip)
    }
}

class Image{
    constructor(tooltip){
        this.tooltip = tooltip || null
    }
    canshowToolTip(){
        if(this.tooltip ==null) return false
        else return true
    }
    showToolTip(){
        console.log(this.tooltip)
    }
}

var UI = new container()
var btn = new Button('this is button')
var panel = new Panel()
var img = new Image('this is image')
UI.add(panel)
UI.add(btn)
UI.add(img)
UI.showToolTip()

UI.add(btn)
UI.showToolTip()

UI.add(panel)
UI.showToolTip()

