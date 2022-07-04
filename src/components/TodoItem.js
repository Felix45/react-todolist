import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <li>{title}</li>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
