let listaNumeros = [];

function adicionarNumero(n) {
    let listaAdicao = document.getElementById('lista');
    document.getElementById('resultado').innerHTML = '';

    if (n >= 1 && n <= 100) {
        if (listaNumeros.includes(n)) {
            alert('Valor inválido ou já encontrado na lista.');
        } else {
            listaNumeros.push(n);
            listaAdicao.innerHTML += `<option>Valor ${n} adicionado.</option>`;
        }
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }

    document.getElementById('num').value = null;
}

function maiorNumero(listaNumeros) {
    let maior = 0;

    for (let pos in listaNumeros) {
        if (listaNumeros[pos] > maior) {
            maior = listaNumeros[pos];
        }
    }

    return maior;
}

function menorNumero(listaNumeros) {
    let menor = 1000;

    for (let pos in listaNumeros) {
        if (listaNumeros[pos] < menor) {
            menor = listaNumeros[pos];
        }
    }

    return menor;
}

function somarNumeros(listaNumeros) {
    let soma = 0;

    for (let pos in listaNumeros) {
        soma += listaNumeros[pos];
    }

    return soma;
}

function mediaNumeros(listaNumeros) {
    let soma = somarNumeros(listaNumeros);

    return soma / listaNumeros.length;
}

function informarLista(listaNumeros) {
    if (listaNumeros.length === 0){
        alert('Adicione valores antes de finalizar!');
    } else {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML += `<p>Ao todo, temos ${listaNumeros.length} números cadastrado.</p>`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maiorNumero(listaNumeros)}.</p>`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menorNumero(listaNumeros)}.</p>`;
        resultado.innerHTML += `<p>Somando todos os valores, temos ${somarNumeros(listaNumeros)}.</p>`;
        resultado.innerHTML += `<p>A média dos valores digitados é ${parseInt(mediaNumeros(listaNumeros))}.</p>`;
    }
    
}