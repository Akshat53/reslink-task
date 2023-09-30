import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/reslink-task" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
