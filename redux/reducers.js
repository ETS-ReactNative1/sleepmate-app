import initialState from './initialState';
import { INCREMENT, RESET } from './actions'

export default function reducer(state = initialState, action) {
  const incrementNotifCount = (state, action) => {
    let notificationCount = state.notificationCount;
    return {
      ...state,
      notificationCount: notificationCount + 1
    };
  }

  const resetNotifCount = (state, action) => {
    return {
      ...state,
      notificationCount: 0
    }
  }
  switch (action.type) {
    case INCREMENT:
      return incrementNotifCount(state, action);
    case RESET:
      return resetNotifCount(state, action);
  }
  return state;
}
