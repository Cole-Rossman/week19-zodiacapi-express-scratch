const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../data/signs');

describe('zodiac sign routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return a list of zodiac signs with id and name', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return the detail of a zodiac sign', async () => {
    const res = await request(app).get('/zodiac/1');
    const aquarius =  {
      id: "1",
      name: "aquarius",
      dates: "Jan 21 - Feb 19",
      symbol: "Water Bearer"
      };
      expect(res.body).toEqual(aquarius);
  });

  afterAll(() => {
    pool.end();
  });
});
