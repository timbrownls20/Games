import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../public/static/site.css';
import '../public/static/grid.css';

// eslint-disable-next-line react/prop-types
const AppWrapper = ({Component, pageProps}) => {
    return <Component {...pageProps} />
};

export default AppWrapper;