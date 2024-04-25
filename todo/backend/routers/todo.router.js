import express from 'express';
import { createTodo, getTodos, deleteTodo,  getTodoforUpdate,updateTodo,getFilterTodos } from '../controllers/todo.controller.js';

const router = express.Router();

router.get('/',getTodos);
router.post('/',createTodo);
router.delete('/:id',deleteTodo);
router.get('/update/:id',getTodoforUpdate);
router.put('/:id',updateTodo)
router.get("/category",getFilterTodos)

export default router;