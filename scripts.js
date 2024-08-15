const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const listComplete = document.querySelector(".list-tasks")

let myListItens = []



function addNewTask() {
    
    if(input.value.trim()=== ''){
        alert("Por favor, insira uma tarefa antes de adicionar!");
        return;
    }
    
    myListItens.push({
        task: input.value,
        complete: false
    })

    input.value = ''

    showTask()
}

function showTask() {

    let newLi = ''

    myListItens.forEach((item, index) => {
        newLi = newLi + `
  
        <li class="task ${item.complete && "done"}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="completeTask(${index})">
            <p>${item.task}</p>
            <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deleteIten(${index})">
        </li>
  
        `

    })

    listComplete.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myListItens))
}

function completeTask(index) {
    myListItens[index].complete = !myListItens[index].complete

    showTask()
}

function deleteIten(index) {
    myListItens.splice(index, 1)

    showTask()
}

function reloadTask() {

    const taskLocalStorage = localStorage.getItem('list')
    if (taskLocalStorage) {
        myListItens = JSON.parse(taskLocalStorage)
    }
    console.log(taskLocalStorage)

    showTask()
}


reloadTask()
button.addEventListener("click", addNewTask)