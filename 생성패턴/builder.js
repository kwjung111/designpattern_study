//객체 만드는 절차 추상화하는 패턴
//객체에 컴포넌트를 추가할 때의 비용을 줄일 수 있다.
//객체의 옵션이 많을때 사용하면 효율적

var computer = function(name,cpu,vga,ram){
    this.name = name
    this.cpu = cpu || 2
    this.vga = vga || 1060
    this.ram = ram || 8
}

computer.prototype.introduce= function(){
    let introduceStr = ' name :' + this.name
                     + ' cpu :'  + this.cpu
                     + ' vga :'  + this.vga
                     + ' ram :'  + this.ram
    console.log(introduceStr)
}

var computerBuilder = function(nameInput){
    let name = nameInput 
    let cpu
    let vga
    let ram
    const builder = {
        setCpu: function(cpuInput){
            cpu = cpuInput
            return this
        },
        setVga: function(vgaInput){
            vga = vgaInput
            return this
        },
        setRam: function(ramInput){
            ram = ramInput
            return this
        },
        build: function(){
            return new computer(name,cpu,vga,ram)
        }
    }
    return builder
}

var newComputer = computerBuilder('newComputer').setCpu(8).setVga(2080).setRam(16).build().introduce()
var oldComputer = computerBuilder('oldComputer').setCpu(4).setVga(1080).setRam(8).build().introduce()
var computer = computerBuilder('computer').build().introduce()

