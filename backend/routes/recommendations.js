const express = require('express');
const { PythonShell } = require('python-shell');
const router = express.Router();

router.post('/recommend', (req, res) => {
    const { userId } = req.body;

    const options = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: '../notebooks/', // Path to your Google Colab notebooks
        args: [userId],
    };

    PythonShell.run('RecModel.py', options, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ recommendations: results });
    });
});

module.exports = router;
