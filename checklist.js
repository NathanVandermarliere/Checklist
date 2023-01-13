let usertext;
const listarray = []; 


document.getElementById("addButton").onclick = function(){

    usertext = document.getElementById("addText").value;

   //for (i = 0; i < listarray.length; i++) {
   //     console.log(listarray[i])
   //}

    function addToList(){

        const numTodo = listarray.length;
        console.log(numTodo);

        const todoButton = document.createElement("input");
        todoButton.type="checkbox";
        todoButton.id="listCheckbox";
        const todoDiv = document.createElement("div");
        

        const todoContent = document.createTextNode(listarray[numTodo - 1]);

        todoDiv.appendChild(todoButton);
        todoDiv.appendChild(todoContent);
    

        const currentDiv = document.getElementById("todo-container");

        currentDiv.appendChild(todoDiv);
    }

   if(usertext.length != 0){

        listarray.push(usertext);

        addToList();

        document.getElementById("addText").value = '';
        
   }

   else{
    
        listarray.push("NULL");

        addToList();

   }

   if(document.getElementById("listCheckbox").checked){
        console.log("checkbox is checked");
    }
    else{
        console.log("checkbox is NOT checked");
    }
}



