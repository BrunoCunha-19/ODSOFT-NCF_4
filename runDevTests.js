const { exec } = require('child_process');

exec('jest --watchAll', (error, stdout, stderr) => {
    if (error) {
        console.error('Error running "test:dev" script:', error);
        process.exit(1); // Exit with a non-zero code to indicate an error
    } else {
        console.log('"test:dev" script completed successfully.');
    }
});