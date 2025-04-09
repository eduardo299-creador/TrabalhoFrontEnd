// Exibir formulário de login
function showLoginForm() {
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.register-form').style.display = 'none';
}

// Exibir formulário de cadastro
function showRegisterForm() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
}

// Lidar com o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validar login (isso é apenas um exemplo simples)
    if (email === "user@example.com" && password === "123456") {
        alert("Login bem-sucedido!");
    } else {
        alert("Email ou senha incorretos.");
    }
});

// Lidar com o envio do formulário de cadastro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Validar cadastro (isso é apenas um exemplo simples)
    if (name && email && password) {
        alert("Cadastro bem-sucedido! Agora você pode fazer login.");
        showLoginForm(); // Após o cadastro, exibe o formulário de login
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
