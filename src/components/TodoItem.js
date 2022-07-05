import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  editItem = () => {
    this.setState({ editing: true });
  }

  handleEditDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const {
      id, title, completed, handleChange, deleteItem, handleEdit,
    } = this.props;

    const { editing } = this.state;

    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.editItem} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChange(id)}
          />
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
          <button type="button" onClick={() => deleteItem(id)}>Delete</button>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => handleEdit(e.target.value, id)}
          onKeyDown={this.handleEditDone}
        />
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
  handleEdit: PropTypes.func.isRequired,
};

export default TodoItem;
