import React from 'react';
import TodoList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to the live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (todoId) => {
   
    this.setState(state => ({
        todos: state.todos.map((todo) => {
            if(todo.id === todoId) {
              return {...todo, completed: !todo.completed}
            }
            return todo;
        })
    }));
  }

  deleteItem = (todoId) => {
    this.setState(state => ({
      todos: state.todos.filter((todo) => todo.id !== todoId)
    }))
  }

  addItem = (title) => {
    this.setState((state) => ({
      todos: [...state.todos, {id: uuidv4(), title, completed: false}]
    }))
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <InputTodo addItem={this.addItem} />
        <ul>
          <TodoList
            todos={todos}
            handleChange={this.handleChange}
            deleteItem={this.deleteItem}
          />
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
