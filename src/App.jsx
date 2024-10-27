import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import Zona from "./pages/Zona";

function App() {
  return (
    <>
      <Navbar/>
      
      <Sidebar />
      <Home/>
      <Forum/>
      <Zona/>
    </>
  );
}

export default App;
