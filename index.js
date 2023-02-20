var input = document.querySelector('input')
var form = document.getElementById('add-todo')
var list = document.getElementById('todo-list')

form.onsubmit = function(e){
    e.preventDefault()
    var inputValue = document.querySelector('input').value
// should not add a todo when clicking button if input is filled with only spaces
    if(inputValue == "" || inputValue.trim().length === 0)
        {form.reset() 
        return} 
// should generate list item element when adding todo
    else
        {var li = document.createElement('li') 
// should generate button element within list item element when adding todo‣
// should generate button element containing text of todo when adding todo
        var btn = document.createElement('button')
        btn.textContent = inputValue;
        list.appendChild(li)
        li.appendChild(btn)
// should mark todo as done by striking through text when todo is clicked ONCE
// should remove todo from list when clicking todo TWICE
        btn.addEventListener('click', function handleClick(e)
            {if(this.style.textDecoration == 'line-through')
            {this.parentNode.remove()}
            else
            {this.style.textDecoration = 'line-through'}})
        input.value = ""} 
        }