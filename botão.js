
const botao = document.getElementById('meuBotao');
const areaMensagem = document.getElementById('areaMensagem');

const mensagem = "Sei que as vezes parece impossivel, mas o segredo é nunca desistir";

botao.addEventListener('click', function() {
areaMensagem.textContent = mensagem; 
});