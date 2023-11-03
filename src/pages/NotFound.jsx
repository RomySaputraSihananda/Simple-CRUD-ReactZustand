const NotFound = () => {
  document.title = "romys | Not Found";
  return (
    <div className="flex-1 text-whitePastel">
      <div className="grid place-items-center h-full w-full">
        <h1 className="text-9xl">404</h1>
      </div>
    </div>
  );
};

export default NotFound;
