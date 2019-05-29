import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPage } from './store/ducks/products';

function App({dispatch, products}) {
  console.log(products.get('loading'));
  return (
    <div className="App">
      {products.get('loading') ? <span>Loading...</span> : null}
      <ul>
        {products.get('list').map((product, index) => <li key={index}>
          {product.name}
        </li>)}
      </ul>
      <button onClick={() => dispatch(fetchPage(1, 10))}>Carregar</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(App);
