let usertext;
const listarray = []; 

        function addToList(){

            const numTodo = listarray.length;
            console.log(numTodo);

            const todoButton = document.createElement("input");
                todoButton.type="checkbox";
                todoButton.id="listCheckbox";

            const todoDel = document.createElement("button");
                todoDel.innerText="Delete";

            const todoDiv = document.createElement("div");
            
            const todoContent = document.createTextNode(listarray[numTodo - 1]);

            todoDiv.appendChild(todoButton);
            todoDiv.appendChild(todoContent);
            todoDiv.appendChild(todoDel);


            const currentDiv = document.getElementById("todo-container");

            currentDiv.appendChild(todoDiv);
        }

document.getElementById("addButton").onclick = function(){

    usertext = document.getElementById("addText").value;

   if(usertext.length != 0){

        listarray.push(usertext);

        addToList();

        document.getElementById("addText").value = '';
        
   }

   else{
    
        listarray.push("NULL");

        addToList();

   }

}



