import 'bulma/css/bulma.min.css';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Item from "./pages/Item";
import Category from "./pages/Category";


function App(){

  return (
  
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="category/:categoryId" element={<Category/>}/>
          <Route path="item/:itemId" element={<Item/>}/>
        </Route>        
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>        
    </BrowserRouter>
  )
}

export default App;