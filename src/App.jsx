import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <>
      <div className="bg-black h-screen overflow:hidden">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
