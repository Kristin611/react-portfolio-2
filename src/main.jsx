import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import './styles/About.css';
import './styles/Footer.css';
import './styles/Nav.css';
import './styles/Contact.css';
import './styles/Resume.css';
import './styles/Portfolio.css';
import './styles/Header.css';

//bringing in pages the router will use to conditionally show the appropriate views
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    //defining accessible routes
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/resume',
                element: <Resume />
            }
        ]
    }
])




ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
