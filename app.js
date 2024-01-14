const express = require('express');
const shell = require('shelljs');
const app = express();

app.post('/', async (req, res) => {

    // Notes : chmod +x [dir]
    const dir = "[fill]/script.sh";
    shell.exec(dir);
    return;

});

app.listen(3001);