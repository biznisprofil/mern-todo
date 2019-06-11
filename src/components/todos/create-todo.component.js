import React, { Component } from "react";

export default class CreateTodo extends Component {
  state = {
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: false,
    priorityOptions: [
      {
        id: "priorityLow",
        value: "Low",
        name: "Low"
      },
      {
        id: "priorityMedium",
        value: "Medium",
        name: "Medium"
      },
      {
        id: "priorityHigh",
        value: "High",
        name: "High"
      }
    ]
  };

  onChangeTodoDescription = e => {
    this.setState({
      todo_description: e.target.value
    });
  };

  onChangeTodoResponsible = e => {
    this.setState({
      todo_responsible: e.target.value
    });
  };

  onChangeTodoPriority = e => {
    this.setState({
      todo_priority: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>

          <Priority
            onChangeTodoPriority={this.onChangeTodoPriority}
            priorityOptions={this.state.priorityOptions}
            todo_priority={this.state.todo_priority}
          />

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

const Priority = ({ priorityOptions, todo_priority, onChangeTodoPriority }) => {
  return (
    <div className="form-group">
      {priorityOptions.map(p => {
        return (
          <div className="form-check form-check-inline" key={p.id}>
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id={p.id}
              value={p.value}
              checked={todo_priority === p.name}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">{p.name}</label>
          </div>
        );
      })}
    </div>
  );
};
