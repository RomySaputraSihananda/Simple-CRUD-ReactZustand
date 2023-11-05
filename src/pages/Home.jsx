import Table from "../components/Table";
import { useEffect, useState } from "react";

const Home = () => {
  document.title = "romys | SIMPLE CRUD";
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`grid place-items-center w-full h-full transition-transform ${
        show ? "transform translate-x-0" : "transform -translate-x-full"
      } duration-500 ease-out`}
    >
      <Table />
    </div>
  );
};

export default Home;
