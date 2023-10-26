import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div className="md:w-screen md:h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/Simple-CRUD-ReactZustand" element={<Home />} />
        <Route path="/Simple-CRUD-ReactZustand/create" element={<Create />} />
        <Route
          path="/Simple-CRUD-ReactZustand/update/:id"
          element={<Update />}
        />
        <Route
          path="/Simple-CRUD-ReactZustand/detail/:id"
          element={<Detail />}
        />
        <Route path="/Simple-CRUD-ReactZustand/*" element={404} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
