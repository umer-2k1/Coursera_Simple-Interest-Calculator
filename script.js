// Getting all the elements by their ID
const principalAmount = document.getElementById('principal')
const interestRate = document.getElementById('interestRate')
const result = document.getElementById('result')
const btn = document.getElementById('btn')
const years = document.querySelector('#years')

// Whenever Btn cliked EventListner will fired
btn.addEventListener('click',()=>{
  let pVal = principalAmount.value
  console.log("Amount = ",principalAmount.value)
  console.log("Rate = ",interestRate.value)
  
  if ( pVal <=0) {
    alert("Enter a positive number")
    console.log("Enter a positive number")
    return;
  }
  // calculating interest
  const interest = (pVal*years.value*interestRate.value)/100

  let date = new Date()
  // Amount receive in the coming years
  const futureYear = date.getFullYear()+parseInt(years.value)
 
  result.innerHTML = `
  <p>If you deposit <span class="highlights">${pVal}</span>, </p>
  <p>at an interest of <span class="highlights">${interestRate.value}%</span>, </p>
  <p>you will get amount of <span class="highlights">${interest}</span> ,</p>
  <p>in the year <span class="highlights">${futureYear}</span> </p>
  `


})

// updating silder value each time when you drag
function SliderValue(){
    let output = document.getElementById("rate_val")
    output.innerHTML=interestRate.value+"%";
    interestRate.oninput = function() {
    output.innerHTML = this.value+"%";
  }
}