let na
let seuNumero = []
let tentativas = 0 
let maxe = 10


function newgame(){
   window.location.reload()
}

function init(){
   na =  Math.floor(Math.random() * 100 + 1)
}

function compareNunbers(){
      const seuNumeros = Number(document.getElementById('inputBox').value)
       seuNumero.push( '   ' +seuNumeros) 
       document.getElementById('guesses').innerHTML = seuNumero

       if(tentativas<maxe){
         if(seuNumeros > na){
            document.getElementById('textOutput').innerHTML = 'O numero que você digito é maior do que o esperado'
            document.getElementById('inputBox').value= ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
         }
          else if (seuNumeros < na){
            document.getElementById('textOutput').innerHTML = 'O numero que você digito é menor do que o esperado '
            document.getElementById('inputBox').value= ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
          }
          else{
           document.getElementById('textOutput').innerHTML='parabéns você acertou!'
           tentativas++
            document.getElementById('attempts').innerHTML = tentativas
            document.getElementById('inputbox').setAttribute('Readonly', 'Readonly')
          }

       }

       else{
         document.getElementById('textOutput').innerHTML='você perdeu ' + 'o número era ' +na
         document.getElementById('inputbox').setAttribute('Readonly', 'Readonly')
       }

       
}