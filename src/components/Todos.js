import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTyeps from "prop-types";

export class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        dellTodo={this.props.dellTodo}
      />
    ));
  }
}

//Proptyps
Todos.propTypes = {
  todos: PropTyeps.array.isRequired,
  markComplete: PropTyeps.func.isRequired,
  dellTodo: PropTyeps.func.isRequired

};

export default Todos;
