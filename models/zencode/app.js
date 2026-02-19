// app.js

// Carregar a biblioteca TensorFlow.js
import * as tf from '@tensorflow/tfjs';

// Função para treinar o modelo
async function trainModel() {
    // Exemplo simples de dados: (entradas e saídas)
    const trainingData = [
        { input: [1, 1], output: [2] },   // 1 + 1 = 2
        { input: [2, 2], output: [4] },   // 2 + 2 = 4
        { input: [3, 5], output: [8] },   // 3 + 5 = 8
        { input: [4, 7], output: [11] },  // 4 + 7 = 11
        { input: [6, 9], output: [15] },  // 6 + 9 = 15
    ];

    // Preparando os dados
    const inputs = trainingData.map(item => item.input);
    const outputs = trainingData.map(item => item.output);

    const inputTensor = tf.tensor2d(inputs);
    const outputTensor = tf.tensor2d(outputs);

    // Criar um modelo sequencial
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 10, activation: 'relu', inputShape: [2] }));
    model.add(tf.layers.dense({ units: 1 }));

    // Compilar o modelo
    model.compile({
        optimizer: 'adam',
        loss: 'meanSquaredError',
        metrics: ['mae'],
    });

    // Treinar o modelo
    await model.fit(inputTensor, outputTensor, { epochs: 100 });

    return model;
}

// Função para prever e gerar código
async function generateCode(inputValues) {
    const model = await trainModel();

    // Gerar o resultado da previsão
    const inputTensor = tf.tensor2d([inputValues]);
    const result = model.predict(inputTensor).dataSync()[0];

    // Gerar código de adição com base na previsão
    return `// Código gerado: ${inputValues[0]} + ${inputValues[1]} = ${result.toFixed(2)}`;
}

// Exemplo de uso: Gerar código para a soma de 5 e 7
generateCode([5, 7]).then(generatedCode => {
    console.log(generatedCode);  // Exemplo de saída: // Código gerado: 5 + 7 = 12.000
});

// Captura o clique do botão e gera o código
document.getElementById("generateCodeButton").addEventListener("click", function() {
    const inputCode = document.getElementById("inputCode").value;

    // Gera o código criativo com base na entrada
    generateCode(inputCode.split(' ').map(Number)).then(generatedCode => {
        // Exibe o código gerado
        document.getElementById("outputCode").textContent = generatedCode;
    });
});
