// app.js

// Função para carregar dados do treino.json
async function loadTrainingData() {
    const response = await fetch('treino.json');
    const data = await response.json();
    return data;
}

// Função para gerar código de maneira criativa
async function generateCreativeCode(inputCode) {
    const trainingData = await loadTrainingData();

    // Vamos gerar um código criativo com base no estilo do input
    const randomIndex = Math.floor(Math.random() * trainingData.length);
    const randomExample = trainingData[randomIndex];

    // Criamos uma base de código que altera aleatoriamente variáveis e estrutura
    let generatedCode = `// Código baseado em seu pedido: ${inputCode}\n`;

    // Variáveis que podem ser alteradas aleatoriamente
    const functions = ['soma', 'multiplica', 'divide', 'subtrai'];
    const variables = ['a', 'b', 'x', 'y', 'z'];

    const func = functions[Math.floor(Math.random() * functions.length)];
    const var1 = variables[Math.floor(Math.random() * variables.length)];
    const var2 = variables[Math.floor(Math.random() * variables.length)];

    generatedCode += `function ${func}(${var1}, ${var2}) {\n`;
    generatedCode += `  return ${var1} ${randomExample.output.includes('*') ? '*' : '+'} ${var2};\n`;
    generatedCode += '}\n\n';

    // Se não encontrar algo muito específico, gera um código básico
    if (!generatedCode) {
        generatedCode = `// Código gerado com base em: ${inputCode}\nconsole.log("Olá, Mundo!");`;
    }

    return generatedCode;
}

// Captura o clique do botão e gera o código
document.getElementById("generateCodeButton").addEventListener("click", function() {
    const inputCode = document.getElementById("inputCode").value;

    // Gera o código criativo com base na entrada
    generateCreativeCode(inputCode).then(generatedCode => {
        // Exibe o código gerado
        document.getElementById("outputCode").textContent = generatedCode;
    });
});
