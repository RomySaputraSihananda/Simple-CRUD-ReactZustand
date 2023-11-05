import { useEffect, useState } from "react";
import Form from "../components/Form";

const Create = () => {
  document.title = "romys | Create Data";

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`grid place-items-center h-full w-full ${
        show
          ? "transform translate-x-0 transition"
          : "transform -translate-x-full transition"
      } duration-500 ease-out`}
    >
      <Form title="CREATE DATA" />
    </div>
  );
};

export default Create;
