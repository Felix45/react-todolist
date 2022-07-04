import React from "react";

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.title.trim()) {
      this.props.addItem(this.state.title);
      this.setState({ title: "" })
    } 
  }

  render() {
    const {title} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Add to-do..." value={title} onChange={this.handleInput}/>
        <input type="submit" onClick={() => this.handleSubmit}/>
      </form>
    )
  }
}

export default InputTodo;