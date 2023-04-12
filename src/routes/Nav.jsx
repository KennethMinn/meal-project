import { useContext } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { SearchContext } from '../contexts/search-context';

const Nav = () => {
  const { setSearchField } = useContext(SearchContext);
  const changeHandler = e => {
    const value = e.target.value.toLowerCase();
    setSearchField(value);
    console.log(value);
  };
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
              onChange={changeHandler}
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
