// app.jsH

// Função para gerar código com base na descrição do usuário
async function generateProgramCode(description) {
    // Processamento da descrição para criar a estrutura do código
    const lowerDesc = description.toLowerCase();

    // Se a descrição inclui "botão", "click", "animação", cria um exemplo interativo
    if (lowerDesc.includes("botão") && lowerDesc.includes("click")) {
        const htmlCode = `
            <button id="clickButton">Clique em mim</button>
            <script>
                document.getElementById("clickButton").addEventListener("click", function() {
                    alert('Você clicou no botão!');
                });
            </script>
        `;

        const cssCode = `
            button {
                background-color: #0ff;
                color: #121212;
                padding: 20px;
                font-size: 18px;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 0 10px #0ff;
            }

            button:hover {
                background-color: #fff;
                color: #0ff;
                box-shadow: 0 0 20px #0ff;
            }
        `;

        return { htmlCode, cssCode, jsCode: htmlCode };
    }
    
    // Caso contrário, se a descrição incluir "imagem", gera uma página simples
    if (lowerDesc.includes("imagem")) {
        const htmlCode = `
            <h1>Imagem Criada</h1>
            <img src="https://via.placeholder.com/300" alt="Imagem Exemplo" />
        `;

        const cssCode = `
            body {
                background-color: #121212;
                color: #fff;
                text-align: center;
            }

            img {
                border-radius: 15px;
                box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
                margin-top: 20px;
            }
        `;

        return { htmlCode, cssCode, jsCode: '' };
    }

    // Caso não encontre correspondência, retorna um template básico
    return {
        htmlCode: '<h1>Bem-vindo ao Gerador de Códigos</h1>',
        cssCode: '',
        jsCode: ''
    };
}

// Função que gera o código no clique do botão
document.getElementById("generateCodeButton").addEventListener("click", function() {
    const description = document.getElementById("inputCode").value;

    // Gerar o código com base na descrição do usuário
    generateProgramCode(description).then(({ htmlCode, cssCode, jsCode }) => {
        // Exibir o código gerado
        document.getElementById("outputCode").textContent = `HTML:\n${htmlCode}\n\nCSS:\n${cssCode}\n\nJS:\n${jsCode}`;
    });
});
