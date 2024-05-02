import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import todoRouter from './routers/todo.router.js';
import userRouter from './routers/user.router.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: './.env'
});

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))  
app.use("/application", userRouter)
app.use('/todos', todoRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        sucess: false,
        message: message

    });
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:5000');
});
































/*
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,

}));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const todos = [
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: false },
]

app.get('/', (req, res) => {
    res.send(todos);
});

app.post('/', (req, res) => {
    const {title} = req.body;
    const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false,
    };
    todos.push(newTodo);
    res.send(newTodo);
});

// Toggle completion status of a todo
app.patch('/:id/toggle', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        res.send(todo);
    } else {
        res.status(404).send({ message: 'Todo not found' });
    }
});

// Update a todo's title
app.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.title = title;
        res.send(todo);
    } else {
        res.status(404).send({ message: 'Todo not found' });
    }
});

// Delete a todo
app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.filter(t => t.id === id);
    if (index >= 0) {
        todos.splice(index, 1);
        res.send({ message: 'Todo deleted' });
    } else {
        res.status(404).send({ message: 'Todo not found' });
    }
});

*/