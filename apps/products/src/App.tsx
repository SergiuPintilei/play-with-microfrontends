import React from 'react';
import { AppShell } from 'ui';

import { Cart } from 'cart-content';
import ProductsContent from './ProductsContent';

function App() {
  return (
    <AppShell
      title="Products"
      routes={[
        {
          path: '/',
          element: ProductsContent,
        },
        {
          path: '/cart',
          element: Cart,
        },
      ]}
      navLinks={[
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Cart',
          path: '/cart',
        },
      ]}
    />
  );
}

export default App;
