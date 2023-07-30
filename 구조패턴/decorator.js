//객체의 기능을 변경하거나 확장할 때, '합성'을 사용

class Character{
    constructor(level){
        this.level = level
        this.equipments = []
        this.damage = level * 4;
    }
    attack() {
        let damage = this.applyStat()
        console.log(`damage dealt :  ${damage}`)
    }
    equip(equipment){
        this.equipments.push(equipment)
    }
    unequip(equipment){
        this.equipments = this.equipments.filter( 
            (eq) => { return eq !== equipment })
    }
    applyStat(){
        let computedDamage = this.damage
        for(let eq of this.equipments){
            computedDamage = eq.applyDamage(computedDamage)
        }
        return computedDamage
    }
}

class Equipment{
    constructor(damage){
        this.damage = damage
    }
    applyDamage(damage = 0){
        console.log(`equipment damage applied : ${this.damage} to ${damage}`)
        return this.damage + damage
    }
}

sword = new Equipment(5)
mango = new Equipment(10)
player = new Character(10)
player.equip(sword)
player.equip(mango)
player.attack()

//장비 해제
player.unequip(mango)
player.attack()