import "./App.css";
import Searchbar from "./componentes/Searchbar";
import Sidebar from "./componentes/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Searchbar />
    </div>
  );
}

export default App;
