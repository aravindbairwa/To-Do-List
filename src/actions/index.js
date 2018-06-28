import { ADD_REMINDER, DELETE_REMINDER, EDIT_REMINDER } from '../constants';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  return action;
}

export const editReminder = (id) => {
  const action = {
    type: EDIT_REMINDER,
    id
    }
  return action;
}
