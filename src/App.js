import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/galery/:id" element={<GaleryShow />} /> */}
        {/* //<Route path="*" element={<Page404 />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
