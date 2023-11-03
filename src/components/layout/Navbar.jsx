import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-whitePastel backdrop-blur-md flex py-3 md:px-0 px-2 md:justify-around justify-between text-whitePastel">
      <Link to="/">
        <h1 className="font-mono text-lg">SIMPLE CRUD</h1>
      </Link>
      <div>
        <Link to="/" className="px-5">
          Home
        </Link>
        <Link to="/create" className="md:px-5 px-2">
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
