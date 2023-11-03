import { useParams } from "react-router-dom";
import useAppStore from "../config/zustand";
import { useEffect, useState } from "react";
import Form from "./../components/Form";
import NotFound from "./NotFound";

const Update = () => {
  const { id } = useParams();
  const data = useAppStore((state) => state.data);

  const [update, setupdate] = useState({});

  document.title = "romys | Update Data";

  useEffect(() => {
    const [detail] = data.filter((e) => e.id == id);
    setupdate(detail);
  }, []);

  return (
    <>
      {!update ? (
        <NotFound />
      ) : (
        <div className="flex-1 grid place-items-center">
          <Form title="UPDATE DATA" oldData={update} />
        </div>
      )}
    </>
  );
};

export default Update;
