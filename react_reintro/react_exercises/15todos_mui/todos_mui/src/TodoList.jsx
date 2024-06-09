import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from "@mui/material"

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if(!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos(prevTodos => {
      return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}]
    })
  }

  const removeTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter((todo) => todo.id !== id);
    })
  }

  const toggleTodo = (id) => {
    setTodos(prevTodos => {
      //? Map over all the existing todos, returning the same exact todos for most by making a new array copy, except for the one that matches the id passed into it. 
      return prevTodos.map(todo => {
        if (todo.id === id) {
          //? Return a copy of the todo but change the completed status to the opposite
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })
    })
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      m: 3
    }}>
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>Todos</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(todo => {
          return <TodoItem todo={todo} key={todo.id} 
          //? Approach #1 of passing a function to a child
          remove={removeTodo} 
          //? Approach #2 of passing a function to a child
          toggle={() => toggleTodo(todo.id)}/>
        })}
        <TodoForm addTodo={addTodo}/>
      </List>
    </Box>
  )
}