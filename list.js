 //Get the elements from the html and store on js
 const textInput =document.getElementById("text");
 const button = document.getElementById("button");
 const itemsContiner = document.getElementById("itemsContiner");

 //Add items to the To Do list 
 function addItemToList(){

    let userText = textInput.value; //grave text inside of textInput

    //when the continer is empty then the code don't run nothing
    if(userText === ""){    //"" = empty
        return;
    }
    
    //Create p element to store the text from the user in HTML
    let pElement = document.createElement("p");
    pElement.innerText = userText;
    pElement.className = "pEl";

    //create a finish button
    let finishButton = document.createElement("button");
    finishButton.innerText = "Finish"; //put text on finishButton
    //<button>Finish</button>
    
    finishButton.style.backgroundColor = "rgb(31, 180, 31)";
    finishButton.style.color = "white";
    finishButton.style.width = "90px";
    finishButton.style. height = "28px";
    finishButton.style.border = "1px solid green";


    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    //<button>Delete</button>

    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.style.width = "85px";
    deleteButton.style.height = "28px";
    deleteButton.style.border = "1px solid rgb(222, 6, 6)";
    deleteButton.style.marginLeft = "10px";
    


    //create a div and store pElement, finishButton and deleteButton there.
    let toDoElementContiner = document.createElement("div");
    toDoElementContiner.appendChild(pElement);
    toDoElementContiner.appendChild(finishButton);
    toDoElementContiner.appendChild(deleteButton);

    toDoElementContiner.style.backgroundColor = "whitesmoke";
    toDoElementContiner.style.width = "1350px";
    toDoElementContiner.style.height = "45px";
    toDoElementContiner.style.border = "1px solid gainsboro";
    toDoElementContiner.style.margin = "0 auto";
    

    


    //style pElement
    pElement.style.width = "1100px";
    pElement.style.height = "45px";
    pElement.style.display = "inline-Block";
    pElement.style.textAlign = "center";
   
   

    

    //delete some item from the ToDo list
    deleteButton.onclick = function(){
        toDoElementContiner.remove(toDoElementContiner);
    }

    // put a line through the finished activities
    finishButton.onclick = function(event){
        let buttonClicked = event.target; //get the parent element
        let parent = buttonClicked.parentElement;
        let text = parent.querySelector(".pEl");// get the parent element with the class.
        text.style.textDecoration = "line-through"; //style the text
    }

    //
    itemsContiner.appendChild(toDoElementContiner);

      
}

 button.addEventListener("click", addItemToList);







