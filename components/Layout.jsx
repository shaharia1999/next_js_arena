import React from 'react';
import Navbar from './Navber';
import Footer from '@/common/Footer';

const RootLayout =({children}) => {
    return (
        <div>
      <Navbar></Navbar>
          <div>{children}</div>
          <Footer></Footer>
        </div>
    );
};

export default  RootLayout;