import request from 'supertest';
import app from '../../src/app';

import Student from '../../src/app/models/Student';

describe('Student', () => {
    it('should be able to register a student', async () => {
        const student = await Student.create({
            name: 'Lucas Lacroix',
            email: 'lucas-lacroix@hotmail.com',
            age: 23,
            weight: 69.0,
            height: 1.79,
        });

        expect(student).toHaveProperty('id');
    });

    it('when using the post method on route /student it should be possible to register a student', async () => {
        const response = await request(app)
            .post('/students')
            .send({
                name: 'Lucas Lacroix',
                email: 'lucas-lacroix@hotmail.com',
                age: 23,
                weight: 69.0,
                height: 1.79,
            });

        expect(response.body).toHaveProperty('id');
    });
});
