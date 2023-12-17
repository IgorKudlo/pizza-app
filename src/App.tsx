import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from '@/pages/Menu';
import { Cart } from '@/pages/Cart';
import { Error } from '@/pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu/>
  },
  {
    path: '/cart',
    element: <Cart/>
  },
  {
    path: '*',
    element: <Error/>
  }
]);

function App() {

  return (
    <>
      <div>
        <a href="/">Меню</a>
        <a href="/cart">Корзина</a>
      </div>
      <RouterProvider router={router} />
      <Button>Button</Button>
      <Button appearance={'big'}>Button</Button>
      <Input />
    </>
  );
}

export default App;
