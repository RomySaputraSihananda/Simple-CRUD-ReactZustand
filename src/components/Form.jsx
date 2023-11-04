import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "./svg";
import useAppStore from "../config/zustand";
import styles from "../styles";
import user from "./../assets/user.jpg";

const kelamin = ["Laki-laki", "Perempuan", "Ikan"];
const jurusan = ["TKJ", "TKR", "TBSM", "ATPH", "APHP", "BDP"];
const agama = ["Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Konghucu"];
const template = {
  id: Date.now(),
  name: "",
  jenisKelamin: "",
  jurusan: "",
  tanggalLahir: "",
  agama: "",
  foto: user,
  katakata: "",
};
const Form = ({ title, oldData }) => {
  const [data, addData, setData] = useAppStore(
    (state) => [state.data, state.addData, state.setData],
    shallow
  );

  const [fields, setFields] = useState(oldData || template);

  const navigate = useNavigate();

  useEffect(() => {
    if (oldData) setFields(oldData);
  }, [oldData]);

  const handleUpdate = (data, { id }) => {
    const index = data.findIndex((e) => e.id === id);
    data[index] = fields;
    setData(data);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (oldData) return handleUpdate(data, oldData);
    addData(fields);
    return navigate("/");
  };

  const handleField = (e) => {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]:
        name === "foto"
          ? URL.createObjectURL(e.target.files[0])
          : e.target.value,
    });
  };

  const CheckBox = ({ value, cheked }) => {
    return (
      <div className="flex items-center">
        <input
          id={value}
          required
          type="radio"
          value={value}
          name="jenisKelamin"
          checked={cheked}
          className="w-4 h-4 bg-transparent border-gray-300"
          onChange={handleField.bind(this)}
        />
        <label
          htmlFor={value}
          className="ml-2 text-sm font-sm text-whitePastel"
        >
          {value}
        </label>
      </div>
    );
  };
  return (
    <div className="w-full max-w-lg flex relative">
      <div className="backdrop-blur-md w-[512px] h-[659px] border-t-[2px] border-r-[2px] border-whitePastel absolute -top-12 left-12 rounded-md hidden md:block"></div>
      <div className="backdrop-blur-lg w-[512px] h-[659px] border-t-[2px] border-r-[2px] border-whitePastel absolute -top-6 left-6 rounded-md hidden md:block"></div>
      <form
        action=""
        method="post"
        className="backdrop-blur-xl w-full max-w-lg md:px-10 py-5 rounded-md md:border-[2px] md:border-whitePastel shadow-md z-10"
        onSubmit={handleSubmit.bind(this)}
      >
        <h1 className="text-3xl font-semibold text-whitePastel mb-5 tracking-widest">
          {title}
        </h1>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label className={styles.label} htmlFor="name">
              Nama Lengkap
            </label>
            <input
              className="appearance-none text-sm block w-full bg-transparent text-whitePastel border border-blue-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-5"
              id="name"
              required
              type="text"
              name="name"
              autoComplete="off"
              spellCheck="false"
              placeholder="Romy Saputra Sihananda"
              value={fields?.name || ""}
              onChange={handleField.bind(this)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-5 px-3">
          <label className={styles.label} htmlFor="jenisKelamin">
            Jenis Kelamin
          </label>
          <div className="w-full inline-flex justify-around bg-transparent border border-blue-100 text-whitePastel py-3 rounded text-sm">
            {kelamin.map((e) => {
              return (
                <CheckBox
                  key={e}
                  value={e}
                  cheked={fields.jenisKelamin === e}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className={styles.label} htmlFor="grid-state">
              Agama
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-transparent border border-blue-100 text-whitePastel py-3 px-4 pr-8 rounded leading-tight focus:outline-none text-sm focus:bg-white focus:bg-opacity-5"
                id="grid-state"
                name="agama"
                value={fields?.agama || ""}
                required
                onChange={handleField.bind(this)}
              >
                <option value="" disabled className={styles.option}>
                  Agama
                </option>
                {agama.map((e) => (
                  <option key={e} className={styles.option}>
                    {e}
                  </option>
                ))}
              </select>
              <ArrowDown />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className={styles.label} htmlFor="grid-state">
              Jurusan
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-transparent border border-blue-100 text-whitePastel py-3 px-4 pr-8 rounded leading-tight focus:outline-none text-sm focus:bg-white focus:bg-opacity-5"
                id="grid-state"
                name="jurusan"
                value={fields?.jurusan || ""}
                required
                onChange={handleField.bind(this)}
              >
                <option value="" disabled className={styles.option}>
                  Jurusan
                </option>
                {jurusan.map((e) => (
                  <option key={e} className={styles.option}>
                    {e}
                  </option>
                ))}
              </select>
              <ArrowDown />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className={styles.label} htmlFor="grid-zip">
              TANGGAL LAHIR
            </label>
            <input
              className="appearance-none block w-full text-sm bg-transparent text-whitePastel border border-blue-100 rounded py-3 px-2 mb-3 leading-tight focus:outline-none dark:[color-scheme:dark] focus:bg-white focus:bg-opacity-5"
              id="grid-zip"
              name="tanggalLahir"
              required
              type="date"
              onChange={handleField.bind(this)}
              value={fields?.tanggalLahir || ""}
              min="2000-31-01"
              max="2010-01-31"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label className={styles.label} htmlFor="file_input">
              Upload Foto
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-whitePastel border border-blue-100 rounded mb-3 leading-tight focus:outline-none file:mr-4 file:py-2 file:bg-transparent file:border-none file:text-whitePastel file:rounded text-sm focus:bg-white focus:bg-opacity-5"
              id="file_input"
              name="foto"
              type="file"
              accept=".jpeg,.jpg,.png,.gif"
              onChange={handleField.bind(this)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label htmlFor="message" className={styles.label}>
              KATA-KATA MUTIARA
            </label>
            <textarea
              id="message"
              name="katakata"
              rows="4"
              spellCheck="false"
              className="appearance-none text-sm block w-full bg-transparent text-whitePastel border border-blue-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none resize-none focus:bg-white focus:bg-opacity-5"
              placeholder="Impian tidak dapat terwujud dengan sendirinya, akan tetapi impian akan datang ketika seseorang berusaha untuk meraihnya"
              value={fields?.katakata || ""}
              onChange={handleField.bind(this)}
            ></textarea>
          </div>
        </div>
        <div className="w-full grid place-items-center">
          <button
            type="submit"
            className="uppercase tracking-wide text-whitePastel text-sm font-semibold border border-blue-100 px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5"
          >
            {!oldData ? "Create" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
