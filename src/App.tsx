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
import Contact, { githubInfoLoader } from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import JobLists from './pages/JobLists/JobLists';
import ApiCallDemo from './pages/ApiCallDemo/ApiCallDemo';
import MobileToggle from './pages/MobileToggle/MobileToggle';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<AccountBalance />} />
        <Route path='/account-information' element={<AccountInformation />} />
        <Route path='/term-deposit' element={<TermDeposit />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} loader={githubInfoLoader}/> 
        <Route path='/job-lists' element={<JobLists />} /> 
        <Route path='/api-demo' element={<ApiCallDemo />} />
        <Route path='/mobile-toggle' element={<MobileToggle />} />    
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
