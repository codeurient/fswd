findNumbers = ()=>{


    let inputText = document.getElementById('number').value;
    let numbers = inputText.split(' ').filter(num => num.trim() !== "").map(num => parseInt(num.trim()));
  console.log(numbers);
    let oddNumbers = [];
    let evenNumbers = [];
    for(let i=0;i<numbers.length;i++){
      if (!isNaN(numbers[i])) { 
        if (numbers[i] % 2 === 0) {
          evenNumbers.push(numbers[i]);
        } else {
          oddNumbers.push(numbers[i]);
        }
      }
    }
    document.getElementById('headerElement1').innerHTML = evenNumbers;
    document.getElementById('headerElement').innerHTML = oddNumbers;
    
  }

  resetNumbers = () =>{
    if(document.getElementById('number')|| document.getElementById('headerElement')|| document.getElementById('headerElement1')){
      document.getElementById('number').value = '';
      document.getElementById('headerElement').innerHTML = '';
      document.getElementById('headerElement1').innerHTML = '';
    }
      document.getElementById('number').value = '';

      
    
  }