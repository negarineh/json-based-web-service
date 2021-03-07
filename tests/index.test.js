import 'regenerator-runtime/runtime'
import { filterShows } from '../server/controllers';
import sampleData from './mock-data/sample.json';
import sampleResponse from './mock-data/response.json';

describe('controller / index', () => {
    test('expect no throws', () => {
        expect.assertions(1);
        expect(async () => await filterShows(sampleData.payload)).not.toThrow();
    });

    test('responses to be correct', async () => {
        const results = await filterShows(sampleData.payload);

        expect(results.length).toBe(7);

        results.map((show, index) => expect(show).toStrictEqual(sampleResponse.response[index]));

        results.map((result) => expect(result.image).toBeTruthy());
        results.map((result) => expect(result.slug).toBeTruthy());
        results.map((result) => expect(result.title).toBeTruthy());
    });

    test('code to be executed in less than 400ms', async () => {
        expect.assertions(2);

        const startTime = process.hrtime();
        await filterShows(sampleData.payload);
        const [seconds, nanos] = process.hrtime(startTime);

        expect(seconds).toBe(0);
        expect(nanos / 1000 / 1000).toBeLessThan(400);
    });
});