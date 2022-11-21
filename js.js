let bill =document.querySelector('.bill-input');
let billNumero = parseInt(bill.value);

let people = document.querySelector('.people-input');
let peopleNumero = parseInt(people.value);

let tipResult= document.querySelector('.resultado-amout');
let totalResul= document.querySelector('.resultado-total')

let buttons = document.querySelectorAll('.bt') ;
let alerta = document.querySelector('#alerta');

let tipValue=0
buttons.forEach(elment => {
 elment.addEventListener('click', event=>{
  removeActivo()

  elment.classList.add('bt-selector');
  
  tipValue= parseInt(event.target.innerText.slice(0,-1));
  calculateTip()
  
 });
})

function removeActivo(){
 buttons.forEach(elment=>{
  elment.classList.remove('bt-selector');
 })
}

bill.addEventListener("input", () =>{
 billNumero = parseFloat(bill.value);
 if (isNaN(tipValue)){

 }else{
  calculateTip();
 }
 
})

let custom = document.querySelector('.custom');
custom.addEventListener('click', ()=>{
 removeActivo()
})
custom.addEventListener("input", () =>{
 
 tipValue = parseInt(custom.value);
 if(!isNaN(tipValue)){
  
 }else{
  calculateTip();
 }
})


people.addEventListener("input", () =>{
 peopleNumero = parseFloat(people.value);
 if(peopleNumero == 0 || isNaN(peopleNumero)){
  people.style.borderColor = 'rgb(164,68,68)';
  alerta.classList.add('error');
 }else{
  alerta.classList.remove('error');
  people.style.borderColor = 'hsl(189,41%,97%)';
  calculateTip()
 }
 
})
billNumero = 0;
let reset= document.querySelector('.reset');
reset.addEventListener('click', () =>{
 bill.value= 0;
 billNumero = 0;
 people.value = 0;
 peopleNumero = 0;
 custom.value = 'Custom';
 calculateTip();
})

function calculateTip(){
 tipResult.innerText = ((billNumero*tipValue /100 ) / peopleNumero).toFixed(2);

 totalResul.innerHTML = (((billNumero * tipValue/100)+ billNumero)/peopleNumero).toFixed(2);
}
console.log(billNumero);