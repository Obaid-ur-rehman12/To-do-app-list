var list  =document.getElementById("item_list")
function addItem(){
        
    
    var input = document.getElementById("todo_item")
    var li = document.createElement("li")
    var liText = document.createTextNode(input.value) 
    li.appendChild(liText)
    list.appendChild(li)
    input.value = ""

    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("onCLick","delItem(this)")
    delBtn.setAttribute("class","delitem")
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'



    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onCLick" , "edititem(this)")
    editBtn.setAttribute("class","edititem")
    editBtn.innerHTML = '<i class="fas fa-pen-square"></i>'

}


function delItem(e){
    e.parentNode.remove()
     
}



function delAll(){
    list.innerHTML = ""
}


function edititem(e){
    var editBox = prompt("Enter Edit Value" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editBox
    
}

