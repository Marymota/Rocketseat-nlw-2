import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {

    const users = [
        { name: 'Diego', age: 25},
        { name: 'Vini', age: 21 },
    ];

    return response.json(users);
});

app.listen(3333);