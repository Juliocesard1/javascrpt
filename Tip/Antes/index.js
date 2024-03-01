function ou (value){
    value = value.toFixed(2)
    return value
}
function lol (){
    let bill = Number(document.getElementById('yourBill').value)
    let tip = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    
    let conta1 = bill * (tip / 100)
    let total = bill + conta1
    let pop = split / total

    document.getElementById('tipPercent').innerHTML = tip + ' %'
    document.getElementById('tipValue').innerHTML = ou (conta1)
    document.getElementById('totalWithTip').innerHTML =  ou (total)
    document.getElementById('splitValue').innerHTML= split
    document.getElementById('billEach').innerHTML = ou (total/pop)

}