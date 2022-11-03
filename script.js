let tarefas = []
 
const addTarefa = () => {
    let tarefa= 
    document.getElementById('tarefa1').value
    document.getElementById('tarefa2').value
    document.getElementById('tarefa3').value
   
  
    document.getElementById('tarefa1').value = ""
    document.getElementById('tarefa2').value = ""
    document.getElementById('tarefa3').value = ""
 
    if(localStorage.getItem('tarefas') != null){
        tarefas = JSON.parse (localStorage.getItem('tarefas'))

    }

    let data = new Date();
    let date = 
    `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;
    tarefas.push([date, tarefa])
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

 
const list = () => {
    let tbody = 
    document.querySelector('#tr-tarefa')

 
    if (localStorage.getItem('tarefas') != null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    } else{
        tarefas.push(["Sem","dados."])
    }
  

    tarefas.forEach((element,index) => {
        tbody.innerHTML += `
        <tr></td>
        <td>${element[0]}</td>
        <td>${element[3]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td><button onclick ='deletar("${index}")'> Excluir </button></td>
        </tr>
        ` 
    
    });
}
 
const deletar = (index) => {
    newArray = tarefas.filter(
        (e, i)=> i != index
    )
    localStorage.setItem('tarefas', JSON.stringify(newArray))
    document.location.reload(true)
}