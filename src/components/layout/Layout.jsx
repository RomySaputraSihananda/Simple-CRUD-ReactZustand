import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
