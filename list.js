let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");

button.addEventListener("click",function(){
      let item=document.createElement("li");
     item.innerText=input.value;//data in bro
     
     let delBtn=document.createElement("button");
     delBtn.innerText="delete";
     delBtn.classList.add("delete");

     item.appendChild(delBtn);
     ul.appendChild(item);
      input.value="";
});
ul.addEventListener("click",function(event){
      if(event.target.nodeName=="BUTTON"){
            let listitem=event.target.parentElement;
            listitem.remove();
      }
})

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//       delBtn.addEventListener("click",function(){
//           let par=this.parentElement;
//           console.log(par);
//           par.remove();
//       });
// }

