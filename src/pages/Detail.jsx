import { useParams } from "react-router-dom";
import useAppStore from "../config/zustand";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const data = useAppStore((state) => state.data);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const [detail] = data.filter((e) => e.id == id);
    setDetail(detail);
  }, []);

  return (
    <>
      {!detail ? (
        "Id Not Found"
      ) : (
        <div className="flex-1 text-whitePastel">
          <h1>{detail.name}</h1>
          <img
            src={detail.foto}
            alt={`avatar ${detail.name}`}
            className="w-[300px] rounded-full"
          />
          <p>{detail.katakata}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
