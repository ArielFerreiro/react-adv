

import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from 'react-router-dom';

import RegisterPage from "../03-forms/pages/RegisterPage";
import {FormikBasicPage, FormikBasicYUPPage, FormikComponents, FormikAbstract} from "../03-forms/pages/";

import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="react-logo" />
                
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik YUP</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstract" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstract</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="/formik-yup" element={ <FormikBasicYUPPage /> } />
                    <Route path="/formik-components" element={ <FormikComponents /> } />
                    <Route path="/formik-abstract" element={ <FormikAbstract /> } />
                    <Route path="/users" element={ <h1> Users </h1> } />

                    <Route path="/*" element={ <Navigate to="/" replace />} />
                </Routes>

            </div>
        </BrowserRouter>    
  )
}
