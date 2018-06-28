import { ADD_REMINDER, DELETE_REMINDER, EDIT_REMINDER } from '../constants';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random(),
    isDisabled:true
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  return reminders;
}

const editById = (state = [], id) => {
  const reminders = [...state]
    reminders.forEach(reminder =>
    {
    if(reminder.id === id){
    reminder.isDisabled = !reminder.isDisabled
  }
});
  return reminders;
}


const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
      case EDIT_REMINDER:
        reminders = editById(state, action.id);
        return reminders;
    default:
      return state;
  }
}

export default reminders;
