//반응형 아키텍처 : 원인과 효과를 분리

//컴포넌트는 원인
//효과에 대해 알수 없다
function component(initialVal){
    var curVal = initialVal 
    let observers = []
    return{
        getVal : function(){
            return curVal
        },
        update: function(f) {
            let oldVal = curVal
            let newVal = f(oldVal)

            curVal = newVal

            observers.forEach((observer) =>{
                observer(newVal)
            });
        },
        addObserver:function(observer){
            observers.push(observer)
        }

    }

}

//observer function = 효과를 구현한다.

function displayCounter(val){
    const count = document.getElementById("count")
    const html = `current count is ${val}`
    console.log(val)
    count.innerHTML= html
}

function increaseComponentVal(component){
    component.update(increase)
}

function increase(curVal){
    return ++curVal
}

//페이지 초기화
const btn = new component(0)
btn.addObserver(displayCounter)

function increaseCounter(){
    increaseComponentVal(btn)
}
