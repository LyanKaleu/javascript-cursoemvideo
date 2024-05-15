function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var anoNascimento = document.getElementById('txtano');
    var res = document.querySelector('div#resultado');

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoAtual) {
        window.alert('Verifique os dados e tente novamente!');
    } else {
        var sexo = document.getElementsByName('sexo');
        var idade = anoAtual - Number(anoNascimento.value);
        var genero = '';
        var img = document.createElement('img'); // Criar a tag img
        img.setAttribute('id', 'foto'); // Colocar o id na tag img

        if (sexo[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebe-m.png');
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovem-m.png');
            } else if (idade <= 60) {
                img.setAttribute('src', 'adulto-m.png');
            } else {
                img.setAttribute('src', 'idoso-m.png');
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher';

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebe-f.png');
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovem-f.png');
            } else if (idade <= 60) {
                img.setAttribute('src', 'adulto-f.png');
            } else {
                img.setAttribute('src', 'idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
