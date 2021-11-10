import { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element="Home" />
        <Route path="/portfolio" element="Portfolio" />
        <Route path="/about" element="About Us" />
        <Route path="/contact" element="Contact" />
        <Route path="*" element="404" />
      </Routes>
    </Fragment>
  );
}

export default App;
