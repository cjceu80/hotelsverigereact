import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './index.css'

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

export default function App() {
  const [count, setCount] = useState(0);

  return (
        <div className='vh-100'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      );

}
