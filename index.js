const app = require('express')();
const bodyParser = require('body-parser');
const { getHeroByName } = require('./service');

const PORT = 4000;
const { NODE_ENV } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Healthcheck: GET /
 */
app.get('/', (req, res) => res.status(200).send('ok'));

/**
 * GET /hero/tanos
 */
app.get('/hero/:name', async (req, res) => {
    const response = await getHeroByName(req.params.name);
    res.status(response ? 200 : 404).send(response);
})

if (NODE_ENV !== 'test') {
	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`);
	});
}

module.exports = app;