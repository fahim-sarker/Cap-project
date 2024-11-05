import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/Rootlayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Service";
import Teams from "./components/pages/Teams";
import Servicedetails from "./components/Servicedetails";
import Teamdetails from "./components/pages/Teamdetails";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Services/>}></Route>
      <Route path='/team' element={<Teams/>}></Route>
      <Route path='/servicedetails' element={<Servicedetails/>}></Route>
      <Route path='/teamdetails' element={<Teamdetails/>}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
