document.getElementById('btn').addEventListener('click', ()=>{
    document.querySelector('ul').style.display = 'block'
})

document.getElementById('close').addEventListener('click', ()=>{
    document.querySelector('ul').style.display = 'none'
})



function Buyurtma(nazv, price){
    let isBuy = (`Siz rostdan ham ${nazv} olmoqchimisiz?`)
    
    if(isBuy){}
    let count =  +prompt (`nechta olmoqchisiz? donasi: ${price} so'm`)
    let isConfirm = confirm (`sizning haridingiz narxi: ${count * price}so'm bo'ldi davom etirasizmi?`);
    if (isConfirm) {
    alert( 'Buyurtma qabul qilindi intiqlik bilan kuting!')
    }else{
    alert( 'Keyingi safar bizlardan buyurtma qiling!' )
    }
}
