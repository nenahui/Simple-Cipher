const express = require('express');
const app = express();
const port = 8000;

app.get('/:url', (req, res) => {
	return res.send(req.params.url);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});