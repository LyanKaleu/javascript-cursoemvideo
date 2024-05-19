function calcular() {
    let num = Number(document.getElementById('num').value);
    let tabuada = document.getElementById('tabuada');

    if (document.getElementById('num').value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        tabuada.innerHTML = '';
        for (let i = 1; i <= 10; i++) {
        tabuada.innerHTML += `<option>${num} x ${i} = ${num * i}</option> <br>`;
    }
    }
}