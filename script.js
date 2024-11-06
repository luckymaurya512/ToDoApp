const inputBox = document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("Please add the task");
    }
    else{
        let newTask = document.createElement("li");
        newTask.innerHTML=inputBox.value;
        listContainer.appendChild(newTask);
        let del = document.createElement("span");
        del.innerHTML="\u00d7"
        newTask.appendChild(del);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked") ;
    saveData();
    }
    else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();