import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos, handleChange, deleteItem } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            completed={todo.completed}
            title={todo.title}
            handleChange={handleChange}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default TodoList;
