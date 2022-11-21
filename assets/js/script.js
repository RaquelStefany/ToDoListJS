const tarefas = document.querySelector('.tarefas');
var cont = 1;

addEventListener("keydown", function (event) {
    if(event.key == "Enter"){
        addTarefa();
    }
});

function addTarefa(){
    const tarefa = document.getElementById('tarefa').value;

    if(tarefa != ""){
        document.getElementById('mensagem').style.display = "none";
        tarefas.innerHTML += `<div class="task">
                                    <input type="checkbox" name="tarefa${cont}" id="tarefa${cont}">
                                    <label for="tarefa${cont}">
                                        ${tarefa}
                                    </label>
                                </div>
                                <br>`;
        document.getElementById('tarefa').value = "";
        cont++;
    }
}