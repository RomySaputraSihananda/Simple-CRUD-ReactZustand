const Delete = () => {
  return (
    <div title="Delete">
      <svg
        className="fill-current h-4 w-4 hover:fill-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
      </svg>
    </div>
  );
};

const Detail = () => {
  return (
    <div title="Detail">
      <svg
        className="fill-current h-4 w-4 hover:fill-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        title="Detail"
      >
        <path d="M17 18c.56 0 1 .44 1 1s-.44 1-1 1-1-.44-1-1 .44-1 1-1m0-3c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5a2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5 2.5 2.5 0 01-2.5 2.5m-7.86-1.75L8.85 19l.29-.74C10.43 15.06 13.5 13 17 13c1.05 0 2.06.21 3 .56V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 002 2h4.5c-.55-.66-1-1.42-1.36-2.25M13 3.5L18.5 9H13V3.5z" />
      </svg>
    </div>
  );
};

const Edit = () => {
  return (
    <div title="Edit">
      <svg
        className="fill-current h-4 w-4 hover:fill-green-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        title="Edit"
      >
        <path d="M16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
      </svg>
    </div>
  );
};

const ArrowDown = () => {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-whitePastel">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  );
};

const Gender = ({ gender }) => {
  if (gender === "Laki-laki") {
    return (
      <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
        <svg
          className="stroke-current fill-none h-4 w-4"
          strokeWidth={2}
          viewBox="0 0 20 20"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M15 14 A5 5 0 0 1 10 19 A5 5 0 0 1 5 14 A5 5 0 0 1 15 14 z" />
          <path d="M19 5l-5.4 5.4M19 5h-5M19 5v5" />
        </svg>
      </div>
    );
  } else if (gender === "Perempuan") {
    return (
      <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
        <svg
          className="stroke-current fill-none h-4 w-4"
          strokeWidth={2}
          viewBox="0 0 20 20"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M17 9 A5 5 0 0 1 12 14 A5 5 0 0 1 7 9 A5 5 0 0 1 17 9 z" />
          <path d="M12 14v7M9 18h6" />
        </svg>
      </div>
    );
  } else {
    return (
      <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
        <svg className="fill-current h-4 w-4" viewBox="0 0 576 512">
          <path d="M180.5 141.5C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8 4.7 9.2 4.7 20.1 0 29.3-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-16.2-13.7-30.5-28.5-42.7-43.1l-89.7 52.2c-12.5 7.3-28.4 5.3-38.7-4.9s-12.4-26-5.2-38.6L50 256 4.2 175.9c-7.2-12.6-5-28.4 5.3-38.6s26.1-12.2 38.7-4.9l89.7 52.3c12.2-14.6 26.5-29.4 42.7-43.1zM448 256c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z" />
        </svg>
      </div>
    );
  }
};

const Jurusan = ({ type }) => {
  switch (type) {
    case "Developer":
      return (
        <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
          <svg className="fill-current h-4 w-4" viewBox="0 0 15 15">
            <path d="M10.478 1.647a.5.5 0 10-.956-.294l-4 13a.5.5 0 00.956.294l4-13zM4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" />
          </svg>
        </div>
      );
    case "TKJ":
      return (
        <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
          <svg className="fill-current h-4 w-4" viewBox="0 0 15 15">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 012 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z" />
          </svg>
        </div>
      );
    case "TKR":
      return (
        <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M13 16.18c.5.17.9.45 1.23.82H15v4h-.79c-.32.35-.71.63-1.21.8-1.15.42-2.42.07-3.22-.8H9v-4h.77c.33-.37.73-.65 1.23-.82V12h2v4.18M12 20a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1m5-16h-2v1h2v6H7V5h2V4H7V2h10v2m-5 5a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1z" />
          </svg>
        </div>
      );
    case "TBSM":
      return (
        <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
          <svg className="fill-current h-4 w-4" viewBox="0 0 23 23">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M8.365 10L11.2 8H17v2h-5.144L9 12H2v-2h6.365zm.916 5.06l2.925-1.065.684 1.88-2.925 1.064a4.5 4.5 0 11-.684-1.88zM5.5 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm13 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM4 11h6l2.6-1.733.28-1.046 1.932.518-1.922 7.131-1.822-.888.118-.44L9 16l-1-2H4v-3zm12.092-5H20v3h-2.816l1.92 5.276-1.88.684L15.056 9H15v-.152L13.6 5H11V3h4l1.092 3z" />
          </svg>
        </div>
      );
    case "ATPH":
      return (
        <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
          <svg className="fill-current h-4 w-4" viewBox="0 0 15 15">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 2a7 7 0 016.197 3.741A6.49 6.49 0 0117.5 3H21v2.5a6.5 6.5 0 01-6.5 6.5H13v1h5v7a2 2 0 01-2 2H8a2 2 0 01-2-2v-7h5v-2H9a7 7 0 01-7-7V2h4zm10 13H8v5h8v-5zm3-10h-1.5A4.5 4.5 0 0013 9.5v.5h1.5A4.5 4.5 0 0019 5.5V5zM6 4H4a5 5 0 005 5h2a5 5 0 00-5-5z" />
          </svg>
        </div>
      );
    case "APHP":
      return (
        <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
          <svg className="fill-current h-4 w-4" viewBox="0 0 15 15">
            <path d="M240 144c0-53-43-96-96-96s-96 43-96 96 43 96 96 96 96-43 96-96zm44.4 32c-14.5 64.1-71.9 112-140.4 112C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16h104c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16h-71.8zM144 208c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm256 32c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352h224v112c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h128c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-80c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v32h16zM24 464h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
        </div>
      );
    case "BDP":
      return (
        <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
          <svg className="fill-current h-4 w-4" viewBox="0 0 15 15">
            <path d="M312 24v10.5c6.4 1.2 12.6 2.7 18.2 4.2 12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5-7.3-.1-14.7 1.7-19.4 4.4-2.1 1.3-3.1 2.4-3.5 3-.3.5-.7 1.2-.7 2.8v.6c.2.2.9 1.2 3.3 2.6 5.8 3.5 14.4 6.2 27.4 10.1l.9.3c11.1 3.3 25.9 7.8 37.9 15.3 13.7 8.6 26.1 22.9 26.4 44.9.3 22.5-11.4 38.9-26.7 48.5-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24v-11.4c-9.5-2.3-18.2-5.3-25.6-7.8-2.1-.7-4.1-1.4-6-2-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6.9 5 1.7 7.3 2.5 13.6 4.6 23.4 7.9 33.9 8.3 8 .3 15.1-1.6 19.2-4.1 1.9-1.2 2.8-2.2 3.2-2.9.4-.6.9-1.8.8-4.1v-.2c0-1 0-2.1-4-4.6-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4-13.5-8.1-26.5-22-26.6-44.1-.1-22.9 12.9-38.6 27.7-47.4 6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zm256.2 312.3c13.1 17.8 9.3 42.8-8.5 55.9l-126.6 93.3c-23.4 17.2-51.6 26.5-80.7 26.5H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h36.8l44.9-36c22.7-18.2 50.9-28 80-28H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h120.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384h-.9.9z" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-whitePastel">
          <svg className="fill-current h-4 w-4" viewBox="0 0 15 15">
            <path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z" />
          </svg>
        </div>
      );
  }
};

export { Delete, Detail, Edit, ArrowDown, Gender, Jurusan };
