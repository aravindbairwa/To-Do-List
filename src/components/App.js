import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, editReminder } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isTextBoxDisabled:{}
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  editReminder(id) {
    this.props.editReminder(id);
  }
  renderReminders() {
    const { reminders } = this.props;
    return (
      <div className="list-group width">
        {
          reminders.map(reminder => {
            return (
              <div className="template" key="dsfnd">
                <div className="list-item col-sm-8">
                <input key={reminder.id} className="form-control" disabled={(reminder.isDisabled)? "disabled" : "" } type="text" defaultValue={reminder.text} />
                </div>

              <button
                onClick={() => this.editReminder(reminder.id)}
                  key={reminder.id}
                 className="list-item btn btn-primary">Edit</button>
              <button
                className="list-item btn btn-danger"
                onClick={() => this.deleteReminder(reminder.id)} >Completed</button>
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Personal To-Do List
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to...."
              onChange={event => this.setState({text: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
            >
              Add Reminder
            </button>
        </div>
        { this.renderReminders() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, editReminder })(App);
