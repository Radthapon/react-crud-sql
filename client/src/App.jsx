import { BrowserRouter,Routes,Route } from "react-router-dom";
import Books from "./page/Books";
import Add from "./page/Add"
import Update from "./page/Update";
import "../src/index.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
