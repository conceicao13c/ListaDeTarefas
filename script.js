// Função para adicionar tarefa
function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa");
    const tarefa = inputTarefa.value.trim(); // Remove espaços em branco

    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    // Reseta as mensagens
    mensagemErro.style.display = "none";
    mensagemSucesso.style.display = "none";

    // Se o input estiver vazio, exibe mensagem de erro
    if (tarefa === "") {
        mensagemErro.textContent = "Digite uma tarefa válida!";
        mensagemErro.style.display = "block";
    } else {
        // Exibe mensagem de sucesso
        mensagemSucesso.textContent = "Tarefa adicionada com sucesso!";
        mensagemSucesso.style.display = "block";

        // Adiciona a tarefa à lista
        const listaTarefas = document.getElementById("listaTarefas");
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        // Limpa o input
        inputTarefa.value = "";
    }
}