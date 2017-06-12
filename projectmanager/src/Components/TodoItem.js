import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
  	//console.log(this.props);
    return (
      <li className="Projects">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.propTypes = {
   todo: PropTypes.object,
}

export default TodoItem;