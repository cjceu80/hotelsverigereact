import React from 'react';
import Header from './Header';
import Footer from './Footer';

//Default error component
export default function ErrorPage() {
    return (
        <div className='vh-100'>
          <Header />
          <h1>Sidan saknas</h1>
          <p>Något blev fel</p>
          <Footer />
        </div>
    );
}
