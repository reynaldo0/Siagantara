import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Forum from "./pages/Forum";
import Hero from "./pages/Hero";
import Map from "./pages/Map";
import Zona from "./pages/Zona";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Sidebar />
      <Map/>
      <Forum/>
      <Zona/>
    </>
  );
}

export default App;
