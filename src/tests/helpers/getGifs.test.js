import {getGifs} from '../../helpers/getGifs';

describe('Test helper getGifs() Fetch', () => {

    test('should return 10 elements', async() => {
        const {gifs} = await getGifs('Simpsons');
        expect(gifs.length).toBe(20);
    })

    test('should return 0 elements', async() => {
        const {gifs} = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})
