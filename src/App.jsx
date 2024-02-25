import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './index.css'

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

export default function App() {
  const [count, setCount] = useState(0);

  return (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      );

}
