import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Forum from "./pages/Forum";
import Hero from "./pages/Hero";
import Map from "./pages/Map";
import Panduan from "./pages/Panduan";
import Siaga from "./pages/Siaga";
import Zona from "./pages/Zona";

function App() {
  return (
    <div className="bg-[#F0F8FF]">
      <Navbar/>
      <Hero/>
      <Sidebar />
      <Map/>
      <Siaga/>
      <Forum/>
      <Panduan/>
      <Zona/>
    </div>
  );
}

export default App;
