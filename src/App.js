import { Outlet } from "react-router-dom";
import "./App.scss";
import HeaderNav from "./components/Header/HeaderNav";

const App = () => {
  return (
    <>
      <div className="App">
        <HeaderNav />
      </div>
      <div className="app-container">
        <Outlet />
      </div>
    </>
  );
};

export default App;
