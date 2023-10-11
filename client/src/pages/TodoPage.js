import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';
import { getTasks, createTask, deleteTask } from '../api/taskApi';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';

const TodoPage = (props) => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
            getTasks()
            .then(result => {
                setTodos(result.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const getNewTd = (data) => {
        createTask({
            status: 'new',
            ...data
        })
        .then(({data: createdTask}) => {
            const newTodo = [...todos, createdTask];
            setTodos(newTodo);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const delTask = (id) => {
        deleteTask(id)
        .then(({data: deletedTask}) => {
            const updatedTask = todos.filter(td => td._id !== deletedTask._id);
            setTodos(updatedTask);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm sendData={getNewTd} />
            <TodoList todos={todos} delCallback={delTask} />
        </div>
    );
}

export default TodoPage;
