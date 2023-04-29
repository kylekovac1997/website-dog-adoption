import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componets/Nav-Bar";
import Home from "./componets/Pages/Home";
import Donations from "./componets/Pages/Donations";
import Adoption from "./componets/Pages/Adoption";
import Pet from "./componets/Pages/Pet";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Donations" element={<Donations />} />
          <Route path="/Adoptions" element={<Adoption />} />
          <Route path="/Adoptions/Pet/:petID" element={<Pet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
