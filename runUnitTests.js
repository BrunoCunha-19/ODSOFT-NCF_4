const { exec } = require('child_process');

exec('jest', (error, stdout, stderr) => {
    if (error) {
        console.error('Error running "test" script:', error);
        process.exit(1); // Exit with a non-zero code to indicate an error
    } else {
        console.log('"test" script completed successfully.');
    }
});