const { exec } = require('child_process');
const fs = require('fs');

// Nome da pasta de saída
const outputDir = 'docs/JSDoc';

// Verifique se a pasta 'Jsdoc' já existe e, se existir, remove
if (fs.existsSync(outputDir)) {
  fs.rmdirSync(outputDir, { recursive: true });
}

// Executa o comando JSDoc para gerar a documentação
exec('jsdoc -c jsdoc-config.json', (error, stdout, stderr) => {
    if (error) {
        console.error('Erro ao gerar a documentacao:', error);
    } else {
        console.log('Documentacao gerada com sucesso.');
    }
});
