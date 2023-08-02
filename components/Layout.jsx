import React from 'react';
import Navbar from './Navber';

const RootLayout =({children}) => {
    return (
        <div>
      <Navbar></Navbar>
          <div>{children}</div>
        </div>
    );
};

export default  RootLayout;