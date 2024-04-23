import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Skills from './Component/Skills/Skills';

const router = createBrowserRouter ([
{
  path:"/",
   element:<App/>
},
{path:"Skills",
element:<Skills/>,
},


]) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router}/>
)