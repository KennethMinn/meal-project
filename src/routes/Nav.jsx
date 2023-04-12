import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className=" flex justify-between items-center">
        <Link to={'/'}>
          <h1>Nav Logo</h1>
        </Link>
        <div className=" flex gap-3 items-center">
          <NavLink to="/">Home</NavLink>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
