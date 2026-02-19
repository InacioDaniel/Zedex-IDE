// app.js

// Função para carregar dados do treino.json
function loadTrainingData() {
    return fetch('treino.json')
        .then(response => response.json())
        .catch(error => console.error('Erro ao carregar treino.json:', error));
}

// Função para gerar código com base no input dado
async function generateCodeFromModel(inputCode) {
    const trainingData = await loadTrainingData();
    
    // Simulação simples de geração de código
    let generatedCode = '';

    // Tente encontrar algo semelhante no treino.json
    for (let example of trainingData) {
        if (inputCode.includes(example.input)) {
            generatedCode = example.output;
            break;
        }
    }

    if (!generatedCode) {
        // Caso não haja correspondência, retornamos um código básico
        generatedCode = `// Código gerado com base em: ${inputCode}\nconsole.log("Olá, Mundo!");`;
    }

    return generatedCode;
}

// Captura o clique do botão e gera o código
document.getElementById("generateCodeButton").addEventListener("click", function() {
    const inputCode = document.getElementById("inputCode").value;

    // Gera o código com base na entrada
    generateCodeFromModel(inputCode).then(generatedCode => {
        // Exibe o código gerado
        document.getElementById("outputCode").textContent = generatedCode;
    });
});
