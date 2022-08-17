import './App.css';
// import Page from "./Page";
import {BrowserRouter} from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';
import Menu from "./menu"
import MouseMoveController from './mouseMoveController';

function App() {
  return (
    <div className="App">
       {/* <Menu/> */}
       <MouseMoveController/>
    </div>
  );
}

export default App;
