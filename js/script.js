
function findindex(arr , elem) {
    ctn=0;
    while (elem!=arr[ctn]){
        ctn++;
        console.log(ctn);
    }
    return ctn;
};
window.addEventListener('DOMContentLoaded', ()=>{ 
    btn = document.querySelectorAll('.button');
    blk = document.querySelectorAll('.plan__block');
    btn.forEach(item =>{ 
                  
        item.addEventListener('click',()=> {
            btn.forEach(el =>{                
                if(el.classList.contains("button_active")){                    
                    t =findindex(btn,el);                  
                    blk[t].classList.remove("plan__block_active");
                    btn[t].innerText="PLAN SELECTED";
                    btn[t].classList.remove("button_active");             
                }                 
            })                                
            k =findindex(btn,item); 
            item.classList.add("button_active");
            blk[k].classList.add("plan__block_active");
            item.innerText="SELECT PLAN";  
            if(item.classList.contains("button_active")){
               
            }else {
                
            }
                                  
        });
              
    }); 
});