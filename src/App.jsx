
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const ShopePage = lazy(() => import("./pages/Shop/Shop.jsx"));


export default function App () {


  return (
     <BrowserRouter>
       <Suspense fallback={<div>Loading...</div>}>
         <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<ShopePage />} />
            </Routes>
          </main>
        </div>
       </Suspense>
     </BrowserRouter>
    );
}