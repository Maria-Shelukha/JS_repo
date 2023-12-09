let postamate = [null, null, null, "1432HGF" , null]
let parcelId = "1432HGF"
let accBalance = 500
let cost = 100
let codeBase = "A001DFX0"
let smsCode = "A001DFX0"

function giveShipment(smsCode,codeBase,accBalance,cost, postamate, parcelId){
    if(smsCode === codeBase && accBalance >= cost) {
        let balance = accBalance - cost
        console.log(`Заберите посылку ${parcelId} из ячейки ${postamate.indexOf(parcelId)}.Ваш счет составляет: ${balance}ед`)
    }
    else {
        console.log('Неверный код')
    }
}

giveShipment(smsCode,codeBase,accBalance,cost, postamate, parcelId);