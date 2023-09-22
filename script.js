// Número de linhas desejado
const numeroLinhas = 4;

// Loop externo para controlar o número de linhas
for (let i = 1; i <= numeroLinhas; i++) {
    let linha = '';

    // Loop interno para imprimir os caracteres na linha atual
    for (let j = 1; j <= 5; j++) {
        linha += '#';
    }

    // Exibe a linha atual
    console.log(linha);
}
