
 var h5= document.querySelector("h5");

 var add = document.querySelector("#add");
var check = 0;

 add.addEventListener("click",()=>{
    if(check==0){
        add.innerHTML = "Remove";
        h5.innerHTML = "Friend";
        h5.style.color = "green";
        check = 1;
    }
    else{
        add.innerHTML= "Add";
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
        check = 0;
    }
    
 });

 