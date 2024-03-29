import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,
createRouterFromElements,
createRoutesFromElements,
Route,
RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./store";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoutes from './components/PrivateRoutes';
import PaymentScreens from './screens/PaymentScreens';


const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
    <Route index={true} path="/" element={<HomeScreen/>}/>
    <Route path="/product/:id" element={<ProductScreen/>}/>
    <Route path="/cart" element={<CartScreen/>}/>
    <Route path="/login" element={<LoginScreen/>}/>
    <Route path="/register" element={<RegisterScreen/>}/>


   {/* adding private routes : anything private will go in this route*/}
   <Route path='' element={<PrivateRoutes/>}>
   <Route path="/shipping" element={<ShippingScreen/>}/>
   <Route path="/payment" element={<PaymentScreens/>}/>

   </Route>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
