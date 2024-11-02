import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/Rootlayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/about' element={<About/>}></Route>
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
