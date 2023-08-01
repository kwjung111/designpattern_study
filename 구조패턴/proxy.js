//실제 객체에 요청이 전달되기 전에, 프록시(대리인)을 한번 거치는 패턴
//흐름 제어만을 바꿀 뿐, 결과값을 조작하거나 변경시키는것은 프록시 패턴의 의도와 어긋남
//요청 캐싱, 덩치가 큰 객체의 lazy initialization, 원격으로 객체 사용 등의 용도로 사용할 수 있다.

class Client{
    constructor(proxy){
        this.service = proxy
    }
    operation(funcName,args){
        this.service.operation(funcName,args)
    }
}


//Service 와 Proxy 는 같은 인터페이스를 가진다.
class Service{
    constructor(funcObj){
        this.funcObj = funcObj
        this._canAccess = true
        console.log('real service initialized')
    }
    get canAccess(){
        return this.canAccess
    }
    set canAccess(canAccess){
        this.canAccess = canAccess
    }
    operation(funcName,args){
        this.funcObj[funcName](args)
    }   
}

class Proxy{
    constructor(service,funcObj){
        this.service = service
        this.funcObj = funcObj
    }
    checkAccess(){  
        return this.service.canAccess;
    }
    //접근 가능할 시에만 실제 객체에 접근
    operation(funcName,args){
        if(this.checkAccess()) this.operation(funcName,args)
        else this.funcObj[funcName](args)
    }   
}

let vidDown = {
    downloadVid : (id) => { console.log(`download Video : ${id}`)},
    getVideoInfo: (id) => { console.log(`get ${id} video's info `)}
}

let vidDownProxy = {
    downloadVid : (id) => {console.log(`proxy : download Video : ${id}`)},
    getVideoInfo: (id) => {console.log(`proxy : get ${id} video's info`)}
}







vidDownloadSvcProxy = new Proxy(vidDown,vidDownProxy)

youtubeWatcher = new Client(vidDownloadSvcProxy)

youtubeWatcher.operation('downloadVid',4)

vidDownloadSvc = new Service(vidDown)

vidDownloadSvc.operation('downloadVid',4)