import "./App.css";
import Filter from "./componentes/Filter";
import Searchbar from "./componentes/Searchbar";
import Sidebar from "./componentes/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <Searchbar />
        <Filter />
      </div>
    </div>
  );
}

export default App;
