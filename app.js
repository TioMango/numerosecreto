let numeroSecreto, tentativas = 0, nome = prompt("Insira seu nome") || "Jogador";

const iniciarJogo = () => {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;
    document.getElementById('mensagem').textContent = `Olá, ${nome}! Tente adivinhar o número entre 1 e 10!`;
    document.getElementById('tentativas').textContent = "Tentativas: 0";
    document.getElementById('palpite').value = '';
    document.getElementById('reiniciarBtn').style.display = "none";
}

const verificarPalpite = () => {
    const palpite = +document.getElementById('palpite').value;
    if (isNaN(palpite)) return alert("Digite um número válido!");
    document.getElementById('tentativas').textContent = `Tentativas: ${++tentativas}`;
    document.getElementById('palpite').value = '';

    if (palpite === numeroSecreto) {
        document.getElementById('mensagem').textContent = `${nome}, parabéns! O número secreto era: ${numeroSecreto}. Tentativas: ${tentativas}`;
        document.getElementById('reiniciarBtn').style.display = "inline-block";
    } else {
        document.getElementById('mensagem').textContent = `O número é ${palpite < numeroSecreto ? "MAIOR" : "MENOR"}.`;
    }
}

const reiniciarJogo = () => iniciarJogo();

iniciarJogo();
