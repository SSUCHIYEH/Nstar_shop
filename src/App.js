import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './page/Home.js'
import Shop from './page/Shop'
import Product from './page/Product'
import Cart from './page/Cart.js'
import "antd/dist/antd.css";
import './sass/all.css';
import { StoreProvider } from './store/index.js';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop/:pageName" component={Shop} />
          <Route path="/:productclassify/:productname" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorite" component={Home} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
