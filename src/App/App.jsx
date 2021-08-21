import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';

import { getUser } from './slice';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);

  return (
    <main className="app">
      <div>
        <h1>Hello World</h1>
      </div>
    </main>
  );
};

export default App;
