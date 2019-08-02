import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {



    render(){
        return this.props.todos.map((todo)=>(
          <TodoItem key={todo.id} todo2={todo} open={this.props.open} markComplete={this.props.markComplete} delTodo={this.props.delTodo} onOpenModal={this.props.onOpenModal} onCloseModal={this.props.onCloseModal}/>
        ));
    }
}

Todos.propTypes={
  todos: PropTypes.array.isRequired
}


export default Todos;