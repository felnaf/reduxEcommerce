import React from 'react';
import ProductList from './ProductList';
import Header from './Header';

import '../assets/css/index.css';
import SideBar from './SideBar';

const App = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
