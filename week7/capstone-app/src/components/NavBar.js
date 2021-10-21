import React from 'react';
import {  Link } from "react-router-dom";



const NavBar = (props) => {

  return (
  <div>
    <ul>
      <Link to="/Home">
        <li>Home</li>
      </Link>

      <Link to="./SongsList">
        <li>Playlist</li>
      </Link>

      <Link to="/Instructions">
        <li>Instructions</li>
      </Link>
    </ul>
  </div>
  );
}
export default NavBar;