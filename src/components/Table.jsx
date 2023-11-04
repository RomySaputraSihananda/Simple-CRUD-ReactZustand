import { Link } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useState } from "react";
import { Delete, Detail, Edit } from "./svg";
import useAppStore from "./../config/zustand";
import FlashMsg from "./../components/FlashMsg";

const header = ["No", "Foto", "Nama", "Jurusan", "Action"];

const Table = () => {
  const [data, setData] = useAppStore(
    (state) => [state.data, state.setData],
    shallow
  );

  const [message, setMessage] = useState("");

  const deleted = (id, name) => {
    const valid = confirm("Yakin ?");
    if (!valid) return;
    const newData = data.filter((e) => e.id !== id);
    setData(newData);
    return setMessage(`data ${name} berhasil dihapus`);
  };
  console.log(message);
  const deletedAll = () => {
    setData([]);
  };

  return (
    <div className="w-full flex-1 grid place-items-center py-20">
      <div className="h-[70vh] xl:w-[50%] md:w-[80%] relative">
        <div className="backdrop-blur-md h-full w-full border-r-[2px] border-t-[2px] absolute -top-12 -right-12 rounded-md hidden md:block"></div>
        <div className="backdrop-blur-lg h-full w-full border-r-[2px] border-t-[2px] absolute -top-6 -right-6 rounded-md hidden md:block"></div>
        <div className="backdrop-blur-xl flex absolute flex-col overflow-y-auto bg-transparent h-full w-full p-5 text-whitePastel rounded-md md:border-[2px] md:border-whitePastel shadow-md">
          {/* {message && <FlashMsg message={message} />} */}
          <h1 className="text-3xl font-semibold text-whitePastel mb-5 tracking-widest sticky top-0">
            Data Siswa
          </h1>
          {data.length === 0 ? (
            <div className="flex-1 w-full grid place-items-center">
              <h1 className="md:text-5xl text-2xl font-semibold">
                Data Kosong !!
              </h1>
            </div>
          ) : (
            <div className="px-6 w-full z-10">
              <table className="w-full table-auto text-sm overflow-scroll">
                <thead className="sticky top-12">
                  <tr className="text-sm leading-normal text-left">
                    {header.map((e) => {
                      return (
                        <th
                          key={e}
                          className="py-2 px-4 bg-grey-lightest font-bold uppercase text-lg text-grey-light border-b border-grey-light"
                        >
                          {e}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="overflow-y-scroll">
                  {data.map((e, i) => {
                    return (
                      <tr key={e.id} className="hover:bg-grey-lighter w-full">
                        <td className="py-2 px-4 border-b border-grey-                    ">
                          <p className="text-lg">{i + 1}</p>
                        </td>
                        <td className="py-2 px-4 border-b border-grey-light">
                          <img
                            src={e.foto}
                            alt={`avatar ${e.name}`}
                            className="rounded-full h-16 w-16 object-contain"
                          />
                        </td>
                        <td className="py-2 px-4 border-b border-grey-light">
                          {e.name}
                        </td>
                        <td className="py-2 px-4 border-b border-grey-light">
                          {e.jurusan}
                        </td>
                        <td className="py-2 px-4 border-b border-grey-light">
                          <div className="flex justify-between">
                            <Link to={`/update/${e.id}`}>
                              <Edit />
                            </Link>
                            <Link to={`/detail/${e.id}`}>
                              <Detail />
                            </Link>
                            <Link to="" onClick={() => deleted(e.id, e.name)}>
                              <Delete />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* <div className="text-right mt-4">
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded absolute bottom-0 right-0 m-3"
                onClick={() => deletedAll()}
              >
                Delete All
              </button>
            </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
