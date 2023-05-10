import React from 'react';
import { RouterProvider } from "react-router-dom"
import { AppRouterProvider } from '../router/provider'

import { Player, UxMessage } from '../modules';

import './base.scss';

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRouterProvider} />
      <Player />
      <UxMessage />
    </div>
  );
}

export default App;
