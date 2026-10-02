function mostrarMensagemLogin(msg, cor) {
    const el = document.getElementById("mensagemLogin");
    el.textContent = msg;
    el.style.color = cor;
}

function fazerLogin() {
    const emailInput = document.getElementById("loginEmail");
    const senhaInput = document.getElementById("loginSenha");
    
    // Recupera os dados salvos no cadastro via localStorage (Teste de Integração)
    const dadosSalvos = localStorage.getItem("alunoEnfermagem");
    
    // Limpa estados visuais anteriores
    emailInput.classList.remove("erro", "sucesso");
    senhaInput.classList.remove("erro", "sucesso");

    if (!dadosSalvos) {
        emailInput.classList.add("erro");
        senhaInput.classList.add("erro");
        mostrarMensagemLogin("Erro: Nenhum usuário cadastrado no sistema!", "red");
        return;
    }

    const alunoCadastrado = JSON.parse(dadosSalvos);

    // Validação de Login (Email e Senha)
    if (emailInput.value === alunoCadastrado.email) {
        // Simulando checagem de credenciais válidas
        emailInput.classList.add("sucesso");
        senhaInput.classList.add("sucesso");
        mostrarMensagemLogin("Login realizado com sucesso! Bem-vindo(a).", "green");
    } else {
        emailInput.classList.add("erro");
        senhaInput.classList.add("erro");
        mostrarMensagemLogin("Erro: Credenciais inválidas ou usuário inexistente!", "red");
    }
}
