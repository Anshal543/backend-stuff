import { Todo } from '../models/todo.model.js';

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        res.status(200).json(todo)

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTodoforUpdate = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(todo)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { getTodos, createTodo, deleteTodo, getTodoforUpdate, updateTodo };