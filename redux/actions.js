export const RESET = 'RESET';
export const INCREMENT = 'INCREMENT';

export const incrementNotifications = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: INCREMENT,
      });
    } catch (error) {
      throw error;
    }
  };
}
export const clearNotifications = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: RESET,
      });
    } catch (error) {
      throw error;
    }
  };
};