import {BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Route, Routes} from "react-router-dom";
import './App.css'
import FetchingData from "./Components/FetchingData";
import ControllerForm from "./Components/ControlledForm";
import UnControlledForm from "./Components/UnControlledForm";
import DataFetch from "./Axios/DataFetch";
import ClickButton from "./Portals/ClickButton";
import Task2 from "./Profiler/Task2";
import Form from "./Form";
import Tables from "./Material-UI/Tables";
import ProductCard from "./Server-Component/ProductCard";
import ProductList from "./Server-Component/ProductList";
import Counting from "./Profiler/Counting";
import { Profiler } from "react";
import RenderPerformance from "./Profiler/RenderPerformance";
import FetchingApi from "./Custom-Hook/FetchingApi";
import SampleForm from "./Custom-Hook/SampleForm";
import Counter from "./Redux/Counter";

function App() {
 // throw new Error("Hi how are u");  => used for Error boundary concepts.
  
  return (
    <>
      <BrowserRouter basename="Root">
           <Routes> 
            <Route path="/" element={<FetchingData/>}/>
            
            <Route path="control" element={<ControllerForm/>}/>
            <Route path = "uncontrol" element={<UnControlledForm/>}/>
            <Route path = "data" element={<DataFetch/>}/>
            <Route path="click" element={<ClickButton/>}/>
            <Route path="task2" element={<Task2/>}/>
            <Route path="form" element={<Form/>}/>
            <Route path="tables" element={<Tables/>}/>
            <Route path="product" element={<ProductCard/>}/>
            <Route path="list-product" element={<ProductList/>}/>
            <Route path="count" element={<RenderPerformance/>}/>
            <Route path="fetch" element={<FetchingApi/>}/>
            <Route path="sampleForm" element={<SampleForm/>}/>
            <Route path="counter" element={<Counter/>}/>
            
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
