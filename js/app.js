
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
console.log(ui)
 document.addEventListener('DOMContentLoaded',()=>{
ui.llenarOpciones()
 })

   


