import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from './slice';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.app.user);

  return (
    <div id="app">
      <div id="user-name">{user}</div>
      <input type="button" value="Get User" onClick={() => dispatch(getUser())} />
    </div>
  );
};

export default App;