import "./App.css";
import Filter from "./componentes/Filter";
import Ordering from "./componentes/Ordering";
import Searchbar from "./componentes/Searchbar";
import Sidebar from "./componentes/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <Searchbar />
        <Filter />
        <Ordering />
      </div>
    </div>
  );
}

export default App;
