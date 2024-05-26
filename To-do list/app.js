var list  =document.getElementById("item_list")
function addItem(){
        
    
    var input = document.getElementById("todo_item")
    var li = document.createElement("li")
    var liText = document.createTextNode(input.value) 
    li.appendChild(liText)
    list.appendChild(li)

    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("onCLick","delItem(this)")
    delBtn.setAttribute("class","delitem")
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'


}


function delItem(e){
    e.parentNode.remove()
     

}

function delAll(){
    list.innerHTML = ""
}

