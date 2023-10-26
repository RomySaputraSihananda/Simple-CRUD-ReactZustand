import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex py-3 md:justify-around justify-between text-whitePastel">
      <p>
        Copyright © 2023{" "}
        <Link
          to="https://github.com/RomySaputraSihananda"
          target="_blank"
          className="hover:text-blue-400 transition-all"
        >
          Romyyy
        </Link>
        . All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
