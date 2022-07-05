import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

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
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  }

  deleteItem = (todoId) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    }));
  }

  addItem = (title) => {
    this.setState((state) => ({
      todos: [...state.todos, { id: uuidv4(), title, completed: false }],
    }));
  }

  handleEdit = (newTitle, id) => {
    this.setState((state) => ({
      todos: [...state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle };
        }
        return todo;
      })],
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addItem={this.addItem} />
          <ul>
            <TodoList
              todos={todos}
              handleChange={this.handleChange}
              deleteItem={this.deleteItem}
              handleEdit={this.handleEdit}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoContainer;
