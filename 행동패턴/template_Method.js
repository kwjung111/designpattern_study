//부모 클래스에서 알고리즘 골격 정의, 구조 변경 없이 클래스를 오버라이드함.
//중복되는 코드가 많을 때 사용 상속을 기반으로 한다.
//아주 기초적인 디자인 패턴

class GameAI{
    //템플릿 메서드를 정의.
    constructor(name,talkfunc=null){
        this.name = name;
        this.talkfunc = talkfunc;
    }
    move(){
        //공통되는 부분의 코드
        console.log(`${this.name} is moving`)
    }
    talk(){
        if(this.talkfunc == null){
            console.log('attack')
        }else{
            this.talkfunc()
        }
    }
    attack(){
        //공통되는 부분의 코드
        console.log(`you attacked ${this.name}`)
    }
}

monsterAI = new GameAI('monster',() => {}) //monster AI 는 대화 불가
monsterAI.talk()
monsterAI.attack()

npcAI = new GameAI('npc',() => {console.log('hello traveler!')})
npcAI.talk()
npcAI.attack()