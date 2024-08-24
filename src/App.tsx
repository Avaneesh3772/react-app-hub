import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/Layout';
import AccountBalance from './pages/AccountBalance/AccountBalance';
import AccountInformation from './pages/AccountInformation/AccountInformation';
import TermDeposit from './pages/TermDeposit/TermDeposit';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<AccountBalance />} />
        <Route path='/account-information' element={<AccountInformation />} />
        <Route path='/term-deposit' element={<TermDeposit />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />       
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
