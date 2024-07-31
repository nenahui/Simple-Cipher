const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const password = 'password';

app.get('/:url', (req, res) => {
	return res.send(req.params.url);
});

app.get('/encode/:text', ({params}, res) => {
  const encoded = Vigenere.Cipher(password).crypt(params.text);
  return res.send(encoded);
});

app.get('/decode/:text', ({params}, res) => {
  const decoded = Vigenere.Decipher(password).crypt(params.text);
  return res.send(decoded);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
