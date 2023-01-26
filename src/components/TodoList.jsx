import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, toggleTodoComplete, removeTodo }) => {
    return (
        <ul>
            {todos.map(todo => <TodoItem toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} key={todo.id} {...todo} />)}
        </ul>
    )
}

export default TodoList;