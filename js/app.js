
//variables
const formulario = document.querySelector('#cotizar-seguro')

//Constructores
function Seguro(year, marca, tipo){
    this.year = year,
    this.marca = marca,
    this.tipo = tipo
}

const selectYear = document.querySelector('#year')
const max = new Date().getFullYear()
const min = max -20

 function UI(){
    
    UI.prototype.llenarOpciones = ()=>{
        for(let i = max; i > min; i--){
            const yearOption = document.createElement('option')
            yearOption.value = i
            yearOption.textContent = i
            selectYear.appendChild(yearOption)
         }
     }   
     
 }


//instanciar
const ui = new UI()
//console.log(ui)
 document.addEventListener('DOMContentLoaded',()=>{
ui.llenarOpciones()
 })

EventListeners()

function EventListeners(){
    formulario.addEventListener('submit',cotizarSeguro)
}

function cotizarSeguro(e){
//leer marca
e.preventDefault();
//console.log('cotizanding')
const marca = document.querySelector('#marca').value

//leer año
const año = document.querySelector('#year').value

//leer tipo
const tipo = document.querySelector('input[name="tipo"]:checked').value


if(marca ===''){
const mensajeError = document.createElement('p')
mensajeError.classList.add('error')
mensajeError.textContent= "no has seleccionado una marca"
formulario.appendChild(mensajeError)
}else{
    console.log('pasastes la validacion')
}
 }
   


