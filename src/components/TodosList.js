import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default TodoList;
