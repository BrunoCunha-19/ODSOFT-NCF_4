const { exec } = require('child_process');

exec('npx jest --coverage --coverageReporters=\"text\" --coverageReporters=\"html\" --coverageReporters=\"json\"', (error, stdout, stderr) => {
    if (error) {
        console.error('Error running "testWithCoverage" script:', error);
        process.exit(1); // Exit with a non-zero code to indicate an error
    } else {
        console.log('"test" script completed successfully.');
    }
});