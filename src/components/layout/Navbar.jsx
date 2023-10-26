import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex py-3 md:justify-around justify-between text-whitePastel">
      <h1 className="font-mono text-lg">SIMPLE CRUD</h1>
      <div>
        <Link to="/" className="px-5">
          Home
        </Link>
        <Link to="/create" className="px-5">
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;