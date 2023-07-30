//작업을 호출하는 객체와 실제로 실행하는 객체를 분리
//모든 요청들은 요청을 작동시키는 단일 메서드를 가진 별도의 커맨드 클래스로 추출(작업을 위임)

class InputHandler{
    //키 할당을 관리함
    constructor(spaceCommand,enterCommand){
        this.spaceKey = spaceCommand
        this.enterKey = enterCommand
    }
    keyPressed(key){
        if(key == 'space')          this.spaceKey.execute()
        else if(key == 'enter')     this.enterKey.execute()
    }
}

class Controller{
    //실제 캐릭터를 컨트롤
    constructor(jumpFunc,saveFunc){
        this.saveData = []
        this.jumpFunc = jumpFunc
        this.saveFunc = saveFunc
    }
    jump(args){
        this.jumpFunc(args)
    }
    save(date,args){
        this.saveData.push(date)
        this.saveFunc(args)
    }
    

}

class Command{
    //명령을 객체로 생성
    constructor(controller,func){
        this.controller = controller
        this.func = func
    }
    execute(args){
        this.func(args)
    }
}

let playerjump = (args) => { 
    console.log(`jumped : height ${args}`)}
let playersave = () => { 
    let curDate = new Date()
    console.log(`saved at ${curDate}`)}

playerController = new Controller(() =>{playerjump(10)},playersave)
jumpCommand = new Command(playerController,((args) => playerController.jump(args)))
saveCommand = new Command(playerController,(() => playerController.save()))
//화살표 함수로 this 바인딩 방지
playerInputHandler = new InputHandler(jumpCommand,saveCommand) //명령을 갈아끼우기 가능
playerInputHandler.keyPressed('space')
playerInputHandler.keyPressed('enter')