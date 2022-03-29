import * as React from 'react';
import { Link } from 'react-router-dom';

const Market = () => {
  return (
    <>
      <main>
        <h2>Welcome to the Market!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to='/information'>Information</Link>
      </nav>
    </>
  );
};

export default Market;
