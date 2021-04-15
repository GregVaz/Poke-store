import React from 'react'

function Toolbar() {
  return (
    <nav className="navbar navbar-dark" style={{backgroundColor: "#B22222", height: '60px'}}>
      <h5 className="text-white m-0">
        <img src="pikachu.svg" width="30" height="30" className="d-inline-block align-top" alt="brand" />
        PokeStore
      </h5>
    </nav>
  );
}
export default Toolbar;
