import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const { addItem } = this.props;
    if (title.trim()) {
      addItem(title);
      this.setState({ title: '' });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          name="title"
          placeholder="Add to-do..."
          value={title}
          onChange={this.handleInput}
        />
        <input type="submit" className="input-submit" onClick={() => this.handleSubmit} />
      </form>
    );
  }
}

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default InputTodo;
