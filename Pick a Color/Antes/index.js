let cores = ['red', 'blue', 'green','yellow', 'black'];
let  btn = document.getElementById( 'btn' )

btn.addEventListener('click',function(){
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = cores [randomColor]
    nomeCores(randomColor)
    
})

function getRandomColor(){
  return Math.floor(Math.random() * cores.length)
}

function nomeCores(index){
    let corAtual = cores[index]
    document.getElementById('nome').innerHTML = corAtual   
}

