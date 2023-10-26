import FlashMessage from "react-flash-message";

const FlashMsg = ({ message }) => (
  <FlashMessage duration={1500} persistOnHover={true}>
    <p className="text-green-500 text-3xl">{message}</p>
  </FlashMessage>
);

export default FlashMsg;
