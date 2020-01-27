import React from 'react';
import {Link, Route, BrowserRouter} from 'react-router-dom';
import ProductList from '../src/components/product/index';
import AddProduct from '../src/components/product/add';
import EditProduct from '../src/components/product/edit';



function App() {
  return (
    <BrowserRouter>
    <div >
     <h3>CRUD with Redux</h3>
     <Link to='/index'>Home</Link>|
     <Link to='/add'>Add</Link>
     <Route path='/' exact Component={ProductList}></Route>
     <Route path='/index' exact Component={ProductList}></Route>
     <Route path='/add' exact Component={AddProduct}></Route>
     <Route path='/edit/:id' exact Component={EditProduct}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
