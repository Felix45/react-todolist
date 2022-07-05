import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id, title, completed, handleChange, deleteItem,
    } = this.props;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChange(id)}
        />
        {' '}
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <button type="button" onClick={() => deleteItem(id)}>Delete</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TodoItem;
