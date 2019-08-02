import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

export default class TodoItem extends Component {
    getStyle = () => {
            return {  
                backgroundColor: '#f4f4f4',
                padding: '10px', 
                borderBottom:'1px #ccc dotted',
                textDecoration:  this.props.todo2.completed ? 'line-through' : 'none'
            }
        }
    


    render() {
        const { id, title} = this.props.todo2;
        console.log(id);
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                { title }
                <button onClick={this.props.onOpenModal} style={btnStyle}>X</button>
                <Modal styles={{ modal: {width: "50%", textAlign: "center"}, overlay: {opacity: "0.2"} }}  open={this.props.open} onClose={this.props.onCloseModal} center>
                    <h2>Are you sure?</h2>
                    
                    <button onClick={this.props.delTodo.bind(this, id)} >Yes</button>
                </Modal>
                </p>
            </div>
        )
        
    }
}

TodoItem.propTypes={
    todos: PropTypes.object.isRequired
  }

  const btnStyle = {
      background: "#ff0000",
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '50%',
      cursor: 'pointer', 
      float: 'right'
  }