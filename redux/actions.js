export const RESET = 'RESET';
export const INCREMENT = 'INCREMENT';

export const incrementNotifications = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: INCREMENT,
      });
      console.log(getState);
    } catch (error) {
      console.log(error);
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
      console.log(getState);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};