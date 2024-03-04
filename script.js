//variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let ramdonNumber = Math.round(Math.random() *10)
let attempts = 1 

//eventos
btnTry.addEventListener('click', handleOnTryClick)
btnReset.addEventListener('click' , handleOnResetClick)
document.addEventListener('keypress', function(e){
   if(e.key == 'Enter' && screen1.classList.contains('hide')){
      handleOnResetClick()
   }
}
)




//funções

function handleOnTryClick(event){
   event.preventDefault()
   
    const inputNumber = document.querySelector('#inputNumber')
   
    if(Number(inputNumber.value) == ramdonNumber && attempts > 1){
     toggleScreen()
     
      screen2.querySelector('.screen2 h1').innerText = `You nailed it in ${attempts} attempts`
     
    }else{
      
     
      document.querySelector('.screen2 h1').innerText = `You nailed it in ${attempts} attempt`
   }
   inputNumber.value = ""
   attempts++
} 

function handleOnResetClick (){
   toggleScreen()
   attempts = 1
   ramdonNumber = Math.round(Math.random() *10)
}

function toggleScreen (){
   screen1.classList.toggle('hide')
   screen2.classList.toggle('hide')
}

   

   
 
       



