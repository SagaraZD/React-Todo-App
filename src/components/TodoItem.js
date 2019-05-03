import React, { Component } from "react";
import PropTyeps from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  btStyle = () => {
    return {
      background: "#ccc",
      padding: "5px 10px",
      boarder: "none",
      float: "right",
      cursor: "pointer"
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkBox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            style={this.btStyle()}
            onClick={this.props.dellTodo.bind(this, id)}
          >
            {" "}
            X{" "}
          </button>
        </p>
      </div>
    );
  }
}
//Proptyps
TodoItem.propTypes = {
  todo: PropTyeps.object.isRequired,
  markComplete: PropTyeps.func.isRequired,
  dellTodo: PropTyeps.func.isRequired,
};

export default TodoItem;
