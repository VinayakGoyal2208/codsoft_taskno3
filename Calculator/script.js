let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      }
      catch {
        document.querySelector('input').value = "Error";
        string = "";
      }
    }
    else if (buttonValue === 'AC') { 
      string = "";
      document.querySelector('input').value = string;
    }
    else if (buttonValue === '⌫') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else { 
      string += buttonValue;
      document.querySelector('input').value = string;
    }
  });  
});  
