import { useState } from "react";
import Navbar from "./components/Navbar";
import "../src/sass/App.scss";
import ItemListContainer from "./components/ItemListContainer";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="component-container">
        <Sidebar />
        <div className="list-container">
          <ItemListContainer greeting={"hello"} />
        </div>
      </div>
    </>
  );
}

export default App;
