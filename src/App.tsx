import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Link, Route, Routes } from 'react-router-dom';
import { Menu } from '@/pages/Menu';
import { Cart } from '@/pages/Cart';
import { Error } from '@/pages/Error';

function App() {

  return (
    <>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      <Routes>
        <Route path={'/'} element={<Menu/>} />
        <Route path={'/cart'} element={<Cart/>} />
        <Route path={'*'} element={<Error/>} />
      </Routes>
      <Button>Button</Button>
      <Button appearance={'big'}>Button</Button>
      <Input />
    </>
  );
}

export default App;
