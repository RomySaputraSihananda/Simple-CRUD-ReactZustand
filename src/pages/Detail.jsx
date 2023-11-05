import { useParams } from "react-router-dom";
import useAppStore from "../config/zustand";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Card from "../components/Card";

const Detail = () => {
  const { id } = useParams();
  const data = useAppStore((state) => state.data);
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);

  document.title = "romys | Detail Data";
  useEffect(() => {
    const [detail] = data.filter((e) => e.id == id);
    setDetail(detail);
    setShow(true);
  }, []);

  return (
    <div
      className={`flex-1 text-whitePastel grid place-items-center ${
        show
          ? "transform translate-x-0 transition"
          : "transform -translate-x-full transition"
      } duration-500 ease-out`}
    >
      {!detail ? <NotFound /> : <Card detail={detail} />}
    </div>
  );
};

export default Detail;
