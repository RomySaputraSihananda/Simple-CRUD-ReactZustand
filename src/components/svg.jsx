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
      <svg
        className="stroke-current fill-none h-4 w-4"
        strokeWidth={2}
        viewBox="0 0 20 20"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M15 14 A5 5 0 0 1 10 19 A5 5 0 0 1 5 14 A5 5 0 0 1 15 14 z" />
        <path d="M19 5l-5.4 5.4M19 5h-5M19 5v5" />
      </svg>
    );
  }
  return (
    <svg
      className="stroke-current fill-none h-4 w-4"
      strokeWidth={2}
      viewBox="0 0 20 20"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M17 9 A5 5 0 0 1 12 14 A5 5 0 0 1 7 9 A5 5 0 0 1 17 9 z" />
      <path d="M12 14v7M9 18h6" />
    </svg>
  );
};

export { Delete, Detail, Edit, ArrowDown, Gender };
