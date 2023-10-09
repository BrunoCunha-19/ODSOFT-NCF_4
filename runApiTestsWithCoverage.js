const { exec } = require('child_process');

exec('npm run cross-env NODE_ENV=development node scripts/db/delete && npm run cross-env NODE_ENV=development node scripts/db/create && npm run build && cross-env NODE_ENV=development dotenv -e .env sequelize db:migrate && jest --coverage --coverageReporters=\"html\" --runInBand --testPathPattern=api', (error, stdout, stderr) => {
    if (error) {
        console.error('Error running "test:api" script:', error);
        process.exit(1); // Exit with a non-zero code to indicate an error
    } else {
        console.log('"test:api" script completed successfully.');
    }
});