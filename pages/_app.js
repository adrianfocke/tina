import React from 'react'

import '../styles/index.scss'

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
