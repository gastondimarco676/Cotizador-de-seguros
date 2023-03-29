
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
     
     
     UI.prototype.mostrarMensaje = (mensaje,tipo)=>{
        const divMensajeError = document.createElement('div')
        if (tipo==='error'){
            divMensajeError.classList.add('error')
        }else if (tipo==='correcto'){
            divMensajeError.classList.add('correcto') 
        }
        divMensajeError.textContent = mensaje
        formulario.appendChild(divMensajeError)

        setTimeout(() => {
            divMensajeError.remove();
        }, 5000);
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
UI.prototype.mostrarMensaje('te olvidaste la marca', 'error')
return
}
UI.prototype.mostrarMensaje('ok, cotizando', 'correcto') 
const divMensajeError = document.querySelector('.error')
if(marca && divMensajeError){
    divMensajeError.remove()
}
 }
   


