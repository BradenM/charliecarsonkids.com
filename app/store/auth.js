const userLogin = ({ user }, token) => {
  localStorage.setItem('token', JSON.stringify(token));
  return {
    ...user,
    token,
    isAuthed: true,
  };
};

const userLogout = ({ user }) => {
  localStorage.removeItem('token');
  return {
    ...user,
    token: null,
    isAuthed: false,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'userLogin':
      return userLogin(state, action.payload);
    case 'userLogout':
      return userLogout(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
