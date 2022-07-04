import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, title, completed, handleChange } = this.props;
    return (
      <li><input type="checkbox" checked={completed} onChange={() => handleChange(id)} /> {title}</li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
