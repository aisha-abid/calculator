let inputBox=document.querySelector('#inputBox');
let buttons=document.querySelectorAll('button');

let string='';
let buttonsArray=Array.from(buttons);
buttonsArray.forEach(btn =>{
    btn.addEventListener('click',(e)=>{


      
        if(e.target.innerHTML=='AC'){
            string='';
            inputBox.value=string;

        }else if(e.target.innerHTML=='DEL'){
            
            string=string.substring(0,string.length-1);
            inputBox.value=string
        }else if(e.target.innerHTML=='='){
              let lastChar = string[string.length - 1];
            let secondLastChar = string[string.length - 2];
             if( ['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(secondLastChar)){
            inputBox.value = "Invalid Expression";
            string = '';
            return;
            }
            else if(['+', '-', '*', '/'].includes(lastChar)){
              inputBox.value = "Invalid Expression";
            string = '';
            return;   
            }
             try {
                string = eval(string);
                inputBox.value = string;
            } catch (err) {
                inputBox.value = "Error";
                string = '';
            }
        }else{
        string+=e.target.innerHTML;
        inputBox.value=string
        }
           
    })
})