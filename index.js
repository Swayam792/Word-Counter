const words=document.getElementById('words');
const textarea = document.getElementById('textarea'),
char = document.getElementById('char'),
sen = document.getElementById('sen');
 
textarea.addEventListener('input',(e)=>{
    let sentence = 0;
    let text = e.target.value;
    count=text.length;
    text = text.trim();    
     
    let spaces = text.split(" ");      
     
    let texts = spaces.filter((text)=>{
        return text!="";
    }); 
    
    for(let i=0;i<text.length;i++){
        if(text[i]=="."){
            sentence++;
        }
    }
    
     char.innerText = count;
     words.innerText = texts.length;
     sen.innerHTML = sentence;     
});


const cleartext=()=>{
     textarea.value="";
     char.innerText = 0;
     words.innerText = 0;
     sen.innerHTML = 0;
}