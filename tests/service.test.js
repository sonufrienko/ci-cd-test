const { getHeroByName } = require('../service');

describe('getHeroByName', () => {
	test('Return correct data', async () => {
		const heroName = 'Tanos';
		const response = await getHeroByName(heroName);
		expect(response).toHaveProperty('name', heroName);
		expect(response).toHaveProperty('abilities');
	});

	test('Return correct error', async () => {
		const heroName = '';
		const response = await getHeroByName(heroName);
		expect(response).toBeUndefined();
	});
});