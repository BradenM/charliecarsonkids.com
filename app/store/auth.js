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

const userSignup = ({ user }, { email, firstName, lastName }) => ({
  ...user,
  token: null,
  isAuthed: null,
  profile: {
    email,
    firstName,
    lastName,
  },
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'userLogin':
      return userLogin(state, action.payload);
    case 'userLogout':
      return userLogout(state, action.payload);
    case 'userSignup':
      return userSignup(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
