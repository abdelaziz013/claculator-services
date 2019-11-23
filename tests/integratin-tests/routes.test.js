
const request = require('supertest');
const app = require('../../app')
const port = 3000

let server;

describe('api/', () => {

    beforeEach(() => { server = app.listen(port, () => console.log(`Server running on port ${port} 🔥`)) });
    afterEach(() => { server.close(); });


    describe('get/', () => {
        it('should return sum of two numbers passed as query parameter', async () => {
            const res = await request(server).get('/api/get-sum/?firstNum=6&secondNum=8');
            expect(res.status).toBe(200);
            expect(res.body.total).toBe(14);

        })

        it('should throw an error if query not a number', async () => {
            const res = await request(server).get('/api/get-sum/?firstNum=6&secondNum=a');
            expect(res.status).toBe(406);

        })
    })

    describe('post/', () => {
        it('it should send average of list of numbers', async () => {
            const res = await request(server)
                .post('/api/post-average')
                .send([1, 2, 3])
            expect(res.status).toBe(200)
            expect(res.body.average).toBe("2.00")
        })

        it('it should throw error if you pass falsy value', async () => {
            const res = await request(server)
                .post('/api/post-average')
                .send(['', 0, 'ki'])
            expect(res.status).toBe(406)

        })
    })


})