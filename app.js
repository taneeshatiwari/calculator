let string="";
let buttons=document.querySelectorAll("button");
let input=document.querySelector('input');

buttons.forEach(button =>{
    button.addEventListener("click",(evt)=>{
        try{
        if(evt.target.innerText=="="){
            string=eval(string);
        }
        else if(evt.target.innerText=="clear"){
            string="";
        }
       else
       string = string+evt.target.innerText;
       input.value=string;}
       catch(err){
        console.log(err);
        input.value=err;
       }
       
    })
});
