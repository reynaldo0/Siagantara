import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Forum from "./pages/Forum";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar/>
      
      <Sidebar />
      <Home/>
      <Forum/>
    </>
  );
}

export default App;
