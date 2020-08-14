const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI');
const axios = require('axios');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
	res.sendFile('dist/index.html');
});

app.get('/test', (req, res) => {
	res.send(mockAPIResponse);
});

app.listen(8081, function () {
	console.log('Example app listening on port 8081!');
});

app.post('/analysis', (req, res, next) => {
	req.body = {
		method: 'POST',
		url: `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=auto`,
		headers: {},
		maxRedirects: 20,
	};
	next();
});

app.post('/analysis', (req, res) => {
	axios(req.body)
		.then((response) => res.send(response.data))
		.catch((err) => res.send(err));
});

module.exports = app;
