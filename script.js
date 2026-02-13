// =========================
// SCRIPT LOGIN
// =========================

// Define a senha correta (muda pra sua senha)
const senhaCorreta = "1234"; 

// Pegando os elementos
const btnLogin = document.getElementById("btn-login");
const campoSenha = document.getElementById("campo-senha");
const erro = document.getElementById("erro");
const loginContainer = document.getElementById("login-container");
const painel = document.getElementById("painel-ferramentas");

// Função do login
btnLogin.addEventListener("click", () => {
    const senha = campoSenha.value.trim(); // pega e limpa espaços

    if(senha === senhaCorreta){
        // Senha certa -> esconde login e mostra painel
        loginContainer.style.display = "none";
        painel.style.display = "block";
        erro.style.display = "none";
        campoSenha.value = ""; // limpa o campo
    } else {
        // Senha errada -> mostra erro
        erro.style.display = "block";
    }
});

// Opcional: permite apertar Enter para logar
campoSenha.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        btnLogin.click();
    }
});
