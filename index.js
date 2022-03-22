var rangeInput = document.querySelector('input[type="range"]');
var number = document.getElementsByClassName("value-range")[0];

function handleRange(e) {
    let target = e.target
    if(e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min;
    const max = target.max
    const val = target.value;
     
    number.innerHTML = val + " " + "znaków";
    target.style.backgroundSize = (val - min) * 100/ (max-min) + '% 100%';
}

rangeInput.addEventListener('input', handleRange);

// generate password

var passwordInput = document.getElementsByClassName("generator")[0];
const containerCheckbox = document.getElementsByClassName("checkbox-box")[0];
var btn = document.getElementById('btn');
var specialCharState = false;
var upperLetterState = false;
var numberState = false;
function handleChar() {
    for(var i = 0; i< containerCheckbox.childElementCount; i++)  {
        document.getElementsByClassName("checkbox")[i].addEventListener('change',(e) => {
              if(e.target.checked) {
                switch (e.target.id) {
                    case "special-char":
                        specialCharState = true;
                        break;
                   case "uppercase-letter":
                    upperLetterState = true;
                        break;
                   case "number-char":
                    numberState = true;
                       break;
                    default:
                        break;
                }
              }
            else {
                switch (e.target.id) {
                    case "special-char":
                        specialCharState = false;
                        break;
                   case "uppercase-letter":
                    upperLetterState = false;
                        break;
                   case "number-char":
                    numberState = false;
                       break;
                    default:
                        break;
                } 
            }
           });
       }
    return {
        specialCharState,
        upperLetterState,
        numberState
    }
}

handleChar();

const specialChar = [" ", "!", "#", "$", "%", "&", "(", ")", "~", "+", ",", "-", "/", "=", ">", "@", "*", "?", "[", "]", "_", "{", "}", "^", ":", ";", "<", "."];
const numberChar = [0,1,2,3,4,5,6,7,8,9];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","w","v","y","z","x"];
const upperLetters = [];
letters.forEach((item) => {
   let bigLetter =  item.toUpperCase();
     upperLetters.push(bigLetter);
});


btn.addEventListener("click", () => {
    var random = [];
   let password = [];
   var result =  handleChar();
   var num = Number((number.innerHTML).slice(0,2));
   addChars(letters,random,num);
   if(result.specialCharState === true) {
    addChars(specialChar,random,num);
   }

   if(result.numberState === true) {
    addChars(numberChar,random,num);
 }

 if(result.upperLetterState === true) {
    addChars(upperLetters,random,num);
 }


  random.forEach((index) => {
    index = Math.floor(Math.random() * random.length);
    console.log(index);
    if(password.length === num) {
        return password;
    }
    else password.push(random[index]);
  })
     
  passwordInput.value =  password.join('');
 
});

function addChars(array,random,num) {
    
    let len = Math.floor(Math.random() * array.length);
    if(len < num) {
        len = num;
    }
    for(var i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * array.length);
      random.push(array[char]);
    }
}