
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let input = document.querySelector('input');
    let valueinput = input.value;
    // console.log(valueinput);
  
    if (valueinput.trim()==="") {
        let user = alert("please enter a task");
        
        
    } else {
        valueinput;
        let ul = document.querySelector('ul');
        let list = document.createElement('li');
        ul.appendChild(list);
        list.innerText = `${valueinput}`;
        input.value = "";
        let deletebtn = document.createElement('button');
        list.appendChild(deletebtn);
        deletebtn.innerText = 'delete';
        deletebtn.addEventListener('click', () => {
            list.remove();
        })
    }
   
  
    
    
})