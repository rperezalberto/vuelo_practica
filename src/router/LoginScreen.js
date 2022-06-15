import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeAdmin } from '../pages/admin/HomeAdmin';
import { HomePage } from "../pages/home/HomePage";
// import { LoginPage } from '../pages/home/LoginPage';

export const LoginScreen = () => {
    return (
        <Router>

            <div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/admin' element={<HomeAdmin />} />
                </Routes>
            </div>

        </Router>
    )
}
