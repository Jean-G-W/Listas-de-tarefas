function adicionarTarefa() {
    const novaTarefaInput = document.getElementById('nova-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');

    if (novaTarefaInput.value === '') return;

    const novaTarefa = document.createElement('li');
    const tarefaTexto = document.createElement('span');
    tarefaTexto.textContent = novaTarefaInput.value;

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.onclick = () => editarTarefa(tarefaTexto);

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.onclick = () => excluirTarefa(novaTarefa);

    buttons.appendChild(botaoEditar);
    buttons.appendChild(botaoExcluir);

    novaTarefa.appendChild(tarefaTexto);
    novaTarefa.appendChild(buttons);
    listaTarefas.appendChild(novaTarefa);

    novaTarefaInput.value = '';
}

function editarTarefa(tarefaTexto) {
    const novoTexto = prompt('Edite a tarefa:', tarefaTexto.textContent);
    if (novoTexto !== null && novoTexto.trim() !== '') {
        tarefaTexto.textContent = novoTexto;
    }
}

function excluirTarefa(tarefa) {
    tarefa.remove();
}
