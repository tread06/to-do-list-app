
function newItem(){

    //validate input
    let inputValue = $("input").val();
    if (inputValue === '') {
        alert("Add some to-do text!");
        return;
    }

    //create list item
    let li = $('<li></li>'); 
    li.append(inputValue); 
    
    //add cross out button to the list item
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append('X');
    li.append(crossOutButton); 
    
    //append list item to the list
    $('#list').append(li);
    
    //cross out list item event
    function crossOut() {
        li.toggleClass("strike");
    }
    li.on("dblclick", crossOut);
    
    //delete list item event
    function deleteListItem(){        
        li.remove();
    }
    crossOutButton.on("click", deleteListItem);

    //Make Sortable
    $('#list').sortable();        
}