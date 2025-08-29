import {BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Route, Routes} from "react-router-dom";
import './App.css'
import FetchingData from "./Components/FetchingData";
import ControllerForm from "./Components/ControlledForm";
import UnControlledForm from "./Components/UnControlledForm";
import DataFetch from "./Axios/DataFetch";

function App() {
  return (
    <>
      <BrowserRouter basename="Root">
           <Routes> 
            <Route path="/" element={<FetchingData/>}/>
            <Route path="control" element={<ControllerForm/>}/>
            <Route path = "uncontrol" element={<UnControlledForm/>}/>
            <Route path = "data" element={<DataFetch/>}/>
           </Routes>
      </BrowserRouter>

       {/* <HashRouter>
           <Routes> 
            <Route path="/" element={<FetchingData/>}/>
            <Route path="control" element={<ControllerForm/>}/>
            <Route path = "uncontrol" element={<UnControlledForm/>}/>
           </Routes>
      </HashRouter> */}

          {/* <HashRouter hashtype="noslash">
           <Routes> 
            <Route path="/" exact element={<FetchingData/>}/>
            <Route path="control" element={<ControllerForm/>}/>
            <Route path = "uncontrol" element={<UnControlledForm/>}/>
           </Routes>
      </HashRouter> */}


       {/* <MemoryRouter initialEntries={["/","/control"]} initialIndex={0}>
           <Routes> 
            <Route path="/" exact element={<FetchingData/>}/>
            <Route path="control" element={<ControllerForm/>}/>
            <Route path = "uncontrol" element={<UnControlledForm/>}/>
           </Routes>
      </MemoryRouter> */}
    </>
  )
}

export default App
