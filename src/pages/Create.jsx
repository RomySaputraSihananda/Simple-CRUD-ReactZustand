import Form from "../components/Form";

const Create = () => {
  document.title = "romys | Create Data";
  return (
    <div className="flex-1">
      <div className="grid place-items-center h-full w-full">
        <Form title="CREATE DATA" />
      </div>
    </div>
  );
};

export default Create;
