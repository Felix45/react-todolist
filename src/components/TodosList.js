import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      todos, handleChange, deleteItem, handleEdit,
    } = this.props;
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
            handleEdit={handleEdit}
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
  handleEdit: PropTypes.func.isRequired,
};

export default TodoList;
