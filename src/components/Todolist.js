import React, { useState } from 'react';
import Todotable from './Todotable';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';




function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([{desc: todo.desc, date: todo.date}, ...todos]);
        setTodo({desc: '', date: ''});
    }

    const columns = [{
        Header: 'Date',
        accessor: 'date'
    }, {
        Header: 'Description',
        accessor: 'desc'
    }, {
        Cell: ({index}) => <Button color="default" startIcon={<DeleteIcon />} onClick={() => deleteTodo(index)}></Button>
    }]

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => index !== row));
    }

    return (
        <div>
       <TextField style={{marginRight: 10}} label="Description" name="desc" value={todo.desc} onChange={inputChanged}/>
       <input type="date" name="date" value={todo.date} onChange={inputChanged} />
       <Tooltip title="Add todo">
        <IconButton color="primary" startIcon={<AddIcon />} onClick={addTodo}><AddCircleIcon fontSize="large"/></IconButton>
        </Tooltip>
        <ReactTable data={todos} columns={columns} defaultPageSize="10" />
        </div>
    );
}

export default Todolist;