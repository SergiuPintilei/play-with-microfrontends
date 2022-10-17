import React from 'react';
import { AppShell } from 'ui';

import { ProductsContent } from 'products-content';
import { Cart } from 'cart-content';
// @ts-ignore
const ProductsContentRuntime = React.lazy(() => import('products/Products'));
export class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>OOps</h1>;
      // return <ProductsContent />;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <AppShell
      title="Cart"
      colorScheme="dark"
      routes={[
        {
          path: '/',
          element: () => (
            <ErrorBoundary>
              <ProductsContentRuntime />
            </ErrorBoundary>
          ),
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
