// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    // const {todoDetails} = this.props
    // const {updatedTitle} = this.state
    this.setState({editing: false})
    // Call a function to save updated title (not implemented in this code)
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li className="todo-item">
        {editing ? (
          <>
            <input
              className="edit-input"
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button
              className="save-button"
              onClick={this.handleSave}
              type="button"
            >
              Save
            </button>
          </>
        ) : (
          <div className="todo-items-list">
            <input
              className="input-checkbox"
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
            />
            <p className={todoDetails.completed ? 'title completed' : 'title'}>
              {todoDetails.title}
            </p>
            <button
              className="edit-btn"
              onClick={this.handleEdit}
              type="button"
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todoDetails.id)}
              type="button"
            >
              Delete
            </button>
          </div>
        )}
      </li>
    )
  }
}

export default TodoItem
