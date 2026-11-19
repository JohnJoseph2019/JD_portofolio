import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import './index.css';
// import React from 'react';
// import {createRoot} from 'react-dom/client';
// import App from './App';
// import {BrowserRouter as Router} from 'react-router-dom';

// const root = createRoot(document.getElementById('root'));
// root.render(
//     <Router>
//         <App />
//     </Router>,
// );
