const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'Includes')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Includes', 'index.html', 'bible.html', 'contact.html', 'fbdl.html', 'herugpt3.html', 'herugpt4.html', 'gemma.html', 'llama.html', 'qwen.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
