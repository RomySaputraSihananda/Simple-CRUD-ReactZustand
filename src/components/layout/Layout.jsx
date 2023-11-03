import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="md:w-screen md:h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
