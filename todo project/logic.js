let loop_no=prompt("how many todos you want to add");
loop_no=Number.parseInt(loop_no);
for(let i=0;i<loop_no;i++){
  let todo_take=prompt("Enter your todo task");
  localStorage.setItem(i+1,todo_take);
  
}
for(let i=0;i<loop_no;i++){
   let task1=localStorage.getItem(i+1);
   let div_sec=document.createElement("div");
  let a= document.getElementById("todo");
  a.appendChild(div_sec).innerHTML=task1;
}