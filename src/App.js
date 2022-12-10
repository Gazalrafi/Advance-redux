import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';




function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart=useSelector((state)=>state.cart);

  useEffect(()=>{
   fetch('https://expense-tracker-b6997-default-rtdb.firebaseio.com/newCart.json',{
    method:'PUT',
    body:JSON.stringify(cart),
   }).then((response)=>{
     alert ('data has succesfully sent')
   })
  },[cart]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;