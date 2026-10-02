function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
function validarNome(nome) {
    return nome.length >= 3;
}
function validarSenha(senha) {
    return senha.length >= 6 && /\d/.test(senha);
}
function validarCPF(cpf) {
    return cpf.length >= 11;
}
function mostrarMensagem(msg, cor) {
    const el = document.getElementById("mensagem");
    el.textContent = msg;
    el.style.color = cor;
}

function cadastrar() {
    // Lógica simplificada de captura de campos
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    let valido = true;

    if (!validarNome(nome.value)) { nome.classList.add("erro"); valido = false; } else { nome.classList.add("sucesso"); }
    if (!validarEmail(email.value)) { email.classList.add("erro"); valido = false; } else { email.classList.add("sucesso"); }
    if (!validarSenha(senha.value)) { senha.classList.add("erro"); valido = false; } else { senha.classList.add("sucesso"); }

    if (!valido) {
        mostrarMensagem("X Verifique os campos obrigatórios!", "red");
        return;
    }
    mostrarMensagem("Cadastro realizado com sucesso!", "green");
}

/* Testes de Unidade Automatizados */
console.assert(validarEmail("teste@gmail.com") === true, "Erro: Email válido não passou");
console.assert(validarEmail("teste@") === false, "Erro: Email inválido passou");
console.assert(validarSenha("123456") === true, "Erro: Senha válida não passou");
console.assert(validarSenha("abc") === false, "Erro: Senha inválida passou");
console.log("Testes de unidade executados!");
