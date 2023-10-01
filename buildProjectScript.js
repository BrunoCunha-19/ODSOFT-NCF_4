const { exec } = require('child_process');

// Executa o comando "rimraf ./dist" usando npx
exec('npx rimraf ./dist', (error, stdout, stderr) => {
    if (error) {
        console.error('Erro ao executar rimraf:', error);
    } else {
        console.log('Pasta ./dist excluida com sucesso.');
        // Após a exclusão bem-sucedida, executa o comando "tsc" usando npx
        exec('npx tsc', (error, stdout, stderr) => {
            if (error) {
                console.error('Erro ao executar tsc:', error);
            } else {
                console.log('Compilacao com "tsc" concluida com sucesso.');
            }
        });
    }
});
