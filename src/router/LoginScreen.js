import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { HomeAdmin } from '../pages/admin/HomeAdmin';
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from '../pages/home/LoginPage';
import { DataContent } from '../contents/LoginContents';
import { UsarioAdmin } from '../pages/admin/UsarioAdmin';





export const LoginScreen = () => {
    const { logSession } = useContext(DataContent)
    // const navegate = useNavigate();
    return (
        <Router>

            <div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />                    
                    <Route path='/user' element={<UsarioAdmin />} />                    
                    <Route path='/admin' element={<HomeAdmin />} />
                </Routes>
            </div>

        </Router>
    )
}
