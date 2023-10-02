import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Track from './components/TrackShipment/Track';
import SearchTracker from './components/TrackShipment/SearchTracker';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element:(<Header/>) ,
  },
  {
    path: "/search",
    element: (<SearchTracker/>),
  },
  {
    path: "/track",
    element: (<Track/>),
  },
])
root.render(
  
  // <React.StrictMode>
  //     <Router>
  //       <Routes>
  //         <Route exact path="/*" element={<App />} />
  //         <Route path='/' index element={<Header/>} />
  //         <Route path='/Search' element={<SearchTracker/>} />
  //         <Route path='/Tracker/:id' element={<Track/>} />
  //       </Routes>
  //   </Router>
  // </React.StrictMode>
  <RouterProvider router={router}/>
);
