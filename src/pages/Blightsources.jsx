import * as React from "react";
import { Link } from "react-router-dom";

const Blightsources = () => {
  return (
    <>
      <main>
        <h2>Welcome to the blightsources directory!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/market">Market</Link>
      </nav>
    </>
  );
}

export default Blightsources;