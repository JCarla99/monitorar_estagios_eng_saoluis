document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const area = document.getElementById('area').value;
    
    if (!email || !area) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Aqui você pode adicionar a lógica para salvar o e-mail
    // Por enquanto, vamos apenas mostrar uma mensagem
    alert(`Cadastro realizado com sucesso!\nE-mail: ${email}\nÁrea: ${area}`);
    
    // Limpar o formulário
    document.getElementById('cadastroForm').reset();
});
