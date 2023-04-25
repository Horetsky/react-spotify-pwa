import React from 'react';
import { RouterProvider } from "react-router-dom"
// import { AppRouterProvider } from '../utils/router/provider';
import { AppRouterProvider } from '../router/provider'
import { useSelector } from 'react-redux';
// import Player from './../components/player/Player'
import './base.scss';

function App() {
  // const { player } = useSelector(state => state.player);

  return (
    <div className="App">
      <RouterProvider router={AppRouterProvider} />
      {/* {
        player ? <Player /> : null
      } */}
    </div>
  );
}

export default App;
