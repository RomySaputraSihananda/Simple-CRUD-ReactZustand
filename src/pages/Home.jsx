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
        show ? "transform translate-y-0" : "transform -translate-y-full"
      } duration-300 ease-in-out`}
    >
      <Table />
    </div>
  );
};

export default Home;
