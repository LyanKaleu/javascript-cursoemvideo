function contar() {
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    let resultado = document.getElementById('resultado');

    if (document.getElementById('inicio').value.length == 0 || document.getElementById('fim').value.length == 0 || document.getElementById('passo').value.length == 0){
        resultado.innerHTML = 'Impossível contar!';
    } else if (passo <= 0) {
        alert('Passo inválido! Considerando PASSO 1');
        resultado.innerHTML = 'Contando: <br>';
        if (inicio > fim) {
            // Contagem regressiva
            for (let cont = inicio; cont >= fim; cont--) {
                resultado.innerHTML += `${cont} \u{1F449} `;
            }
        } else {
            // Contagem crescente
            for (let cont = inicio; cont <= fim; cont++) {
                resultado.innerHTML += `${cont} \u{1F449} `;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`;
    } 
    else {
        resultado.innerHTML = 'Contando: <br>';
        if (inicio > fim) {
            // Contagem regressiva
            for (let cont = inicio; cont >= fim; cont -= passo) {
                resultado.innerHTML += `${cont} \u{1F449} `;
            }
        } else {
            // Contagem crescente
            for (let cont = inicio; cont <= fim; cont += passo) {
                resultado.innerHTML += `${cont} \u{1F449} `;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`;
    }
}