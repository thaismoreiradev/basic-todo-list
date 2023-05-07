
const input = document.querySelector('.input-task')
const button = document.querySelector('.button-add-task');
const ul = document.querySelector('.task-list')



let tasksArray = []

const addTask = () => {
    
    if(input.value.length > 0){

    tasksArray.push({
        task: input.value,
        status: false,
    })
    
    showTask()

    input.value = ''

    }
}



const showTask = () => {

    let newListItem = ''

tasksArray.forEach( (item, index) => {

    newListItem = newListItem + `
    
        <li class="${item.status && "true-backgorund"}">
            <p class="${item.status && "true-text"}">${item.task}</p>
            <i class="fa-solid fa-check" onclick="checkTask(${index})"></i>
            <i class="fa-solid fa-trash" onclick="deleteTask(${index})"></i>
        </li>

    `
} )


ul.innerHTML = newListItem

localStorage.setItem('list', JSON.stringify(tasksArray))


}



const deleteTask = (index) => {
    tasksArray.splice(index, 1)
    showTask()
}


const checkTask = (index) => {
    tasksArray[index].status = !tasksArray[index].status    
    showTask()
}

const reloadPage = () => {
    const localStorageList = localStorage.getItem('list')
    
    if(localStorageList){
    tasksArray = JSON.parse(localStorageList)
    }

    showTask()
}


reloadPage()
button.addEventListener('click', addTask )


