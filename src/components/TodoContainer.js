import React from 'react';
import TodoList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
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

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <ul>
          <TodoList todos={todos} handleChange={this.handleChange} />
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
