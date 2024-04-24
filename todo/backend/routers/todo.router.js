import express from 'express';
import { createTodo, getTodos, deleteTodo,  getTodoforUpdate,updateTodo } from '../controllers/todo.controller.js';

const router = express.Router();

router.get('/',getTodos);
router.post('/',createTodo);
router.delete('/:id',deleteTodo);
router.get('/update/:id',getTodoforUpdate);
router.put('/:id',updateTodo)

export default router;